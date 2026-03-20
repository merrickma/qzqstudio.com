import Header from "./components/Header";
import GameSection from "./components/GameSection";
import Footer from "./components/Footer";
import { gameSections } from "./data/games";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1440px] mx-auto">
        <Header />
        
        <main className="px-4 py-12 bg-black">
          {gameSections.map((section, sectionIndex) => (
            <GameSection key={sectionIndex} section={section} />
          ))}
        </main>

        <Footer />
      </div>
    </div>
  );
}
