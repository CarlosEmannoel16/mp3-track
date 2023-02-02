import "./style.css";

export function LeftBar({ children, play }) {
  return (
    <div className="leftBar" onClick={play}>
      <h1>Spotify from deepweb</h1>
      {children}
    </div>
  );
}
