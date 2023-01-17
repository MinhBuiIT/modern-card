import React from 'react';
import { footerLinks, socialMedia } from '../constants';
import { logo } from '../assets';
import styles from '../style';
export const Footer = () => {
  return (
    <footer className="pt-44 pb-4">
      <div className="flex items-start sm:flex-row flex-col justify-around pb-14 border-b-2 border-dimWhite">
        <div className="sm:basis-2/5 basis-full flex flex-col gap-8 mr-8">
          <img src={logo} alt="Logo" className="w-[200px]" />
          <p className={`${styles.paragraph}`}>A new way to make the payments easy, reliable and secure.</p>
        </div>
        {footerLinks.map((footerLink) => {
          let link = footerLink.links.map((link) => {
            return (
              <li className="text-dimWhite text-base ">
                <a href={link.link} className="hover:text-white">
                  {link.name}
                </a>
              </li>
            );
          });
          return (
            <ul className="sm:basis-1/5 basis-full list-none flex flex-col gap-4 sm:mt-0 mt-10">
              <li className="text-white font-semibold text-lg">{footerLink.title}</li>
              {link}
            </ul>
          );
        })}
      </div>
      <div className="py-8 flex items-center justify-between w-full">
        <div className=" text-dimWhite text-left sm:text-base text-xs">
          <span className="sm:mr-3">
            Copyright &copy;
            <br className="sm:hidden block" />
            <br className="sm:hidden block" />
          </span>
          <span>2021 HooBank. All Rights Reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          {socialMedia.map((social) => {
            return (
              <a href={social.link} key={social.id} target="_blank">
                <img src={social.icon} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
