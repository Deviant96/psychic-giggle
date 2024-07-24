import { Film } from "@/app/utils/types";
import Image from "next/image";

interface FilmItemProps {
  film: Film;
}

const FilmItem: React.FC<FilmItemProps> = ({ film }) => {
  return (
    <div className="min-h-[150px] md:min-h-[200px]">
      <div className="w-full relative h-full">
        <Image
          src={`https://picsum.photos/200/100?random=${Math.random()}`}
          alt={`Movie poster`}
          className="object-cover h-full w-full rounded-lg"
          width={300}
          height={150}
        />
        <div className="z-20 absolute bottom-0 left-0 ms-2 mb-2 md:-translate-y-2/4 md:ms-4 flex flex-col md:flex-row gap-2">
          <h2 className="text-lg md:text-xl font-bold order-2 md:order-1 text-white">
            {film.title}
          </h2>
          {film.episode_id === 2 && (
            <span className="bg-yellow-500 rounded px-2 py-1 text-sm text-black font-bold order-1 md:order-2 w-fit">
              {" "}
              Exclusive{" "}
            </span>
          )}
        </div>
        <div className="w-full h-full absolute top-0 left-0 bg-dark-fade-in-bottom"></div>
      </div>
    </div>
  );
};

export default FilmItem;
