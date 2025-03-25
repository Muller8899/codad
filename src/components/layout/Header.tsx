"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Search } from 'lucide-react'
import { NextImage } from '@/components/ui/NextImage'
import { AuthModal } from '@/components/auth/AuthModal'
import { UserMenu } from '@/components/auth/UserMenu'
import { useAuth } from '@/lib/AuthContext'

export function Header() {
  const { user, loading } = useAuth();

  return (
    <header className="bg-[#280b2f] text-white w-full sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="text-white md:hidden">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#280b2f] text-white">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-2">
                <Link href="/" className="hover:text-primary transition-colors duration-200">
                  首頁
                </Link>
                <Link href="/popular" className="hover:text-primary transition-colors duration-200">
                  熱門遊戲
                </Link>
                <Link href="/mobile-games" className="hover:text-primary transition-colors duration-200">
                  手機遊戲
                </Link>
                <Link href="/pc-games" className="hover:text-primary transition-colors duration-200">
                  電腦遊戲
                </Link>
                <Link href="/entertainment" className="hover:text-primary transition-colors duration-200">
                  娛樂
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-3">
            <NextImage src="/images/codashop-logo.png" alt="Codashop Logo" width={115} height={32} />
            <span className="hidden md:inline text-sm font-light italic">購買遊戲代幣最簡單快捷的方式</span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-white">
            <Search className="h-5 w-5" />
          </Button>

          {loading ? (
            <div className="h-9 w-20 bg-[#3a1a43] rounded-full animate-pulse"></div>
          ) : user ? (
            <UserMenu />
          ) : (
            <AuthModal />
          )}
        </div>
      </div>
    </header>
  )
}
