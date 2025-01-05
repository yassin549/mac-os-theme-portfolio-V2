<script lang="ts">
  import { onMount } from 'svelte';
  import type { ProjectData } from '../types/projectType';
  import { projects } from '../stores/projectStore';
  import { closeWindow, toggleMinimize, toggleMaximize } from "../stores/windowStore";
  import type { wType } from "../types/wType";
  import SvelteMarkdown from 'svelte-markdown';
  import CodeBlockWrapper from './CodeBlockWrapper.svelte';
  import ProjectIcons from './ProjectIcons.svelte';
  import ProjectActions from './ProjectActions.svelte';
  import { getTagColor, getTypeColor } from '../utils/tagColors';
  import { fade, fly, slide } from 'svelte/transition';
  import 'github-markdown-css/github-markdown-light.css';

  export let startDrag: (e: MouseEvent, id: string, action: 'move' | 'resize') => void;
  export let window: wType;

  let selectedProject: ProjectData | null = null;
  let readmeContent: string = '';
  let isLoading: boolean = false;
  let searchQuery: string = '';
  let filteredProjects: ProjectData[] = [];
  let searchInputRef: HTMLInputElement;

  $: {
    const projectsList = Object.values($projects);
    filteredProjects = projectsList.filter(project => 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  onMount(() => {
    const projectsList = Object.values($projects);
    if (projectsList.length > 0) {
      selectProject(projectsList[0]);
    }
    // Focus search input
    if (searchInputRef) searchInputRef.focus();
  });

  async function selectProject(project: ProjectData) {
    isLoading = true;
    selectedProject = project;
    try {
      const response = await fetch(project.readmeUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      readmeContent = await response.text();
      if (!readmeContent.trim()) {
        throw new Error('Empty content received');
      }
    } catch (error) {
      console.error('Failed to fetch README:', error);
      readmeContent = `# Error Loading Project Details\n\nUnable to load project details. This could be due to:\n\n- Network connectivity issues\n- File not found\n- Server configuration\n\nPlease try again later or contact the administrator.`;
    } finally {
      isLoading = false;
    }
  }

  const renderers = {
    code: CodeBlockWrapper
  };
</script>

<div class="bg-white h-full rounded-lg flex flex-col overflow-hidden font-sans">
  <!-- Projects Header -->
  <div class="bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-2 flex items-center cursor-move border-b border-gray-200" 
       on:mousedown={(e) => startDrag(e, window.id, "move")}>
    <div class="flex space-x-2 mr-4">
      <button class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 focus:outline-none transition-colors duration-200" 
              on:click={() => closeWindow(window.id)}>
        <svg class="w-3 h-3 text-red-800 opacity-0 hover:opacity-100 transition-opacity duration-200" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <button class="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 focus:outline-none transition-colors duration-200" 
              on:click={() => toggleMinimize(window.id)}>
        <svg class="w-3 h-3 text-yellow-800 opacity-0 hover:opacity-100 transition-opacity duration-200" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M20 12H4" />
        </svg>
      </button>
      <button class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 focus:outline-none transition-colors duration-200" 
              on:click={() => toggleMaximize(window.id)}>
        <svg class="w-3 h-3 text-green-800 opacity-0 hover:opacity-100 transition-opacity duration-200" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3" />
        </svg>
      </button>
    </div>
    <div class="flex-grow text-center font-semibold text-gray-700">Projects</div>
  </div>

  <div class="flex-grow flex overflow-hidden">
    <!-- Project List Sidebar -->
    <div class="w-80 flex flex-col border-r border-gray-200 bg-gray-50">
      <!-- Search Bar -->
      <div class="p-4">
        <div class="relative">
          <input
            bind:this={searchInputRef}
            type="text"
            bind:value={searchQuery}
            placeholder="Search projects..."
            class="w-full px-4 py-2.5 pl-11 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
          />
          <svg class="w-5 h-5 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- Project List -->
      <div class="flex-1 overflow-y-auto px-2">
        {#each filteredProjects as project (project.name)}
          <div 
            class="group relative p-4 hover:bg-white cursor-pointer transition-all duration-200 rounded-xl mb-2 {selectedProject === project ? 'bg-white shadow-sm ring-1 ring-gray-200' : 'hover:shadow-sm'}"
            on:click={() => selectProject(project)}
            in:fly={{ y: 20, duration: 200 }}
            out:fade
          >
            <div class="flex items-center mb-3">
              <div class="w-10 h-10 mr-3 text-gray-600 bg-gray-100 rounded-xl p-2 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-200 flex items-center justify-center">
                <ProjectIcons iconName={project.icon} />
              </div>
              <h3 class="font-semibold flex-grow text-gray-800 group-hover:text-blue-600 transition-colors duration-200">{project.name}</h3>
            </div>
            <p class="text-sm text-gray-600 mb-3 line-clamp-2 group-hover:text-gray-800 transition-colors duration-200">{project.shortDescription}</p>
            <div class="flex flex-wrap gap-1.5">
              {#each project.technologies.slice(0, 3) as tech}
                <span class="px-2 py-1 text-xs rounded-md font-medium transition-all duration-200 {getTagColor(tech)} opacity-80 group-hover:opacity-100">{tech}</span>
              {/each}
              {#if project.technologies.length > 3}
                <span class="px-2 py-1 text-xs rounded-md font-medium bg-gray-100 text-gray-600">+{project.technologies.length - 3}</span>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Project Details -->
    <div class="flex-1 overflow-hidden flex flex-col bg-white">
      {#if selectedProject}
        <div class="overflow-y-auto flex-grow">
          {#if isLoading}
            <div class="flex justify-center items-center h-64">
              <div class="relative">
                <div class="w-12 h-12 rounded-full border-t-2 border-b-2 border-blue-500 animate-spin"></div>
                <div class="w-12 h-12 rounded-full border-t-2 border-b-2 border-blue-300 animate-spin absolute top-0 left-0" style="animation-delay: -0.3s"></div>
              </div>
            </div>
          {:else}
            <div class="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200">
              <div class="p-4">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-gray-100 p-2.5 flex items-center justify-center">
                    <ProjectIcons iconName={selectedProject.icon} />
                  </div>
                  <div>
                    <h2 class="text-xl font-semibold text-gray-800">{selectedProject.name}</h2>
                    <p class="text-sm text-gray-600">{selectedProject.shortDescription}</p>
                  </div>
                </div>
                <ProjectActions project={selectedProject} />
              </div>
            </div>
            <div class="markdown-body prose prose-sm max-w-none p-6" in:fade={{ duration: 200 }}>
              <SvelteMarkdown source={readmeContent} {renderers} />
            </div>
          {/if}
        </div>
      {:else}
        <div class="p-6 flex items-center justify-center h-full">
          <p class="text-gray-600 text-center">Select a project to view details</p>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  :global(.markdown-body) {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
  }

  :global(.markdown-body pre) {
    background-color: #f6f8fa !important;
    border-radius: 0.75rem !important;
  }

  :global(.markdown-body h1) {
    padding-bottom: 0.3em;
    border-bottom: 1px solid #eaecef;
    margin-bottom: 16px;
  }

  :global(.markdown-body h2) {
    padding-bottom: 0.3em;
    border-bottom: 1px solid #eaecef;
    margin-top: 24px;
    margin-bottom: 16px;
  }

  :global(.markdown-body ul) {
    margin-bottom: 16px;
  }

  :global(.markdown-body li) {
    margin: 0.25em 0;
  }

  /* Custom scrollbar */
  :global(::-webkit-scrollbar) {
    width: 6px;
    height: 6px;
  }

  :global(::-webkit-scrollbar-track) {
    background: transparent;
  }

  :global(::-webkit-scrollbar-thumb) {
    background: #94a3b8;
    border-radius: 3px;
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background: #64748b;
  }
</style>
