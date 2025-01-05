<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { closeWindow, toggleMinimize, toggleMaximize } from "../stores/windowStore";
  import type { wType } from "../types/wType";

  export let startDrag: (e: MouseEvent, id: string, action: 'move' | 'resize') => void;
  export let window: wType;

  interface NewsItem {
    title: string;
    url: string;
    source: 'hackernews' | 'devto' | 'github';
    points?: number;
    author?: string;
    time?: string;
    comments?: number;
    tags?: string[];
  }

  let news: NewsItem[] = [];
  let isLoading = true;
  let activeSource: 'all' | 'hackernews' | 'devto' | 'github' = 'all';
  let searchQuery = '';

  $: filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSource = activeSource === 'all' || item.source === activeSource;
    return matchesSearch && matchesSource;
  });

  async function fetchHackerNews() {
    try {
      const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
      const storyIds = await response.json();
      const stories = await Promise.all(
        storyIds.slice(0, 10).map(async (id: number) => {
          const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
          const story = await storyResponse.json();
          return {
            title: story.title,
            url: story.url || `https://news.ycombinator.com/item?id=${story.id}`,
            source: 'hackernews',
            points: story.score,
            author: story.by,
            time: new Date(story.time * 1000).toLocaleString(),
            comments: story.descendants
          } as NewsItem;
        })
      );
      return stories;
    } catch (error) {
      console.error('Error fetching HackerNews:', error);
      return [];
    }
  }

  async function fetchDevTo() {
    try {
      const response = await fetch('https://dev.to/api/articles?top=7');
      const articles = await response.json();
      return articles.slice(0, 10).map((article: any) => ({
        title: article.title,
        url: article.url,
        source: 'devto',
        author: article.user.name,
        time: new Date(article.published_at).toLocaleString(),
        tags: article.tag_list
      })) as NewsItem[];
    } catch (error) {
      console.error('Error fetching Dev.to:', error);
      return [];
    }
  }

  async function fetchGitHubTrending() {
    try {
      const response = await fetch('https://api.github.com/search/repositories?q=created:>2024-01-01&sort=stars&order=desc');
      const data = await response.json();
      return data.items.slice(0, 10).map((repo: any) => ({
        title: `${repo.full_name} - ${repo.description}`,
        url: repo.html_url,
        source: 'github',
        author: repo.owner.login,
        points: repo.stargazers_count,
        time: new Date(repo.created_at).toLocaleString()
      })) as NewsItem[];
    } catch (error) {
      console.error('Error fetching GitHub:', error);
      return [];
    }
  }

  onMount(async () => {
    const [hnNews, devNews, githubNews] = await Promise.all([
      fetchHackerNews(),
      fetchDevTo(),
      fetchGitHubTrending()
    ]);
    news = [...hnNews, ...devNews, ...githubNews].sort(() => Math.random() - 0.5);
    isLoading = false;
  });

  function getSourceIcon(source: string) {
    switch (source) {
      case 'hackernews':
        return 'Y';
      case 'devto':
        return 'DEV';
      case 'github':
        return '🐙';
      default:
        return '📰';
    }
  }

  function getSourceColor(source: string) {
    switch (source) {
      case 'hackernews':
        return 'bg-orange-100 text-orange-800';
      case 'devto':
        return 'bg-indigo-100 text-indigo-800';
      case 'github':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  }
</script>

<div class="bg-white h-full rounded-lg flex flex-col overflow-hidden font-sans">
  <!-- Header -->
  <div class="bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-2 flex items-center cursor-move border-b border-gray-200 shadow-sm"
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
    <div class="flex-grow text-center font-semibold text-gray-700">Tech News</div>
  </div>

  <!-- Filters -->
  <div class="border-b border-gray-200 bg-gray-50 p-4">
    <div class="flex flex-col space-y-4">
      <!-- Search -->
      <div class="relative">
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Search news..."
          class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white pr-10"
        />
        <svg class="w-5 h-5 absolute right-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <!-- Source filters -->
      <div class="flex space-x-2">
        <button
          class="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 {activeSource === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
          on:click={() => activeSource = 'all'}
        >
          All Sources
        </button>
        <button
          class="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 {activeSource === 'hackernews' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
          on:click={() => activeSource = 'hackernews'}
        >
          Hacker News
        </button>
        <button
          class="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 {activeSource === 'devto' ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
          on:click={() => activeSource = 'devto'}
        >
          DEV.to
        </button>
        <button
          class="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 {activeSource === 'github' ? 'bg-gray-100 text-gray-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
          on:click={() => activeSource = 'github'}
        >
          GitHub Trending
        </button>
      </div>
    </div>
  </div>

  <!-- News List -->
  <div class="flex-1 overflow-y-auto p-4">
    {#if isLoading}
      <div class="flex justify-center items-center h-64">
        <div class="relative">
          <div class="w-12 h-12 rounded-full border-t-2 border-b-2 border-blue-500 animate-spin"></div>
          <div class="w-12 h-12 rounded-full border-t-2 border-b-2 border-blue-300 animate-spin absolute top-0 left-0" style="animation-delay: -0.3s"></div>
        </div>
      </div>
    {:else}
      <div class="space-y-4">
        {#each filteredNews as item (item.url)}
          <div
            class="group bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-all duration-200"
            in:fly={{ y: 20, duration: 200 }}
            out:fade
          >
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <span class="inline-block px-3 py-1 rounded-lg text-sm font-medium {getSourceColor(item.source)}">
                  {getSourceIcon(item.source)}
                </span>
              </div>
              <div class="flex-grow">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-900 font-medium hover:text-blue-600 transition-colors duration-200"
                >
                  {item.title}
                </a>
                <div class="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                  {#if item.author}
                    <span>{item.author}</span>
                  {/if}
                  {#if item.time}
                    <span>{item.time}</span>
                  {/if}
                  {#if item.points}
                    <span>{item.points} points</span>
                  {/if}
                  {#if item.comments}
                    <span>{item.comments} comments</span>
                  {/if}
                </div>
                {#if item.tags && item.tags.length > 0}
                  <div class="mt-2 flex flex-wrap gap-2">
                    {#each item.tags as tag}
                      <span class="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                        {tag}
                      </span>
                    {/each}
                  </div>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  /* Custom scrollbar */
  :global(::-webkit-scrollbar) {
    width: 8px;
    height: 8px;
  }

  :global(::-webkit-scrollbar-track) {
    background: #f1f1f1;
  }

  :global(::-webkit-scrollbar-thumb) {
    background: #888;
    border-radius: 4px;
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background: #666;
  }
</style>
