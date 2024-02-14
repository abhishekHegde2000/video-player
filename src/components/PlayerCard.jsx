import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState } from "react";

function PlayerCard({ title, description, sources, handleVideoClick }) {
  return (
    <div
      onClick={() => handleVideoClick(sources[0])}
      className="cursor-pointer"
    >
      <HoverCard>
        <HoverCardTrigger>
          <Card className="bg-red-500 flex flex-col">
            <CardHeader>
              <CardTitle className="text-bold text-sm">{title}</CardTitle>
            </CardHeader>
            <CardContent className="m-0 p-0">
              <video
                src={sources[0]}
                className="w-full h-48 object-cover"
                controls
              ></video>
            </CardContent>
            <CardFooter className="line-clamp-1 ">{description}</CardFooter>
          </Card>
        </HoverCardTrigger>
        <HoverCardContent>
          <CardDescription>{description}</CardDescription>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export default PlayerCard;
