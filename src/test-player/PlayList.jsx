import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import videosList from "@/lib/list";
import { Link } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function PlayList() {
  const [videos, setVideos] = useState(videosList);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newVideos = Array.from(videos);
    const [reorderedVideo] = newVideos.splice(result.source.index, 1);
    newVideos.splice(result.destination.index, 0, reorderedVideo);

    setVideos(newVideos);
  };

  return (
    <div className="m-2">
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <ScrollArea
                className="h-screen"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {videos.map((video, index) => (
                  <Draggable
                    key={video.title}
                    draggableId={video.title}
                    index={index}
                  >
                    {(provided) => (
                      <Link
                        to={`/video/${video.sources[0].split("/").pop()}`}
                        key={video.title}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <PlayerCard
                          title={video.title}
                          description={video.description}
                          sources={video.sources}
                        />
                        <Separator className="px-2 mx-2" />
                      </Link>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ScrollArea>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}
