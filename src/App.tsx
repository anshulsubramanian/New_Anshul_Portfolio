import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';

function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-0 min-h-screen font-sans bg-white pb-0">
      
      {/* Navigation */}
      <nav className="fixed w-full h-16 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 lg:px-12 z-50 top-0 border-b border-slate-200 transition-all">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-lg font-medium tracking-tight cursor-pointer text-slate-900 flex items-center gap-2"
        >
          <div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center shadow-sm">
             <span className="text-white text-xs font-bold leading-none">A</span>
          </div>
          Anshul Subramanian
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button onClick={() => scrollTo('experience')} className="hover:text-indigo-600 transition-colors">Experience</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-indigo-600 transition-colors">Projects</button>
          <button onClick={() => scrollTo('research')} className="hover:text-indigo-600 transition-colors">Research</button>
          <button onClick={() => scrollTo('contact')} className="px-5 py-2 rounded-full border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all bg-white shadow-sm hover:shadow">
            Contact
          </button>
        </div>
      </nav>

      <main className="flex flex-col relative z-20">
        <Hero />
        <Experience />
        <Projects />
        <Research />
        <Contact />
      </main>
    </div>
  );
}

export default App;
