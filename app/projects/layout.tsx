import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center" aria-label="Projects Navigation">
        <Link href="/projects" aria-current="page">
          Projects
        </Link>
        <Link href="/projects/settings" aria-current="page">
          Settings
        </Link>
      </nav>

      {children}
    </>
  );
}