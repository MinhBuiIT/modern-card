import React from 'react';
import styles, { layout } from '../style';
import { apple, google, bill } from '../assets';
export const Billing = () => {
  return (
    <section id="billing" className={`${layout.sectionReverse} my-[50px] relative`}>
      <div className="flex-1 md:ml-5 ml-0">
        <img src={bill} alt="billing-card" className="w-full object-contain md:mt-0 mt-16" />
      </div>
      <div className="absolute top-32 white__gradient left-[-150px] w-[25%] h-[25%]"></div>
      <div className="flex flex-col items-start justify-center flex-1">
        <h2 className={`${styles.heading2}`}>
          Easily control your
          <br className="sm:block hidden" /> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[500px]`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus
          aliporttitor integer platea placerat.
        </p>
      </div>
    </section>
  );
};
