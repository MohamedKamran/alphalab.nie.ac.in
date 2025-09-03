import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Partners } from './components/Partners';
import { Facilities } from './components/Facilities';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Events } from './components/Events';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Announcements } from './components/Announcements';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-blue-200 selection:text-blue-900">
      <Header />
      <main className="relative">
        <Hero />
        <Announcements />
        <About />
        <Partners />
        <Facilities />
        <Projects />
        <Team />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;