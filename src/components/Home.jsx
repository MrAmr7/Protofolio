import Hero from "../Pages/Hero"
import AboutMe from "./AboutMe"
import  Projects  from "./Projects"
import Contact from "./Contact"

import Skills from "./Skills"
 const Home = () => {
  return (
  <main id="Home">
   <Hero />
<AboutMe />
<Skills />
<Projects />
<Contact />
  </main>
  )
}

export default Home