<script>
  export let show = true;
</script>

{#if show}
  <div 
    class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#EC4899]"
    in:fade={{ duration: 200 }}
    out:fade={{ duration: 300 }}
  >
    <div class="text-center">
      <div class="flex flex-col items-center space-y-6">
        <!-- Apple-style loading spinner -->
        <div class="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        <!-- Loading text with typing animation -->
        <div class="text-white text-xl font-medium animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
</style>
