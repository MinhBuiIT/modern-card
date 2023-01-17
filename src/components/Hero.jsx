import React from 'react';
import styles from '../style';
import { discount, robot } from '../assets';
import { GetStarted } from '../components';
export const Hero = () => {
  return (
    <section className={`${styles.flexStart} flex-col md:flex-row w-full items-center`}>
      <div className={`${styles.flexStart} flex-1 flex-col`}>
        <div
          className={`w-full py-1 px-4 rounded-lg ${styles.flexCenter} flex-row bg-discount-gradient mb-8 max-w-[480px]`}
        >
          <img src={discount} alt="Discount" />
          <p className={`${styles.paragraph} uppercase ml-3`}>
            <span className="text-white">20%</span> Discount For <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className={`flex items-center justify-between w-full flex-row flex-1`}>
          <h1 className="headingHero">
            The Next <br className="sm:block hidden" />
            <p className="text-gradient">Generation </p>
          </h1>
          <div className={`${styles.flexCenter} hidden sm:flex`}>
            <GetStarted />
          </div>
        </div>
        <h1 className={`headingHero`}>Payment Method.</h1>
        <p className={`${styles.paragraph} mt-5 leading-9 max-w-[480px]`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine
          annual percentage rates, annual fees.
        </p>
      </div>

      <div className={`${styles.flexCenter} relative flex-1 mt-3 md:mt-0`}>
        <img src={robot} alt="Robot" className="w-[100%] h-[100%] object-cover z-[5]" />
        <div className="absolute w-[40%] h-[40%] pink__gradient top-0 z-[0] overflow-hidden" />
        <div className="absolute w-[60%] h-[60%] blue__gradient bottom-52 right-[20%] z-[1] overflow-hidden" />
        <div className="absolute w-[50%] h-[50%] white__gradient bottom-20 right-[20%] z-[0] overflow-hidden" />
      </div>
      <div className={`${styles.flexCenter} flex sm:hidden mx-auto animate-updown-infi`}>
        <GetStarted />
      </div>
    </section>
  );
};
