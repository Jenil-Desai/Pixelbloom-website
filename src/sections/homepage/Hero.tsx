"use client";
import {Button} from "@/components/ui/button";
import {WALLPAPERS} from "@/constants/wallpapers";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 5);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Choose 5 distinct wallpapers with orange tint from the collection
    const featuredWallpapers = [WALLPAPERS[2],  // Led Zeppelin
        WALLPAPERS[4],  // Rolling Stones
        WALLPAPERS[10], // Black Sabbath
        WALLPAPERS[20], // The Police
        WALLPAPERS[22]  // Metallica
    ];

    return (
        <section
            className="bg-white text-black relative overflow-hidden flex items-center min-h-screen">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-zinc-50 via-white to-zinc-100"></div>

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>

            {/* Main container - properly centered */}
            <div
                className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 py-16 md:py-20 lg:py-24 lg:flex items-center justify-around">
                {/* Left column - Content */}
                <div className="relative z-10 flex flex-col justify-center">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
            <span
                className="inline-block px-4 py-1.5 bg-orange-600/10 text-orange-600 rounded-full text-sm font-medium mb-6 border border-orange-200">
              Premium Wallpaper Platform
            </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight">
                            <span className="block mb-2">Showcase Your</span>
                            <span
                                className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                Artistic Vision
              </span>
                        </h1>

                        <p className="text-zinc-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                            PixelBloom Studio empowers artists to share stunning wallpaper designs,
                            reach millions of users, and build a creative portfolio that stands out.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link href="/sign-up">
                                <Button size="lg"
                                        className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-medium rounded-xl px-8 py-6 text-lg shadow-md shadow-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                                    Join PixelBloom
                                </Button>
                            </Link>
                            <Link href="https://www.github.com/Jenil-Desai/Pixelbloom">
                                <Button size="lg" variant="outline"
                                        className="border-zinc-300 hover:border-zinc-400 text-zinc-800 hover:text-zinc-900 hover:bg-zinc-100 rounded-xl px-8 py-6 text-lg transition-all duration-300">
                                    Explore Gallery
                                </Button>
                            </Link>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex flex-col">
                                <span
                                    className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">10k+</span>
                                <span className="text-zinc-500 text-sm">Artists</span>
                            </div>
                            <div className="h-10 w-px bg-zinc-200"></div>
                            <div className="flex flex-col">
                                <span
                                    className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">5M+</span>
                                <span className="text-zinc-500 text-sm">Downloads</span>
                            </div>
                            <div className="h-10 w-px bg-zinc-200"></div>
                            <div className="flex flex-col">
                                <span
                                    className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">24k+</span>
                                <span className="text-zinc-500 text-sm">Reviews</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right column - Featured Wallpapers */}
                <div className="relative hidden w-fit md:flex items-center justify-center">
                    <motion.div
                        initial={{opacity: 0, scale: 0.95}}
                        animate={{opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95}}
                        transition={{duration: 0.8}}
                        className="relative h-[36rem] w-[20rem]"
                    >
                        {featuredWallpapers.map((wallpaper, index) => (<motion.div
                            key={wallpaper.id}
                            className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                            initial={false}
                            animate={{
                                zIndex: activeIndex === index ? 5 : 0,
                                scale: activeIndex === index ? 1 : 0.85,
                                opacity: activeIndex === index ? 1 : 0.5,
                                y: activeIndex === index ? 0 : 40,
                                rotateY: activeIndex === index ? 0 : 5,
                                rotateX: activeIndex === index ? 0 : -5,
                            }}
                            transition={{duration: 0.7, ease: "easeInOut"}}
                        >
                            <Image
                                src={wallpaper.imageUrl}
                                alt={wallpaper.name}
                                width={600}
                                height={1200}
                                className="h-full w-full object-cover"
                                priority={index === 0}
                            />
                            <div
                                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <div className="font-medium text-lg text-white">{wallpaper.name}</div>
                                <div className="text-zinc-300 text-sm">by {wallpaper.aritstName}</div>
                            </div>
                        </motion.div>))}

                        {/* Pagination indicators */}
                        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {featuredWallpapers.map((_, index) => (<button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-10 h-1.5 rounded-full transition-all ${activeIndex === index ? "bg-orange-500 w-14" : "bg-zinc-300"}`}
                                aria-label={`View wallpaper ${index + 1}`}
                            />))}
                        </div>
                    </motion.div>

                    {/* Decorative elements */}
                    <div className="absolute top-1/4 right-1/4 w-36 h-36 bg-orange-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>
                </div>
            </div>

            {/* Mobile wallpaper showcase (only visible on mobile) */}
            <div className="md:hidden relative z-10 px-4 pb-20 -mt-10">
                <div className="relative h-[28rem] w-full max-w-[16rem] mx-auto">
                    {featuredWallpapers.map((wallpaper, index) => (<motion.div
                        key={wallpaper.id}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                        initial={false}
                        animate={{
                            zIndex: activeIndex === index ? 5 : 0,
                            scale: activeIndex === index ? 1 : 0.85,
                            opacity: activeIndex === index ? 1 : 0.5,
                            y: activeIndex === index ? 0 : 40,
                        }}
                        transition={{duration: 0.7, ease: "easeInOut"}}
                    >
                        <Image
                            src={wallpaper.imageUrl}
                            alt={wallpaper.name}
                            width={400}
                            height={800}
                            className="h-full w-full object-cover"
                            priority={index === 0}
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="font-medium text-white">{wallpaper.name}</div>
                            <div className="text-zinc-300 text-sm">by {wallpaper.aritstName}</div>
                        </div>
                    </motion.div>))}

                    {/* Mobile pagination indicators */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {featuredWallpapers.map((_, index) => (<button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-8 h-1.5 rounded-full transition-all ${activeIndex === index ? "bg-orange-500 w-12" : "bg-zinc-300"}`}
                            aria-label={`View wallpaper ${index + 1}`}
                        />))}
                    </div>
                </div>
            </div>
        </section>);
}