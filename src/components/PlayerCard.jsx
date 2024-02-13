import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function PlayerCard({ title, description, sources }) {
  return (
    <div className="bg-blue-500 flex flex-col">
      <Card className="bg-red-500 flex flex-col">
        <CardHeader>
          <CardTitle className="text-bold">{title}</CardTitle>
        </CardHeader>
        <video controls>
          <source src={sources[0]} type="video/mp4" />
        </video>
        <CardContent className="flex-grow">
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
export default PlayerCard;
