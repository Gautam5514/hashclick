import BlogIndexPage from "../components/blog/BlogIndexPage";
import "../components/blog/blog.css";

export const metadata = {
  title: "The Hashboard Blog | Productivity, AI & Workflow Automation",
  description: "Original content, productivity strategies, and AI workflows straight from the creators of Hashboard.",
};

export default function Page() {
  return <BlogIndexPage />;
}
