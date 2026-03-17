import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'AI Engineer',
    company: 'Samsung R&D Institute',
    location: 'Noida',
    period: 'Dec 2021 - Present',
    categories: [
      {
         title: 'Generative AI and Computer Vision',
         highlights: [
            'Designed and deployed a Conditional GAN image-to-image translation network for mobile photography; curated a 115k+ image-pair training dataset and optimized model for on-device inference (under 4 seconds) via quantization and architecture pruning, achieving image quality comparable to diffusion models at approximately 10x smaller model footprint.',
            'Led end-to-end development of a GAN-based focal length translation system; designed hybrid architecture combining facial-region image translation (GAN) with CNN-based background inpainting and reconstruction; achieved PSNR above 30 dB and LPIPS below 0.1 at under 300 ms inference latency. Filed as patent application (2024).',
            'Led a 5-engineer team to build a real-time GAN-based lens distortion correction pipeline integrating multi-plane reprojection algorithms; applied model optimization and quantization to achieve LPIPS below 0.1 and sub-300 ms inference, enabling live viewfinder correction on mobile hardware.'
         ]
      },
      {
         title: 'Computational Photography',
         highlights: [
            'Developed a deep learning pipeline for long-exposure image synthesis from short video clips; combined optical flow estimation, motion-aware frame interpolation, and temporal aggregation to simulate realistic motion blur entirely on-device without cloud inference.',
            'Fine-tuned and deployed a mobile facial recognition model integrated into the camera ISP pipeline; applied transfer learning and on-device inference optimization for real-time performance within Samsung\'s flagship camera stack.'
         ]
      },
      {
         title: 'Platform and Architecture',
         highlights: [
            'Integrated production ML models (portrait segmentation, preview, capture) into Android camera framework; improved HDR frame alignment, semantic segmentation accuracy, and temporal consistency across frames.',
            'Designed a novel attention mechanism for Natural Bokeh Gradation neural network models; architected and trained GAN-based image style transfer systems currently deployed in production on Samsung devices.',
            'Built an internal Figma-to-Android-XML code generation tool using computer vision and layout parsing, eliminating manual UI implementation work for the mobile engineering team.'
         ]
      },
       {
         title: 'Product Impact',
         highlights: [
            'Presented AI camera features at six Samsung flagship device launch events (Galaxy S/Z series).',
            'Resolved 70+ camera application issues across performance, frame consistency, and stability, directly improving shipped product quality.'
         ]
      }
    ]
  },
  {
    role: 'Software Development Engineer',
    company: 'Incedo Inc.',
    location: 'Gurgaon',
    period: 'Jul 2021 - Nov 2021',
    categories: [
       {
          title: 'Automation & Backend',
          highlights: [
             'Built Python/SQL automation pipelines for enterprise clients, cutting a daily data extraction and reporting workflow from 2 hours to under 2 minutes (98% reduction).'
          ]
       }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-white border-t border-slate-200">
      <div className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
        
        <div className="lg:w-1/4 shrink-0 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-mono tracking-tight text-slate-900 sticky top-32 uppercase"
          >
            [01] \n Experience
          </motion.h2>
        </div>

        <div className="lg:w-3/4 flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="light-card p-8 sm:p-10"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-8 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {exp.company}
                  </h3>
                  <div className="text-slate-500 font-mono text-sm mt-2">
                    <span className="text-indigo-600 font-medium">{exp.role}</span> <span className="text-slate-300 font-normal mx-2">|</span> {exp.location}
                  </div>
                </div>
                <span className="text-xs font-mono mt-4 sm:mt-0 text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              
              <div className="flex flex-col gap-8">
                 {exp.categories.map((cat, catIdx) => (
                    <div key={catIdx}>
                       <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                          <span className="text-indigo-500">▹ </span>{cat.title}
                       </h4>
                       <ul className="space-y-4">
                         {cat.highlights.map((highlight, i) => (
                           <li key={i} className="flex gap-4 text-slate-600 leading-relaxed text-[0.95rem]">
                             <span className="mt-2 shrink-0 font-mono text-slate-300">-</span>
                             <span>{highlight}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                 ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
