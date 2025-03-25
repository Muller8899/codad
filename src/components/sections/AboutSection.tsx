export function AboutSection() {
  return (
    <section className="py-8 w-full bg-[#280b2f]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-6">CODASHOP 台灣</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#3a1a43] rounded-lg p-6">
            <h3 className="text-lg font-medium text-white mb-4">為什麼使用 Codashop 充值最好？</h3>
            <p className="text-white/80 text-sm mb-3">
              為什麼選擇使用 Codashop 進行充值？我們為所有的熱門遊戲提供快速、安全、便捷的充值服務——只要在我們的平台上填寫所需資訊就能完成。
            </p>
            <p className="text-white/80 text-sm">
              在 Codashop 上，您可以透過信用卡或其他多種支付方式為您的遊戲賬號充值。Codashop 提供包括 LINE Pay, 信用卡, GashPoint等多種便捷的支付選項。
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-white/10 p-3 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-white text-sm font-medium">帳戶安全</h4>
                <p className="text-white/70 text-xs text-center mt-1">
                  在 Codashop 上為您的賬號充值是安全的。
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="rounded-full bg-white/10 p-3 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-white text-sm font-medium">即時充值</h4>
                <p className="text-white/70 text-xs text-center mt-1">
                  遊戲幣會立即發放到您的帳戶中。
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="rounded-full bg-white/10 p-3 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h4 className="text-white text-sm font-medium">多種付款方式</h4>
                <p className="text-white/70 text-xs text-center mt-1">
                  LINE Pay, 信用卡, GashPoint等。
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="rounded-full bg-white/10 p-3 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-white text-sm font-medium">隨時提供幫助</h4>
                <p className="text-white/70 text-xs text-center mt-1">
                  我們的客服團隊隨時為您提供協助。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#3a1a43] rounded-lg p-6">
            <h3 className="text-lg font-medium text-white mb-4">關於 Mobile Legends:</h3>
            <p className="text-white/80 text-sm mb-3">
              和你的朋友一起加入全新的5v5真人MOBA競賽，Mobile Legends: Bang Bang！選擇你喜愛的英雄，與夥伴們組建完美的團隊，10秒配隊，10分鐘對戰，打野，對線，團戰，10秒配隊，一打五，打野，推塔，團戰，PC和MOBA遊戲的所有樂趣就在你的手機上！全程公平競技！
            </p>
            <p className="text-white/80 text-sm mb-6">
              Mobile Legends: Bang Bang是一款真正免費全民的遊戲，用戶的手機條件再也不是借口。拖時和掉線？用最穩定的網絡連接拯救你的比賽體驗！遇到了網絡嚴重延遲的情況都可以瞬間重連到遊戲，讓你的團隊完全沒有後顧之憂。
            </p>

            <h3 className="text-lg font-medium text-white mb-4">You're just seconds away from buying Diamonds for Mobile Legends!</h3>
            <p className="text-white/80 text-sm">
              To complete your purchase, simply choose the voucher denomination that you want, and the payment channel through which you'd like to pay, and then enter your email address. You'll then be asked to complete the payment, and after doing so the top up information will be automatically emailed to you. You will receive your Diamonds in your game.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
