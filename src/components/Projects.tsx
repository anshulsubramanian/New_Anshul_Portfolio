import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Media Imports ---
import nanoAgentVideo from '../assets/NanoAgent/NanoAgent.mp4';
import focalLengthVideo from '../assets/Focal Length Translation/focal_length.mp4';

// Time-Weather GAN Images
import img1 from '../assets/GAN Based Time-Weather Translation/morning_2025_11_20T23_25_13_338889.jpg';
import img2 from '../assets/GAN Based Time-Weather Translation/noon_2025_11_20T23_25_13_338889.jpg';
import img3 from '../assets/GAN Based Time-Weather Translation/evening_2025_11_20T23_25_13_338889.jpg';
import img4 from '../assets/GAN Based Time-Weather Translation/night_2025_11_20T23_25_13_338889.jpg';
import img5 from '../assets/GAN Based Time-Weather Translation/rainy_morning_2025_11_20T23_25_13_338889(1).jpg';
import img6 from '../assets/GAN Based Time-Weather Translation/snowy_evening_2025_11_20T23_25_13_338889.jpg';

const ganImages = [img1, img2, img3, img4, img5, img6];

// --- Sub-Components ---
const ImageCarousel = ({ images, objectFit = "cover" }: { images: string[], objectFit?: "cover" | "contain" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500); // 2.5s per image
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full min-h-[250px] md:min-h-[400px] overflow-hidden rounded-xl bg-slate-100 border border-slate-200">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={`Translation State ${index}`}
          className={`absolute inset-0 w-full h-full object-${objectFit}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        />
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
         {images.map((_, index) => (
            <div 
               key={index} 
               className={`w-1.5 h-1.5 rounded-full transition-all ${index === currentIndex ? 'bg-white scale-125 shadow-sm' : 'bg-white/40'}`}
            />
         ))}
      </div>
    </div>
  );
};

const VideoPlayer = ({ src, type = "video/mp4", objectFit = "cover" }: { src: string, type?: string, objectFit?: "cover" | "contain" }) => {
  return (
    <div className="relative w-full h-[300px] md:h-full min-h-[300px] rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className={`absolute inset-0 w-full h-full object-${objectFit}`}
      >
        <source src={src} type={type} />
      </video>
    </div>
  );
};

// --- Data ---
const featuredProjects = [
  {
    title: 'On-Device AI Agent (NanoAgent)',
    period: 'Mar 2026 – Present',
    description: [
       'Designed and implemented an on-device LLM-powered AI agent capable of executing 30+ smartphone actions without cloud dependency; built modular tool-calling architecture with a lightweight local language model for private, real-time inference on mobile hardware.',
       'Implemented dual-inference pipeline using Gemini Nano via ML Kit Prompt API with fallback to local models for broader device compatibility; optimized end-to-end latency for on-device natural language understanding and task execution.'
    ],
    tags: ['LLMs', 'Agentic AI Development', 'Android', 'On-Device Inference'],
    link: '',
    mediaType: 'video',
    mediaSrc: nanoAgentVideo,
    videoType: 'video/mp4',
    objectFit: 'contain'
  },
  {
    title: 'GAN Based Time-Weather Translation',
    period: 'Mar 2025 – Jul 2025',
    description: [
       'Designed and trained a Conditional GAN image-to-image translation network to perform time-of-day and weather condition transformations on mobile photography (e.g. day-to-night, clear-to-rainy).',
       'Curated a 115k+ image-pair training dataset with diverse lighting and weather conditions; applied data augmentation and dataset engineering techniques to improve generalization across scenes.',
       'Optimized model for on-device inference via quantization and architecture pruning, achieving under 4 second latency on smartphone hardware with image quality comparable to diffusion models at approximately 10x smaller model footprint.'
    ],
    tags: ['Conditional GAN', 'Python', 'Dataset Engineering', 'Optimization'],
    link: '',
    mediaType: 'carousel',
    mediaSrc: ganImages,
    objectFit: 'contain'
  },
  {
    title: 'GAN Based Focal Length Translation',
    period: 'Jan 2024 – Nov 2024',
    description: [
       'Led end-to-end development of a GAN-based focal length translation system',
       'Designed hybrid architecture combining facial-region image translation (GAN) with CNN-based background inpainting and reconstruction',
       'Achieved PSNR above 30 dB and LPIPS below 0.1 at under 300 ms inference latency.',
       'Filed as patent application (2024).'
    ],
    tags: ['GAN', 'CNN', 'Computer Vision', 'Optimization'],
    link: '',
    mediaType: 'video',
    mediaSrc: focalLengthVideo,
    videoType: 'video/mp4'
  }
];

const pastProjects = [
  {
    title: 'Handwritten Mathematical Equations to Text using a Vision Transformer',
    period: 'Dec 2022 – Dec 2022',
    description: [
       'Built a Vision Transformer (ViT) encoder-decoder system for end-to-end recognition and parsing of mathematical expressions from images; constructed and augmented a custom 2,400+ sample dataset covering powers, fractions, and multi-operator expressions.'
    ],
    tags: ['Transformers', 'Python', 'Computer Vision'],
    link: ''
  },
  {
    title: 'Weapon Detection System',
    period: 'Jan 2021 – May 2021',
    association: 'SRM University',
    description: [
      'An object detection based application which uses a camera to classify and detect several common types of weapons used in real time.'
    ],
    tags: ['Python', 'Object Detection', 'Computer Vision'],
    link: 'https://github.com/anshulsubramanian/Weapon-Detection-System'
  },
  {
    title: 'Password Manager',
    period: 'Jun 2020 – Jun 2020',
    description: [
       'Users can create an account and store their passwords. They can perform operations like insert data, delete data and update data. The mini project was made using PHP, PhpMyAdmin and MAMP server.'
    ],
    tags: ['OOP', 'Python', 'PHP', 'SQL'],
    link: ''
  },
  {
    title: 'Age Group Predictor',
    period: 'Dec 2019 – Jan 2020',
    association: 'SRM University',
    description: [
       'Age group of the ideal customers can be predicted for a given board game using two main parameters( Game complexity and duration). It uses a simple KNN algorithm to predict. A computer application was made using Python and an android application using android studio.'
    ],
    tags: ['Android Development', 'Machine Learning', 'Python'],
    link: ''
  },
  {
    title: 'RSS Reader and Aggregator',
    period: 'Jun 2019 – Jul 2019',
    association: 'Bharat Heavy Electricals Limited',
    description: [
       'The project consisted of two parts, a website and an android application. I worked on the android application. The application parses through an XML file present on the website and extracts necessary information such as the news title, image, description, link etc. and displays it to the user in a custom view. The user can also choose the categories they wish to view.'
    ],
    tags: ['Android Development', 'OOP', 'XML'],
    link: 'https://github.com/anshulsubramanian/RSSApplication'
  },
  {
    title: 'Banking Application',
    period: 'Mar 2019 – May 2019',
    association: 'SRM University',
    description: [
       'The project was a group project. The application allows the bank manager to add new customers and update their details. The customers are provided with facilities like withdraw, deposit, view transactions etc. An OTP service is also used to authenticate transactions. This project was made using Java, Phpmyadmin and WAMP.'
    ],
    tags: ['OOP', 'Java', 'SQL'],
    link: 'https://github.com/anshulsubramanian/Banking_App'
  }
];

// --- Main Components ---
const FeaturedProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group light-card bg-white flex flex-col md:flex-row overflow-hidden w-full text-left"
    >
      {/* Media Side (Right in Desktop, Top in Mobile) */}
      <div className="w-full md:w-[40%] md:order-2 shrink-0 p-4 border-b md:border-b-0 md:border-l border-slate-100 flex items-center justify-center bg-slate-50">
         {project.mediaType === 'video' ? (
           <VideoPlayer src={project.mediaSrc} type={project.videoType} objectFit={project.objectFit} />
         ) : project.mediaType === 'carousel' ? (
           <ImageCarousel images={project.mediaSrc} objectFit={project.objectFit} />
         ) : null}
      </div>

      {/* Content Side (Left in Desktop) */}
      <div className="w-full md:w-[60%] md:order-1 flex flex-col p-8 sm:p-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 w-full border-b border-slate-100 pb-4 gap-4 sm:gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-900 leading-tight flex items-center gap-3">
              <span className="text-indigo-500 font-mono text-xl leading-none opacity-50">~</span> 
              {project.title}
            </h3>
            {project.association && (
              <p className="text-slate-500 text-sm mt-2 ml-7">{project.association}</p>
            )}
          </div>
          
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-xs font-mono text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full whitespace-nowrap">
              {project.period}
            </span>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 shrink-0 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-all active:scale-95 bg-slate-50 hover:bg-indigo-50 rounded-full border border-slate-200 hover:border-indigo-200"
                aria-label={`View ${project.title}`}
              >
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>
        
        <div className="flex flex-col gap-4 mb-10 flex-1">
          {project.description.map((desc: string, i: number) => (
             <p key={i} className="text-slate-600 leading-relaxed text-[0.95rem] flex gap-3">
                <span className="text-slate-300 font-mono shrink-0">-</span>
                {desc}
             </p>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-50 w-full">
          {project.tags.map((tag: string, i: number) => (
            <span 
              key={i} 
              className="text-[10px] font-mono tracking-widest uppercase bg-slate-50 border border-slate-200 text-slate-500 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const PastProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group light-card flex flex-col p-8 sm:p-10"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 w-full border-b border-slate-100 pb-4 gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-900 leading-tight flex items-center gap-3">
            <span className="text-indigo-500 font-mono text-xl leading-none opacity-50">~</span> 
            {project.title}
          </h3>
          {project.association && (
            <p className="text-slate-500 text-sm mt-2 ml-7">{project.association}</p>
          )}
        </div>
        
        <div className="flex items-center gap-4 shrink-0">
          <span className="text-xs font-mono text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full whitespace-nowrap">
            {project.period}
          </span>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 shrink-0 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-all active:scale-95 bg-slate-50 hover:bg-indigo-50 rounded-full border border-slate-200 hover:border-indigo-200"
              aria-label={`View ${project.title}`}
            >
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
      
      <div className="flex flex-col gap-4 mb-10 flex-1">
        {project.description.map((desc: string, i: number) => (
           <p key={i} className="text-slate-600 leading-relaxed text-[0.95rem] flex gap-3">
              <span className="text-slate-300 font-mono shrink-0">-</span>
              {desc}
           </p>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-50 w-full">
        {project.tags.map((tag: string, i: number) => (
          <span 
            key={i} 
            className="text-[10px] font-mono tracking-widest uppercase bg-slate-50 border border-slate-200 text-slate-500 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-indigo-50/40 border-t border-indigo-100/50">
      <div className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-2xl font-mono tracking-tight text-slate-900 mb-4 uppercase">
              [02] \n Projects
            </h2>
            <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
               A comprehensive catalog of my engineering work spanning production AI models, academic research, and early development projects.
            </p>
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        <div className="mb-24">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-sm font-mono tracking-widest text-indigo-600 mb-8 border-b border-indigo-200/50 pb-4 inline-block pr-8"
          >
            FEATURED \n AI & ML
          </motion.h3>
          <div className="flex flex-col gap-12">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Past Projects Section */}
        <div>
           <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-sm font-mono tracking-widest text-indigo-600 mb-8 border-b border-indigo-200/50 pb-4 inline-block pr-8"
          >
            PAST PROJECTS \n ACADEMIA & EARLY WORK
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastProjects.map((project, index) => (
              <PastProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
