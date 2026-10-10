import { DashboardPreview } from "./DashboardPreview";

export function Toolkit() {
  return (
    <section className="section section-suite" id="features">
      <div className="shell">
        <header className="section-head">
          <h2>One toolkit. Five practical ways to save time.</h2>
          <p>Everything you need is together in one simple dashboard.</p>
        </header>
        <DashboardPreview />
      </div>
    </section>
  );
}
