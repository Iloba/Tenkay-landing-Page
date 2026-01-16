import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import CoreOffer from './components/CoreOffer';
import HowWeExecute from './components/HowWeExecute';
import WhyDifferent from './components/WhyDifferent';
import Results, { FinalCTA } from './components/Results';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeWorkWith />
        <CoreOffer />
        <HowWeExecute />
        <WhyDifferent />
        <Results />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
