export default function Offline() {
  return (
    <div className="status-page">
      <p className="status-mark">HINDHUSTHAN</p>
      <p className="status-code">SIGNAL LOST</p>
      <div className="status-line" aria-hidden="true"></div>
      <h1 className="status-title">
        Looks like the connection is taking a break.
      </h1>
      <p className="status-sub">
        Please check your internet connection and try again.
      </p>
      <button
        className="btn btn-primary"
        onClick={() => window.location.reload()}
      >
        Try Again
      </button>
    </div>
  );
}
