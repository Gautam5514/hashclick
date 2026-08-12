/**
 * Miniature UI mockups for the core-features grid. Each tile is built from the
 * same handful of skeleton primitives rather than shipping a screenshot, so the
 * whole grid stays crisp at any size and weighs nothing.
 *
 * Add a tile: write a component here, register it in MOCKUPS, then reference
 * that key from `coreFeatures` in chat-content.js.
 */

import {
  AlarmClock,
  Asterisk,
  Bell,
  Building2,
  Globe,
  Headphones,
  List,
  Paperclip,
  Pin,
  Search,
  Send,
  SmilePlus,
} from "lucide-react";
import { GithubMark } from "./chat-app-logos";

/* ---------------------------------------------------------- primitives */

const Avatar = ({ sm = false }) => <span className={sm ? "cf-avatar cf-avatar-sm" : "cf-avatar"} />;

const Bar = ({ w = "60%", sm = false }) => (
  <span className={sm ? "cf-bar cf-bar-sm" : "cf-bar"} style={{ width: w }} />
);

const Square = () => <span className="cf-square" />;

const Row = ({ children, className = "" }) => (
  <span className={`cf-row ${className}`}>{children}</span>
);

/** The lit row that carries the feature name. */
const Label = ({ icon: Icon, children, tone, bare = false }) => (
  <span className={bare ? "cf-label cf-label-bare" : "cf-label"}>
    {Icon && (
      <span className={`cf-label-icon ${tone ? `cf-tone-${tone}` : ""}`}>
        <Icon className="w-3.5 h-3.5" aria-hidden="true" />
      </span>
    )}
    <span className="cf-label-text">{children}</span>
  </span>
);

const Reaction = ({ emoji, count }) => (
  <span className="cf-reaction">
    <span>{emoji}</span>
    <b>{count}</b>
  </span>
);

const AvatarStack = () => (
  <span className="cf-stack">
    {["a", "b", "c", "d"].map((k) => (
      <span key={k} className={`cf-stack-dot cf-stack-${k}`} />
    ))}
  </span>
);

/* ------------------------------------------------------------- mockups */

function ChatsChannels({ label }) {
  return (
    <>
      <Row><Avatar /><Bar w="62%" /></Row>
      <Label icon={List}>{label}</Label>
      <Row><Avatar /><Bar w="48%" /></Row>
    </>
  );
}

function DirectMessages({ label }) {
  return (
    <>
      <Row><Avatar /><Bar w="34%" /><Bar w="20%" /></Row>
      <Label bare>{label}</Label>
      <Row className="cf-row-tight">
        <Reaction emoji="🎁" count="1" />
        <Reaction emoji="🚀" count="2" />
        <Reaction emoji="🇸🇬" count="1" />
        <Reaction emoji="🦄" count="1" />
        <span className="cf-reaction cf-reaction-add"><SmilePlus className="w-3.5 h-3.5" /></span>
      </Row>
      <Row><Avatar /><Bar w="40%" /></Row>
    </>
  );
}

function Threads({ label }) {
  return (
    <>
      <Row><Avatar /><Label bare>{label}</Label></Row>
      <span className="cf-pill">1 reply</span>
      <Row><Avatar /><Bar w="44%" /></Row>
    </>
  );
}

function VoiceVideo({ label }) {
  return (
    <>
      <Label icon={Headphones}>{label}</Label>
      <AvatarStack />
      <Row><Avatar /><Bar w="26%" /><Bar w="22%" /></Row>
    </>
  );
}

function ActivityFeed({ label }) {
  return (
    <>
      <Label bare>{label}</Label>
      <Row className="cf-row-lit"><Avatar sm /><span className="cf-mention">@AK</span><Bar w="22%" sm /></Row>
      <Row><Avatar sm /><span className="cf-mention">@Zeb</span><Bar w="18%" sm /></Row>
    </>
  );
}

function PushNotifications({ label }) {
  return (
    <>
      <Row>
        <span className="cf-badge-icon">
          <List className="w-3 h-3" aria-hidden="true" />
          <span className="cf-badge-dot"><Bell className="w-2.5 h-2.5" aria-hidden="true" /></span>
        </span>
        <Label bare>{label}</Label>
      </Row>
      <Row><Avatar /><Bar w="40%" /></Row>
    </>
  );
}

function Reminders({ label }) {
  return (
    <>
      <Row>
        <Label bare>{label}</Label>
        <span className="cf-label-icon cf-tone-purple"><AlarmClock className="w-3.5 h-3.5" /></span>
        <span className="cf-bar cf-bar-purple" style={{ width: "26%" }} />
      </Row>
      <Row><Avatar /><Bar w="28%" /><Bar w="18%" /></Row>
      <Row className="cf-row-boxed"><Square /><Bar w="52%" sm /></Row>
    </>
  );
}

function CustomSidebar({ label }) {
  return (
    <>
      <span className="cf-dashed" />
      <Label icon={Globe} tone="teal">{label}</Label>
      <Row><Avatar sm /><Bar w="50%" sm /></Row>
      <Row><Avatar sm /><Bar w="38%" sm /></Row>
    </>
  );
}

function DraftsSent({ label }) {
  return (
    <>
      <Row><Square /><Bar w="42%" sm /></Row>
      <Label icon={Send}>{label}</Label>
      <Row><Square /><Bar w="34%" sm /></Row>
    </>
  );
}

function ClientChat({ label }) {
  return (
    <>
      <Label icon={Building2}>{label}</Label>
      <Row><Avatar sm /><Bar w="30%" sm /><span className="cf-pill">External</span></Row>
      <Row><Avatar /><Bar w="42%" /></Row>
    </>
  );
}

function FileSharing({ label }) {
  return (
    <>
      <Label icon={Paperclip}>{label}</Label>
      <Row><Square /><Bar w="38%" sm /></Row>
      <Row><Square /><Bar w="26%" sm /></Row>
    </>
  );
}

function MessageSearch({ label }) {
  return (
    <>
      <Row>
        <span className="cf-label-icon"><Search className="w-3.5 h-3.5" aria-hidden="true" /></span>
        <Bar w="46%" />
      </Row>
      <Label bare>{label}</Label>
      <Row><Avatar sm /><Bar w="30%" sm /></Row>
    </>
  );
}

function PinnedMessages({ label }) {
  return (
    <>
      <Row>
        <Label bare>{label}</Label>
        <span className="cf-label-icon cf-tone-purple"><Pin className="w-3.5 h-3.5" /></span>
      </Row>
      <Row className="cf-row-boxed"><Square /><Bar w="48%" sm /></Row>
      <Row><Avatar /><Bar w="24%" /></Row>
    </>
  );
}

function Integrations({ label }) {
  return (
    <>
      <Label bare>{label}</Label>
      <Row><Asterisk className="cf-brand" /><span className="cf-brand-name">Zapier</span></Row>
      <Row>
        <GithubMark className="cf-brand" aria-hidden="true" />
        <span className="cf-brand-name">Github</span>
      </Row>
    </>
  );
}

export const MOCKUPS = {
  chatsChannels: ChatsChannels,
  directMessages: DirectMessages,
  threads: Threads,
  voiceVideo: VoiceVideo,
  activityFeed: ActivityFeed,
  pushNotifications: PushNotifications,
  reminders: Reminders,
  customSidebar: CustomSidebar,
  draftsSent: DraftsSent,
  integrations: Integrations,
  clientChat: ClientChat,
  fileSharing: FileSharing,
  messageSearch: MessageSearch,
  pinnedMessages: PinnedMessages,
};
