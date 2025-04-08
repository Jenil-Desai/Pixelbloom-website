"use client";
import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {Button} from "@/components/ui/button";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import {Apple, PlayCircle, Check} from "lucide-react";

export default function AppDownloadCTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 0.2});

    const appFeatures = [
        "Instant notifications for new wallpapers",
        "Automatic wallpaper rotation",
        "Exclusive mobile-only content",
        "Offline downloading capability"
    ];

    return (
        <section className="w-full py-24 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden" ref={ref}>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-orange-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Mobile app display */}
                    <motion.div
                        initial={{opacity: 0, x: -30}}
                        animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: -30}}
                        transition={{duration: 0.7}}
                        className="lg:w-1/2 relative order-2 lg:order-1"
                    >
                        <div className="absolute -top-8 -left-8 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
                        <div
                            className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>

                        <div className="relative p-2 z-10 flex justify-center">
                            <Iphone15Pro videoSrc="/mobile-screenshot/Full-App-Tour.mp4"/>

                            {/* Floating badges */}
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                                transition={{duration: 0.6, delay: 0.3}}
                                className="absolute -top-6 -right-4 bg-white rounded-full shadow-lg px-4 py-2"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-orange-500 font-bold">4.9</span>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                 viewBox="0 0 24 24"
                                                 fill="#E67E22" stroke="none">
                                                <polygon
                                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                                transition={{duration: 0.6, delay: 0.5}}
                                className="absolute -bottom-4 -left-4 bg-white rounded-full shadow-lg px-4 py-2"
                            >
                                <div className="text-xs font-medium">
                                    <span className="text-blue-600">500K+</span> Downloads
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{opacity: 0, x: 30}}
                        animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: 30}}
                        transition={{duration: 0.7}}
                        className="lg:w-1/2 order-1 lg:order-2"
                    >
            <span
                className="inline-block px-4 py-1.5 bg-orange-600/10 text-orange-600 rounded-full text-sm font-medium mb-6 border border-orange-200">
              Mobile Experience
            </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-zinc-900">
                            Take PixelBloom <span
                            className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">Anywhere</span> You
                            Go
                        </h2>

                        <p className="text-zinc-600 text-lg mb-8">
                            Experience thousands of stunning wallpapers right from your pocket. Our app delivers a
                            seamless browsing experience with exclusive mobile features.
                        </p>

                        {/* Features list */}
                        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {appFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 10}}
                                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 10}}
                                    transition={{duration: 0.4, delay: 0.3 + (index * 0.1)}}
                                    className="flex items-center gap-3"
                                >
                                    <div
                                        className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-orange-500"/>
                                    </div>
                                    <span className="text-zinc-700">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Download buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-medium rounded-xl px-6 py-6 text-base shadow-md shadow-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                            >
                                <Apple className="mr-2 h-5 w-5"/>
                                Download for iOS
                            </Button>
                            <Button
                                size="lg"
                                value={"outline"}
                                className="bg-zinc-900 hover:bg-zinc-800 rounded-xl px-6 py-6 text-base shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <PlayCircle className="mr-2 h-5 w-5"/>
                                Download for Android
                            </Button>
                        </div>
                        <p className="text-sm text-zinc-500">
                            Free download, premium features available with subscription
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}