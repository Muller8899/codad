"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuth } from "@/lib/AuthContext";
import { User, LogOut, ShoppingBag, Heart, Settings, CreditCard } from "lucide-react";
import Link from "next/link";

export function UserMenu() {
  const { user, logOut } = useAuth();
  const [loading, setLoading] = useState(false);

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logOut();
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  const displayName = user.displayName || user.email?.split('@')[0] || '用戶';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full bg-transparent border-primary text-primary hover:bg-primary hover:text-white flex items-center gap-2"
        >
          <User size={16} />
          <span className="max-w-[100px] truncate hidden sm:inline-block">{displayName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-[#3a1a43] border-[#4a1d55] text-white">
        <div className="p-2 border-b border-white/10">
          <p className="text-sm font-medium">{displayName}</p>
          <p className="text-xs text-white/60 truncate">{user.email}</p>
        </div>

        <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
          <Link href="/account/orders" className="flex items-center gap-2 w-full">
            <ShoppingBag size={16} />
            <span>我的訂單</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
          <Link href="/account/wishlist" className="flex items-center gap-2 w-full">
            <Heart size={16} />
            <span>願望清單</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
          <Link href="/account/payment-methods" className="flex items-center gap-2 w-full">
            <CreditCard size={16} />
            <span>支付方式</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
          <Link href="/account/settings" className="flex items-center gap-2 w-full">
            <Settings size={16} />
            <span>帳戶設定</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-white/10" />

        <DropdownMenuItem
          className="hover:bg-white/10 cursor-pointer text-red-400 hover:text-red-300"
          onClick={handleLogout}
          disabled={loading}
        >
          <div className="flex items-center gap-2 w-full">
            <LogOut size={16} />
            <span>{loading ? "登出中..." : "登出"}</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
