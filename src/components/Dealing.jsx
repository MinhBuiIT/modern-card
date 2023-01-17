import React from 'react';
import styles, { layout } from '../style';
import { card } from '../assets';
import Button from './Button';
export const Dealing = () => {
  return (
    <section id="dealing" className={`${layout.section}`}>
      <div className="flex-1 flex flex-col items-start justify-center md:mr-16 mr-0">
        <h2 className={`${styles.heading2}`}>Find a better card deal in few easy steps.</h2>
        <p className={`${styles.paragraph} mb-10`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet
          ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div className="flex-1 md:mt-0 mt-24">
        <img src={card} alt="Card" className="w-full object-contain" />
      </div>
    </section>
  );
};
