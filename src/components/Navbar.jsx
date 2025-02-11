import foto from "../assets/Amr.jpg";
import { useState } from "react";
const Navbar = () => {
  const [toggle , setToggle] = useState("hidden");

  const toggleChange = ()=>{
    setToggle(!toggle);
  }
 
  return (
    <header className="h-auto w-full flex justify-center md:h-20 bg-gray-500 fixed">
      <nav className="bg-blue-800 w-5xl mx-auto  font-serif flex fixed top-0 left-0 w-full items-center justify-between h-[60xp] p-4 ">
        <img className="rounded-md" src={foto} width={40} height={5} />
        <ul className="space-x-10 hidden md:block">
          <a
            className="text-white text-2xl    hover:text-purple-950"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-white text-2xl    hover:text-purple-950"
            href="#About Me"
          >
            AboutMe
          </a>
          <a
            className="text-white text-2xl    hover:text-purple-950"
            href="#Skills"
          >
            Skills
          </a>
          <a
            className="text-white text-2xl    hover:text-purple-950"
            href="#Ex"
          >
            Ex
          </a>
          <a
            className="text-white text-2xl    hover:text-purple-950"
            href="#Projects"
          >
            Projects
          </a>
          <a
            className="text-white text-2xl hover:text-purple-950"
            href="#Contact"
          >
            Contact
          </a>


        </ul>

     
          {/* icon toggle */}
          <h1 onClick={toggleChange} className=" md:hidden text-white text-2xl">Toggle</h1>
      </nav>

      <div className={` flex w-full mt-20  py-4 justify-center items-center  md:hidden bg-blue-700 ${!toggle? "block" : "hidden"} `}>
         <div className="flex flex-col items-center w-full gap-y-3">
                 <a
          className="text-white text-2xl    hover:text-purple-950"
          href="#home"
        >
          Home
        </a>
        <a
          className="text-white text-2xl  hover:text-purple-950"
          href="#About Me"
        >
          AboutMe
        </a>
        <a
          className="text-white text-2xl    hover:text-purple-950"
          href="#Skills"
        >
          Skills
        </a>
        <a className="text-white text-2xl    hover:text-purple-950" href="#Ex">
          Ex
        </a>
        <a
          className="text-white text-2xl    hover:text-purple-950"
          href="#Projects"
        >
          Projects
        </a>
        <a
          className="text-white text-2xl    hover:text-purple-950"
          href="#Contact"
        >
          Contact
        </a>
         </div>
      </div>


    </header>
  );
};
export default Navbar;
