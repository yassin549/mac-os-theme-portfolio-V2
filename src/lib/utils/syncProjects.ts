import { get } from 'svelte/store';
import { projects } from '../stores/projectStore';
import type { FileSystem } from './fileSystem';

export function syncProjectsToFileSystem(fileSystem: FileSystem): void {
  const projectsList = get(projects);
  
  if (!fileSystem.home.projects || typeof fileSystem.home.projects !== 'object') {
    fileSystem.home.projects = {};
  }

  Object.entries(projectsList).forEach(([id, project]) => {
    (fileSystem.home.projects as FileSystem)[id] = `
Name: ${project.name}
Type: ${project.type}
Description: ${project.shortDescription}
Technologies: ${project.technologies.join(', ')}
GitHub: ${project.githubUrl}
    `.trim();
  });
}