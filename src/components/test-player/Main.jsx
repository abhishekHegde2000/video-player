import { useState } from "react";
import PlayerCard from "../PlayerCard";
import videosList from "@/lib/list";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

export default function Main() {
  const [videos, setVideos] = useState(videosList);
  const video = videos[Math.floor(Math.random() * videos.length)];
  return (
    <div className="flex ">
      <div className="flex p-1 h-screen">
        <PlayerCard
          key={video.title}
          title={video.title}
          description={video.description}
          sources={video.sources}
        />
      </div>
      <div className="h-screen  w-1/4 p-1 ">
        <ScrollArea className="h-screen  rounded-md border">
          <div>
            {videos.map((video) => (
              <>
                <PlayerCard
                  key={video.title}
                  title={video.title}
                  description={video.description}
                  sources={video.sources}
                />
                <div className="py-1">
                  <Separator className="mx-1" />
                </div>
              </>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
