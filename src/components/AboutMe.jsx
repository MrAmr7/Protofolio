import photo from "../assets/Amr.png";

const AboutMe = () => {
  return (
    <main
      id="About Me"
      className="h-auto md:h-[100vh] w-full bg-black pt-[8rem] z-0 flex justify-center items-center"
    >
      <div className="w-full h-auto md:w-[90%] mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-[70%] my-auto p-2 mx-2">
          <h2 className="text-4xl font-bold mb-4 text-purple-950">About Me</h2>
          <p className="text-lg md:text-3xl font-serif text-white">
            <strong>Tech Stack & Skills:</strong> <br />
            <strong>Frontend:</strong> React, Tailwind CSS, JavaScript (ES6+), HTML, CSS. <br />
            <strong>Backend:</strong> Python, JavaScript (ES6+), Node.js, Express.js, APIs. <br />
            <strong>Database:</strong> MongoDB, MySQL. <br />
            <strong>Tools & DevOps:</strong> Git, GitHub, Docker, CI/CD, Vercel. <br />
            <strong>Other Skills:</strong> Web Performance Optimization, Authentication (JWT, OAuth), Testing (Jest, Cypress). <br />
            <strong>What I Do:</strong> <br />
            - Develop full-stack applications that prioritize performance and usability. <br />
            - Implement secure, scalable, and well-structured backend architectures. <br />
            - Craft interactive and visually appealing UI/UX designs. <br />
            - Integrate third-party APIs and services for enhanced functionality. <br />
            - Continuously learn and adapt to new technologies to stay ahead. <br />
            <strong>My Approach:</strong> <br />
            I believe in clean, maintainable code and a user-first mindset. Every project I build is optimized for speed, accessibility, and scalability. Collaboration, problem-solving, and continuous improvement drive my development process.
          </p>
        </div>
        <img
          className="mx-auto md:py-0 rounded-3xl w-full h-[400px] md:w-[30%] md:h-auto"
          src={photo}
          alt="My Profile"
        />
      </div>
    </main>
  );
};

export default AboutMe;
