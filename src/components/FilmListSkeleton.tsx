const FilmListSkeleton: React.FC = () => {
    return (
        <>
            {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                    <div className="h-64 sm:h-48 bg-gray-300 animate-pulse"></div>
                    <div className="p-4">
                        <div className="h-4 bg-gray-300 w-3/4 mb-2 animate-pulse"></div>
                        <div className="h-3 bg-gray-300 w-1/2 animate-pulse"></div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default FilmListSkeleton;