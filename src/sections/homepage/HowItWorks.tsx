import {Button} from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="w-full py-20 bg-[#0F3443]">
            <div className="px-4 md:px-6">
                <SectionHeader sectionName="How It Works" title="Start Sharing Your Art in 3 Simple Steps"
                               description="Our streamlined process makes it easy to get your wallpapers in front of millions of users."/>

                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="relative flex flex-col items-center text-center">
                            <div
                                className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#318BA9] to-[#2980B9] text-2xl font-bold text-white">1
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">Create an Account</h3>
                            <p className="text-white/70">Sign up as an artist and complete your profile with your bio
                                and social links.</p>
                        </div>

                        <div className="relative flex flex-col items-center text-center">
                            <div
                                className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#2980B9] to-[#E67E22] text-2xl font-bold text-white">2
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">Upload Your Wallpapers</h3>
                            <p className="text-white/70">Upload your designs, add tags, and set categories to help users
                                discover your work.</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div
                                className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#E67E22] to-[#D35400] text-2xl font-bold text-white">3
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">Get Discovered & Earn</h3>
                            <p className="text-white/70">Users download your wallpapers, and you earn revenue based on
                                popularity and engagement.</p>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Button size="lg"
                                className="bg-gradient-to-r from-[#318BA9] to-[#E67E22] hover:from-[#2980B9] hover:to-[#D35400] text-white">
                            Join as an Artist
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}