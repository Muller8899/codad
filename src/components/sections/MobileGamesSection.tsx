import Link from 'next/link'
import { GameCard } from '@/components/game-cards/GameCard'

export function MobileGamesSection() {
  const mobileGames = [
    {
      title: 'Mobile Legends: Bang Bang',
      imageSrc: '/images/mlbb.jpg',
      slug: 'mobile-legends',
    },
    {
      title: '絕區零',
      imageSrc: '/images/hoyo-verse.png',
      slug: 'zenless-zone-zero',
    },
    {
      title: '原神',
      imageSrc: '/images/hoyo-verse.png',
      slug: 'genshin-impact',
    },
    {
      title: 'EA SPORTS FC Mobile',
      imageSrc: '/images/ea-sports.png',
      slug: 'ea-sports-fc-mobile',
    },
    {
      title: 'PUBG Mobile',
      imageSrc: '/images/kumu.png', // Placeholder
      slug: 'pubg-mobile',
    },
    {
      title: 'Asphalt 9: Legends',
      imageSrc: '/images/kumu.png', // Placeholder
      slug: 'asphalt-9',
    },
    {
      title: 'Marvel Strike Force',
      imageSrc: '/images/kumu.png', // Placeholder
      slug: 'marvel-strike-force',
    },
    {
      title: 'World War Heroes',
      imageSrc: '/images/kumu.png', // Placeholder
      slug: 'world-war-heroes',
    },
  ]

  return (
    <section className="py-8 w-full bg-[#280b2f]">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wide">MOBILE GAMES (DIRECT TOP-UP)</h2>
          <Link href="/mobile-games" className="text-sm text-primary">
            查看全部 &gt;
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {mobileGames.map((game) => (
            <GameCard
              key={game.slug}
              title={game.title}
              imageSrc={game.imageSrc}
              slug={game.slug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
