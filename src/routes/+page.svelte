<script lang="ts">
  import { onMount } from 'svelte';
  import Desktop from '$lib/components/Desktop.svelte';
  import Dock from '$lib/components/Dock.svelte';
  import MenuBar from '$lib/components/MenuBar.svelte';
  import LoadingScreen from '$lib/components/LoadingScreen.svelte';
  import { fade, fly } from 'svelte/transition';
  import { backOut } from 'svelte/easing';
  import { browser } from '$app/environment';
  import { windows, addWindow } from '$lib/stores/windowStore';

  let loading = true;
  let mounted = false;
  let showContent = false;

  function isAppRunning(type: 'terminal' | 'safari' | 'photos' | 'blog' | 'projects') {
    return $windows.some(w => w.type === type && !w.minimized);
  }

  function isAppMinimized(type: 'terminal' | 'safari' | 'photos' | 'blog' | 'projects') {
    return $windows.some(w => w.type === type && w.minimized);
  }

  // Preload critical components
  const preloadComponents = async () => {
    await Promise.all([
      Desktop,
      Dock,
      MenuBar
    ]);
  };

  onMount(async () => {
    // Preload components first
    await preloadComponents();
    
    mounted = true;
    // Show loading for at least 1 second for smooth transition
    setTimeout(() => {
      loading = false;
      // Stagger the animations after loading
      setTimeout(() => {
        showContent = true;
      }, 300);
    }, 1000);
  });
</script>

{#if loading}
  <LoadingScreen />
{/if}

<div class="h-screen w-screen overflow-hidden bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#EC4899] relative">
  <!-- Animated gradient background -->
  <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 animate-gradient-x"></div>
  
  <!-- Noise texture overlay -->
  <div class="absolute inset-0 opacity-[0.015]" style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==');"></div>

  <!-- Floating elements in the background -->
  {#if mounted}
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Floating circles -->
      <div class="absolute top-[10%] left-[15%] w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float-slow"></div>
      <div class="absolute top-[40%] right-[10%] w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-float-slower"></div>
      <div class="absolute bottom-[20%] left-[30%] w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-float"></div>
    </div>
  {/if}

  <!-- Main content -->
  {#if mounted}
    {#if showContent}
      <div in:fly={{ y: -20, duration: 500, delay: 0 }}>
        <MenuBar />
      </div>
    {/if}

    {#if showContent}
      <div in:fade={{ duration: 500, delay: 200 }}>
        <Desktop />
      </div>
    {/if}

    {#if showContent}
      <div in:fly={{ y: 20, duration: 500, delay: 400 }}>
        <Dock 
          {isAppRunning}
          {isAppMinimized}
          {addWindow}
        />
      </div>
    {/if}
  {/if}
</div>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(1.05); }
  }

  @keyframes float-slow {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-30px) scale(1.1); }
  }

  @keyframes float-slower {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-40px) scale(1.15); }
  }

  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  :global(.animate-float) {
    animation: float 6s ease-in-out infinite;
  }

  :global(.animate-float-slow) {
    animation: float-slow 8s ease-in-out infinite;
  }

  :global(.animate-float-slower) {
    animation: float-slower 10s ease-in-out infinite;
  }

  :global(.animate-gradient-x) {
    animation: gradient-x 15s ease infinite;
    background-size: 400% 400%;
  }
</style>
