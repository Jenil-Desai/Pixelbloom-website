import React from "react";
import {Heart} from "lucide-react";
import {cn} from "@/lib/utils";
import Image from "next/image";

interface WallpaperCardProps {
    title: string;
    platform: ["DESKTOP" | "MOBILE" | "TABLET"];
    category: string;
    imageUrl: string;
    likes: number;
}

const WallpaperCard: React.FC<WallpaperCardProps> = ({title, imageUrl, platform, category, likes}) => {

    return (
        <div
            className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
            <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
          <span
              className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {platform}
          </span>
                    <span
                        className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            {category}
          </span>
                </div>
                <div className="mt-4 flex items-center justify-end">
                    <button className="flex items-center gap-1 text-sm transition-colors duration-300">
                        <Heart size={18} className={cn("transition-colors duration-300 fill-red-500 text-red-500")}/>
                        <span className="text-gray-600 dark:text-gray-300">{likes}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WallpaperCard;