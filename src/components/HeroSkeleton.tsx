const HeroSkeleton: React.FC = () => {
    return (
      <section className="h-[70vh] bg-gray-200 flex items-center justify-center">
        <div className="p-6 max-w-sm w-full bg-white shadow-lg rounded-lg animate-pulse">
          <div className="flex space-x-4">
            <div className="rounded-full bg-gray-300 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSkeleton;