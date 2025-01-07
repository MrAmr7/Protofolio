
import photo from '../assets/K.jpg'
const AboutMe = () => {
  return (
    <main id='About Me' className="h-[100vh] w-[100vw] bg-black pt-[8rem] z-0 flex justify-center items-center" >
        
            <div className="w-[40%] my-auto mx-6">
              <h2 className="text-4xl font-bold  mp-4 text-purple-950" > About Me</h2>
              <p className="text-2xl font-serif  text-white">  Eng- Amr<br></br>
              Full-Stack Web Developer  Problem Solver

 developer, I create visually stunning and highly functional websites with an emphasis on user experience and performance. I have hands-on experience with Figma,HTML, CSS,TailwindCss and JavaScript, as well as modern JavaScript frameworks like React.

I believe in writing clean, maintainable code and collaborating effectively with cross-functional teams. With a keen eye for design, I work closely with UI/UX designers to ensure that applications are both beautiful and easy to use. I am also passionate about optimizing performance and accessibility to ensure that every user has the best possible experience.
           </p>
            </div>

            <img className='mx-auto md:py-0 rounded-3xl ' src={photo} width={700} height={700} />

          
    </main>

  )
}

export default AboutMe