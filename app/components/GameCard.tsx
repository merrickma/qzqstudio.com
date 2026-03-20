import Image from "next/image";
import { Game } from "../types";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const imageContent = (
    <div className="relative aspect-[2/3] bg-gray-200">
      <Image
        src={game.image}
        alt={game.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
      />
    </div>
  );

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {game.link ? (
        <a href={game.link} target="_blank" rel="noopener noreferrer" className="block">
          {imageContent}
        </a>
      ) : (
        imageContent
      )}
    </div>
  );
}
