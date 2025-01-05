import { error } from '@sveltejs/kit';
import { promises as fs } from 'fs';
import { join } from 'path';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
  try {
    const { slug } = params;
    const filePath = join(process.cwd(), 'static', 'project-descriptions', `${slug}.md`);
    const content = await fs.readFile(filePath, 'utf-8');
    
    return new Response(content, {
      headers: {
        'Content-Type': 'text/markdown',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (e) {
    throw error(404, 'Project description not found');
  }
}
