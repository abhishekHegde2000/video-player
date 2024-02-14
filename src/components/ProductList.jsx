import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "./mode-toggle.jsx";
import Main from "./test-player/Main.jsx";

export default function ProductList() {
  return (
    <Card className="m-2 p-2 px-6">
      <CardContent className="flex justify-between items-center p-4 ">
        <div></div>
        <CardTitle>Videos List</CardTitle>
        <ModeToggle />
      </CardContent>

      {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <PlayerCard
            key={video.title}
            title={video.title}
            description={video.description}
            sources={video.sources}
          />
        ))}
      </div> */}
      <Main />
      <CardFooter className="text-sm justify-between flex m-2 p-2 px-6">
        <p className="text-sm justify-center flex">By Abhi</p>
        {/* i want to render current year at the right bottom */}
        <p className="text-sm justify-center flex">
          {new Date().getFullYear()}
        </p>
      </CardFooter>
    </Card>
  );
}
