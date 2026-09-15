import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'MoodStitch',
    description: 'MoodStitch is a web-based mood journal designed to help users track their emotions and associate them with colors. The app not only allows daily mood entries but also provides a visual representation of mood trends over time, known as the "Mood Blanket."',
    technologies: ['JavaScript', 'css', 'HTML', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/tenieceb/MoodStitch'
  },
  {
    title: 'Critter-Connection',
    description: 'WDD330 Project to demonstrate knowledge of the API usage and understanding of vanilla JavaScript. Users can look up information on various animals like where they live, if they are endangered, what they eat.',
    technologies: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/tenieceb/Critter-Connection'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-300">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
