import Image from "next/image";
import {Quote} from "lucide-react";

type TestimonialCardprops = {
    review: string;
    artists: string;
    profession: string;
    profilePhotoUrl: string;
};

export function TestimonialCard({testimonial}: { testimonial: TestimonialCardprops }) {
    return (<div
        className="bg-white rounded-xl shadow-md shadow-zinc-100/80 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 p-6 h-full flex flex-col">
        <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                        src={testimonial.profilePhotoUrl}
                        alt={testimonial.artists}
                        width={48}
                        height={48}
                        className="object-cover"
                    />
                </div>
                <div>
                    <p className="font-medium text-zinc-900">{testimonial.artists}</p>
                    <p className="text-sm text-orange-600">{testimonial.profession}</p>
                </div>
            </div>
            <div className="bg-orange-500/10 rounded-full p-1.5">
                <Quote className="w-4 h-4 text-orange-500"/>
            </div>
        </div>

        <div className="mb-4 flex-1">
            <p className="text-zinc-700">{testimonial.review}</p>
        </div>

        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                     fill="#E67E22" stroke="none">
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>))}
        </div>
    </div>);
}