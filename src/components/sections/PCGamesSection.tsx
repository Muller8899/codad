import Link from 'next/link'
import { GameCard } from '@/components/game-cards/GameCard'

export function PCGamesSection() {
  const pcGames = [
    {
      title: 'STEAM Wallet Code',
      imageSrc: '/images/steam.png',
      slug: 'steam',
    },
    {
      title: 'EA SPORTS FC 24',
      imageSrc: '/images/ea-sports.png',
      slug: 'ea-sports-fc-24',
    },
    {
      title: 'NBA 2K24',
      imageSrc: '/images/ea-sports.png', // Placeholder
      slug: 'nba-2k24',
    },
    {
      title: 'No Rest for The Wicked',
      imageSrc: '/images/kumu.png', // Placeholder
      slug: 'no-rest-for-the-wicked',
    },
    {
      title: 'WWE 2K24',
      imageSrc: '/images/kumu.png', // Placeholder
      slug: 'wwe-2k24',
    },
    {
      title: 'Diablo World',
      imageSrc: '/images/kumu.png', // Placeholder
      slug: 'diablo-world',
    },
    {
      title: 'Tiny Tina\'s Assault on Dragon Keep',
      imageSrc: '/images/kumu.png', // Placeholder
      slug: 'tiny-tinas-assault',
    },
    {
      title: 'NBA 2K24',
      imageSrc: '/images/kumu.png', // Placeholder
      slug: 'nba-2k24-pc',
    },
  ]

  return (
    <section className="py-8 w-full bg-[#280b2f]">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wide">PC GAMES AND VOUCHERS</h2>
          <Link href="/pc-games" className="text-sm text-primary">
            查看全部 &gt;
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {pcGames.map((game) => (
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
