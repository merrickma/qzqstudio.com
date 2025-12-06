import Image from "next/image";

interface Game {
  title: string;
  image: string;
  link?: string;
}

interface GameSection {
  title: string;
  games: Game[];
}

export default function Home() {
  const gameSections: GameSection[] = [
    {
      title: "即将推出",
      games: [
        {
          title: "The Abyss Book",
          image: "/images/games/upcoming/theabyssbook.webp",
          link: "https://store.steampowered.com/app/3309040/The_Abyss_Book/"
        }
      ]
    },
    {
      title: "孙美琪疑案系列",
      games: [
        { title: "孙美琪疑案2024", image: "/images/games/sunmeiqi/meiqi2024_schinese.jpg" },
        { title: "孙美琪疑案2023", image: "/images/games/sunmeiqi/meiqi2023_schinese.jpg" },
        { title: "孙美琪疑案2022", image: "/images/games/sunmeiqi/meiqi2022_schinese.jpg" },
        { title: "孙美琪疑案2021", image: "/images/games/sunmeiqi/meiqi2021_schinese.jpg" },
        { title: "孙美琪疑案2020", image: "/images/games/sunmeiqi/meiqi2020_schinese.jpg" },
        { title: "孙美琪疑案2019", image: "/images/games/sunmeiqi/meiqi2019_schinese.jpg" },
        { title: "孙美琪疑案：故事", image: "/images/games/sunmeiqi/meiqi_story_schinese.jpg" },
        { title: "孙美琪疑案：凤凰密室", image: "/images/games/sunmeiqi/meiqi_fhms_schinese.jpg" }
      ]
    },
    {
      title: "林山海探案集",
      games: [
        { title: "林山海探案集：雨儿胡同", image: "/images/games/linshanhai/Lin00_schinese.jpg" },
        { title: "林山海探案集：第一案 仙人跳", image: "/images/games/linshanhai/Lin01_schinese.jpg" },
        { title: "林山海探案集：第二案 公交车爆炸案", image: "/images/games/linshanhai/Lin02_schinese.jpg" },
        { title: "林山海探案集：第三案 屍色", image: "/images/games/linshanhai/Lin03_schinese.jpg" },
        { title: "林山海探案集：第四案 画", image: "/images/games/linshanhai/Lin04_schinese.jpg" },
        { title: "林山海探案集：第五案 三棵树", image: "/images/games/linshanhai/Lin05_schinese.jpg" }
      ]
    },
    {
      title: "异常1999系列",
      games: [
        { title: "异常1999：沉默", image: "/images/games/abnormal/ab01_schinese.jpg" },
        { title: "异常1999：杀手公寓", image: "/images/games/abnormal/ab02_schinese.jpg" },
        { title: "异常1999：苏 - 解锁第四维度", image: "/images/games/abnormal/ab03_schinese.jpg" },
        { title: "异常1999：超空间", image: "/images/games/abnormal/ab04_schinese.jpg" },
        { title: "异常1999：49区", image: "/images/games/abnormal/ab05_schinese.jpg" },
        { title: "异常1999：沙界", image: "/images/games/abnormal/ab06_schinese.jpg" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1440px] mx-auto">
      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-left">QZQ Studio</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-12 bg-black">
        {gameSections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-white">{section.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {section.title === "即将推出" && (
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
            )}
              {section.title !== "即将推出" && section.games.map((game, gameIndex) => (
                <div key={gameIndex} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {game.link ? (
                    <a href={game.link} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="relative aspect-[2/3] bg-gray-200">
                        <Image
                          src={game.image}
                          alt={game.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                        />
                      </div>
                    </a>
                  ) : (
                    <div className="relative aspect-[2/3] bg-gray-200">
                      <Image
                        src={game.image}
                        alt={game.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 QZQ Studio. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  );
}
