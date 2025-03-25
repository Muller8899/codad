import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/images/background.jpeg"
          alt="Codashop Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/50">
          <div className="max-w-lg w-full mx-auto">
            <Image
              src="/images/codashop-logo.png"
              alt="Codashop Logo"
              width={180}
              height={50}
              className="mx-auto mb-4"
            />
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full max-w-xs mx-auto flex">
                  Sign up to Codashop today!
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-[#280b2f] text-white">
                <DialogHeader>
                  <DialogTitle className="text-white">Sign up to Codashop today!</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <p className="text-sm text-white/80">
                    Earn Rewards to get discounts for your purchases and be the first to learn about exclusive promotions on Codashop!
                  </p>
                  <Button variant="outline" className="w-full flex items-center gap-2 border-white/20 hover:bg-white/10 hover:text-white justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0"></path>
                      <path fillRule="evenodd" d="M17.64 9.2c.24 0 .44.2.44.44v3.3c0 .24-.2.44-.44.44h-1.5c-.24 0-.44-.2-.44-.44v-3.3c0-.24.2-.44.44-.44h1.5zm4.56 0c.24 0 .44.2.44.44v3.3c0 .24-.2.44-.44.44h-1.5c-.24 0-.44-.2-.44-.44v-3.3c0-.24.2-.44.44-.44h1.5zm-.42 8.26c.074.054.164.088.268.1l.132.01c.22 0 .4-.18.4-.4v-1.1h.9c.22 0 .4-.18.4-.4v-.5c0-.22-.18-.4-.4-.4h-2c-.22 0-.4.18-.4.4v.5c0 .22.18.4.4.4h.9v1.1c0 .074.014.142.042.206l.058.094z"></path>
                    </svg>
                    <span className="ml-2">繼續使用谷歌</span>
                  </Button>
                  <Button variant="outline" className="w-full flex items-center gap-2 border-white/20 hover:bg-white/10 hover:text-white justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                    <span className="ml-2">使用Facebook登入</span>
                  </Button>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-white/20"></span>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-[#280b2f] px-2 text-white/60">or</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-white/80 mb-2">Sign up with your email address</p>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-transparent border-white/30 text-white"
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  )
}
