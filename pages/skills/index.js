// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from 'react-icons/rx';
import { RiAdvertisementLine } from 'react-icons/ri';

// components
import ServicesSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';

const Skills = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:width-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              // className="h2 mt-16 xl:mt-6"
              className="h2 mt-2 xl:mt-8"
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {/* My skills<span className="text-accent">.</span> */}
              My <span className="text-accent">skills</span>
            </motion.h2>
            <motion.p
              className="mb-4 mx-auto lg:mx-0 max-w-[400px]"
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Integrated approach to the design, implementation and measurement
              of the effectiveness of digital plan.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            className="w-full xl:max-w-[65%]"
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ServicesSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Skills;
