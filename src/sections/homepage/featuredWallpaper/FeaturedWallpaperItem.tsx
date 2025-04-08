import {motion} from "framer-motion";
import Image from "next/image";
import {Wallpaper} from "@/constants/wallpapers";

type GalleryItemType = {
    wallpaper: Wallpaper;
    index: number;
    className?: string;
}

export function GalleryItem({wallpaper, index, className}: GalleryItemType) {
    return (
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.1 * index}}
                    className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${className}`}>
            <Image src={wallpaper.imageUrl} alt={wallpaper.name} width={400} height={800}
                   className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/>
            <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div
                className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-xl font-bold">{wallpaper.name}</h3>
                <p className="text-white/80">by {wallpaper.aritstName}</p>
            </div>
            <div
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
            </div>
        </motion.div>
    );
}