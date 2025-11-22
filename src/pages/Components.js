import React, { useState, useEffect } from 'react';
import { scrollToSection } from '../utils/scrollUtils';

function Components() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notifyToggle, setNotifyToggle] = useState(false);
  const [inlineFormValue, setInlineFormValue] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const isCompact = window.innerWidth <= 900;
      setSidebarCollapsed(isCompact);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId, 20);
  };

  const handleInlineFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Inline form value:', inlineFormValue);
  };

  return (
    <div className="components-page">
      <button
        className="sidebar-toggle"
        aria-label="Toggle component library pane"
        aria-expanded={!sidebarCollapsed}
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
      >
        <span className="toggle-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span className="toggle-label">Library</span>
      </button>

      <div
        className={`components-shell ${
          sidebarCollapsed ? 'sidebar-collapsed' : ''
        }`}
      >
        <aside className="components-sidebar" aria-label="Component Library">
          <div className="sidebar-header">
            <p className="eyebrow">Pattern Library</p>
            <h1>Interface Elements</h1>
            <p>
              Use these foundations to build cohesive experiences across the
              site. Each section highlights ready-to-use components and their
              behavior.
            </p>
          </div>

          <nav className="library-menu">
            <a href="#cards" onClick={(e) => handleScrollToSection(e, '#cards')}>
              Cards
            </a>
            <a href="#buttons" onClick={(e) => handleScrollToSection(e, '#buttons')}>
              Buttons
            </a>
            <a href="#forms" onClick={(e) => handleScrollToSection(e, '#forms')}>
              Inputs
            </a>
            <a href="#text" onClick={(e) => handleScrollToSection(e, '#text')}>
              Typography
            </a>
            <a href="#widgets" onClick={(e) => handleScrollToSection(e, '#widgets')}>
              Widgets
            </a>
          </nav>

          <div className="sidebar-note">
            <p>
              Tip: combine these building blocks with automation tooling to
              craft realistic demos for stakeholders.
            </p>
          </div>
        </aside>

        <main className="components-content">
          <header className="components-hero">
            <p className="eyebrow">Component Catalogue</p>
            <h2>Reusable Interface Patterns</h2>
            <p>
              A living page creators can plug into their workflow —
              automation-ready cards, actions, forms, and copy patterns that
              keep every demo consistent.
            </p>
            <div className="creator-panel">
              <h3>Built for creators shipping fast</h3>
              <ul className="workflow-list">
                <li>
                  Pair UI tokens with test data to narrate automation insights.
                </li>
                <li>
                  Drop ready-made controls into proof-of-concept dashboards.
                </li>
                <li>
                  Keep stakeholders aligned with shared copy, badges, and
                  states.
                </li>
              </ul>
            </div>
          </header>

          <section id="cards" className="component-section">
            <div className="section-heading">
              <h3>Cards</h3>
              <p>Structured summaries mixing titles, metadata, and CTAs.</p>
            </div>
            <div className="component-grid cards-grid">
              <article className="component-card">
                <p className="card-eyebrow">Automation</p>
                <h4>Regression Insights</h4>
                <p>
                  Capture outcomes from nightly jobs, highlight flaky suites,
                  and surface action items for the next sprint.
                </p>
                <div className="component-actions">
                  <button className="btn btn-primary">View Report</button>
                  <a href="#" className="text-link">
                    Schedule rerun
                  </a>
                </div>
              </article>

              <article className="component-card">
                <p className="card-eyebrow success">Quality</p>
                <h4>Release Checklist</h4>
                <ul>
                  <li>✅ Smoke tests passed</li>
                  <li>✅ Performance baseline met</li>
                  <li>⚠️ Awaiting security sign-off</li>
                </ul>
                <div className="component-tags">
                  <span className="demo-tag">Selenium</span>
                  <span className="demo-tag">Playwright</span>
                  <span className="demo-tag">CI/CD</span>
                </div>
              </article>
            </div>
          </section>

          <section id="buttons" className="component-section">
            <div className="section-heading">
              <h3>Buttons & Actions</h3>
              <p>
                Primary, secondary, and subtle affordances for various contexts.
              </p>
            </div>
            <div className="component-grid button-grid">
              <div className="component-card">
                <p className="card-eyebrow">Solid</p>
                <div className="button-row">
                  <button className="btn btn-primary">Primary</button>
                  <button className="btn btn-secondary">Secondary</button>
                </div>
              </div>
              <div className="component-card">
                <p className="card-eyebrow">Outlined</p>
                <div className="button-row">
                  <button className="btn btn-outline">Outline</button>
                  <button className="btn btn-ghost">Ghost</button>
                </div>
              </div>
              <div className="component-card">
                <p className="card-eyebrow">Iconic</p>
                <div className="button-row">
                  <button className="icon-button" aria-label="Refresh data">
                    <span className="icon-circle">⟳</span>
                    Refresh
                  </button>
                  <button className="icon-button" aria-label="Share report">
                    <span className="icon-circle">↗</span>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="forms" className="component-section">
            <div className="section-heading">
              <h3>Form Inputs</h3>
              <p>Accessible controls for gathering user input.</p>
            </div>
            <div className="component-grid form-grid">
              <div className="component-card">
                <label className="control-group">
                  <span>Project Name</span>
                  <input type="text" placeholder="Automation Platform" />
                </label>
                <label className="control-group">
                  <span>Email Address</span>
                  <input type="email" placeholder="you@example.com" />
                </label>
                <label className="control-group">
                  <span>Summary</span>
                  <textarea rows="3" placeholder="What are we testing?" />
                </label>
              </div>
              <div className="component-card">
                <p className="card-eyebrow">States</p>
                <label className="control-group is-disabled">
                  <span>Disabled Field</span>
                  <input type="text" value="Read-only value" disabled />
                </label>
                <div className="control-row">
                  <label className="choice-control">
                    <input type="checkbox" defaultChecked />
                    <span>Include API tests</span>
                  </label>
                  <label className="choice-control">
                    <input type="checkbox" />
                    <span>Record video</span>
                  </label>
                </div>
                <div className="control-row">
                  <label className="choice-control">
                    <input type="radio" name="priority" defaultChecked />
                    <span>High Priority</span>
                  </label>
                  <label className="choice-control">
                    <input type="radio" name="priority" />
                    <span>Normal</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          <section id="text" className="component-section">
            <div className="section-heading">
              <h3>Typography & Links</h3>
              <p>Composable text styles for documentation or updates.</p>
            </div>
            <div className="component-grid text-grid">
              <div className="component-card">
                <h4>Paragraph Sample</h4>
                <p>
                  Each deployment is accompanied by a living document detailing
                  the automation strategy, risk matrix, and release gates. Use
                  hyperlinks to connect supporting material —
                  <a
                    href="https://playwright.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    like this
                  </a>
                  .
                </p>
              </div>
              <div className="component-card">
                <h4>Lists & Inline Elements</h4>
                <ul>
                  <li>
                    • <strong>Checklists</strong> keep teams aligned.
                  </li>
                  <li>
                    • <em>Inline emphasis</em> shines a light on metrics or
                    owners.
                  </li>
                  <li>
                    • <a href="#">Hyperlinks</a> direct readers to deeper
                    context.
                  </li>
                </ul>
              </div>
              <div className="component-card">
                <h4>Inline Form</h4>
                <form className="inline-form" onSubmit={handleInlineFormSubmit}>
                  <input
                    type="text"
                    placeholder="Quick note"
                    value={inlineFormValue}
                    onChange={(e) => setInlineFormValue(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </section>

          <section id="widgets" className="component-section">
            <div className="section-heading">
              <h3>Interactive Widgets</h3>
              <p>
                Mix and match quick indicators, badges, switches, and progress.
              </p>
            </div>
            <div className="component-grid widget-grid">
              <div className="component-card">
                <h4>Status Badges</h4>
                <div className="badge-row">
                  <span className="status-badge success">Operational</span>
                  <span className="status-badge warning">Degraded</span>
                  <span className="status-badge neutral">Maintenance</span>
                </div>
                <p>
                  Use badges alongside card titles or tables to call out
                  real-time system health.
                </p>
              </div>
              <div className="component-card">
                <h4>Toggles</h4>
                <label className="toggle-control">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider" aria-hidden="true"></span>
                  <span className="toggle-label">Dark Mode</span>
                </label>
                <label className="toggle-control">
                  <input
                    type="checkbox"
                    checked={notifyToggle}
                    onChange={(e) => setNotifyToggle(e.target.checked)}
                  />
                  <span className="toggle-slider" aria-hidden="true"></span>
                  <span className="toggle-label">Notify on failures</span>
                </label>
              </div>
              <div className="component-card">
                <h4>Progress</h4>
                <div className="progress-row">
                  <span>Automation Coverage</span>
                  <span className="progress-value">82%</span>
                </div>
                <div className="progress-bar">
                  <span style={{ width: '82%' }}></span>
                </div>
                <div className="progress-row">
                  <span>Manual QA</span>
                  <span className="progress-value">45%</span>
                </div>
                <div className="progress-bar muted">
                  <span style={{ width: '45%' }}></span>
                </div>
              </div>
              <div className="component-card">
                <h4>Metric Tiles</h4>
                <div className="metric-grid">
                  <div>
                    <p className="metric-label">Scripts</p>
                    <p className="metric-value">124</p>
                  </div>
                  <div>
                    <p className="metric-label">Coverage</p>
                    <p className="metric-value accent">92%</p>
                  </div>
                  <div>
                    <p className="metric-label">Bugs</p>
                    <p className="metric-value warning">3</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Components;
