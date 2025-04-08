type StatItemProps = {
    value: string | number;
    label: string;
}

export function StatItem({value, label}: StatItemProps) {
    return (<div className="bg-white rounded-xl shadow-sm border border-zinc-100 p-6 text-center">
        <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent mb-2">
            {value}
        </p>
        <p className="text-sm text-zinc-600">{label}</p>
    </div>);
}