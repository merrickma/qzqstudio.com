export interface Game {
  title: string;
  image: string;
  link?: string;
}

export interface GameSection {
  title: string;
  games: Game[];
}
