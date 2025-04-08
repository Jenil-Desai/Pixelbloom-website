"use client";
import {Button} from "@/components/ui/button";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";
import Link from "next/link";
import {STEPS} from "@/constants/howItWorksSteps";

export default function HowItWorks() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 0.2});

    return (<section id="how-it-works" className="w-full py-24 bg-white relative overflow-hidden" ref={ref}>
        {/* Decorative background elements */}
        <div className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-orange-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
            {/* Section header */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.6}}
                className="text-center max-w-3xl mx-auto mb-20"
            >
          <span
              className="inline-block px-4 py-1.5 bg-orange-600/10 text-orange-600 rounded-full text-sm font-medium mb-4 border border-orange-200">
            Simple Process
          </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-zinc-900">
                    Start Sharing Your Art in <span
                    className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">3 Simple Steps</span>
                </h2>
                <p className="text-zinc-600 text-lg">
                    Our streamlined process makes it easy to get your wallpapers in front of millions of users.
                </p>
            </motion.div>

            {/* Steps timeline */}
            <div className="relative max-w-5xl mx-auto">
                {/* Connecting line */}
                <div
                    className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-blue-500 to-purple-500 hidden md:block"/>

                {/* Steps */}
                {STEPS.map((step, index) => (<motion.div
                    key={index}
                    initial={{opacity: 0, y: 30}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
                    transition={{duration: 0.7, delay: step.delay}}
                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 md:mb-24 last:mb-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                    {/* Step Image */}
                    <div className="w-full md:w-1/2">
                        <div
                            className="relative aspect-video rounded-2xl overflow-hidden shadow-lg shadow-zinc-200/80 group">
                            <div
                                className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 group-hover:opacity-0 transition-opacity duration-500"/>

                            {/* Placeholder for actual images - replace with your actual image paths */}
                            <div className="w-full h-full bg-zinc-100 flex items-center justify-center">
                                <span className="text-zinc-400 text-lg">Step {step.number} Image</span>
                            </div>

                            {/* Uncomment this when you have the actual images */}
                            {/*<Image*/}
                            {/*    src={step.image}*/}
                            {/*    alt={step.title}*/}
                            {/*    fill*/}
                            {/*    className="object-cover transition-transform duration-700 group-hover:scale-105"*/}
                            {/*/>*/}
                        </div>
                    </div>

                    {/* Step Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <div
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 text-white font-semibold mb-5 md:mb-6">
                            {step.number}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-900">{step.title}</h3>
                        <p className="text-zinc-600 text-lg">{step.description}</p>
                    </div>
                </motion.div>))}
            </div>

            {/* Call to action */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.6, delay: 0.5}}
                className="text-center mt-16"
            >
                <Link href="/sign-up">
                    <Button size="lg"
                            className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-medium rounded-xl px-8 py-6 text-lg shadow-md shadow-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                        Join as an Artist
                    </Button>
                </Link>
            </motion.div>
        </div>
    </section>);
}