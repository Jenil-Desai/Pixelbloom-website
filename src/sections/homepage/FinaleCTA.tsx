"use client";
import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowRight, ChevronRight} from "lucide-react";
import {BENEFITS} from "@/constants/benefits";

export default function FinaleCTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 0.2});

    return (
        <section
            id="join-us"
            className="w-full py-24 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden"
            ref={ref}
        >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.6}}
                        className="lg:w-1/2"
                    >
            <span
                className="inline-block px-4 py-1.5 bg-orange-600/10 text-orange-600 rounded-full text-sm font-medium mb-4 border border-orange-200">
              Join PixelBloom Today
            </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-zinc-900">
                            Ready to <span
                            className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">Showcase</span> Your
                            Creative Vision?
                        </h2>

                        <p className="text-zinc-600 text-lg mb-8">
                            Join thousands of artists already sharing their work with our global community.
                            Start uploading today and turn your passion into opportunity.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-medium rounded-xl px-8 py-6 text-lg shadow-md shadow-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                            >
                                Start Uploading Today
                                <ArrowRight className="ml-2 h-5 w-5"/>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="border-zinc-300 hover:border-zinc-400 text-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 rounded-xl px-8 py-6 text-lg transition-all duration-300"
                            >
                                Learn More
                                <ChevronRight className="ml-2 h-5 w-5"/>
                            </Button>
                        </div>

                        <p className="text-sm text-zinc-500 border-l-2 border-orange-500 pl-3 italic">
                            No subscription fees for artists. Get paid based on your popularity and engagement metrics.
                        </p>
                    </motion.div>

                    {/* Right content - Benefits cards */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.6, delay: 0.2}}
                        className="lg:w-1/2 grid grid-cols-1 gap-6"
                    >
                        {BENEFITS.map((benefit, index) => (<motion.div
                            key={index}
                            initial={{opacity: 0, x: 20}}
                            animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: 20}}
                            transition={{duration: 0.5, delay: 0.3 + (index * 0.1)}}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-orange-500/5 border border-zinc-100 transition-all duration-300 flex gap-6 items-start group"
                        >
                            <div
                                className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-orange-500/10 to-blue-500/10 group-hover:from-orange-500/20 group-hover:to-blue-500/20 transition-colors duration-300">
                                <benefit.icon className="w-6 h-6 text-orange-600"/>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-2">{benefit.title}</h3>
                                <p className="text-zinc-600">{benefit.description}</p>
                            </div>
                        </motion.div>))}

                        <div className="flex justify-center mt-4">
                            <Link href="/testimonials">
                            <span
                                className="text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1 transition-colors">
                                See what artists are saying
                                <ChevronRight className="h-4 w-4"/>
                            </span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}