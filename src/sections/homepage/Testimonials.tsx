import TestimonialCard from "@/sections/homepage/testimonialCard/TestimonialCard";
import {TESTIMONIALS} from "@/constants/testimonials";

export default function Testimonials() {
    return (
        <section id="testimonials" className="w-full py-20 bg-white">
            <div className="px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div
                        className="inline-block rounded-full bg-black/10 px-4 py-1.5 text-sm font-medium text-black backdrop-blur-sm">Testimonials
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight text-black">What Our Artists
                        Say</h2>
                    <p className="max-w-[800px] text-black/70 md:text-xl/relaxed">Hear from the creative minds who share
                        their art on PixelBloom Studio.</p>
                </div>

                <div className="mx-auto grid max-w-5xl gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}