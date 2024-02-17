import BASE_URL from "@/lib/constant";
import React from "react";
import Player from "../test-player/Player";
import PlayList from "../test-player/PlayList";
import { useSelector } from "react-redux";

import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

export default function Video(props) {
  const { title, description, src } = useSelector((state) => state.video);

  return (
    <div className="flex w-full h-screen justify-between bg-gray-800 text-white transition-all duration-500 ease-in-out overflow-hidden">
      <div className="flex-grow p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out overflow-y-auto">
        <Card className="bg-gray-900 rounded-lg shadow-lg flex flex-col justify-center transition-all duration-500 ease-in-out hover:shadow-2xl">
          <CardTitle className="flex justify-center p-4 text-4xl font-bold mb-4 transition-all duration-500 ease-in-out hover:text-blue-500">
            <h1 className="text-center">{title}</h1>
          </CardTitle>
          <CardContent className="mb-4 transition-all duration-500 ease-in-out hover:bg-gray-800">
            <Player key={src} src={src} />
          </CardContent>
          <CardDescription className="p-4 justify-evenly text-lg transition-all duration-500 ease-in-out hover:text-blue-500">
            <p className="text-center">{description}</p>
          </CardDescription>
        </Card>
      </div>

      <div className="w-1/4 bg-gray-700 p-4 transform hover:scale-105 transition-transform duration-300 ease-in-out overflow-y-auto">
        <PlayList />
      </div>
    </div>
  );
}
