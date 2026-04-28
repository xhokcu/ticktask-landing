import TickTaskLogo from "../assets/TickTaskLogo.svg?react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="badge">Coming soon to iOS & Android</div>
      <div className="hero-logo">
        <TickTaskLogo width={300} />
      </div>
      <h1 className="hero-title">
        Your day,
        <br />
        <span>clearly organized.</span>
      </h1>
      <p className="hero-sub">
        TickTask is a clean, distraction-free task manager designed for people
        who want to build better daily routines — no clutter, just clarity.
      </p>
      <div className="btn-group">
        <a
          className="btn-primary"
          href="https://github.com/xhokcu/TickTask"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
        <button className="btn-secondary" disabled>
          App coming soon
        </button>
      </div>
    </section>
  );
}
