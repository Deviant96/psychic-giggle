
import { formatDateToYear } from "@/app/utils/formatDateToYear";
import { Film } from "@/app/utils/types";
import { BiPlayCircle } from "react-icons/bi";

interface SliderProps {
  content: Film;
}

const HeroSlide: React.FC<SliderProps> = ({ content }) => {

  const { title, opening_crawl, release_date } =
  content;
  const formattedDateToYear = formatDateToYear(release_date);

  return (
    <div className="relative w-full min-h-[70vh] overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 flex items-center">
        {/* Overlay */}
        <div className="relative flex justify-between items-center w-full h-full mx-auto">
          {/* Content */}
          <div className="w-3/5 text-white p-20 bg-blue-fade-in-right h-full z-10 flex flex-col justify-center pe-40">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-xl mb-4">{formattedDateToYear}</p>
            <p className="text-base mb-4">{opening_crawl}</p>
            <button
            //   onClick={onButtonClick}
              className="mt-8 px-4 py-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold rounded flex flex-row justify-center items-center gap-2 flex-shrink-0 w-fit"
            >
              {`Play`}
              <BiPlayCircle />
            </button>
          </div>

          {/* Image */}
          <div className="w-3/5 absolute right-0 z-0">
            <img
              src={`https://picsum.photos/200/300?random=${Math.random()}`}
              alt={`Movie poster`}
              className="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
