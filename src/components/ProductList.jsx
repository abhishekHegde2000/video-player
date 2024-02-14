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

export default function ProductList() {
  const [videos, setVideos] = useState(videoList);
  console.log(videos); // logs the video list to the console
  return (
    <Card className="m-2 p-2 px-6">
      <CardContent className="flex justify-between items-center p-4 ">
        <div></div>
        <CardTitle>Videos List</CardTitle>
        <ModeToggle />
      </CardContent>

      {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <PlayerCard
            key={video.title}
            title={video.title}
            description={video.description}
            sources={video.sources}
          />
        ))}
      </div> */}

      <CardFooter className="text-sm justify-between flex m-2 p-2 px-6">
        <p className="text-sm justify-center flex">By Abhi</p>
        {/* i want to render current year at the right bottom */}
        <p className="text-sm justify-center flex">
          {new Date().getFullYear()}
        </p>
      </CardFooter>
    </Card>
  );
}
