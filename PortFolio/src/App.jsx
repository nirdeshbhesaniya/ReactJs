
import './App.css'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import ExperienceMain from './components/experienceSection/ExperienceMain'
import FooterMain from './components/footer/FooterMain'
import HeroMain from './components/heroSection/HeroMain'
import NavbarMain from './components/navbar/NavbarMain'
import ProjectsMain from './components/projectsSection/ProjectsMain'
import SkillsMain from './components/skillsSection/SkillsMain'


function App() {


  return (
    <>
      <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <AboutMeMain />
      <SkillsMain />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
    </>
  )
}

export default App
