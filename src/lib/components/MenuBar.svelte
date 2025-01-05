<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  
  let currentTime = new Date();
  let intervalId: number;
  
  onMount(() => {
    updateTime();
    intervalId = window.setInterval(updateTime, 1000);
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  });
  
  function updateTime() {
    currentTime = new Date();
  }
  
  function formatTime(date: Date) {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }
  
  function formatDate(date: Date) {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  }
</script>

<div class="fixed top-0 left-0 right-0 h-7 bg-black/20 backdrop-blur-lg z-50 flex items-center px-4 text-white/90 text-sm font-medium shadow-lg">
  <div class="flex-1 flex items-center gap-6">
    <div class="flex items-center gap-2">
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="currentColor"/>
      </svg>
      <span class="font-semibold">Portfolio</span>
    </div>
    
    <div class="flex items-center gap-4 text-white/70">
      <button class="hover:text-white/90 transition-colors">File</button>
      <button class="hover:text-white/90 transition-colors">Edit</button>
      <button class="hover:text-white/90 transition-colors">View</button>
      <button class="hover:text-white/90 transition-colors">Window</button>
      <button class="hover:text-white/90 transition-colors">Help</button>
    </div>
  </div>
  
  <div class="flex items-center gap-4">
    <div class="flex items-center gap-2">
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor"/>
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" fill="currentColor"/>
      </svg>
      <span class="text-white/70">100%</span>
    </div>
    
    <div class="flex items-center gap-4 text-white/90">
      <div>{formatDate(currentTime)}</div>
      <div>{formatTime(currentTime)}</div>
    </div>
  </div>
</div>

<style>
  button {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    transition: all 0.2s;
  }
  
  button:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
