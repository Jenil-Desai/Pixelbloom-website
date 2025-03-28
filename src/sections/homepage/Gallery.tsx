import FeaturedWallpaperItem from "@/sections/homepage/featuredWallpaper/FeaturedWallpaperItem";
import SectionHeader from "@/components/SectionHeader";
import {WALLPAPERS} from "@/constants/wallpapers";
import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";

export default function Gallery() {
    return (
        <section id="gallery" className="w-full py-20 bg-gradient-to-b from-[#0F3443] to-white">
            <div className="px-4 md:px-6">
                <SectionHeader sectionName="Gallery" title="Featured Wallpapers"
                               description="Explore some of the most popular wallpapers from our talented artists."/>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {WALLPAPERS.slice(0, 4).map((wallpaper) => (
                        <FeaturedWallpaperItem wallpaper={wallpaper} key={wallpaper.id}/>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <Button variant="outline" size="lg"
                            className="bg-transparent not-last:border-black/20 text-black hover:bg-black/10 hover:text-black">
                        View All Wallpapers
                        <ChevronRight className="ml-2 h-4 w-4"/>
                    </Button>
                </div>
            </div>
        </section>
    );
}