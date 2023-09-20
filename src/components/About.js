import '../App.css';

const AboutPage = () => {
  return (
    <div className="about">
      <div className="about flex items-center justify-center">
        <div className="border-black rounded-lg overflow-hidden p-10">
          <div className="bg-gradient-to-b from-black to-transparent p-10 rounded-lg">
            <div className="flex flex-col items-center">
              <h1 className="about-title text-lg font-bold mb-4 mt-4">
                About LetsCode
                
              </h1>
              <p className="about-text">
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
