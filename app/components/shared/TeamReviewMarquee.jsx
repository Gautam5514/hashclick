const projectReviews = [
  ["Daria G.", "It has revolutionized the way our teams communicate and keep track of our work.\n\nNow we're not using different systems to keep track of updates on campaigns and activities."],
  ["Josh P.", "Hashboard has the biggest and best set of features I have seen in comparable products such as Monday, Asana and Trello.\n\nIt makes adoption so much easier, when each team member can find a view that works for them."],
  ["Chinmayyee R.", "A one stop solution for literally EVERYTHING!"],
  ["Britt R.", "My life is in Hashboard!\n\nIt's easy to use, has robust features, and makes it really easy to keep every part of my business organized."],
  ["Oskar B.", "The ease of use is absolutely amazing.\n\nHashboard is extremely easy to customize to get the best value out of it."],
  ["Zack H.", "Such a powerful project management tool.\n\nTypically any feature you can think of for project management is part of Hashboard."],
];

const softwareReviews = [
  ["Jacob A.", "Our engineering team uses scrum, while our marketing team uses kanban. Both play nice together in one Hashboard account."],
  ["Dinesh P.", "Absolutely by far the best tool in the world for project, task, goal, budget and workflow management—especially for engineering."],
  ["Rodolfo G.", "We no longer have to find wiki pages in Confluence, engineering tickets in Jira, or tables and lists in Notion."],
  ["Kevin P.", "The ability to work cross-functionally between product, engineering, and CS teams gives us a single source of truth."],
  ["Will H.", "You can really build it into whatever you need. Engineering teams can run sprints and marketing teams can schedule posts."],
  ["Arvin J.", "Hashboard allows us to break down the pieces of a software engineering project and stay flexible on the granularity required."],
];

function ReviewCard({ review }) {
  return <article className="team-review-card"><header><span className="team-review-avatar" aria-hidden="true"><svg viewBox="0 0 48 48"><circle cx="24" cy="17" r="9"/><path d="M8 43c1-12 8-18 16-18s15 6 16 18M5 17h5M38 17h5M9 7l4 3M39 7l-4 3"/></svg></span><strong>{review[0]}</strong><b aria-hidden="true">”</b></header><p>{review[1]}</p></article>;
}

function Row({ reviews, reverse = false }) {
  const loop = [...reviews, ...reviews];
  return <div className="team-review-row"><div className={`team-review-track${reverse ? " reverse" : ""}`}>{loop.map((review, i) => <ReviewCard review={review} key={`${review[0]}-${i}`} />)}</div></div>;
}

export default function TeamReviewMarquee({ software = false }) {
  const reviews = software ? softwareReviews : projectReviews;
  return <section className="team-reviews"><div className="team-reviews-head"><div className="team-reviews-score"><span>★★★★★</span><p>25,000+ reviews from</p><b>G2</b><i>◈</i><i>➤</i><i>●</i></div><h2>Why {software ? "software teams" : "project managers"} <span>love Hashboard</span></h2></div><div className="team-review-wall"><Row reviews={reviews.slice(0,3)} /><Row reviews={reviews.slice(3)} reverse /></div></section>;
}
