import React, { useState } from 'react';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';
export const Nav = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [active, setActive] = useState('Home');
  return (
    <div className="flex justify-between w-full items-center py-4">
      <div>
        <img src={logo} alt="Logo" className="w-[140px] h-[60px]" />
      </div>
      <ul className="list-none sm:flex hidden items-center flex-1 flex-shrink-0 justify-end relative">
        {navLinks.map((item, index) => {
          return (
            <li
              key={item.id}
              className={`${active === item.title ? 'text-white' : 'text-dimWhite'} font-poppins ${
                index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
              } hover:text-white relative after:absolute `}
              onClick={() => setActive(item.title)}
            >
              <a href={`#${item.title}`} className="text-base">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden justify-end flex-1 flex">
        <img
          src={!isMenu ? menu : close}
          alt="Menu"
          className="cursor-pointer w-[22px] h-[22px] object-contain justify-end"
          onClick={() => setIsMenu(!isMenu)}
        />
      </div>
      <div className="sm:hidden block z-20 absolute top-20 right-0  mr-5">
        <ul
          className={`list-none items-center bg-black-gradient p-5 rounded-xl sidebar ${!isMenu ? 'hidden' : 'block'}`}
        >
          {navLinks.map((item, index) => {
            return (
              <li
                key={item.id}
                className={`${active === item.title ? 'text-white' : 'text-dimWhite'} font-poppins ${
                  index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                }`}
                onClick={() => setActive(item.title)}
              >
                <a href={`#${item.title}`}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
