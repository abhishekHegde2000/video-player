import React, { useState, useEffect } from "react";
import videoList from "../lib/list.js";
import PlayerCard from "./PlayerCard.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "./mode-toggle.jsx";
import Player from "./test-player/Player.jsx";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [videos, setVideos] = useState(videoList);

  return (
    <Card className="m-2 text-center  p-2 px-6 bg-gray-900 rounded-lg shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl">
      <CardContent className="flex justify-between items-center p-4 text-white">
        <div></div>
        <CardTitle className="text-center text-4xl font-bold transition-all duration-500 ease-in-out hover:text-blue-500">
          Videos List
        </CardTitle>
        <ModeToggle />
      </CardContent>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <Link
            to={{
              pathname: `/video/${video.sources[0].split("/").pop()}`,
              state: { description: video.description },
            }}
            key={video.title}
            className="block transition-colors duration-200 ease-in-out hover:bg-gray-700 rounded-md p-2 transform hover:scale-105 transition-transform duration-300 ease-in-out"
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
      <CardFooter className="text-sm justify-between flex m-2 p-2 px-6 text-white">
        <p className="text-sm justify-center flex">By Abhi</p>

        <p className="text-sm justify-center flex">
          {new Date().getFullYear()}
        </p>
      </CardFooter>
    </Card>
  );
}
