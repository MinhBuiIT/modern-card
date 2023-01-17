import React from 'react';
import { clients } from '../constants';
import styles from '../style';

export const Client = () => {
  return (
    <div className="grid md:grid-cols-4 xs:grid-cols-2 grid-cols-1 md:gap-5 gap-10 my-20">
      {clients.map((client) => {
        return (
          <div className="sm:w-[200px] w-[150px] flex justify-center items-end mx-auto">
            <img src={client.logo} alt="logo customer" className="w-full object-contain" />
          </div>
        );
      })}
    </div>
  );
};
