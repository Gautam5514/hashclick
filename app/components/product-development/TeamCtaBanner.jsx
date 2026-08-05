import Image from "next/image";
import Link from "next/link";
import { LOGO } from "../nav-svgs";

function Wordmark() {
  const whiteWordmark = LOGO.replace('fill="#202020"', 'fill="#ffffff"');
  return <div className="team-cta-wordmark" dangerouslySetInnerHTML={{ __html: whiteWordmark }} />;
}

export default function TeamCtaBanner({ description = "Start completing projects, not just managing them. Create your free ClickUp Workspace today." }) {
  return <section className="team-cta-section"><div className="team-cta-banner"><div className="team-cta-copy"><Wordmark/><h2>Join 3 million teams building the future with ClickUp</h2><p>{description}</p><Link href="/signup">Get started free</Link></div><div className="team-cta-art"><Image src="/product-development/team-cta-whiteboards.png" alt="ClickUp collaborative Whiteboard workspace" width={944} height={742}/></div></div></section>;
}
