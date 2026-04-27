const stack = [
  "React Native",
  "Expo / EAS",
  "Expo Router",
  "TypeScript",
  "Firebase Auth",
  "Firestore",
  "Redux Toolkit",
  "React Query",
  "Storybook",
  "Jest",
  "Figma",
];

export default function TechStack() {
  return (
    <section className="section">
      <p className="section-label">TECH STACK</p>
      <h2 className="section-title">Built with modern tools.</h2>
      <p className="section-sub">
        A fully cross-platform mobile app built from scratch with a
        production-ready setup.
      </p>
      <div className="stack-grid">
        {stack.map((s) => (
          <div className="stack-pill" key={s}>
            {s}
          </div>
        ))}
      </div>
      <div className="store-btns">
        <StoreBtn label="Download on the" name="App Store" />
        <StoreBtn label="Get it on" name="Google Play" />
      </div>
    </section>
  );
}

function StoreBtn({ label, name }: { label: string; name: string }) {
  return (
    <div className="store-btn">
      <div>
        <div className="store-btn-label">{label}</div>
        <div className="store-btn-name">{name}</div>
      </div>
    </div>
  );
}
