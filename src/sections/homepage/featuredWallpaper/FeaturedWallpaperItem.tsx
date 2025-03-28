import Image from "next/image";
import {Wallpaper} from "@/constants/wallpapers";

export default function FeaturedWallpaperItem({wallpaper}: { wallpaper: Wallpaper }) {
    return (
        <div key={wallpaper.id} className="group relative aspect-[9/16] overflow-hidden rounded-xl">
            <Image src={wallpaper.imageUrl} alt={wallpaper.name} width={360} height={640}
                   className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"/>
            <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div
                className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-medium">{wallpaper.name}</p>
                <p className="text-sm text-white/70">{wallpaper.aritstName}</p>
            </div>
        </div>
    );
}