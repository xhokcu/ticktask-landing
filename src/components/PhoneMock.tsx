export default function PhoneMock() {
  return (
    <div className="phone-mock">
      <div className="phone-bar" />
      <p className="phone-label">Today's tasks</p>
      <Task label="Morning run" done />
      <Task label="Read for 20 min" done />
      <Task label="Review pull request" />
      <Task label="Grocery shopping" />
      <div className="progress-bar-wrap">
        <div className="progress-bar-fill" />
      </div>
      <p className="progress-label">2 of 4 done</p>
    </div>
  );
}

function Task({ label, done = false }: { label: string; done?: boolean }) {
  return (
    <div className="phone-task">
      <div className={`check ${done ? "done" : ""}`} />
      <span className={`task-text ${done ? "done" : ""}`}>{label}</span>
    </div>
  );
}
