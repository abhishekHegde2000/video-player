import BASE_URL from "@/lib/constant";
import React from "react";
import Player from "../../test-player/Player";
import PlayList from "../../test-player/PlayList";
import { useSelector } from "react-redux";

import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export default function Video(props) {
  const { title, description, src } = useSelector((state) => state.video);

  return (
    <div className="grid pt-4 grid-cols-4 items-center text-center gap-4 h-screen bg-black overflow-clip">
      <div className="col-span-3 h-full">
        <Card className="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col justify-center transition-all duration-500 ease-in-out hover:shadow-2xl">
          <CardTitle className="text-4xl font-bold mb-4 transition-all duration-500 ease-in-out hover:text-blue-500">
            <h1 className="text-center p-8 text-3xl">{title}</h1>
          </CardTitle>
          <CardContent className="mb-4 transition-all duration-500 ease-in-out hover:bg-gray-800">
            <Player
              key={src}
              src={src}
              className=" cursor-pointer bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </CardContent>
          <CardDescription className="text-lg transition-all p-8 duration-500 ease-in-out hover:text-blue-500">
            <p className="text-2xl p-8">{description}</p>
          </CardDescription>
        </Card>
      </div>
      <div className="col-span-1 h-full">
        <PlayList />
      </div>
    </div>
  );
}
