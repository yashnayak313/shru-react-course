import {
  Card,
  //   CardContent,
  //   CardDescription,
  //   CardFooter,
  //   CardHeader,
  //   CardTitle,
} from "../components/ui/card";
//import { Button } from "@/components/ui/button"
import { type MovieInterface } from "../interfaces/Movie";

interface MovieCardProps {
  movie: MovieInterface;
  rank?: number;
}

export function MovieCard({ movie, rank }: MovieCardProps) {
  return (
    <Card
      className="group relative overflow-hidden 
      cursor-pointer transition-all duration-300 hover:scale-105 
      hover:shadow-xl outline-blue-200 p-0 border-0 w-[12rem] h-[16rem] rounded-sm m-4"
    >
      {rank && (
        <div className="absolute bottom-0 left-0 w-full h-1/2 z-20 bg-gradient-to-t from-black to-transparent">
          <span
            className="absolute bottom-2 left-2 text-[4rem] leading-none font-bold text-zinc-400/80 drop-shadow-lg"
            style={{
              WebkitTextStroke: "0.020rem rgb(255, 255, 255)",
              textShadow: "0 0 1.5rem rgba(0, 0, 0, 0.5);",
              WebkitTextFillColor: "rgb(0, 0, 0)",
            }}
          >
            {rank}
          </span>
        </div>
      )}
      <img
        src={movie?.primaryImage?.url}
        alt={movie?.originalTitle}
        className="w-full h-full object-cover transition-transform 
        duration-300 group-hover:scale-110 z-10"
      />
    </Card>
  );
}
