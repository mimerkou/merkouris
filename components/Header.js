// next link
import Link from 'next/link';

// components
import Socials from './Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-3 py-2">
          {/* logo */}
          <Link href={'/'}>
            <h2 className="text-3xl text-center">
              <span className="font-semibold">michalis</span>{' '}
              <span className="font-extralight">merkouris</span>
              <span className="text-accent">.</span>
            </h2>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
