type SectionHeaderProps = {
    sectionName: string;
    title: string;
    description: string;
};

export default function SectionHeader({sectionName, title, description}: SectionHeaderProps) {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div
                className="inline-block rounded-full bg-black/10 px-4 py-1.5 text-sm font-medium text-black backdrop-blur-sm">{sectionName}</div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl/tight text-black">{title}</h2>
            <p className="max-w-[800px] text-black/70 md:text-xl/relaxed">{description}</p>
        </div>
    );
}