import ProjectList from "@/components/ProjectList";
import { getProjects } from '@/lib/projects-db';
import { Suspense } from "react";

async function Projects () {
    const projects = await getProjects("school");

    return <ProjectList projects={projects} />;
}

export default async function School() {
    return (
        <main className="container mx-auto px-4 py-12">
            <h1>School Projects</h1>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Projects />
                </Suspense>
            </div>
        </main>
    );
}   