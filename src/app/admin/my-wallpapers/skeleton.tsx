export default function WallpaperSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 rounded-lg">
            {Array.from({length: 6}).map((_, index) => (
                <div
                    key={index}
                    className="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"
                >
                    <div className="h-[200px] w-full bg-gray-300 dark:bg-gray-600"/>
                    <div className="p-4">
                        <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 mb-2"/>
                        <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 mb-2"/>
                        <div className="h-4 w-full bg-gray-300 dark:bg-gray-600"/>
                    </div>
                </div>
            ))}
        </div>
    );
}