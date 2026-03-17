import { motion } from 'framer-motion';
import { Terminal, Code2, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const TerminalWindow = () => {
  const [text, setText] = useState('');
  const fullText = `> Initializing Anshul Agent...
> Loading edge inference models... [OK]
> Quantizing GAN weights... [OK]
> Establishing local LLM connection... [OK]
> 
> System ready.
> Executing task: Build production-ready AI systems.`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="w-full max-w-lg rounded-xl overflow-hidden border border-white/20 bg-white/95 backdrop-blur-md shadow-2xl shadow-blue-900/50">
      <div className="flex items-center px-4 py-3 border-b border-slate-200/80 bg-slate-50/90">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-400 border border-emerald-500" />
        </div>
        <div className="mx-auto flex items-center gap-2 text-xs font-mono text-slate-500">
          <Terminal className="w-3 h-3" /> anshul-workspace — sh
        </div>
      </div>
      <div className="p-6 font-mono text-sm leading-relaxed text-slate-700 min-h-[300px]">
        {text.split('\n').map((line, i) => (
          <div key={i} className="mb-1 flex">
            {line.startsWith('>') ? (
               <span className="text-indigo-500 mr-2">➜</span>
            ) : null}
            <span className={line.includes('[OK]') ? 'text-slate-800' : 'text-slate-500'}>
              {line.replace('>', '').replace('[OK]', '')}
              {line.includes('[OK]') && <span className="text-emerald-500">[OK]</span>}
            </span>
          </div>
        ))}
        <span className="inline-block w-2 h-4 bg-slate-800 animate-blink mt-1" />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="w-full relative min-h-screen flex items-center pt-24 pb-20 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 animate-gradient-xy">
      
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:32px_32px] opacity-10"></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 font-mono text-xs text-blue-50 shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                STATUS: AVAILABLE FOR HIRE
             </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Anshul Subramanian.
            <span className="block text-blue-200 mt-2">AI Software Engineer.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            I build production-grade machine learning systems for mobile devices. Specializing in Edge AI, Generative Models, and Computer Vision pipelines. 4.5+ years of shipping at Samsung Research.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-700 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Code2 className="w-4 h-4" />
              View Projects
            </a>
            <a
              href="/Anshul_Subramanian_Resume(Website).pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500/30 border border-white/20 text-white rounded-lg font-medium hover:bg-indigo-500/50 transition-colors shadow-sm backdrop-blur-sm"
              target="_blank"
              rel="noreferrer"
            >
              <Download className="w-4 h-4" />
              Resume PDF
            </a>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="flex flex-col gap-4 w-full"
          >
             <p className="text-xs font-mono text-blue-200 uppercase tracking-widest">Tech Stack</p>
             <div className="flex gap-3 font-mono text-xs text-white">
               <span className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-md shadow-sm backdrop-blur-sm">PyTorch</span>
               <span className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-md shadow-sm backdrop-blur-sm">TensorFlow Lite</span>
               <span className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-md shadow-sm backdrop-blur-sm">Android NDK</span>
               <span className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-md shadow-sm backdrop-blur-sm">C++ / Python</span>
             </div>
          </motion.div>

        </div>

        {/* Right Content - Terminal Window */}
        <motion.div 
          className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <TerminalWindow />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
