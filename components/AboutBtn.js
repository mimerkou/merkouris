// next image
// import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const AboutBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={'/about'}
        className="relative flex justify-center items-center group py-4 px-8 bg-accent text-white text-md rounded-full hover:bg-white hover:text-[#16142D] transition-all"
      >
        About me
        {/* <HiArrowRight className="text-xl ml-2 group-hover:translate-x-2 transition-all duration-300" /> */}
      </Link>
    </div>
  );
};

export default AboutBtn;
