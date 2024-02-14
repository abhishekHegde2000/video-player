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
        <Card className="bg-red-500 flex flex-col">
          <CardHeader>
            <CardTitle className="text-bold text-sm">{title}</CardTitle>
          </CardHeader>
          <CardContent className="m-0 p-0">
            <video className="w-auto h-auto object-cover" controls>
              <source src={sources[0]} type="video/mp4" />
            </video>
          </CardContent>
          <CardFooter className="line-clamp-1 ">{description}</CardFooter>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent>
        <CardDescription>{description}</CardDescription>
      </HoverCardContent>
    </HoverCard>
  );
}

export default PlayerCard;
