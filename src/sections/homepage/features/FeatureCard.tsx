import {motion} from "framer-motion";

type FeatureItemProps = {
    feature: {
        title: string;
        description: string;
        Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        iconBgColor: string;
        iconColor: string;
    };
    index: number;
    isInView: boolean;
}

// New feature item component with modern design
export function FeatureItem({feature, index, isInView}: FeatureItemProps) {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
            transition={{duration: 0.5, delay: 0.1 * index}}
            className="flex gap-6 group"
        >
            <div
                className={`flex-shrink-0 p-4 rounded-2xl ${feature.iconBgColor} group-hover:scale-110 transition-transform duration-300`}>
                <feature.Icon className={`w-7 h-7 ${feature.iconColor}`}/>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                </h3>
                <p className="text-zinc-600">
                    {feature.description}
                </p>
            </div>
        </motion.div>
    );
}