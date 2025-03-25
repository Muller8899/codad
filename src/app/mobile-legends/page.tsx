import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function MobileLegends() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-[#280b2f] py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Column - Game Info */}
            <div className="md:col-span-3">
              <div className="bg-gradient-to-b from-[#4a1d55] to-[#2d0b35] rounded-lg p-4">
                <h1 className="text-xl font-bold text-white mb-4">Mobile Legends 無盡對決</h1>

                <div className="flex flex-col items-center mb-6">
                  <Image
                    src="/images/mlbb.jpg"
                    alt="Mobile Legends"
                    width={200}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                </div>

                <p className="text-sm text-white/80 mb-4">
                  成為上流無盡對決(Mobile Legends)!
                  iOS和Android設備可支付的方式充值。在台灣地區，使用 LINE Pay, 信用卡, Gash 點數等支付方式，不需註冊就能入。
                </p>

                <p className="text-sm text-white/80 mb-2">
                  使用方式很簡單，您只需在我們的檢查表格中填寫，然後下下拉選擇菜單 (Mobile Legends):
                </p>

                <div className="flex items-center space-x-2 mb-2">
                  <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-xs text-white">1</div>
                  <span className="text-sm text-white">輸入用戶 ID</span>
                </div>

                <div className="flex items-center space-x-2 mb-2">
                  <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-xs text-white">2</div>
                  <span className="text-sm text-white">選擇充值</span>
                </div>

                <div className="flex items-center space-x-2 mb-2">
                  <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-xs text-white">3</div>
                  <span className="text-sm text-white">選擇付款</span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-xs text-white">4</div>
                  <span className="text-sm text-white">購買！</span>
                </div>

                <div className="mt-4">
                  <a href="#" className="text-xs text-primary hover:underline">
                    立即下載Mobile Legends!
                  </a>
                  <div className="flex items-center space-x-2 mt-2">
                    <a href="https://apple.co/2t1JOTX" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="https://ext.same-assets.com/2985296912/749073613.png"
                        alt="Download on the App Store"
                        width={100}
                        height={30}
                      />
                    </a>
                    <a href="http://bit.ly/32FyvBk" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="https://ext.same-assets.com/2985296912/428094804.png"
                        alt="Download on Google Play"
                        width={100}
                        height={30}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Purchase Form */}
            <div className="md:col-span-9">
              <div className="bg-gradient-to-b from-[#4a1d55] to-[#2d0b35] rounded-lg p-6">
                <div className="flex items-center mb-6 border-b border-white/20 pb-4">
                  <Image
                    src="/images/mlbb.jpg"
                    alt="Mobile Legends"
                    width={30}
                    height={30}
                    className="rounded mr-3"
                  />
                  <h2 className="text-lg font-semibold text-white">請儲值 Mobile Legends 鑽石. 將平台升級至 29,776</h2>
                </div>

                {/* Step 1 */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-white mr-3">1</div>
                    <h3 className="text-lg font-medium text-white">輸入用戶 ID</h3>
                  </div>

                  <div className="bg-[#3a1a43] rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/80 mb-4">
                      要找到您的User ID，請點擊螢幕左上角的頭像。然後進入"基本資料"頁面。您的用戶ID顯示在您的暱稱下方。請在此輸入完整的用戶ID，例如 12345678(1234)。
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-white/80 mb-1 block">輸入用戶 ID</label>
                        <Input
                          type="text"
                          placeholder="輸入用戶 ID"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-white/80 mb-1 block">Zone ID</label>
                        <Input
                          type="text"
                          placeholder="Zone ID"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-white mr-3">2</div>
                    <h3 className="text-lg font-medium text-white">選擇充值</h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {[
                      { diamonds: 27, bonus: 2, price: 15 },
                      { diamonds: 55, bonus: 5, price: 30, discount: 17, originalPrice: 36 },
                      { diamonds: 92, bonus: 9, price: 50 },
                      { diamonds: 184, bonus: 18, price: 100 },
                      { diamonds: 373, bonus: 43, price: 200 },
                      { diamonds: 573, bonus: 79, price: 300, discount: 21, originalPrice: 378 },
                      { diamonds: 956, bonus: 132, price: 500, discount: 22, originalPrice: 641 },
                      { diamonds: 1943, bonus: 296, price: 1000 },
                      { diamonds: 3919, bonus: 626, price: 2000 },
                      { diamonds: 6916, bonus: 1153, price: 3500 },
                    ].map((item, index) => (
                      <div key={index} className="bg-[#3a1a43] rounded-lg p-3 flex flex-col items-center hover:bg-[#4a2255] cursor-pointer transition-colors duration-200">
                        <h4 className="text-white font-medium mb-1">{item.diamonds} Diamonds</h4>
                        <p className="text-xs text-white/60 mb-3">({item.diamonds - item.bonus} + {item.bonus} Bonus)</p>

                        <div className="flex items-center justify-center mb-2">
                          <Image
                            src="https://ext.same-assets.com/9712562/1069677574.png"
                            alt={`${item.diamonds} Diamonds`}
                            width={40}
                            height={40}
                          />
                        </div>

                        {item.discount && (
                          <div className="bg-green-600/80 text-white text-xs px-1 rounded mb-1">
                            -{item.discount}%
                          </div>
                        )}

                        {item.originalPrice && (
                          <p className="text-xs text-white/60 line-through mb-1">NT$ {item.originalPrice}</p>
                        )}

                        <p className="text-white font-semibold">NT$ {item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 3 */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-white mr-3">3</div>
                    <h3 className="text-lg font-medium text-white">選擇付款</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-[#3a1a43] rounded-lg p-4 flex flex-col items-center hover:bg-[#4a2255] cursor-pointer transition-colors duration-200">
                      <Image
                        src="https://ext.same-assets.com/9712562/349821335.bin"
                        alt="Card Payment"
                        width={80}
                        height={40}
                      />
                      <p className="text-white mt-2">Card Payment</p>
                    </div>

                    <div className="bg-[#3a1a43] rounded-lg p-4 flex flex-col items-center hover:bg-[#4a2255] cursor-pointer transition-colors duration-200">
                      <Image
                        src="https://ext.same-assets.com/9712562/1953627391.bin"
                        alt="Line Pay"
                        width={80}
                        height={40}
                      />
                      <p className="text-white mt-2">Line Pay</p>
                    </div>

                    <div className="bg-[#3a1a43] rounded-lg p-4 flex flex-col items-center hover:bg-[#4a2255] cursor-pointer transition-colors duration-200">
                      <Image
                        src="https://ext.same-assets.com/9712562/4148315244.bin"
                        alt="GashPoint Voucher"
                        width={80}
                        height={40}
                      />
                      <p className="text-white mt-2">GashPoint Voucher</p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-white mr-3">4</div>
                    <h3 className="text-lg font-medium text-white">購買！</h3>
                  </div>

                  <div className="bg-[#3a1a43] rounded-lg p-4">
                    <p className="text-sm text-white/80 mb-4">
                      可選：如果您希望通過電子郵件獲取收據，請使用有效的Email地址
                    </p>

                    <Input
                      type="email"
                      placeholder="請輸入電子信箱"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 mb-4"
                    />

                    <div className="flex items-center mb-4">
                      <input type="checkbox" id="subscribe" className="mr-2 w-4 h-4" />
                      <label htmlFor="subscribe" className="text-sm text-white/80">
                        我同意，我想接收Codashop優惠通知優惠！
                      </label>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/80 text-white">
                      立即購買
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
