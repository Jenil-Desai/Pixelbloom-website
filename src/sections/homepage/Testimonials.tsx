"use client";
import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {TESTIMONIALS} from "@/constants/testimonials";
import Image from "next/image";
import {Quote} from "lucide-react";
import {TestimonialCard} from "@/sections/homepage/testimonialCard/TestimonialCard";
import {StatItem} from "@/sections/homepage/testimonialCard/StateItem";

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 0.2});

    const expandedTestimonials = [...TESTIMONIALS, {
        review: "The exposure I've received through PixelBloom has opened doors to commercial opportunities I never thought possible. Their platform truly values artists.",
        artists: "Michael Torres",
        profession: "Concept Artist",
        profilePhotoUrl: "https://i.pravatar.cc/48?u=michael",
    },];

    return (<section id="testimonials"
                     className="w-full py-24 bg-gradient-to-b from-white to-zinc-50 relative overflow-hidden" ref={ref}>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-zinc-50 to-transparent"></div>
        <div className="absolute -top-20 right-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4">
            {/* Section header */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.6}}
                className="text-center max-w-3xl mx-auto mb-16"
            >
          <span
              className="inline-block px-4 py-1.5 bg-orange-600/10 text-orange-600 rounded-full text-sm font-medium mb-4 border border-orange-200">
            Success Stories
          </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-zinc-900">
                    Artists <span
                    className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">Thriving</span> on
                    PixelBloom
                </h2>
                <p className="text-zinc-600 text-lg">
                    Hear from the creative minds who have found success sharing their art on our platform.
                </p>
            </motion.div>

            {/* Featured testimonial */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.6, delay: 0.2}}
                className="max-w-4xl mx-auto mb-16"
            >
                <div
                    className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500/10 to-blue-500/10 p-1">
                    <div className="bg-white rounded-xl p-8 md:p-10 relative">
                        <Quote className="absolute text-orange-500/20 w-24 h-24 -top-6 -left-6 rotate-180"/>
                        <div className="flex flex-col md:flex-row md:items-center gap-8">
                            <div className="flex-shrink-0">
                                <div
                                    className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-4 ring-orange-500/20">
                                    <Image
                                        src={TESTIMONIALS[0].profilePhotoUrl}
                                        alt={TESTIMONIALS[0].artists}
                                        width={112}
                                        height={112}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-lg md:text-xl text-zinc-700 italic mb-6 leading-relaxed">
                                    {`\"${TESTIMONIALS[0].review}\"`}
                                </p>
                                <div>
                                    <p className="text-lg font-semibold text-zinc-900">{TESTIMONIALS[0].artists}</p>
                                    <p className="text-orange-600">{TESTIMONIALS[0].profession}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Grid of smaller testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {expandedTestimonials.slice(1).map((testimonial, index) => (<motion.div
                    key={index}
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.5, delay: 0.2 + (index * 0.1)}}
                >
                    <TestimonialCard testimonial={testimonial}/>
                </motion.div>))}
            </div>

            {/* Stats section */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                transition={{duration: 0.6, delay: 0.5}}
                className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
            >
                <StatItem value="97%" label="Artist Satisfaction"/>
                <StatItem value="10k+" label="Active Creators"/>
                <StatItem value="$2.4M" label="Artist Earnings"/>
                <StatItem value="45M+" label="Monthly Views"/>
            </motion.div>
        </div>
    </section>);
}