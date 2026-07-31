import ComingSoon from "../components/shared/ComingSoon";

export const metadata = { title: "Download" };

export default function DownloadPage() {
  return (
    <ComingSoon
      eyebrow="Download"
      title="One workspace, every device"
      body="Global search, Brain² and your whole workspace a keystroke away — on the desktop, on your phone, and in the browser."
      links={["macOS (Apple silicon & Intel)", "Windows 10 and 11", "iOS", "Android", "Chrome extension", "Brain MAX desktop app"]}
    />
  );
}
