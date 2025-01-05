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
    <div class="flex items-center gap-4">
      <!-- Apple Logo -->
      <button class="hover:text-white/90 transition-colors">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
        </svg>
      </button>
      <div class="flex items-center gap-2">
        <span class="font-semibold">Portfolio</span>
      </div>
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
