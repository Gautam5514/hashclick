import Image from "next/image";
import Link from "next/link";
import { testimonials } from "../chat-content";

function ReadMore({ link }) {
  return (
    <Link href={link.href} className="chat-readmore">
      {link.label}
    </Link>
  );
}

export default function TestimonialStrip({ items = testimonials }) {
  return (
    <section className="chat-section chat-section-flush" aria-label="What people are saying">
      <div className="chat-shell chat-testimonial-grid">
        {items.map((item) =>
          item.type === "quote" ? (
            <article key={item.author} className="chat-testimonial chat-testimonial-quote">
              {item.background && (
                <Image
                  src={item.background.src}
                  alt=""
                  fill
                  className="chat-testimonial-bg"
                />
              )}

              <blockquote>“{item.quote}”</blockquote>
              <p className="chat-testimonial-attr">
                {item.author}, {item.role}
              </p>

              <ReadMore link={item.link} />
            </article>
          ) : (
            <article key={item.headline} className="chat-testimonial chat-testimonial-press">
              <span className="chat-testimonial-watermark" aria-hidden="true">
                <Image
                  src={item.logo.src}
                  alt=""
                  width={item.logo.width}
                  height={item.logo.height}
                />
              </span>

              <Image
                src={item.logo.src}
                alt={item.logo.alt}
                width={item.logo.width}
                height={item.logo.height}
                className="chat-testimonial-logo"
              />
              <p className="chat-testimonial-headline">“{item.headline}”</p>

              <ReadMore link={item.link} />
            </article>
          )
        )}
      </div>
    </section>
  );
}
