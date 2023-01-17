import React from 'react';
import styles from './style';
import { Billing, Bussiness, Client, Nav, Stats, CTA, Dealing, Footer, Hero, Testimonal } from './components';
export const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`bg-primary w-full ${styles.paddingX} ${styles.flexCenter}`}>
        <div className="max-w-[1280px] w-full">
          <Nav />
        </div>
      </div>
      <div className={`bg-primary w-full ${styles.paddingX} ${styles.flexStart}`}>
        <div className="max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>
      <div className={`bg-primary w-full ${styles.paddingX} ${styles.flexStart}`}>
        <div className="max-w-[1280px] w-full">
          <Stats />
          <Bussiness />
          <Billing />
          <Dealing />
          <Testimonal />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
