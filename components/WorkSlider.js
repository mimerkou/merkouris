// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'WebDots',
          src: '/thumb1.jpg',
          path: '/work/webdots',
        },
        {
          title: 'Penzils',
          src: '/thumb2.jpg',
          path: '/work/penzils',
        },
      ],
    },
    {
      images: [
        {
          title: 'Project 3',
          src: '/thumb3.jpg',
          path: '/work/project3',
        },
        {
          title: 'Project 4',
          src: '/thumb4.jpg',
          path: '/work/project4',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';

// next Link
import Link from 'next/link';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[240px] sm:h-[290px]" // initial: 240/340, 280/480
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image
                        src={image.src}
                        width={500}
                        height={300}
                        alt="work"
                      />
                      {/* overlay/gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="flex items-center justify-center gap-x-2 absolute bottom-0 translate-y-full group-hover:-translate-y-10 xl:group-hover:-translate-y-20 text-[14px] tracking-[0.2em] transition-all duration-300">
                        <Link
                          href={image.path}
                          className="flex items-center justify-center gap-x-2"
                        >
                          <div>{image.title}</div>
                          <div>
                            <BsArrowRight />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
