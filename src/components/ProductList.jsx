import React, { useState } from "react";
import videoList from "../lib/list.js";
import PlayerCard from "./PlayerCard.jsx";

import { ModeToggle } from "./mode-toggle.jsx";

import { Link } from "react-router-dom";

export default function ProductList() {
  const [videos] = useState(videoList);

  return (
    <div className="flex flex-col h-screen p-4 bg-black overflow-auto">
      <div className="flex justify-between items-center text-white mb-4">
        <div></div>
        <h1 className="text-4xl font-bold transition-all duration-500 ease-in-out hover:text-blue-500">
          Videos List
        </h1>
        <ModeToggle />
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <Link
            to={{
              pathname: `/video/${video.sources[0].split("/").pop()}`,
              state: { description: video.description },
            }}
            key={video.title}
            className="block bg-gray-900 rounded-lg p-4 transition-all duration-500 ease-in-out hover:bg-gray-700 transform hover:scale-105"
          >
            <PlayerCard
              key={video.title}
              title={video.title}
              description={video.description}
              sources={video.sources}
              className="transition-all duration-500 ease-in-out hover:shadow-2xl"
            />
          </Link>
        ))}
      </div>

      <div className="text-sm justify-between flex mt-4 text-white">
        <p className="text-center">By Abhi</p>
        <p className="text-center">{new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
