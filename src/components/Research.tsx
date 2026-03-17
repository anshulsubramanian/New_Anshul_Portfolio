import { motion } from 'framer-motion';

const patents = [
  {
    title: 'Method and System for Processing Images of an Under Display Camera',
    status: 'Patent Application',
    year: '2022',
  },
  {
    title: 'Method and System for Converting Images from Low Focal Length to High Focal Length',
    status: 'Patent Application',
    year: '2024',
  }
];

const education = [
  {
     degree: 'B.Tech, Computer Science',
     institution: 'SRM Institute of Science and Technology',
     gpa: 'GPA: 91.25%',
     period: '2017 - 2021'
  }
];

const certifications = [
  { title: 'Applied Deep Learning for Computer Vision', issuer: 'IIT Ropar', year: '2024' },
  { title: 'Introduction to Generative AI', issuer: 'Google', year: '2023' }
];

const Research = () => {
  return (
    <section id="research" className="w-full bg-white border-t border-slate-200">
      <div className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-mono tracking-tight text-slate-900 uppercase">
            [03] \n Credentials
          </h2>
        </motion.div>

        <div className="light-card grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 overflow-hidden shadow-sm">
          
          {/* Patents Column */}
          <div className="p-8 lg:p-10">
            <h2 className="text-sm font-mono tracking-widest text-indigo-600 mb-8">
              PATENTS
            </h2>

            <div className="flex flex-col">
              {patents.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group border-l-2 border-slate-200 hover:border-indigo-400 pl-6 relative pb-8 last:pb-0 transition-colors"
                >
                  <div className="absolute w-3 h-3 rounded-full bg-white border-2 border-slate-300 group-hover:border-indigo-500 -left-[7px] top-1 transition-colors" />
                  <div className="flex justify-between items-baseline mb-3 gap-4">
                    <span className="text-[10px] font-mono font-medium tracking-widest uppercase text-slate-500 bg-slate-50 border border-slate-200 px-2 py-1 rounded">
                      {item.status}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{item.year}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Education Column */}
          <div className="p-8 lg:p-10">
            <h2 className="text-sm font-mono tracking-widest text-indigo-600 mb-8">
              EDUCATION
            </h2>

            <div className="flex flex-col">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="group border-l-2 border-slate-200 hover:border-indigo-400 pl-6 relative pb-8 last:pb-0 transition-colors"
                >
                  <div className="absolute w-3 h-3 rounded-full bg-white border-2 border-slate-300 group-hover:border-indigo-500 -left-[7px] top-1 transition-colors" />
                  <div className="flex justify-between items-baseline mb-3 gap-4">
                    <span className="text-[10px] font-mono font-medium tracking-widest uppercase text-slate-500 bg-slate-50 border border-slate-200 px-2 py-1 rounded">
                      {item.gpa}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{item.period}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-indigo-600 transition-colors mb-2">
                    {item.institution}
                  </h3>
                  <p className="text-slate-500 text-sm">{item.degree}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="p-8 lg:p-10">
             <h2 className="text-sm font-mono tracking-widest text-indigo-600 mb-8">
              CERTIFICATIONS
            </h2>

            <div className="flex flex-col">
               {certifications.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                   className="group border-l-2 border-slate-200 hover:border-indigo-400 pl-6 relative pb-8 last:pb-0 flex flex-col items-start gap-4 transition-colors"
                >
                  <div className="absolute w-3 h-3 rounded-full bg-white border-2 border-slate-300 group-hover:border-indigo-500 -left-[7px] top-1 transition-colors" />
                  <div className="flex w-full justify-between items-center mb-1">
                      <span className="text-[10px] font-mono font-medium tracking-widest uppercase text-slate-500 bg-slate-50 border border-slate-200 px-2 py-1 rounded">
                        {item.issuer}
                      </span>
                      <span className="text-xs font-mono text-slate-400 shrink-0">{item.year}</span>
                  </div>
                  
                  <h3 className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors pr-2">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Research;
