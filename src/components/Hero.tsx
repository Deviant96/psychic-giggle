import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import HeroSlide from './HeroSlide';
import { Film } from '@/app/utils/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HeroSkeleton from './HeroSkeleton';

interface SliderProps {
    slides: Film[];
}

const Hero: React.FC<SliderProps> = ({ slides }) => {
  console.log(slides)
  return (
    <>
    {slides.length < 1 ?
    (
      <HeroSkeleton />
    ) : (
      <Swiper
      slidesPerView={1}
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      navigation={true}
      loop={true}
      autoplay={true}
    >
        {slides.map((film: Film) => (
            <SwiperSlide><HeroSlide content={film} /></SwiperSlide>
        ))}
    </Swiper>
    )}
    </>
    
  );
};

export default Hero;