import { DevicePhoneMobileIcon } from "@heroicons/react/16/solid";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { Button } from "@/components/ui/button";

export default function AppDownloadCTA() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#0F3443] to-[#253340]">
      <div className="px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-12">
          <div className="max-w-md">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl/tight text-white">Download the PixelBloom App</h2>
            <p className="mb-6 text-white/80">Get access to thousands of stunning wallpapers created by talented artists from around the world.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-black text-white hover:bg-black/80">
                <DevicePhoneMobileIcon />
                App Store
              </Button>
              <Button size="lg" className="bg-black text-white hover:bg-black/80">
                <DevicePhoneMobileIcon />
                Google Play
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/60">Available for iOS and Android devices</p>
          </div>
          <div className="relative p-2">
            <Iphone15Pro videoSrc="/mobile-screenshot/Full-App-Tour.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
}
