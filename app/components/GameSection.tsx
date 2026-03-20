import Image from "next/image";
import { GameSection as GameSectionType } from "../types";
import GameCard from "./GameCard";

interface GameSectionProps {
  section: GameSectionType;
}

export default function GameSection({ section }: GameSectionProps) {
  const isUpcoming = section.title === "即将推出";

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8 text-white">{section.title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {isUpcoming ? (
          <div className="col-span-full mb-8 relative">
            <div className="relative w-full h-[800px]" style={{ maxWidth: '1440px', margin: '0 auto' }}>
              <Image
                src={section.games[0].image}
                alt={section.games[0].title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1440px"
              />
              {section.games[0].link && (
                <div className="absolute inset-x-0 flex justify-center items-end" style={{ bottom: '15%', height: '85%' }}>
                  <a href={section.games[0].link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-lg text-center transition-colors shadow-xl transform hover:scale-105 duration-300" style={{ backgroundColor: 'rgba(37, 99, 235, 0.9)', backdropFilter: 'blur(4px)' }}>
                    立即加入愿望单
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : (
          section.games.map((game, gameIndex) => (
            <GameCard key={gameIndex} game={game} />
          ))
        )}
      </div>
    </section>
  );
}
