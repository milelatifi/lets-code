import '../App.css';

const AboutPage = () => {
  // return (
  //   <div className="about">
  //     <div className="about flex items-center justify-center mt-10">
  //       <div className="px-10 mb-10">
  //         <h1 className="about-title text-lg font-bold mb-4 mt-4">
  //           About LetsCode
  //         </h1>
  //       </div>
  //       <div className="border-black rounded-lg overflow-hidden">
  //         <div className="bg-gradient-to-b from-black to-transparent rounded-lg">
  //           <div className="flex flex-col items-center">
  //             <p className="about-text">
  //               Welcome to LetsCode, the ultimate platform for developers to
  //               showcase their coding prowess and find inspiration in diverse
  //               coding approaches. Our website provides a vibrant community for
  //               programmers to share their codes, projects, and ideas, fostering
  //               an environment of collaboration and growth. Whether you're a
  //               seasoned developer or just starting on your coding journey,
  //               LetsCode offers a space to explore innovative coding techniques,
  //               learn from others, and spark creativity. Join us today and
  //               embark on a thrilling coding adventure, where the possibilities
  //               are limitless, and the code is the canvas for your imagination!
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="about flex flex-col items-center justify-center h-screen mt-5">
      <div className=" mb-0 mt-10">
        <h1 className="about-title  mb-0 mt-11">About LetsCode</h1>
      </div>
      <div className="flex-grow flex items-center">
        <div className="border-black rounded-lg overflow-hidden flex-grow px-2 mt-10">
          <div className=" bg-gradient-to-b from-neutral-800 to-transparent rounded-lg">
            <div className="flex flex-col items-center">
              <p className="about-text m-2">
                Welcome to LetsCode, the ultimate platform for developers to
                showcase their coding prowess and find inspiration in diverse
                coding approaches. Our website provides a vibrant community for
                programmers to share their codes, projects, and ideas, fostering
                an environment of collaboration and growth. Whether you're a
                seasoned developer or just starting on your coding journey,
                LetsCode offers a space to explore innovative coding techniques,
                learn from others, and spark creativity. Join us today and
                embark on a thrilling coding adventure, where the possibilities
                are limitless, and the code is the canvas for your imagination!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
