import Hero from "../sections/homepage/Hero";
import Features from "../sections/homepage/Features";
import HowItWorks from "../sections/homepage/HowItWorks";
import Gallery from "../sections/homepage/Gallery";
import Testimonials from "../sections/homepage/Testimonials";
import AppDownloadCTA from "../sections/homepage/AppDownloadCTA";
import FinaleCTA from "../sections/homepage/FinaleCTA";

export default function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-white text-black">
            <main className="flex-1">
                {/* Hero Section */}
                <Hero/>

                {/* Features Section */}
                <Features/>

                {/* How It Works Section */}
                <HowItWorks/>

                {/* Gallery Section */}
                <Gallery/>

                {/* Testimonials Section */}
                <Testimonials/>

                {/* App Download CTA Section */}
                <AppDownloadCTA/>

                {/* Final CTA Section */}
                <FinaleCTA/>
            </main>
        </div>
    );
}