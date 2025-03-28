import Image from "next/image";

type TestimonialCardprops = {
    review: string;
    artists: string;
    profession: string;
    profilePhotoUrl: string;
};

export default function TestimonialCard({review, artists, profession, profilePhotoUrl}: TestimonialCardprops) {
    return (
        <div
            className="flex flex-col justify-between rounded-xl border border-black/10 bg-black/5 p-6 backdrop-blur-sm">
            <div className="mb-4">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                             fill="#E67E22" stroke="none">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                    ))}
                </div>
                <p className="mt-3 text-black/80">{review}</p>
            </div>
            <div className="flex items-center gap-4">
                <Image src={profilePhotoUrl} width={48} height={48} alt={artists} className="rounded-full"/>
                <div>
                    <p className="font-medium text-black">{artists}</p>
                    <p className="text-sm text-black/60">{profession}</p>
                </div>
            </div>
        </div>
    );
}