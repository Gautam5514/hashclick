import { Sparkles } from "lucide-react";
import { chatAgents } from "../chat-content";

export default function ChatAgentsSpotlight({ content = chatAgents }) {
  const { eyebrow, title, body, video } = content;

  return (
    <section className="chat-section" aria-labelledby="chat-agents-title">
      <div className="chat-shell text-center">
        <div className="chat-badge">
          <Sparkles className="w-4 h-4" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>

        <h2 id="chat-agents-title" className="chat-h2 chat-spotlight-title">
          {title}
        </h2>
        <p className="chat-subtext mx-auto mt-5 mb-12">{body}</p>

        <div className="chat-spotlight-frame">
          <video autoPlay muted loop playsInline poster={video.poster} aria-label={video.alt}>
            <source src={video.src} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
