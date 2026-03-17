import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="w-full bg-slate-900 border-t border-slate-800">
      <div className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6"
            >
              Ready to <span className="text-indigo-400">deploy</span> to your team.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-slate-400 mb-10 leading-relaxed font-mono text-sm max-w-md"
            >
              &gt; System Status: Online. Currently exploring new engineering opportunities. Let's build something incredible.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="mailto:anshulsubramanianapplications@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
                Initialize Contact
              </a>
            </motion.div>
          </div>

          <div className="flex flex-col gap-8 md:min-w-[200px]">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">/socials</h3>
              <ul className="flex flex-col gap-3 font-mono text-sm">
                <li>
                  <a href="https://www.linkedin.com/in/anshul-subramanian" target="_blank" rel="noreferrer" className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors border-b border-slate-700/50 pb-2">
                    LinkedIn
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/anshulsubramanian" target="_blank" rel="noreferrer" className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors border-b border-slate-700/50 pb-2">
                    GitHub
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
                <li>
                  <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noreferrer" className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors border-b border-slate-700/50 pb-2">
                    Naukri
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-slate-800 flex flex-col justify-center items-center gap-4 text-xs font-mono text-slate-500">
          <p>Copyright © 2026 Anshul Subramanian.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
