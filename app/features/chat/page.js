import ChatPage from "../../components/chat/ChatPage";
import "../../components/chat/chat.css";

export const metadata = {
  title: "Hashboard Chat | Team Messaging Built Into Your Work",
  description: "Organize company and project conversations with threads, files, mentions, reactions, search, pins, bookmarks, and notification controls.",
};

export default function Page() {
  return <ChatPage />;
}
