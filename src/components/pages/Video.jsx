import BASE_URL from "@/lib/constant";
import React from "react";
import Player from "../test-player/Player";
import PlayList from "../test-player/PlayList";
import { useSelector } from "react-redux";

import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export default function Video(props) {
  const { title, description, src } = useSelector((state) => state.video);

  return (
    <div className="flex w-full h-screen justify-between bg-gray-800 text-white">
      <div className="p-8">
        <Card className="bg-gray-900 rounded-lg shadow-lg flexflex-col justify-center">
          <CardTitle className="flex justify-center p-4 text-4xl font-bold mb-4">
            <h1>{title}</h1>
          </CardTitle>
          <CardContent className="mb-4">
            <Player key={src} src={src} />
          </CardContent>
          <CardDescription className="p-4 justify-evenly text-lg">
            <p>{description}</p>
          </CardDescription>
        </Card>
      </div>

      <div className="w-1/4 bg-gray-700 p-4">
        <PlayList />
      </div>
    </div>
  );
}
