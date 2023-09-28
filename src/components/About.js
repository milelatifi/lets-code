import '../App.css';

const AboutPage = () => {
  return (
    <div className="about flex flex-col items-center justify-center h-screen mt-5">
      <div className=" mb-0 mt-10">
        <h1 className="about-title  mb-0 mt-11">About LetsCode</h1>
      </div>
      <div className="flex-grow flex items-center">
        <div className="border-black rounded-lg overflow-hidden flex-grow px-4 mt-10">
          <div className=" bg-neutral-800 rounded-lg">
            <div className="flex flex-col items-center">
              <p className="about-text m-6 mb-0">
                Welcome to LetsCode, the ultimate platform for developers to
                showcase their coding powers and find inspiration in diverse
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
