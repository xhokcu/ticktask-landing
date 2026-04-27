const features = [
  {
    title: "Daily task tracking",
    desc: "Add, complete, and track your tasks with a clean and simple interface.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#192F71"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    title: "Progress overview",
    desc: `See how much of your day you've accomplished at a glance.`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#192F71"
        strokeWidth={1.5}
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Location tagging",
    desc: "Attach a location to your tasks — a map to meet your routine.",
    comingSoon: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#192F71"
        strokeWidth={1.5}
        strokeLinecap="round"
      >
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0116 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "User profiles",
    desc: "Secure auth and personal profile management powered by Firebase.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#192F71"
        strokeWidth={1.5}
        strokeLinecap="round"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="section">
      <div className="two-col">
        <div>
          <p className="section-label">FEATURES</p>
          <h2 className="section-title">
            Everything you need,
            <br />
            nothing you don't.
          </h2>
          <p className="section-sub">
            Built with focus in mind. TickTask strips away the noise so you can
            actually get things done.
          </p>
          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-title">
                  {f.title}
                  {f.comingSoon && <span className="coming-soon">soon</span>}
                </div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="phone-col">
          <PhoneMockImport />
        </div>
      </div>
    </section>
  );
}

import PhoneMockImport from "./PhoneMock";
