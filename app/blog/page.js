import BlogIndexPage from "../components/blog/BlogIndexPage";
import "../components/blog/blog.css";

export const metadata = {
  title: "The ClickUp Blog | Productivity, AI & Workflow Automation",
  description: "Original content, productivity strategies, and AI workflows straight from the creators of ClickUp.",
};

export default function Page() {
  return <BlogIndexPage />;
}
