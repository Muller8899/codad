import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#e8f150] py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-1">
              <h3 className="font-medium text-sm">聯繫我們</h3>
              <div className="mt-2">
                <Link href="#" className="text-xs hover:underline block py-1">
                  在 Codashop
                </Link>
                <Link href="#" className="text-xs hover:underline block py-1">
                  了解更多關於我們的信息
                </Link>
              </div>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-medium text-sm">需要幫忙？</h3>
              <Link
                href="#"
                className="mt-2 inline-flex items-center justify-center px-3 py-1 text-xs font-medium bg-[#280b2f] rounded-full text-white"
              >
                聯繫客服
              </Link>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-medium text-sm">地區</h3>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-xs">台灣地區 (Taiwan)</span>
                <div className="flex items-center space-x-2">
                  <Link href="#" className="text-xs hover:underline">
                    English
                  </Link>
                  <Link href="#" className="text-xs hover:underline">
                    中文
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-medium text-sm">隨時了解最新資訊：</h3>
              <div className="mt-2 flex space-x-3">
                <Link href="#" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>
                <Link href="#" aria-label="TikTok">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="md:col-span-1">
              <h3 className="font-medium text-sm">公司資訊</h3>
              <div className="mt-2 text-xs">
                <p>營業人名稱：</p>
                <p>易加達商務服務有限公司</p>
                <p>統一編號: 43005770</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-3 border-t">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-xs">
          <p>© Copyright Coda Payments</p>
          <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
            <Link href="#" className="text-xs hover:underline">行銷與活動合作</Link>
            <Link href="#" className="text-xs hover:underline">法律政策</Link>
            <Link href="#" className="text-xs hover:underline">使用條件</Link>
            <Link href="#" className="text-xs hover:underline">隱私政策</Link>
            <Link href="#" className="text-xs hover:underline">漏洞揭發方針</Link>
            <Link href="#" className="text-xs hover:underline">法務申訴信箱</Link>
          </div>
          <Image
            src="/images/codashop-logo.png"
            alt="Codashop Logo"
            width={90}
            height={25}
            className="mt-2 md:mt-0"
          />
        </div>
      </div>
    </footer>
  )
}
