import Image from "next/image";
import Link from "next/link";
import { LOGO } from "../nav-svgs";

function Wordmark() {
  return <div className="team-cta-wordmark"><img src={LOGO} alt="Hashboard" /></div>;
}

export default function TeamCtaBanner({ description = "Start completing projects, not just managing them. Create your free Hashboard Workspace today." }) {
  return <section className="team-cta-section"><div className="team-cta-banner"><div className="team-cta-copy"><Wordmark/><h2>Join 3 million teams building the future with Hashboard</h2><p>{description}</p><Link href="/signup">Get started free</Link></div><div className="team-cta-art"><Image src="/team-cta-whiteboards.png" alt="Hashboard collaborative Whiteboard workspace" width={944} height={742}/></div></div></section>;
}
