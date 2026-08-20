import { ArrowLeft } from "lucide-react";
import Button from "./components/ui/Button";
import { Globe } from "./components/ui/Globe";

export default function NotFound({
  title = "Ups! Lost in space",
  description = "We couldn’t find the page you’re looking for. It might have been moved or deleted.",
  backText = "Go Back",
}) {
  return (
    <div className="flex flex-col justify-center items-center px-4 min-h-[70vh] bg-bg-main">
      <div className="text-center animate-rise">
        <div className="flex items-center justify-center gap-6 mb-10">
          <span className="text-7xl md:text-8xl font-bold text-ink/80 select-none">
            4
          </span>

          <div className="relative w-24 h-24 md:w-32 md:h-32 animate-float">
            <Globe />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_0%,transparent_70%)]" />
          </div>

          <span className="text-7xl md:text-8xl font-bold text-ink/80 select-none">
            4
          </span>
        </div>

        <h1 className="font-display mb-4 text-3xl md:text-5xl font-semibold tracking-tight text-ink">
          {title}
        </h1>

        <p className="mx-auto mb-10 max-w-md text-base md:text-lg text-ink-secondary">
          {description}
        </p>

        <Button
          href="/"
          variant="primary"
          className="gap-2 transition-transform duration-300 hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          {backText}
        </Button>
      </div>
    </div>
  );
}
