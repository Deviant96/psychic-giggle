import { useState } from "react";

interface Slide {
  imageSrc: string;
  title: string;
  meta: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const { imageSrc, title, meta, description, buttonText, onButtonClick } =
    slides[currentSlide];

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 flex items-center">
        {/* Overlay */}
        <div className="relative flex justify-between items-center w-full h-full mx-auto">
          {/* Content */}
          <div className="w-3/5 text-white p-20 bg-blue-fade-in-right h-full z-10 flex flex-col justify-center pe-40">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-sm mb-4">{meta}</p>
            <p className="text-base mb-4">{description}</p>
            <button
              onClick={onButtonClick}
              className="px-4 py-2 bg-blue-800 hover:bg-blue-600 text-white font-semibold rounded"
            >
              {buttonText}
            </button>
          </div>

          {/* Image */}
          <div className="w-3/5 absolute right-0 z-0">
            <img
              src={imageSrc}
              alt={title}
              className="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Nav */}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-800 hover:bg-blue-600 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-800 hover:bg-blue-600 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;
