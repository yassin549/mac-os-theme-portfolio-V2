<script lang="ts">
    import { onMount } from 'svelte';
    import { closeWindow, toggleMinimize, toggleMaximize } from "../stores/windowStore";
    import type { wType } from "../types/wType";
    import SvelteMarkdown from 'svelte-markdown';
    import 'github-markdown-css/github-markdown-light.css';
  
    export let startDrag: (e: MouseEvent, id: string, action: 'move' | 'resize') => void;
    export let window: wType;
  
    let isLoading: boolean = true;
    let readmeContent: string = '';
  
    onMount(async () => {
      isLoading = true;
      try {
        const response = await fetch('https://raw.githubusercontent.com/yassin549/yassin549/main/README.md');
        readmeContent = await response.text();
      } catch (error) {
        console.error('Failed to fetch README:', error);
        readmeContent = '# Error\nFailed to load README content. Please try again later.';
      }
      isLoading = false;
    });
</script>
  
<div class="bg-white h-full rounded-lg flex flex-col overflow-hidden font-sans">
  <!-- Header -->
  <div class="bg-gray-100 px-2 py-2 flex items-center cursor-move border-b border-gray-200" on:mousedown={(e) => startDrag(e, window.id, "move")}>
    <div class="flex space-x-2 mr-4">
      <button class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none" on:click={() => closeWindow(window.id)}>
        <svg class="w-3 h-3 text-red-800 opacity-0 hover:opacity-100" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <button class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 focus:outline-none" on:click={() => toggleMinimize(window.id)}>
        <svg class="w-3 h-3 text-yellow-800 opacity-0 hover:opacity-100" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M20 12H4" />
        </svg>
      </button>
      <button class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none" on:click={() => toggleMaximize(window.id)}>
        <svg class="w-3 h-3 text-green-800 opacity-0 hover:opacity-100" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3" />
        </svg>
      </button>
    </div>
    <div class="flex-grow text-center font-semibold">About Me</div>
    <div class="flex space-x-2">
      <a href="https://github.com/yassin549" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
    </div>
  </div>
  
  <div class="flex-grow overflow-y-auto p-6">
    {#if isLoading}
      <div class="flex justify-center items-center h-full">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    {:else}
      <div class="markdown-body prose prose-sm max-w-none">
        <SvelteMarkdown source={readmeContent} />
      </div>
    {/if}
  </div>
</div>
  
<style>
  :global(.markdown-body) {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
  }
  
  :global(.prose img) {
    margin: 0 auto;
  }
  
  :global(.prose) {
    max-width: none;
  }
</style>
