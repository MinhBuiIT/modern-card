import React from 'react';
import styles from '../style';
import Button from './Button';
export const CTA = () => {
  return (
    <section
      id="CTA"
      className="w-full md:py-12 py-8 sm:px-12 px-8 bg-black-gradient-2 flex items-center justify-around rounded-[20px] mt-28 sm:flex-row flex-col"
    >
      <div className="md:max-w-[60%] max-w-[100%] mb:mb-0 mb-10 sm:text-left text-center">
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} mt-5`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      <Button />
    </section>
  );
};
