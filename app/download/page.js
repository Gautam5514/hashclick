import ComingSoon from "../components/shared/ComingSoon";

export const metadata = { title: "Download" };

export default function DownloadPage() {
  return (
    <ComingSoon
      eyebrow="Download"
      title="Hashboard wherever work gets done"
      body="Use the Hashboard web workspace across modern desktop and mobile browsers, with MCP connectivity for compatible AI clients."
      links={["Web workspace", "Responsive browser access", "MCP connectivity"]}
    />
  );
}
