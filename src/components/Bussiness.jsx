import React from 'react';
import styles, { layout } from '../style';
import { features } from '../constants';
import Button from './Button';
import { star, shield, send } from '../assets';
export const Bussiness = () => {
  return (
    <section id="bussiness" className={`${layout.section} mt-16`}>
      <div className={`${styles.flexStart} flex-col flex-1`}>
        <h2 className={`${styles.heading2}`}>
          You do the bussiness,
          <br className="sm:block hidden" />
          we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} mt-4 mb-6 max-w-[480px]`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving
          money. But with hundreds of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className={`${styles.flexCenter} flex-col flex-1 ml-6 md:mt-0 mt-10`}>
        {features.map((feature, index) => {
          return (
            <div
              className={`flex items-center gap-5 ${
                index !== features.length - 1 && 'mb-4'
              }  px-4 py-6 w-full rounded-xl bussiness-box ss:flex-row flex-col`}
              key={feature.id}
            >
              <div className={`w-[60px] h-[60px] ${styles.flexCenter} bg-dimBlue rounded-[50%] flex-shrink-0`}>
                <img src={feature.icon} alt="Bussiness" />
              </div>
              <div className="text-white text-center ss:text-left">
                <h3 className="text-[20px] font-semibold mb-2">{feature.title}</h3>
                <p className="text-dimWhite text-[16px] leading-6">{feature.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
