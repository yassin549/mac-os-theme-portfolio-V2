export interface ProjectData {
  name: string;
  icon: 'react' | 'vue' | 'angular' | 'svelte';
  shortDescription: string;
  githubUrl: string;
  readmeUrl: string;
  technologies: string[];
  type: 'application' | 'library';
}