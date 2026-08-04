/**
 * Eyebrow + heading + subtitle stack shared by most sections.
 * `align` controls text alignment, `as` the heading level.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Heading = "h2",
  className = "",
}) {
  const alignment =
    align === "left" ? "text-left" : "text-center mx-auto items-center";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && <span className="chat-eyebrow">{eyebrow}</span>}
      <Heading className="chat-h2">{title}</Heading>
      {subtitle && (
        <p className={`chat-subtext mt-4 ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
