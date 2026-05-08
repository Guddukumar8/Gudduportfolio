import { 
  Github, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink, 
  Code2, 
  BrainCircuit, 
  GraduationCap, 
  Briefcase, 
  Trophy,
  ChevronRight,
  Database,
  Terminal,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter text-white"
        >
          GUDDU<span className="text-blue-500">.</span>
        </motion.div>
        <div className="glass px-6 py-2 rounded-full hidden md:flex gap-8 text-sm font-medium">
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          href="mailto:gk912263@gmail.com"
          className="glass p-2 px-4 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
        >
          <Mail size={14} />
          Hire Me
        </motion.a>
      </div>
    </nav>
  );
};

const ProjectCard = ({ title, tech, description, icon: Icon }: any) => (
  <motion.div 
    variants={sectionVariants}
    className="bento-card group h-full flex flex-col justify-between"
  >
    <div>
      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
    </div>
    <div className="flex flex-wrap gap-2">
      {tech.map((t: string) => (
        <span key={t} className="text-[10px] uppercase tracking-wider font-bold glass px-2 py-1 rounded-md text-slate-500">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

const ExperienceItem = ({ role, company, period, description }: any) => (
  <motion.div variants={sectionVariants} className="relative pl-8 pb-12 border-l border-white/10 last:pb-0">
    <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1 block italic">{period}</span>
    <h3 className="text-lg font-semibold text-white mb-1">{role}</h3>
    <h4 className="text-slate-400 text-sm mb-3 flex items-center gap-2">
      <Briefcase size={14} className="text-slate-500" />
      {company}
    </h4>
    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Nav />
      
      {/* Hero Section */}
      <section id="about" className="pt-40 pb-20 overflow-hidden relative">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-semibold mb-6 text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Available for New Opportunities
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tighter">
              GUDDU<br />
              <span className="accent-text">KUMAR</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-snug mb-10 font-light">
              BTech CSE Student specializing in <span className="text-white font-medium">Machine Learning</span> & <span className="text-white font-medium">Python Development</span>.
              Passionate about building intelligent systems that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <a href="mailto:gk912263@gmail.com" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2 group shadow-xl shadow-white/5">
                Get in Touch
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-4">
                <a href="https://github.com/Guddukumar8" target="_blank" className="glass w-14 h-14 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Github size={20} />
                </a>
              </div>
              <div className="ml-0 md:ml-8 flex flex-col gap-1">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={14} />
                  Muzaffarpur, Bihar, India
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Phone size={14} />
                  +91 9122632526
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section (GATE) */}
      <section className="py-20 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="glass rounded-3xl p-8 border-l-4 border-l-blue-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <Trophy size={24} />
                </div>
                <h3 className="font-semibold text-white">GATE 2025</h3>
              </div>
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-white tracking-tight">360</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">CSE SCORE</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white tracking-tight">338</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">DA SCORE</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border-l-4 border-l-indigo-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
                  <GraduationCap size={24} />
                </div>
                <h3 className="font-semibold text-white">Academic Performance</h3>
              </div>
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-white tracking-tight">7.85</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">BTECH CGPA</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white tracking-tight">8.85</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">DIPLOMA CGPA</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border-l-4 border-l-emerald-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <Briefcase size={24} />
                </div>
                <h3 className="font-semibold text-white">Status</h3>
              </div>
              <p className="text-white font-medium mb-1 italic">Ongoing Apprentice</p>
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">GOVT. POLY. SHEOHAR</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-500 mb-4 block">Journey</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience &<br /><span className="text-slate-500 font-light italic">Career path</span></h2>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Hands-on internships and roles focusing on Quality Control, AI Prompt Engineering, and Python application development.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="max-w-xl">
                <ExperienceItem 
                  role="Virtual Internship"
                  company="VaultofCodes (AICTE Internship)"
                  period="4 Weeks"
                  description="Intensive focus on AI-Prompt Engineering and Python development workflows. Developed custom prompts and integrated them with Python scripts for automated tasks."
                />
                <ExperienceItem 
                  role="Quality Assurance"
                  company="FIEM Industries"
                  period="Apr - Aug 2025"
                  description="Focused on maintainance of quality standards and process optimizations within industrial workflows."
                />
                <ExperienceItem 
                  role="Ongoing Apprentice"
                  company="Govt. Poly. Sheohar"
                  period="Ongoing"
                  description="Gaining practical technical exposure and contributing to departmental projects through the apprenticeship program."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-indigo-500 mb-4 block">Work</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
            </div>
            <p className="text-slate-500 text-sm max-w-xs text-right">Building solutions with Machine Learning and modern Python frameworks.</p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div className="md:col-span-2">
              <ProjectCard 
                title="Movie Recommendation System"
                tech={['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit']}
                description="An intelligent system that analyzes user preferences and movie features to provide personalized recommendations. Leveraged Scikit-learn for similarity algorithms and Streamlit for a seamless web interface."
                icon={BrainCircuit}
              />
            </div>
            <div className="md:col-span-1">
              <ProjectCard 
                title="Crime Rate Prediction"
                tech={['Flask', 'Scikit-learn', 'Pandas', 'Jupyter']}
                description="ML-driven analysis system for predicting crime rates based on historical data. Features a Flask backend to serve predictions to a web frontend."
                icon={Database}
              />
            </div>
            <div className="md:col-span-1">
              <div className="bento-card h-full flex flex-col justify-center items-center text-center p-8 bg-blue-500/5 group hover:bg-blue-500/10 border-dashed">
                <Code2 size={40} className="text-blue-500/50 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-slate-400 mb-2">More on Github</h3>
                <a href="https://github.com/Guddukumar8" target="_blank" className="text-blue-400 text-sm flex items-center gap-1 hover:underline">
                  Visit projects archive <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-500 mb-4 block">Abilities</span>
              <h2 className="text-4xl font-bold">Tech Stack & Expertise</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Terminal size={14} /> 
                  Programming
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'C', 'Data Structures', 'Algorithms'].map((skill) => (
                    <span key={skill} className="glass px-4 py-2 rounded-xl text-sm font-medium hover:text-blue-400 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <BrainCircuit size={14} /> 
                  Intelligence & Data
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Machine Learning', 'DBMS', 'Pandas', 'NumPy', 'Scikit-learn'].map((skill) => (
                    <span key={skill} className="glass px-4 py-2 rounded-xl text-sm font-medium hover:text-indigo-400 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Code2 size={14} /> 
                  Development
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['HTML5', 'CSS3', 'Flask', 'Streamlit', 'Web Design'].map((skill) => (
                    <span key={skill} className="glass px-4 py-2 rounded-xl text-sm font-medium hover:text-emerald-400 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Cpu size={14} /> 
                  Tools & Misc
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Git', 'Jupyter', 'MS Office', 'Prompt Engineering'].map((skill) => (
                    <span key={skill} className="glass px-4 py-2 rounded-xl text-sm font-medium hover:text-slate-200 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              <GraduationCap className="text-blue-500" />
              Education History
            </h2>
            <div className="space-y-6">
              {[
                { 
                  school: "Rao Birender State Institute of Engineering & Technology", 
                  degree: "BTech - Computer Science Engineering", 
                  score: "7.85 CGPA", 
                  year: "2022 - 2025" 
                },
                { 
                  school: "Government Polytechnic Sheohar", 
                  degree: "Diploma in Engineering", 
                  score: "8.85 CGPA", 
                  year: "2018 - 2021" 
                },
                { 
                  school: "R.N.S Inter College, Muzaffarpur", 
                  degree: "12th Class - Science", 
                  score: "70%", 
                  year: "2016 - 2018" 
                }
              ].map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-3xl flex flex-col md:flex-row justify-between gap-4 group hover:border-blue-500/20"
                >
                  <div>
                    <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">{edu.school}</h3>
                    <p className="text-sm text-slate-400">{edu.degree}</p>
                  </div>
                  <div className="md:text-right flex flex-col justify-end">
                    <p className="text-white font-bold">{edu.score}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">{edu.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="glass rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-50" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-500 mb-6 block">Available for New Opportunities</span>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white tracking-tight">Let's work together.</h2>
              <p className="text-slate-400 text-lg mb-12 font-light">
                Currently open to software engineering internships, machine learning roles, and collaborative open-source projects.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="mailto:gk912263@gmail.com" className="bg-white text-black px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 text-lg shadow-2xl shadow-blue-500/10">
                  <Mail size={20} />
                  Email Me
                </a>
                <div className="flex gap-4">
                  <a href="https://github.com/Guddukumar8" target="_blank" className="glass w-16 h-16 rounded-full flex items-center justify-center hover:bg-white/10 transition-all text-white">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-slate-500 font-medium">
             © 2026 Guddu Kumar <span className="mx-2 opacity-30">|</span> Muzaffarpur, Bihar
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="https://github.com/Guddukumar8" className="hover:text-white transition-colors">Github</a>
            <a href="#about" className="hover:text-white transition-colors">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
