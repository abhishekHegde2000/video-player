import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import videosList from "@/lib/list";
import { Link } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";
import { useState } from "react";

export default function PlayList() {
  const [videos] = useState(videosList);
  return (
    <div className="m-2">
      <div>
        <ScrollArea className="h-screen">
          {videos.map((video) => (
            <Link
              to={`/video/${video.sources[0].split("/").pop()}`}
              key={video.title}
            >
              <PlayerCard
                title={video.title}
                description={video.description}
                sources={video.sources}
              />
              <Separator className="p-2 " />
            </Link>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}
