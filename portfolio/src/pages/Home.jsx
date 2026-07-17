/**
 * Home page — composes all portfolio sections in order.
 * To add or remove sections, simply add/remove the import and component here.
 */
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Experience from '../components/experience/Experience';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Education from '../components/education/Education';
import Leadership from '../components/leadership/Leadership';
import Achievements from '../components/achievements/Achievements';
import Contact from '../components/contact/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Leadership />
      <Achievements />
      <Contact />
    </main>
  );
}
