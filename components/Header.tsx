import { HiSearch } from 'react-icons/hi';
import { BsBellFill } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

import avatar from '../assets/avatar.jpg';
import { useEffect, useState } from 'react';
import useAuth from '../hook/useAuth';
const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { logOut } = useAuth();
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <header className={isScroll ? 'bg-[#141414]' : ''}>
      <div className="flex items-center space-x-2">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex space-x-2">
        <HiSearch className="h-6 w-6 hidden sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BsBellFill className="h-6 w-6" />
        {/* <Link href={'/account'}> */}
        <Image width={24} height={22} alt="" src={avatar} onClick={logOut} className="rounded" />

        {/* </Link> */}
      </div>
    </header>
  );
};

export default Header;
