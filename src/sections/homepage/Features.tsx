import FeatureCard from "@/sections/homepage/features/FeatureCard";
import SectionHeader from "@/components/SectionHeader";
import {FEATURES} from "@/constants/features";

export default function Features() {
    return (
        <section id="features" className="w-full py-20 bg-gradient-to-b from-white to-[#0F3443]">
            <div className="px-4 md:px-6">
                <SectionHeader sectionName="Features" title="Why Artists Choose PixelBloom"
                               description="We provide everything you need to showcase your art and connect with millions of users looking for the perfect wallpaper."/>

                <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((feature, index) => (
                        <FeatureCard key={index} title={feature.title} description={feature.description}
                                     Icon={feature.Icon} iconBgColor={feature.iconBgColor}
                                     iconColor={feature.iconColor}/>
                    ))}
                </div>
            </div>
        </section>
    );
}