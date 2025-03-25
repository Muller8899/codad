"use client";

import { useAuth } from "@/lib/AuthContext";
import { useState, useEffect } from "react";
import { NextImage } from "@/components/ui/NextImage";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { UserCircle, Mail, Key, CreditCard, ShoppingBag, Heart } from "lucide-react";

export default function AccountPage() {
  const { user, loading } = useAuth();
  const [clientLoaded, setClientLoaded] = useState(false);

  useEffect(() => {
    setClientLoaded(true);
  }, []);

  // If page is loaded client-side and user is not authenticated, redirect to home
  if (clientLoaded && !loading && !user) {
    redirect("/");
  }

  if (loading || !clientLoaded) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-center items-center h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-[#3a1a43] flex items-center justify-center text-white text-2xl font-bold">
            {user?.displayName?.charAt(0) || user?.email?.charAt(0) || "U"}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">
              {user?.displayName || user?.email?.split('@')[0] || '用戶'}
            </h1>
            <p className="text-white/60">{user?.email}</p>
            {user?.emailVerified ? (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400 mt-1">
                Email 已驗證
              </span>
            ) : (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-500/20 text-yellow-400 mt-1 cursor-pointer">
                驗證 Email
              </span>
            )}
          </div>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mb-6">
            <TabsTrigger value="profile" className="data-[state=active]:bg-primary">個人資料</TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:bg-primary">訂單記錄</TabsTrigger>
            <TabsTrigger value="payment" className="data-[state=active]:bg-primary">支付方式</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <Card className="bg-[#3a1a43] border-[#4a1d55] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCircle size={18} />
                  個人資料
                </CardTitle>
                <CardDescription className="text-white/60">
                  更新您的帳戶資訊
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">顯示名稱</label>
                    <Input
                      value={user?.displayName || ""}
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="顯示名稱"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">電子郵件</label>
                    <Input
                      value={user?.email || ""}
                      className="bg-white/10 border-white/20 text-white"
                      disabled
                    />
                  </div>
                </div>

                <Button className="bg-primary hover:bg-primary/90">
                  更新個人資料
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#3a1a43] border-[#4a1d55] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key size={18} />
                  更改密碼
                </CardTitle>
                <CardDescription className="text-white/60">
                  更新您的密碼以保護帳戶安全
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">當前密碼</label>
                    <Input
                      type="password"
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="當前密碼"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">新密碼</label>
                    <Input
                      type="password"
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="新密碼"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">確認新密碼</label>
                    <Input
                      type="password"
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="確認新密碼"
                    />
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  更改密碼
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <Card className="bg-[#3a1a43] border-[#4a1d55] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag size={18} />
                  訂單記錄
                </CardTitle>
                <CardDescription className="text-white/60">
                  查看您的訂單記錄和購買歷史
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="py-8 text-center text-white/60">
                  <ShoppingBag size={48} className="mx-auto mb-3 opacity-50" />
                  <p>您目前還沒有任何訂單記錄</p>
                  <Button variant="link" className="text-primary mt-2">
                    立即購買遊戲幣
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#3a1a43] border-[#4a1d55] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart size={18} />
                  願望清單
                </CardTitle>
                <CardDescription className="text-white/60">
                  您收藏的遊戲和商品
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="py-8 text-center text-white/60">
                  <Heart size={48} className="mx-auto mb-3 opacity-50" />
                  <p>您的願望清單是空的</p>
                  <Button variant="link" className="text-primary mt-2">
                    瀏覽遊戲
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="space-y-4">
            <Card className="bg-[#3a1a43] border-[#4a1d55] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard size={18} />
                  支付方式
                </CardTitle>
                <CardDescription className="text-white/60">
                  管理您的支付方式
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="py-8 text-center text-white/60">
                  <CreditCard size={48} className="mx-auto mb-3 opacity-50" />
                  <p>您還沒有添加任何支付方式</p>
                  <Button className="bg-primary hover:bg-primary/90 mt-4">
                    添加支付方式
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
