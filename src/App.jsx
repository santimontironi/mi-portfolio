import { Main } from "./pages/Main"
import { AboutMe } from "./pages/AboutMe"
import { Services } from "./pages/Services"
import { Skills } from "./pages/Skills"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {

  useEffect(() => {
    Aos.init({duration:1000})
  })

  return (
    <>
      <Main />
      <AboutMe />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App


