import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';
export const GetStarted = () => {
  return (
    <div className={`w-[130px] h-[130px] ${styles.flexCenter} bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>
      <div className={`w-full h-full bg-primary rounded-full ${styles.flexCenter} flex-col`}>
        <div className={`flex items-center flex-row justify-start text-gradient ${styles.paragraph} font-medium`}>
          <span className="mr-2">Get</span>
          <img src={arrowUp} alt="Get Started" />
        </div>
        <span className={`text-gradient ${styles.paragraph} font-medium`}>Started</span>
      </div>
    </div>
  );
};
