import React from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import Link from 'next/link';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const About = () => {
  // const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-20 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        className="hidden xl:flex absolute bottom-0 -left-[320px]"
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center justify-center xl:flex-row gap-x-6 text-center">
        <div>
          <motion.h2
            className="h2"
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* About me<span className="text-accent">.</span> */}
            About <span className="text-accent">me</span>
          </motion.h2>
          <motion.p
            className="max-w-[750px] mx-auto mb-6 xl:mb-6 px-2 xl:px-0"
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Hello, I'm Michalis, a digital marketing consultant and copywriter,
            based in Athens. I work for a creative digital agency called{' '}
            <a
              href="https://webdots.gr/"
              target="_blank"
              className="text-[#7993AE]"
            >
              WebDots
            </a>
            , as well as freelancing and partnering with agencies. I create
            engaging content and empower companies and individuals with digital
            strategies.
          </motion.p>
          <motion.p
            className="max-w-[750px] mx-auto mb-6 xl:mb-6 px-2 xl:px-0"
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Feel free to have a look at my portfolio and don't hesitate to
            contact me regarding your digital presence or if you just want to
            get social!
          </motion.p>
          <motion.div
            className="mt-8 xl:mt-16"
            variants={fadeIn('down', 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Link
              href={'/contact'}
              className="border px-8 py-4 rounded-full hover:bg-white hover:text-[#16142D] transition-all"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>

        {/*}
        <div>
          {/* <div>
            {aboutData.map((item, itemIndex) => {
              return <div key={itemIndex}>{item.title}</div>;
            })}
          </div> *
          <div>Certificate1</div>
          <div>Certificate2</div>
        </div>
        */}
      </div>
    </div>
  );
};

export default About;
