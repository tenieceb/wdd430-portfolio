import SkillCard from '@/components/SkillCard';


export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-300">
       I am a student learning various programming languages and frameworks, including JavaScript, React, and Next.js. I have a passion for building web applications and continuously improving my skills in full-stack development.
      </p>
    <SkillCard skills={["JavaScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "HTML", "CSS"]} />
    </main>
  );
}