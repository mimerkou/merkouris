// next image
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={'/avatar-mike.png'}
        width={537}
        height={478}
        alt="Michalis Merkouris Avatar"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
