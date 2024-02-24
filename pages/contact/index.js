// components
import Circles from '../../components/Circles';
import Bulb from '../../components/Bulb';

// framer motion
import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center justify-center xl:flex-row gap-x-6 text-center">
        <div>
          <motion.h2
            className="h2"
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* Let's connect<span className="text-accent">.</span> */}
            Let's <span className="text-accent">connect</span>
          </motion.h2>
          <motion.p
            className="max-w-[750px] mx-auto mb-6 xl:mb-6 px-2 xl:px-0"
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Although I'm full-time occupied, I never miss a chance to work on
            captivating projects. If you are interested in e-business plan and
            marketing that truly works, it will be my pleasure to collaborate
            with you. You can contact me through social media links or email me
            at{' '}
            <a
              href="mailto:mimerkou@gmail.com"
              target="_blank"
              className="text-[#7993AE]"
            >
              mimerkou@gmail.com
            </a>
          </motion.p>
          {/* <motion.p
            className="max-w-[750px] mx-auto mb-6 xl:mb-6 px-2 xl:px-0"
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
            officiis?
          </motion.p> */}
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Contact;
