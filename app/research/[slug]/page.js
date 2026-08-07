import ResearchPaperDetail from "../../components/research/ResearchPaperDetail";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const formattedTitle = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "Research Paper";

  return {
    title: `${formattedTitle} | ClickUp Workplace Research`,
    description: `Read the full research paper on ${formattedTitle} by ClickUp Research.`,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ResearchPaperDetail slug={slug} />;
}
