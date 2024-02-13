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

function PlayerCard({ title, description, sources }) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <CardContent className="m-0 p-0">
          <div className="bg-purple-500 m-0">
            <div className="bg-blue-500 flex flex-col">
              <Card className="bg-red-500 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-bold text-sm">{title}</CardTitle>
                </CardHeader>
                <video className="w-full h-48 object-cover" controls>
                  <source src={sources[0]} type="video/mp4" />
                </video>

                <CardFooter className="line-clamp-1 ">{description}</CardFooter>
              </Card>
            </div>
          </div>
        </CardContent>
      </HoverCardTrigger>
      <HoverCardContent>
        <CardDescription>{description}</CardDescription>
      </HoverCardContent>
    </HoverCard>
  );
}

export default PlayerCard;
