import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  // eslint-disable-next-line
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    // eslint-disable-next-line
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
    // eslint-disable-next-line
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button className="px-4 py-2 bg-blue-500 rounded-lg text-blue-100 hover:bg-blue-600 hover:text-blue-200 focus:outline-none" onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;