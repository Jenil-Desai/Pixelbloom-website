import { Button } from "@/components/ui/button";

export default function FinaleCTA() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight text-black">Ready to Share Your Art?</h2>
            <p className="max-w-[600px] text-black/70 md:text-xl/relaxed">Join thousands of artists already showcasing their work on PixelBloom Studio.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-[#318BA9] to-[#E67E22] hover:from-[#2980B9] hover:to-[#D35400] text-white">
              Start Uploading Today
            </Button>
            <Button size="lg" variant="outline" className="border-black/20 text-black hover:bg-black/10 hover:text-black">
              Learn More
            </Button>
          </div>
          <p className="text-sm text-black/60">No subscription fees for artists. Get paid based on your popularity.</p>
        </div>
      </div>
    </section>
  );
}
