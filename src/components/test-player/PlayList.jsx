import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import videosList from "@/lib/list";
import { Link } from "react-router-dom";
import PlayerCard from "../PlayerCard";

export default function PlayList() {
  const [videos] = useState(videosList);
  return (
    <div className="h-screen rounded-md border overflow-y-scroll bg-gray-800 text-white">
      <div className="p-4 space-y-4">
        {videos.map((video) => (
          <Link
            to={`/video/${video.sources[0].split("/").pop()}`}
            key={video.title}
            className="block transition-colors duration-200 ease-in-out hover:bg-gray-700 rounded-md p-2"
          >
            <PlayerCard
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
