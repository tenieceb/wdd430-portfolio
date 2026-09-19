import { sql } from '@vercel/postgres';

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows;
  }
  const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
  return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  return rows[0] ?? null;
}

export async function fetchFilteredProjects(
  query: string,
  page: number
): Promise<Project[]> {
  const projectsPerPage = 5;
  const offset = (page - 1) * projectsPerPage;

  const { rows } = await sql<Project>`
    SELECT *
    FROM projects
    WHERE
      title ILIKE ${`%${query}%`}
      OR description ILIKE ${`%${query}%`}
    ORDER BY id
    LIMIT ${projectsPerPage}
    OFFSET ${offset}
  `;

  return rows;
}

export async function fetchProjectsPages(
  query: string
): Promise<number> {
  const projectsPerPage = 5;

  const { rows } = await sql<{ count: number }>`
    SELECT COUNT(*)::int AS count
    FROM projects
    WHERE
      title ILIKE ${`%${query}%`}
      OR description ILIKE ${`%${query}%`}
  `;

  return Math.ceil(rows[0].count / projectsPerPage);
}