import React from 'react';
import blueLogo from "../../assets/images/Open_Your_Logo.png"

const Footer: React.FC = () => {
  return (
    <footer className="text-white p-4 ">
      <div className="container mx-auto mt-4">
        <img src={blueLogo.src} className="rounded-3xl w-80 mx-auto" />
        <p className="text-center text-gray-400 my-6">© 2024 Open Your Circle. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;