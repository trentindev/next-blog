/**
 * fs est un module Node.js qui vous permet de lire des fichiers à partir du système de fichiers.
 * path est un module Node.js qui vous permet de manipuler les chemins de fichiers.
 * matter est une bibliothèque qui vous permet d'analyser les métadonnées dans chaque fichier Markdown.
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/** 
 * La méthode process.cwd() renvoie le répertoire de travail actuel du processus Node.js.
 */
const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}