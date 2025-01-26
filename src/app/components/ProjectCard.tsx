import Link from "next/link";

export default function ProjectCard({ project }: { project: { id: string; title: string; description: string; image: string } }) {
  return (
    <Link href={`/projects/${project.id}`} className="block bg-gray-100 p-4 rounded shadow hover:shadow-md">
      <h3 className="text-xl font-serif font-bold mb-2">{project.title}</h3>
      <p className="text-sm">{project.description}</p>
    </Link>
  );
}
