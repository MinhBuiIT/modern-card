import React from 'react';
import { quotes } from '../assets';
import { feedback } from '../constants';
import styles, { layout } from '../style';

const FeedBackItem = ({ content, name, title, img }) => {
  return (
    <div className={`flex py-10 px-8 flex-col justify-around rounded-[20px] testimonal mt-16`}>
      <div className="sm:min-h-[180px] min-h-[100px]">
        <div className="mb-6">
          <img src={quotes} alt="Quotes" />
        </div>
        <p className="text-white text-lg leading-9 font-normal mt-10">{content}</p>
      </div>

      <div className="flex items-center mt-7">
        <img src={img} alt="Person" className="w-[50px]" />
        <div className="ml-4">
          <h3 className="text-white text-xl">{name}</h3>
          <h5 className="text-dimWhite text-base">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export const Testimonal = () => {
  return (
    <section id="testimonal">
      <div className="flex items-center justify-around sm:flex-row flex-col">
        <h2 className={`${styles.heading2} max-w-[450px]`}>What people are saying about us</h2>
        <p className={`${styles.paragraph} max-w-[450px] sm:mt-0 mt-4`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {feedback.map((item) => {
          return <FeedBackItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
