import "./App.css";
import VideoUpload from "./component/VideoUpload";
import Captions from "./component/Captions";
import VideoPlayerWithCaption from "./component/VideoPlayerWithCaption";
import { useState } from "react";

function App() {
  const [videoURL, setVideoURL] = useState("");
  const [captions, setCaptions] = useState([]);

  return (
    <div className="App">
      <h1>Video Caption</h1>
      <VideoUpload onVideoURL={setVideoURL} />
      {videoURL && <Captions onSaveCaptions={setCaptions} />}
      {videoURL && captions.length > 0 && (
        <VideoPlayerWithCaption videoURL={videoURL} captions={captions} />
      )}
    </div>
  );
}

export default App;
