// next link
import Link from 'next/link';

// icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
} from 'react-icons/ri';
import { FaEnvelope } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <Link
        href={'https://www.facebook.com/michalis.merkouris'}
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={'https://www.instagram.com/michalis.merkouris/'}
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={'https://www.linkedin.com/in/michalis-merkouris/'}
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      {/* <a
        href="mailto:mimerkou@gmail.com"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <FaEnvelope />
      </a> */}
    </div>
  );
};

export default Socials;
