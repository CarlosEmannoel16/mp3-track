import "./style.css";

export function LeftBar({ children, play }) {
  return (
    <div className="leftBar" onClick={play}>
      <h1 style={{ color: "#fff" }}>Spotify from depweb</h1>
      {children}
    </div>
  );
}
