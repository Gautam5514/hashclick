import Image from "next/image";
import { Headphones } from "lucide-react";
import { voiceVideo } from "../chat-content";

export default function VoiceVideoCallsSection({ content = voiceVideo }) {
  const { eyebrow, title, app, call } = content;

  return (
    <section className="chat-section chat-calls" aria-labelledby="chat-calls-title">
      <div className="chat-shell text-center">
        <span className="chat-core-chip">
          <Headphones className="w-4 h-4" aria-hidden="true" />
          {eyebrow}
        </span>

        <h2 id="chat-calls-title" className="chat-h2 chat-calls-title">
          {title}
        </h2>
      </div>

      {/* App window sizes the stage; the call window overlays its right side */}
      <div className="chat-calls-stage">
        <div className="chat-calls-glow" aria-hidden="true" />

        <div className="chat-calls-app">
          <Image src={app.src} alt={app.alt} width={app.width} height={app.height} />

          <div className="chat-calls-window">
            <Image src={call.src} alt={call.alt} width={call.width} height={call.height} />
          </div>
        </div>
      </div>
    </section>
  );
}
