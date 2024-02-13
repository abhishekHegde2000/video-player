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
      <div className="bg-purple-500">
        <HoverCardTrigger>
          <div className="bg-blue-500 flex flex-col">
            <Card className="bg-red-500 flex flex-col">
              <CardHeader>
                <CardTitle className="text-bold">{title}</CardTitle>
              </CardHeader>
              <video controls>
                <source src={sources[0]} type="video/mp4" />
              </video>
            </Card>
          </div>
        </HoverCardTrigger>
        <HoverCardContent>
          <CardContent className="flex-grow">
            <CardDescription>{description}</CardDescription>
          </CardContent>
        </HoverCardContent>
      </div>
    </HoverCard>
  );
}
export default PlayerCard;
