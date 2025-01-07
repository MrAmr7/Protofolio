import sono from "../assets/sono.jpg"
import { TypeAnimation } from "react-type-animation"
import { FaTwitter, FaWhatsapp, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
const Hero = () => {
  return (
    <div id="home"className="girt grid-cols-2 md:grid-cols-3 gap-8 max-w[1200px] h-[80vh] bg-black py-12">
      <div className="flex justify-center ">
        
        <div className="col-span-2 px-10 pt-10">
          <h1 className=" text-purple-950 text-5xl font-extrabold float-right">Eng-Amr
            <br />
            <TypeAnimation
              sequence={
                [ "Full-Stack Web Developer", 150,
                  "Webdesigner", 150,
                  "Consultant", 150,
                ]}
              wrapper="span"
              speed={40}
              repeat={Infinity} /></h1>

          <button

            className="px-6 py-10 float-right clear-both mt-3 bg-blue-700 text-purple-950 text-7xl font-semibold rounded-xl shadow-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 transition ease-in-out duration-300"
          > Eng-AMR

          </button>


          <p className="text-white text-2xl font-serif  my-10 p-10 clear-right"> <button className="text-3xl text-purple-900 border-purple-700 rounded-md">Hi There!</button> <br></br> I'm Eng-Amr, I'm a Full-Stack Web developer based Khartoum-Sudan. I specialize in creating dynamic, user-friendly web applications using React, TailwindCss,JavaScript,C++,Python .
            I love taking complex ideas and turning them into simple, intuitive designs that users love.

            I can building websites and applications that are not only functional but also aesthetically pleasing. I thrive on solving complex challenges and enjoy learning new technologies to keep my skills sharp.</p>

        </div>

        <img className="ml-auto rounded-xl" src={sono} width={500} height={500} />
      </div>
      <div className=" flex justify-center space-x-4 ">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-500" >
          <FaTwitter size={60} />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-green-800 hover:text-green-500">
          <FaWhatsapp size={60} />
        </a>
        <a href="https://github.com/MrAmr7" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white">
          <FaGithub size={60} />
        </a>
        <a href="https://www.instagram.com/mr_mo2ry/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
          <FaInstagram size={60} />
        </a>
        <a href="https://www.facebook.com/Sho2me4ever" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={60} />
        </a>
      </div>

    </div>
  )
}
export default Hero