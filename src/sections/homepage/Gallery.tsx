"use client";
import {useRef, useState} from "react";
import {motion, useInView} from "framer-motion";
import {WALLPAPERS} from "@/constants/wallpapers";
import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";
import Link from "next/link";
import {GalleryItem} from "@/sections/homepage/featuredWallpaper/FeaturedWallpaperItem";

export default function Gallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 0.2});
    const [activeCategory, setActiveCategory] = useState("All");

    // Select featured wallpapers (top 8)
    const featuredWallpapers = WALLPAPERS.slice(0, 8);

    // Categories for filter
    const categories = ["All", "Nature", "Abstract", "Minimal", "Dark"];

    return (
        <section id="gallery" className="w-full py-24 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden"
                 ref={ref}>
            {/* Decorative elements */}
            <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-orange-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                {/* Section header */}
                <motion.div initial={{opacity: 0, y: 20}} animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                            transition={{duration: 0.6}} className="text-center max-w-3xl mx-auto mb-12">
                    <span
                        className="inline-block px-4 py-1.5 bg-orange-600/10 text-orange-600 rounded-full text-sm font-medium mb-4 border border-orange-200">Gallery</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-zinc-900">
                        <span
                            className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">Featured</span> Wallpapers
                    </h2>
                    <p className="text-zinc-600 text-lg">Explore some of the most popular wallpapers from our talented
                        artists.</p>
                </motion.div>

                {/* Filter categories */}
                <motion.div initial={{opacity: 0, y: 20}} animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button key={category} onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category ? "bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-md" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"}`}>
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Gallery grid - with masonry-style layout */}
                <motion.div initial={{opacity: 0}} animate={isInView ? {opacity: 1} : {opacity: 0}}
                            transition={{duration: 0.8, delay: 0.3}}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {/* First column - tall item */}
                    <div className="col-span-1 space-y-4 md:space-y-6">
                        <GalleryItem wallpaper={featuredWallpapers[0]} index={0} className="aspect-[9/16]"/>
                        <GalleryItem wallpaper={featuredWallpapers[1]} index={1} className="aspect-square"/>
                    </div>

                    {/* Second column */}
                    <div className="col-span-1 space-y-4 md:space-y-6 mt-8 md:mt-12">
                        <GalleryItem wallpaper={featuredWallpapers[2]} index={2} className="aspect-square"/>
                        <GalleryItem wallpaper={featuredWallpapers[3]} index={3} className="aspect-[9/16]"/>
                    </div>

                    {/* Third column */}
                    <div className="col-span-1 space-y-4 md:space-y-6">
                        <GalleryItem wallpaper={featuredWallpapers[4]} index={4} className="aspect-[9/16]"/>
                        <GalleryItem wallpaper={featuredWallpapers[5]} index={5} className="aspect-square"/>
                    </div>

                    {/* Fourth column */}
                    <div className="col-span-1 space-y-4 md:space-y-6 mt-8 md:mt-12">
                        <GalleryItem wallpaper={featuredWallpapers[6]} index={6} className="aspect-square"/>
                        <GalleryItem wallpaper={featuredWallpapers[7]} index={7} className="aspect-[9/16]"/>
                    </div>
                </motion.div>

                {/* Call to action */}
                <motion.div initial={{opacity: 0, y: 20}} animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                            transition={{duration: 0.6, delay: 0.5}} className="mt-16 text-center">
                    <Link href="/gallery">
                        <Button variant="outline" size="lg"
                                className="border-zinc-300 hover:border-zinc-400 text-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 rounded-xl px-8 py-4 text-lg transition-all duration-300">
                            Browse Full Gallery
                            <ChevronRight className="ml-2 h-5 w-5"/>
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}