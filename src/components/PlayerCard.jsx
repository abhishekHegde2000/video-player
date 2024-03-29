/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDispatch } from "react-redux";
import { setVideoData } from "../redux/videoSlice";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import BASE_URL from "@/lib/constant";

function PlayerCard({ title, description, sources, handleVideoClick }) {
  const src = BASE_URL + sources[0].split("/").pop();
  const dispatch = useDispatch();

  handleVideoClick = () => {
    dispatch(setVideoData({ title, description, src }));
  };
  return (
    <div
      onClick={handleVideoClick}
      className="p-2 m-2 cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <HoverCard className="">
        <HoverCardTrigger>
          <Card className="bg-purple-700 flex flex-col transition-all duration-500  ease-in-out hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="text-bold text-sm">{title}</CardTitle>
            </CardHeader>
            <CardContent className="m-0 p-0">
              <video className="w-full h-48 object-cover">
                <source src={sources[0]} type="video/mp4" />
              </video>
            </CardContent>
            <CardFooter className="line-clamp-1 m-2">{description}</CardFooter>
          </Card>
        </HoverCardTrigger>
        {/* <HoverCardContent className="z-50">
          <CardDescription className="p-4 z-50">{description}</CardDescription>
        </HoverCardContent> */}
      </HoverCard>
    </div>
  );
}

export default PlayerCard;
