import React, { useState, useEffect } from "react";
import videoList from "../lib/list.js";
import PlayerCard from "./PlayerCard.jsx";

export default function ProductList() {
  const [videos, setVideos] = useState(videoList);
  console.log(videos); // logs the video list to the console
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <PlayerCard
          key={video.title}
          title={video.title}
          description={video.description}
          sources={video.sources}
        />
      ))}
    </div>
  );
}
