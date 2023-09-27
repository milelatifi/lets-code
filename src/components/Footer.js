import React from 'react';

const Footer = () => {
  return (
    <div className="grid grid-cols-4 gap-4 bg-neutral-900 text-white pt-6 pb-4 ">
      <div className="col-span-1 ml-10 mt-0 text-start font-medium">
        <div className="text-start">
          <h3 className="text-3xl"> &#123; &#125;</h3>
        </div>
      </div>

      <div className="col-span-1 flex justify-center items-center text-md">
        <div className="container text-center">
          <p>Prishtine, Kosove</p>
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center text-sm">
        <div className="container text-center">
          <p>+383 44 000 000</p>
          <p>LetsCode@gmail.com</p>
        </div>
      </div>

      <div className="col-span-1 flex flex-col justify-end text-xs">
        <div className="container text-end">
          <p>&copy; 2023 LetsCode</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
