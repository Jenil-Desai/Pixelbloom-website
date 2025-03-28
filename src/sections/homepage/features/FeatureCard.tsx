import {LucideIcon} from "lucide-react";

type FeatureCardProps = {
    title: string;
    description: string;
    Icon: LucideIcon;
    iconBgColor: string;
    iconColor: string;
};

export default function FeatureCard({title, description, Icon, iconBgColor, iconColor}: FeatureCardProps) {
    return (
        <div
            className="flex flex-col items-start space-y-3 rounded-xl border border-black/10 bg-black/5 p-6 backdrop-blur-sm">
            <div className={`rounded-full p-3 ${iconBgColor}`}>
                <Icon className={`h-6 w-6 ${iconColor}`}/>
            </div>
            <h3 className="text-xl font-bold text-black">{title}</h3>
            <p className="text-black/70">{description}</p>
        </div>
    );
}