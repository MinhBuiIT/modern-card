import React from 'react';
import { stats } from '../constants';
import styles from '../style';
export const Stats = () => {
  return (
    <div className={`flex items-center justify-center sm:my-20 my-12 flex-wrap sm:gap-0 gap-2`}>
      {stats.map((stat, index) => {
        let line = <span className="font-normal text-gray-600 text-center">|</span>;
        if (index === stats.length - 1) line = null;
        return (
          <div className="flex basis-1/3 flex-1 items-center justify-around md:mt-0 mt-7" key={stat.id}>
            <div className="flex items-center">
              <h4 className="sm:text-[40px] text-[28px] text-white font-semibold font-poppins sm:leading-[53px] leading-[40px]">
                {stat.value}
              </h4>
              <p className="sm:text-[18px] text-[15px] text-gradient font-normal font-poppins sm:leading-[30px] leading-[20px] uppercase ml-3">
                {stat.title}
              </p>
            </div>
            {line}
          </div>
        );
      })}
    </div>
  );
};
