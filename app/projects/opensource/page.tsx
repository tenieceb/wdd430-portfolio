import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

export default async function OpenSource() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
  const projects = await getProjects("opensource");

  return (
    <main className="container mx-auto px-4 py-12">
      <h1>Open Source Projects</h1>
      <div>
        <ProjectList projects={projects} />
      </div>
    </main>
  );
}