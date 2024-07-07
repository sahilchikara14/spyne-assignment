import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoUpload = ({ onVideoURL }) => {
  const [url, setUrl] = useState("");
  const [playing, setPlaying] =useState(false)

  const handleURLChange = (e) => {
    setUrl(e.target.value);
  };

  const handleURLSubmit = () => {
    onVideoURL(url);
  };

  const handlePlayPause=()=>{
    setPlaying(!playing)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter video URL"
        value={url}
        onChange={handleURLChange}
      />
      <button onClick={handleURLSubmit}>Load Video</button>
      {url && <ReactPlayer
      url={url}
      controls={true}
      playing={playing}
      onPlay={()=>setPlaying(true)}
      onPause={()=>setPlaying(false)}
      />}

      <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default VideoUpload;
