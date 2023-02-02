import { useEffect, useState } from "react";
import { BiSkipNext, BiPlay, BiPause, BiSkipPrevious } from "react-icons/bi";
import { getAlbumImages } from "../services/getImages";
import "./style.css";

export function Rigth({
  tracks,
  currentIndex,
  currentTrack,
  music,
  play,
  next,
  pause,
  prev,
  isPlaying,
}) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (tracks.length) {
      try {
        getAlbumImages(currentTrack).then((data) => {
          setUrl(data.data.images[2].url);
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [tracks, currentIndex]);

  return (
    <div className="right" style={{ backgroundImage: `url('${url}')` }}>
      <div className="areaImage ">
        <h1>{currentTrack && currentTrack.name}</h1>

        <h3>{currentTrack && currentTrack.artistName}</h3>

        <div style={{ display: "flex", alignItems: "flex-end" }}>
          {isPlaying ? (
            <>
              <button className="buttonIconTop">
                <BiPause
                  className="iconTop"
                  onClick={pause}
                  style={{ marginLeft: "0" }}
                />
              </button>
            </>
          ) : (
            <button className="buttonIconTop">
              <BiPlay onClick={play} className="iconTop" />
            </button>
          )}
        </div>
      </div>

      <div>
        <div className="areaDowPlayer">
          <audio
            ref={music}
            src={"https://listen.hs.llnwd.net/g2/prvw/4/2/4/9/8/911189424.mp3"}
          ></audio>
          <button onClick={prev} className="buttonSize">
            <BiSkipPrevious className="icon" />
          </button>
          <button onClick={isPlaying ? pause : play} className="buttonSize">
            {isPlaying ? (
              <BiPause className="icon" />
            ) : (
              <BiPlay className="icon" />
            )}
          </button>

          <button className="buttonSize">
            <BiSkipNext onClick={next} className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
