import { useEffect, useState } from "react";
import { getAlbumImages } from "../services/getImages";

export function Music({
  track,
  currentIndex,
  setCurrentIndex,
  currentId,
  musicIndex,
  loadSong,
  setCurrentTRack,
  isPlaying,
}) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    getAlbumImages(track).then((data) => setUrl(data.data.images[1].url));
  }, [currentIndex]);

  const clickToplay = () => {
    setCurrentIndex(musicIndex);
    setCurrentTRack(track);
    document.getElementsByTagName("title")[0].innerHTML = track.name;
    loadSong();
  };

  return (
    <div
      onClick={clickToplay}
      className="musicRow"
      style={{
        backgroundColor: track.id == currentId ? "#3a89ff" : "#000",
      }}
    >
      <p> {musicIndex + 1}</p>

      <div
        className="imageMusicMiniature"
        style={{
          backgroundImage: `url('${url}')`,
        }}
      ></div>
      <p>{track.name}</p>

      <div className="gifArea">
        {track.id == currentId && isPlaying && (
          <img
            className="gifMusic"
            src="https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.gif"
          />
        )}
      </div>
    </div>
  );
}
