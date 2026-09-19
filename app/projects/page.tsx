import ProjectList from "@/components/ProjectList";
import ProjectSearch from "@/components/ProjectSearch";
import Pagination from "@/components/Pagination";
import {
  fetchFilteredProjects,
  fetchProjectsPages,
} from "@/lib/projects-db";

export default async function ProjectsOverview({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const { query = "", page = "1" } = await searchParams;

  const currentPage = Number(page);

  const projects = await fetchFilteredProjects(query, currentPage);
  const totalPages = await fetchProjectsPages(query);

  return (
    <main className="container mx-auto px-4 py-12">
      <h1>Projects Overview</h1>

      <ProjectSearch />

      <ProjectList projects={projects} />

      <Pagination totalPages={totalPages} />
    </main>
  );
}