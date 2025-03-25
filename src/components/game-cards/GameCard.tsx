import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

interface GameCardProps {
  title: string
  imageSrc: string
  slug: string
  subtitle?: string
}

export function GameCard({ title, imageSrc, slug, subtitle }: GameCardProps) {
  return (
    <Link href={`/${slug}`}>
      <Card className="overflow-hidden bg-[#280b2f] border-0 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-lg">
        <CardContent className="p-0 flex flex-col">
          <div className="w-full aspect-square relative overflow-hidden rounded-t-2xl">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-3 text-center text-white">
            <h3 className="text-sm font-medium truncate">{title}</h3>
            {subtitle && <p className="text-xs text-white/70 truncate">{subtitle}</p>}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
