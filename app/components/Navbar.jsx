"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { navigation } from "./nav-data";
import Logo from "./ui/Logo";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";

function MegaMenu({ entry }) {
  return (
    <div className="rounded-2xl border border-[#e8e8e8] bg-white p-7 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {entry.columns.map((col) => (
          <div key={col.title} className="space-y-4">
            <div className="text-[11px] font-mono font-bold tracking-[0.1em] text-[#7b7b7b] uppercase">
              {col.title}
            </div>

            {col.isSimpleList ? (
              <ul className="space-y-3 pt-1">
                {col.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block text-[14px] font-bold text-[#202020] transition-colors hover:text-[#7612fa]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-[#f8f9fa]"
                    >
                      {item.icon && (
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#f0f0f0] text-[#202020] transition-colors group-hover/item:bg-[#7612fa] group-hover/item:text-white">
                          <item.icon className="size-4.5" />
                        </span>
                      )}
                      <span className="min-w-0">
                        <span className="flex items-center gap-1.5 text-[14px] font-bold leading-snug text-[#202020] group-hover/item:text-[#7612fa]">
                          {item.name}
                          {item.badge && (
                            <span className="rounded-full bg-[#efedfd] px-1.5 py-0.5 text-[9px] font-extrabold uppercase text-[#7612fa]">
                              {item.badge}
                            </span>
                          )}
                        </span>
                        {item.desc && (
                          <span className="mt-0.5 block text-[12.5px] leading-tight text-[#7b7b7b]">
                            {item.desc}
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileNav({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 top-[76px] bottom-0 z-40 overflow-y-auto bg-white lg:hidden">
      <div className="px-5 py-6">
        <ul className="divide-y divide-[#e8e8e8]">
          {navigation.map((entry) => (
            <li key={entry.label} className="py-1">
              {entry.columns ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(expanded === entry.label ? null : entry.label)
                    }
                    aria-expanded={expanded === entry.label}
                    className="flex w-full items-center justify-between py-3.5 text-left text-[16px] font-bold text-[#202020]"
                  >
                    {entry.label}
                    <ChevronDown
                      className={cn(
                        "size-4 text-[#7b7b7b] transition-transform duration-200",
                        expanded === entry.label && "rotate-180"
                      )}
                    />
                  </button>
                  {expanded === entry.label ? (
                    <div className="pb-3 space-y-4">
                      {entry.columns.map((col) => (
                        <div key={col.title}>
                          <div className="px-1 pb-2 text-[10.5px] font-bold tracking-wider text-[#7b7b7b] uppercase">
                            {col.title}
                          </div>
                          {col.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={onClose}
                              className="flex items-center gap-3 rounded-xl px-2 py-2 text-[14px] font-semibold text-[#202020]"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </>
              ) : (
                <Link
                  href={entry.href}
                  onClick={onClose}
                  className="block py-3.5 text-[16px] font-bold text-[#202020]"
                >
                  {entry.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3">
          <Button href="/signup" size="lg" className="w-full bg-[#202020] text-white">
            Sign Up
          </Button>
          <Link
            href="/login"
            className="rounded-xl bg-[#f4f4f5] py-3 text-center text-[15px] font-bold text-[#202020]"
          >
            Login
          </Link>
          <Link
            href="/demo"
            className="py-2 text-center text-[14px] font-semibold text-[#7b7b7b]"
          >
            Get a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };
  const cancelClose = () => clearTimeout(closeTimer.current);

  const active = navigation.find((n) => n.label === openMenu);

  return (
    <>
      {/* 100% FULL WIDTH Top Announcement Bar */}
      <div className="w-full border-b border-[#e8e8e8] bg-[#fafafa]">
        <Link
          href="/ai"
          className="group relative z-50 flex h-10 w-full items-center justify-center px-4 text-center text-[13px] text-[#202020] transition-colors hover:bg-[#f0f0f0]"
        >
          <span>
            <strong className="font-bold">NEW: Brain²</strong>
            <span className="mx-2 text-[#7b7b7b]">—</span>
            The best AI is <em>your</em> AI. The world&apos;s first company Brain
          </span>
          <ArrowRight className="ml-1.5 size-3.5 text-[#7b7b7b] transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* FULL WIDTH Sticky Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-white transition-all duration-200",
          scrolled ? "border-b border-[#e8e8e8] shadow-sm" : "border-b border-transparent"
        )}
        onMouseLeave={scheduleClose}
      >
        <div className="mx-auto flex h-[76px] w-full max-w-[1600px] items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Logo + Navigation Links */}
          <div className="flex items-center gap-8">
            <Logo className="shrink-0" />

            <ul className="hidden items-center gap-1 lg:flex">
              {navigation.map((entry) => {
                const isOpen = openMenu === entry.label;
                return (
                  <li key={entry.label} className="relative">
                    {entry.columns ? (
                      <button
                        type="button"
                        onMouseEnter={() => {
                          cancelClose();
                          setOpenMenu(entry.label);
                        }}
                        onClick={() => setOpenMenu(isOpen ? null : entry.label)}
                        aria-expanded={isOpen}
                        className={cn(
                          "flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[14px] font-semibold transition-all duration-150",
                          isOpen
                            ? "bg-[#f4f4f5] text-[#202020] font-bold"
                            : "text-[#646464] hover:text-[#202020] hover:bg-[#f8f9fa]"
                        )}
                      >
                        <span>{entry.label}</span>
                        <ChevronDown
                          className={cn(
                            "size-3.5 text-[#7b7b7b] transition-transform duration-200",
                            isOpen && "rotate-180"
                          )}
                        />
                      </button>
                    ) : (
                      <Link
                        href={entry.href}
                        onMouseEnter={() => {
                          cancelClose();
                          setOpenMenu(null);
                        }}
                        className="block rounded-xl px-3.5 py-2 text-[14px] font-semibold text-[#646464] transition-colors hover:text-[#202020] hover:bg-[#f8f9fa]"
                      >
                        {entry.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/demo"
              className="hidden text-[14px] font-semibold text-[#646464] transition-colors hover:text-[#202020] xl:block"
            >
              Get a Demo
            </Link>
            <Link
              href="/login"
              className="hidden rounded-xl bg-[#f4f4f5] px-4.5 py-2 text-[14px] font-bold text-[#202020] transition-all hover:bg-[#e8e8e8] sm:inline-flex"
            >
              Login
            </Link>
            <Button
              href="/signup"
              size="md"
              className="hidden rounded-xl bg-[#202020] px-5 py-2 text-[14px] font-bold text-white shadow-none hover:bg-black sm:inline-flex"
            >
              Sign Up
            </Button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="-mr-1.5 flex size-9 items-center justify-center rounded-lg text-[#202020] lg:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        {active ? (
          <div
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className="absolute inset-x-0 top-full hidden justify-center px-6 pt-1 pb-6 lg:flex"
          >
            <div className="w-full max-w-[1100px] animate-rise">
              <MegaMenu entry={active} />
            </div>
          </div>
        ) : null}
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
