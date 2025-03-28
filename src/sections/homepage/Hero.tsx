import {Button} from "@/components/ui/button";
import {WALLPAPERS} from "@/constants/wallpapers";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40">
            <div className="absolute inset-0 z-0">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 opacity-40">
                    {WALLPAPERS.map((wallpaper) => (
                        <div key={wallpaper.id} className="aspect-[9/16] w-full overflow-hidden rounded-lg">
                            <Image src={wallpaper.imageUrl} alt={wallpaper.name} width={360} height={640}
                                   className="h-full w-full object-cover"/>
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <div
                        className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">For
                        Artists & Wallpaper Enthusiasts
                    </div>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-[#318BA9] via-[#2980B9] to-[#E67E22] bg-clip-text text-transparent">Share
                        Your Art With The World</h1>
                    <p className="mb-8 text-xl text-white/80">PixelBloom Studio is the premier platform for artists to
                        showcase and monetize their wallpaper designs, reaching millions of mobile users worldwide.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={"/sign-up"}>
                            <Button size="lg"
                                    className="bg-gradient-to-r from-[#318BA9] to-[#E67E22] hover:from-[#2980B9] hover:to-[#D35400] text-white">
                                Start Uploading
                            </Button>
                        </Link>
                        <Link href={"https://www.github.com/Jenil-Desai/Pixelbloom"}>
                            <Button size="lg" variant="outline"
                                    className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white">
                                Download App
                            </Button>
                        </Link>
                    </div>
                    <p className="mt-4 text-sm text-white/60">Join over 10,000+ artists already sharing their work</p>
                </div>
            </div>
        </section>
    );
}