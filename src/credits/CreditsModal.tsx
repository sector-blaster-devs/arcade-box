import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  APP_CREDITS,
  THIRD_PARTY_LICENSES,
  FONT_CREDITS,
  MIT_TEXT,
  type LicenseItem,
  type FontAssetCredit,
} from "./creditsData";

interface CreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabKey = "credits" | "licenses" | "fonts";

export const CreditsModal: React.FC<CreditsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabKey>("credits");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedLicense, setExpandedLicense] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus modal on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId((prev) => (prev === id ? null : prev));
      }, 2000);
    });
  };

  const filteredLicenses = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return THIRD_PARTY_LICENSES;
    return THIRD_PARTY_LICENSES.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.license.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q) ||
        item.purpose.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div
      className="credits-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="credits-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="credits-modal" ref={modalRef}>
        {/* Header Bar */}
        <header className="credits-header">
          <div className="credits-title-group">
            <span className="credits-brand-dot" aria-hidden="true" />
            <h2 id="credits-title" className="credits-title">
              Credits &amp; Licenses
            </h2>
            <span className="credits-subtitle">playglow arcade</span>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="credits-close-btn"
            onClick={onClose}
            aria-label="Close credits dialog"
          >
            &times;
          </button>
        </header>

        {/* Tab Selector */}
        <nav className="credits-tabs" aria-label="Credits sections">
          <button
            type="button"
            className={`credits-tab${activeTab === "credits" ? " active" : ""}`}
            onClick={() => setActiveTab("credits")}
          >
            Credits
          </button>
          <button
            type="button"
            className={`credits-tab${activeTab === "licenses" ? " active" : ""}`}
            onClick={() => setActiveTab("licenses")}
          >
            Software Licenses
          </button>
          <button
            type="button"
            className={`credits-tab${activeTab === "fonts" ? " active" : ""}`}
            onClick={() => setActiveTab("fonts")}
          >
            Fonts &amp; Assets
          </button>
        </nav>

        {/* Content Body */}
        <div className="credits-content">
          {/* TAB 1: CREDITS */}
          {activeTab === "credits" && (
            <div className="credits-pane">
              <div className="credits-intro-banner">
                <p className="credits-intro-text">
                  <strong>playglow</strong> is an open-source tiny pixel-art arcade generator, 3D cabinet simulation, and micro-game engine.
                  Players craft custom cartridges via prompt generation powered by Gemini AI and play on a WebGL-rendered 3D arcade cabinet with authentic CRT simulation.
                </p>
                <div className="credits-meta-row">
                  <span>MIT License</span>
                  <span aria-hidden="true">·</span>
                  <span>v1.0.0</span>
                  <span aria-hidden="true">·</span>
                  <span>Google AI Studio Build</span>
                </div>
              </div>

              {APP_CREDITS.map((cat) => (
                <section key={cat.title} className="credits-section">
                  <header className="credits-section-header">
                    <h3 className="credits-section-title">{cat.title}</h3>
                    <p className="credits-section-desc">{cat.description}</p>
                  </header>
                  <div className="credits-grid">
                    {cat.items.map((item) => (
                      <article key={item.name} className="credits-card">
                        <div className="credits-card-header">
                          <h4 className="credits-item-name">{item.name}</h4>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="credits-external-link"
                              aria-label={`Visit ${item.name} website`}
                            >
                              ↗
                            </a>
                          )}
                        </div>
                        <div className="credits-item-role">{item.role}</div>
                        <p className="credits-item-details">{item.details}</p>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          {/* TAB 2: SOFTWARE LICENSES */}
          {activeTab === "licenses" && (
            <div className="credits-pane">
              {/* playglow root license card */}
              <section className="credits-root-license">
                <div className="credits-root-header">
                  <div>
                    <h3 className="credits-root-title">playglow Project License</h3>
                    <div className="credits-meta-row">
                      <span>MIT License</span>
                      <span aria-hidden="true">·</span>
                      <span>Copyright © 2025-2026 playglow contributors</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="credits-action-btn"
                    onClick={() => handleCopy("playglow-root", MIT_TEXT)}
                  >
                    {copiedId === "playglow-root" ? "Copied!" : "Copy License"}
                  </button>
                </div>
                <pre className="credits-license-pre">{MIT_TEXT}</pre>
              </section>

              {/* Third-party header & search */}
              <div className="credits-search-bar">
                <div className="credits-search-meta">
                  <h3 className="credits-section-title">Third-Party Open Source Packages</h3>
                  <span className="credits-count-text">
                    {filteredLicenses.length} {filteredLicenses.length === 1 ? "package" : "packages"}
                  </span>
                </div>
                <input
                  type="search"
                  className="credits-search-input"
                  placeholder="Filter libraries (e.g. three, react, gemini, mit)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Filter licenses"
                />
              </div>

              <div className="credits-license-list">
                {filteredLicenses.map((pkg: LicenseItem) => {
                  const isExpanded = expandedLicense === pkg.name;
                  return (
                    <article key={pkg.name} className="credits-license-item">
                      <div className="credits-license-summary">
                        <div className="credits-pkg-info">
                          <div className="credits-pkg-title-row">
                            <span className="credits-pkg-name">{pkg.name}</span>
                            <span className="credits-pkg-version">v{pkg.version}</span>
                            <span className="credits-pkg-badge">{pkg.license}</span>
                          </div>
                          <div className="credits-pkg-purpose">{pkg.purpose}</div>
                          <div className="credits-meta-row">
                            <span>{pkg.author}</span>
                            {pkg.url && (
                              <>
                                <span aria-hidden="true">·</span>
                                <a
                                  href={pkg.url}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  className="credits-inline-link"
                                >
                                  repository
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="credits-license-actions">
                          <button
                            type="button"
                            className="credits-action-btn"
                            onClick={() =>
                              setExpandedLicense(isExpanded ? null : pkg.name)
                            }
                            aria-expanded={isExpanded}
                          >
                            {isExpanded ? "Hide Text" : "View License"}
                          </button>
                          <button
                            type="button"
                            className="credits-action-btn secondary"
                            onClick={() => handleCopy(pkg.name, pkg.licenseText)}
                          >
                            {copiedId === pkg.name ? "Copied!" : "Copy"}
                          </button>
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="credits-license-expanded">
                          <pre className="credits-license-pre">{pkg.licenseText}</pre>
                        </div>
                      )}
                    </article>
                  );
                })}
                {filteredLicenses.length === 0 && (
                  <div className="credits-empty-state">
                    No packages match &ldquo;{searchQuery}&rdquo;.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: FONTS & ASSETS */}
          {activeTab === "fonts" && (
            <div className="credits-pane">
              <header className="credits-section-header">
                <h3 className="credits-section-title">Typography &amp; Media Assets</h3>
                <p className="credits-section-desc">
                  Open fonts, 3D models, textures, and retro palettes used throughout the cabinet and interface.
                </p>
              </header>

              <div className="credits-font-list">
                {FONT_CREDITS.map((item: FontAssetCredit) => {
                  const isExpanded = expandedLicense === item.name;
                  return (
                    <article key={item.name} className="credits-license-item">
                      <div className="credits-license-summary">
                        <div className="credits-pkg-info">
                          <div className="credits-pkg-title-row">
                            <span className="credits-pkg-name">{item.name}</span>
                            <span className="credits-pkg-badge">{item.license}</span>
                          </div>
                          <div className="credits-pkg-purpose">{item.purpose}</div>
                          <div className="credits-meta-row">
                            <span>Created by {item.creator}</span>
                          </div>
                          <p className="credits-item-details" style={{ marginTop: "6px" }}>
                            {item.notes}
                          </p>
                        </div>
                        <div className="credits-license-actions">
                          <button
                            type="button"
                            className="credits-action-btn"
                            onClick={() =>
                              setExpandedLicense(isExpanded ? null : item.name)
                            }
                            aria-expanded={isExpanded}
                          >
                            {isExpanded ? "Hide License" : "View License"}
                          </button>
                          <button
                            type="button"
                            className="credits-action-btn secondary"
                            onClick={() => handleCopy(item.name, item.licenseText)}
                          >
                            {copiedId === item.name ? "Copied!" : "Copy"}
                          </button>
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="credits-license-expanded">
                          <pre className="credits-license-pre">{item.licenseText}</pre>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="credits-footer">
          <div className="credits-footer-text">
            <span>playglow &bull; Built with Gemini &bull; All cartridges run client-side</span>
          </div>
          <button
            type="button"
            className="credits-done-btn"
            onClick={onClose}
          >
            Done
          </button>
        </footer>
      </div>
    </div>
  );
};
