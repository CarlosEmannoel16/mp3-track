import { LeftBar } from "./LeftBar";
import { Music } from "./Music";
import { Rigth } from "./RigthArea";
import napster from "../services/napster";
import { useRef, useState, useEffect } from "react";

function Player() {
  const [tracks, setTracks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTRack] = useState(false);
  const music = useRef();
  const key = "ZTVhYTU3MWEtZjRhNy00MmRmLWJiZDAtNjQwNTAwN2E0ODhi";

  useEffect(() => {
    napster.get(`top?apikey=${key}`).then((response) => {
      setTracks(response.data.tracks);
      setCurrentIndex(0);
      setCurrentTRack(response.data.tracks[0]);
    });
  }, []);

  const loadSong = () => {
    music.current.src = currentTrack.previewURL;
    play();
  };

  const play = () => {
    music.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    music.current.pause();
    setIsPlaying(false);
  };

  const next = () => {
    const index = currentIndex == tracks.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
    setCurrentTRack(tracks[index]);
    document.getElementsByTagName("title")[0].innerHTML = tracks[index].name;
    loadSong();
  };

  const prev = () => {
    const index = currentIndex == 0 ? tracks.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
    setCurrentTRack(tracks[index]);
    document.getElementsByTagName("title")[0].innerHTML = tracks[index].name;
    loadSong();
  };

  return (
    <div style={{ margin: "auto" }}>
      {tracks.length && currentTrack ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <LeftBar>
            {tracks.map((track, index) => (
              <Music
                key={index}
                musicIndex={index}
                track={track}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                currentId={currentTrack.id}
                loadSong={loadSong}
                setCurrentTRack={setCurrentTRack}
                isPlaying={isPlaying}
              ></Music>
            ))}
          </LeftBar>

          <Rigth
            tracks={tracks}
            currentIndex={currentIndex}
            music={music}
            setCurrentIndex={setCurrentIndex}
            prev={prev}
            next={next}
            pause={pause}
            play={play}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
          />
        </div>
      ) : (
        <img
          style={{ margin: "auto" }}
          src="https://icon-library.com/images/animated-svg-loading-icon/animated-svg-loading-icon-13.jpg"
          alt=""
          srcset=""
        />
      )}
    </div>
  );
}

export default Player;
