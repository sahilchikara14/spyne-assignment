import React, { useState } from "react";

const Captions = ({ onSaveCaptions }) => {
  const [captions, setCaptions] = useState([]);
  const [currentCaption, setCurrentCaption] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleAddCaptions = () => {
    setCaptions([...captions, { text: currentCaption, time: timestamp }]);
    setCurrentCaption("");
    setTimestamp("");
  };

  const handleSave = () => {
    onSaveCaptions(captions);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Caption"
        value={currentCaption}
        onChange={(e) => setCurrentCaption(e.target.value)}
      />

      <input
        type="text"
        placeholder="Timestamp(in seconds)"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
      />

      <button onClick={handleAddCaptions}>Add Caption</button>
      <button onClick={handleSave}>Save Captions</button>

      <ul>
        {captions.map((caption, index) => (
          <li>
            {caption.time}s : {caption.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Captions;
