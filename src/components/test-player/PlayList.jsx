import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import videosList from "@/lib/list";
import { Link } from "react-router-dom";
import PlayerCard from "../PlayerCard";

export default function PlayList() {
  const [videos] = useState(videosList);
  return (
    <div className="h-screen rounded-md border text-center  overflow-y-scroll bg-gray-800 text-white transition-all duration-500 ease-in-out">
      <div className="p-4 space-y-4">
        {videos.map((video) => (
          <Link
            to={`/video/${video.sources[0].split("/").pop()}`}
            key={video.title}
          >
            <PlayerCard
              className="block text-center transition-colors duration-200 ease-in-out hover:bg-gray-700 rounded-md p-2 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              title={video.title}
              description={video.description}
              sources={video.sources}
            />
            <Separator className="my-2" />
          </Link>
        ))}
      </div>
    </div>
  );
}
