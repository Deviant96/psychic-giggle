
import { formatDateToYear } from "@/app/utils/formatDateToYear";
import { Film } from "@/app/utils/types";
import { BiPlayCircle, BiShare } from "react-icons/bi";

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
          <div className="absolute left-0 bottom-0 py-12 px-16 bg-m-hero-text-overlay
            md:static md:w-3/5 text-white md:p-20 md:bg-blue-fade-in-right md:h-full z-10 flex flex-col justify-center md:pe-40">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
            <p className="text-lg mb-4">{formattedDateToYear}</p>
            <p className="text-base mb-4 clamp-3">{opening_crawl}</p>
            <div className="flex flex-row gap-4">
              <button
              //   onClick={onButtonClick}
                className="mt-8 px-4 py-2 bg-[#ffb400] text-black hover:bg-blue-600 font-semibold rounded flex flex-row justify-center items-center gap-2 flex-shrink-0 w-fit"
              >
                {`Play`}
                <BiPlayCircle />
              </button>
              <button
              //   onClick={onButtonClick}
                className="md:hidden mt-8 px-4 py-2 bg-transparent border border-[#ffb400] text-[#ffb400] hover:bg-blue-600 text-white font-semibold rounded flex flex-row justify-center items-center gap-2 flex-shrink-0 w-fit"
              >
                <BiShare />
                {`Share`}
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full h-full md:w-3/5 absolute left-0 md:right-0 z-0">
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
