import { getProjectBySlug } from "../../data/projects";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.desc,
    openGraph: {
      title: `${project.title} | Agilix IT Solutions`,
      description: project.desc,
      images: project.coverImage ? [{ url: project.coverImage, alt: project.title }] : [],
    },
  };
}

export default function ProjectDetailLayout({ children }) {
  return children;
}
