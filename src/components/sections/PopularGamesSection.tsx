import Link from 'next/link'
import { GameCard } from '@/components/game-cards/GameCard'

export function PopularGamesSection() {
  const popularGames = [
    {
      title: '原神',
      imageSrc: '/images/hoyo-verse.png',
      slug: 'genshin-impact',
    },
    {
      title: '絕區零',
      imageSrc: '/images/hoyo-verse.png',
      slug: 'zenless-zone-zero',
    },
    {
      title: 'EA SPORTS FC Mobile',
      imageSrc: '/images/ea-sports.png',
      slug: 'ea-sports-fc-mobile',
    },
    {
      title: 'Mobile Legends: Bang Bang',
      imageSrc: '/images/mlbb.jpg',
      slug: 'mobile-legends',
    },
    {
      title: 'STEAM Wallet Code',
      imageSrc: '/images/steam.png',
      slug: 'steam',
    },
    {
      title: 'Tinder',
      imageSrc: '/images/tinder.png',
      slug: 'tinder',
    },
    {
      title: 'kumu',
      imageSrc: '/images/kumu.png',
      slug: 'kumu',
    },
    {
      title: 'PlayStation Network Gift Card',
      imageSrc: '/images/kumu.png', // Placeholder
      slug: 'playstation-network',
    },
  ]

  return (
    <section className="py-8 w-full bg-[#280b2f]">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wide">POPULAR</h2>
          <Link href="/popular" className="text-sm text-primary">
            查看全部 &gt;
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {popularGames.map((game) => (
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
