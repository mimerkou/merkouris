// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';
import { RiAdvertisementLine } from 'react-icons/ri';

// data
const skillsData = [
  {
    icon: <RxCrop />,
    title: 'Digital Strategy',
    description:
      'Strategies that maximize the capabilities of new or existing channels.',
  },
  {
    icon: <RxDesktop />,
    title: 'Social Media',
    description:
      'Social presence that helps your business grow brand awareness and convert followers.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Copywriting',
    description:
      'Effective sales copy that mobilizes your community to take action.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description:
      'Establish a strong online presence and climb high in organic results.',
  },
  {
    icon: <RiAdvertisementLine />,
    title: 'Advertising',
    description:
      'Pay Per Click (PPC) to increase traffic to your site quickly and effectively.',
  },
  // {
  //   icon: <RxReader />,
  //   title: 'Content',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  // },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper';

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]" // initial: 240/340
    >
      {skillsData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title and desc */}
              <div className="mb-8">
                <h3 className="mb-2 text-lg">{item.title}</h3>
                <p className="max-w-[450px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              {/* <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div> */}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
