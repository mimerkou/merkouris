// components
import Bulb from '../../../components/Bulb';
import Circles from '../../../components/Circles';

// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// framer motion
import { motion } from 'framer-motion';

import { fadeIn } from '../../../variants';

const WebDots = () => {
  return (
    <div className="h-full bg-primary/30 py-16 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* image */}
          <motion.div
            className="w-full xl:max-w-[40%]"
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Image
              src={'/thumb1.jpg'}
              width={450}
              height={250}
              alt="webdots"
              className="rounded-lg mx-auto lg:mx-0"
            />
          </motion.div>

          {/* text */}
          <div className="text-center flex xl:width-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              className="h2 mt-4 xl:mt-0"
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              WebDots<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              className="mb-4 mx-auto lg:mx-0 max-w-[600px]"
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              assumenda commodi corporis rem labore praesentium non animi.
              Nesciunt dolore illo quas, ex velit beatae voluptatibus.
            </motion.p>
            <motion.div
              className="mt-6"
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Link
                href={'/work'}
                className="border px-8 py-4 rounded-full hover:bg-white hover:text-[#16142D] transition-all"
              >
                Back to portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default WebDots;
