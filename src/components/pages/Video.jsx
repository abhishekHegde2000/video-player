import BASE_URL from "@/lib/constant";
import React from "react";
import { useParams } from "react-router-dom";
import Play from "../test-player/PlayIcon";
import Player from "../test-player/Player";
import { Card } from "@chakra-ui/react";

export default function Video() {
  const { name } = useParams();
  const src = BASE_URL + name;
  return (
    <div className="flex">
      <Card className="w-3/4 h-screen bg-red-900">
        <Player src={src} />
      </Card>
    </div>
  );
}
