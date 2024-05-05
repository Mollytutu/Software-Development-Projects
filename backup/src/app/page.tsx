import React from 'react';
import Header from '../components/Header/Header'; 
import SpotLight from '~/components/SpotLight';
import Footer from '~/components/footer/footer';



const HomePage: React.FC = () => {
  return (
    <div >
      <Header/>
      <SpotLight />
      <div className="container mx-auto">
      <Footer />
        
      </div>
    </div>
  );
};


export default HomePage;