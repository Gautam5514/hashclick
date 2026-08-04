import { Check, X } from "lucide-react";
import { APP_LOGOS } from "../chat-app-logos";
import { problemSolution } from "../chat-content";

/** Places an icon on the ring's perimeter from a clock angle. */
function ringPosition(angle) {
  const rad = (angle * Math.PI) / 180;
  return {
    left: `${50 + 50 * Math.cos(rad)}%`,
    top: `${50 + 50 * Math.sin(rad)}%`,
  };
}

function OrbitRing({ apps, side }) {
  return (
    <div className={`chat-ring chat-ring-${side}`}>
      <div className="chat-ring-track" aria-hidden="true" />
      {apps.map((app) => {
        const Logo = APP_LOGOS[app.logo];
        return (
          <span
            key={`${side}-${app.label}`}
            className="chat-ring-icon"
            style={ringPosition(app.angle)}
          >
            <span className="chat-ring-tile">
              <Logo width="24" height="24" />
              <span className={`chat-ring-badge chat-ring-badge-${app.badgePos}`}>
                {app.badge}
              </span>
            </span>
          </span>
        );
      })}
    </div>
  );
}

/**
 * Problem and solution share one component: a gradient connector runs from the
 * ✕ node down to the ✓ node, so splitting them would break the line.
 *
 * The orbit graphic is an in-house rebuild of the animation on the reference
 * page. Set `riveUrl` in chat-content.js to embed that animation instead.
 */
export default function ProblemSolutionSection({ content = problemSolution }) {
  const { problem, solution, orbit, riveUrl } = content;

  return (
    <section className="chat-problem" aria-labelledby="chat-problem-title">
      <div className="chat-problem-art" aria-hidden="true">
        {riveUrl ? (
          <iframe
            src={riveUrl}
            title="Disconnected chat and work apps"
            className="chat-rive-frame"
            allowFullScreen
          />
        ) : (
          <div className="chat-orbit">
            <div className="chat-orbit-glow" />

            {orbit.ghosts.map((ghost, i) => {
              const Logo = APP_LOGOS[ghost.logo];
              return (
                <span
                  key={`ghost-${i}`}
                  className="chat-ghost-tile"
                  style={{ top: ghost.top, left: ghost.left }}
                >
                  <Logo width="26" height="26" />
                </span>
              );
            })}

            <OrbitRing apps={orbit.left} side="left" />

            <div className="chat-orbit-pills">
              {orbit.pills.map((pill) => (
                <span
                  key={pill.text}
                  className={pill.active ? "chat-pill chat-pill-active" : "chat-pill"}
                >
                  {pill.text}
                </span>
              ))}
            </div>

            <OrbitRing apps={orbit.right} side="right" />
          </div>
        )}
      </div>

      <div className="chat-shell chat-stepper">
        <div className="chat-step chat-step-problem">
          <span className="chat-step-node chat-step-node-bad" aria-hidden="true">
            <X className="w-5 h-5" strokeWidth={2.25} />
          </span>
          <h2 id="chat-problem-title" className="chat-step-title">
            {problem.title}
          </h2>
          <p className="chat-step-body">{problem.body}</p>
        </div>

        <div className="chat-step chat-step-solution">
          <span className="chat-step-node chat-step-node-good" aria-hidden="true">
            <Check className="w-5 h-5" strokeWidth={2.25} />
          </span>
          <h2 className="chat-step-title">{solution.title}</h2>
          <p className="chat-step-body">{solution.body}</p>
          <p className="chat-step-highlight">
            <span>{solution.highlight}</span>
            <span className="chat-sparkle" aria-hidden="true">
              ✦
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
