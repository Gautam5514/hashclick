"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navbar.css";
import { navMenus, navLinks } from "./nav-data";
import { LOGO, LOGO_LIGHT, CHEVRON, SMB, AGENTS, CARTOON } from "./nav-svgs";
import DemoModal from "./DemoModal";

const ART = { SMB, AGENTS, CARTOON };

function Raw({ markup, className }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: markup }} />;
}

function SpriteIcon({ id }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <use href={`/nav/navigation-sprite.svg#${id}`} />
    </svg>
  );
}

function PlatformItem({ item }) {
  return (
    <Link href={item.href} className="cu-item">
      <span className="cu-item-icon">
        {item.art ? (
          <Raw markup={ART[item.art]} />
        ) : (
          <>
            <img
              src={`/nav/brain/${item.icon}.svg`}
              data-state="default"
              alt=""
              width={item.w}
              height="40"
            />
            <img
              src={`/nav/brain/${item.icon}-active.svg`}
              data-state="active"
              alt=""
              width={item.w}
              height="40"
              aria-hidden="true"
            />
          </>
        )}
      </span>
      <span className="cu-item-body">
        <span className="cu-item-title">
          {item.label}
          {item.badge ? <span className="cu-badge">{item.badge}</span> : null}
        </span>
        <span className="cu-item-desc">{item.desc}</span>
      </span>
    </Link>
  );
}

function Column({ column }) {
  return (
    <div className="cu-column">
      <h3 className="cu-column-title">{column.title}</h3>

      {column.kind === "story" ? (
        <Link href={column.story.href} className="cu-story">
          <Raw markup={ART[column.story.art]} />
          <p className="cu-story-quote">{column.story.quote}</p>
          <span className="cu-story-cta">{column.story.cta}</span>
        </Link>
      ) : (
        <div className={`cu-list${column.kind === "simple" ? " cu-list-tight" : ""}`}>
          {column.items.map((item) =>
            column.kind === "platform" || column.kind === "featured" ? (
              <PlatformItem key={item.label} item={item} />
            ) : column.kind === "product" ? (
              <Link key={item.label} href={item.href} className="cu-product">
                <span className="cu-product-icon">
                  <SpriteIcon id={item.icon} />
                </span>
                <span className="cu-product-title">{item.label}</span>
              </Link>
            ) : (
              <Link key={item.label} href={item.href} className="cu-simple">
                {item.label}
              </Link>
            ),
          )}
          {column.seeAll ? (
            <Link href={column.seeAll.href} className="cu-simple cu-see-all">
              {column.seeAll.label}
            </Link>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [mobileNav, setMobileNav] = useState(false);
  const [height, setHeight] = useState(0);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const panelRefs = useRef({});
  const closeTimer = useRef(null);
  const baseId = useId();
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const isDarkPage = pathname === "/brain" || pathname === "/ai";

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(null);
        setHeight(0);
        setMobileNav(false);
        setMobileSubmenu(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  if (isAuthPage) return null;

  // Panels stay laid out (only faded), so their height is measurable on demand.
  const show = (id) => {
    clearTimeout(closeTimer.current);
    setOpen(id);
    setHeight(panelRefs.current[id]?.offsetHeight ?? 0);
  };

  // Short grace period so crossing the gap to the panel doesn't close it.
  const hide = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpen(null);
      setHeight(0);
    }, 120);
  };

  return (
    <>
      <Link href="/brain" className={`cu-banner${isDarkPage ? " cu-dark" : ""}`}>
        <span className="cu-banner-text">
          <strong>Hash AI</strong>{" "}
          — Ask questions and take permitted actions across your Hashboard workspace
        </span>
        <svg
          className="cu-banner-chevron"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      <nav className={`cu-nav${isDarkPage ? " cu-dark" : ""}`} onMouseLeave={hide} data-testid="cu-navigation">
      <div className="cu-backdrop" />

      <div className="cu-container">
        <div className="cu-container-inner">
          <Link href="/" className="cu-logo" aria-label="Home">
            <img src={isDarkPage ? LOGO : LOGO_LIGHT} alt="Hashboard" />
          </Link>

         
        </div>

         <div className="cu-links">
            <Link href="/brain" className="cu-link" onMouseEnter={hide}>
              Hash AI
            </Link>

            {navMenus.map((menu) => (
              <button
                key={menu.id}
                type="button"
                className={`cu-trigger${open === menu.id ? " cu-trigger-open" : ""}`}
                aria-expanded={open === menu.id}
                aria-controls={`${baseId}-${menu.id}`}
                onMouseEnter={() => show(menu.id)}
                onFocus={() => show(menu.id)}
                onClick={() => (open === menu.id ? hide() : show(menu.id))}
              >
                <span>{menu.label}</span>
                <Raw markup={CHEVRON} className="cu-chevron" />
              </button>
            ))}

            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="cu-link" onMouseEnter={hide}>
                {link.label}
              </Link>
            ))}
          </div>

        <div className="cu-cta">
          <button type="button" className="cu-demo" onClick={() => setIsDemoOpen(true)}>
            Get a Demo
          </button>
          <Link href="/login" className="cu-login">
            Login
          </Link>
          <Link href="/signup" className="cu-signup">
            Sign Up
          </Link>
          <button
            type="button"
            className="cu-hamburger"
            aria-label={mobileNav ? "Close menu" : "Open menu"}
            aria-expanded={mobileNav}
            aria-controls="cu-mobile-menu"
            onClick={() => setMobileNav((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Desktop curtain — panels stay mounted so their heights stay measurable. */}
      <div
        className="cu-overlay"
        style={{ height, visibility: open ? "visible" : "hidden" }}
        onMouseEnter={() => open && show(open)}
        aria-hidden={!open}
      >
        {navMenus.map((menu) => (
          <div
            key={menu.id}
            id={`${baseId}-${menu.id}`}
            ref={(el) => {
              panelRefs.current[menu.id] = el;
            }}
            className={`cu-panel cu-panel-${menu.id}${open === menu.id ? " cu-panel-active" : ""}`}
          >
            <div className="cu-dropdown">
              {menu.columns.map((column) => (
                <Column key={column.title} column={column} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile drawer matching official ClickUp 5 reference screenshots */}
      <div className={`cu-mobile${mobileNav ? " cu-mobile-open" : ""}`} id="cu-mobile-menu">
        {mobileSubmenu === null ? (
          /* MAIN LEVEL MENU */
          <>
            <div className="cu-mobile-list">
              <Link
                href="/brain"
                className="cu-mobile-item"
                onClick={() => {
                  setMobileNav(false);
                  setMobileSubmenu(null);
                }}
              >
                <span>Hash AI</span>
              </Link>

              <button
                type="button"
                className="cu-mobile-item"
                onClick={() => setMobileSubmenu("product")}
              >
                <span>Product</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="cu-mobile-chev">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <Link
                href="/blog"
                className="cu-mobile-item"
                onClick={() => {
                  setMobileNav(false);
                  setMobileSubmenu(null);
                }}
              >
                <span>Blog</span>
              </Link>

              <Link
                href="/pricing"
                className="cu-mobile-item"
                onClick={() => {
                  setMobileNav(false);
                  setMobileSubmenu(null);
                }}
              >
                <span>Pricing</span>
              </Link>

              <Link
                href="/enterprise"
                className="cu-mobile-item"
                onClick={() => {
                  setMobileNav(false);
                  setMobileSubmenu(null);
                }}
              >
                <span>Enterprise</span>
              </Link>

              <button
                type="button"
                className="cu-mobile-item"
                onClick={() => {
                  setMobileNav(false);
                  setMobileSubmenu(null);
                  setIsDemoOpen(true);
                }}
              >
                <span>Get a Demo</span>
              </button>
            </div>

            <div className="cu-mobile-footer">
              <Link
                href="/login"
                className="cu-mobile-login-full"
                onClick={() => {
                  setMobileNav(false);
                  setMobileSubmenu(null);
                }}
              >
                Login
              </Link>
            </div>
          </>
        ) : (
          /* SUBMENU LEVEL VIEW */
          <>
            <div className="cu-mobile-subview-content">
              {navMenus
                .find((m) => m.id === mobileSubmenu)
                ?.columns.map((column) => (
                  <div key={column.title} className="cu-mobile-col-section">
                    <h4 className="cu-mobile-subhead">{column.title}</h4>

                    {column.kind === "story" ? (
                      <Link
                        href={column.story.href}
                        className="cu-mobile-story-card"
                        onClick={() => {
                          setMobileNav(false);
                          setMobileSubmenu(null);
                        }}
                      >
                        <Raw markup={ART[column.story.art]} />
                        <p className="cu-story-quote">{column.story.quote}</p>
                        <span className="cu-story-cta">{column.story.cta}</span>
                      </Link>
                    ) : (
                      <div className="cu-mobile-sublist">
                        {column.items?.map((item) =>
                          column.kind === "platform" || column.kind === "featured" ? (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="cu-mobile-platform-item"
                              onClick={() => {
                                setMobileNav(false);
                                setMobileSubmenu(null);
                              }}
                            >
                              <span className="cu-mobile-item-icon">
                                {item.art ? (
                                  <Raw markup={ART[item.art]} />
                                ) : (
                                  <img
                                    src={`/nav/brain/${item.icon}.svg`}
                                    alt=""
                                    width={item.w || 36}
                                    height="36"
                                  />
                                )}
                              </span>
                              <span className="cu-mobile-item-body">
                                <span className="cu-mobile-item-title">
                                  {item.label}
                                  {item.badge ? (
                                    <span className="cu-badge">{item.badge}</span>
                                  ) : null}
                                </span>
                                {item.desc ? (
                                  <span className="cu-mobile-item-desc">{item.desc}</span>
                                ) : null}
                              </span>
                            </Link>
                          ) : column.kind === "product" ? (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="cu-mobile-product-item"
                              onClick={() => {
                                setMobileNav(false);
                                setMobileSubmenu(null);
                              }}
                            >
                              <span className="cu-mobile-product-icon">
                                <SpriteIcon id={item.icon} />
                              </span>
                              <span className="cu-mobile-product-title">{item.label}</span>
                            </Link>
                          ) : (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="cu-mobile-simple-item"
                              onClick={() => {
                                setMobileNav(false);
                                setMobileSubmenu(null);
                              }}
                            >
                              {item.label}
                            </Link>
                          )
                        )}

                        {column.seeAll ? (
                          <Link
                            href={column.seeAll.href}
                            className="cu-mobile-see-all"
                            onClick={() => {
                              setMobileNav(false);
                              setMobileSubmenu(null);
                            }}
                          >
                            {column.seeAll.label}
                          </Link>
                        ) : null}
                      </div>
                    )}
                  </div>
                ))}
            </div>

            <div className="cu-mobile-footer">
              <button
                type="button"
                className="cu-mobile-back-btn"
                onClick={() => setMobileSubmenu(null)}
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
      </nav>

      <DemoModal open={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
}
