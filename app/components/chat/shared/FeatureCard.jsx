import Image from "next/image";

/**
 * Bento tile: copy on top, screenshot below bleeding off the card's right and
 * bottom edges, with an optional soft glow in one corner.
 */
export default function FeatureCard({
  title,
  description,
  media,
  layout = "third",
  glow,
  className = "",
}) {
  const glowClass = glow ? `chat-bento-glow-${glow.color} chat-bento-glow-${glow.corner}` : "";

  return (
    <article className={`chat-bento-card chat-bento-${layout} ${className}`}>
      {glow && <span className={`chat-bento-glow ${glowClass}`} aria-hidden="true" />}

      <div className="chat-bento-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {media && (
        <div className="chat-bento-media">
          {media.type === "video" ? (
            <video autoPlay muted loop playsInline aria-label={media.alt}>
              <source src={media.src} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={media.src}
              alt={media.alt}
              width={media.width || 900}
              height={media.height || 640}
            />
          )}
        </div>
      )}
    </article>
  );
}
