import { Inter, Plus_Jakarta_Sans, Sometype_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const sometype = Sometype_Mono({
  variable: "--font-sometype",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: `${site.name} | One workspace for your business`,
    template: `%s | ${site.name}`,
  },
  description:
    "Manage projects, tasks, people, clients, communication, and daily operations with Hash AI assistance in one connected workspace.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${sometype.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-bg-main text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
