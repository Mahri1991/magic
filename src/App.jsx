import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/programs/Programs';
import Title from './Components/title/Title';
import About from './Components/about/About';
import Magic from './Components/magic/Magic';
import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='About We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallery' title='Magic Photos'/>
        <Magic/>
        <Title subTitle='Testimonials' title='What Clients Says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
