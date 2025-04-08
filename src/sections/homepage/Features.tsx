"use client";
import {FEATURES} from "@/constants/features";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";
import Link from "next/link";
import {FeatureItem} from "@/sections/homepage/features/FeatureCard";

export default function Features() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 0.2});

    return (
        <section id="features" className="w-full py-24 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                {/* Section header with animation */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.6}}
                    className="text-center max-w-3xl mx-auto mb-16"
                    ref={ref}
                >
                <span
                    className="inline-block px-4 py-1.5 bg-orange-600/10 text-orange-600 rounded-full text-sm font-medium mb-4 border border-orange-200">
                    Platform Features
                </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-zinc-900">
                        Why Artists Choose <span
                        className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">PixelBloom</span>
                    </h2>
                    <p className="text-zinc-600 text-lg">
                        We provide everything you need to showcase your art and connect with millions of users looking
                        for the perfect wallpaper.
                    </p>
                </motion.div>

                {/* Features layout - modern 2-column alternating pattern */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left column */}
                    <div className="space-y-12">
                        {FEATURES.slice(0, 3).map((feature, index) => (<FeatureItem
                            key={index}
                            feature={feature}
                            index={index}
                            isInView={isInView}
                        />))}
                    </div>

                    {/* Right column - offset for visual interest */}
                    <div className="space-y-12 lg:mt-24">
                        {FEATURES.slice(3).map((feature, index) => (<FeatureItem
                            key={index + 3}
                            feature={feature}
                            index={index + 3}
                            isInView={isInView}
                        />))}
                    </div>
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{opacity: 0, scale: 0.95}}
                    animate={isInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.95}}
                    transition={{duration: 0.6, delay: 0.4}}
                    className="mt-24 text-center"
                >
                    <Link
                        href="/sign-up"
                        className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-medium rounded-xl px-8 py-4 text-lg shadow-md shadow-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                    >
                        Start Creating Today
                    </Link>
                </motion.div>
            </div>
        </section>);
}