import React, { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  BrainCircuit, 
  Database, 
  Terminal, 
  Briefcase, 
  GraduationCap,
  Award,
  ChevronRight,
  Globe,
  MessageSquare,
  Send,
  Sparkles,
  ArrowUpRight,
  Download
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [isSent, setIsSent] = useState(false);

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    // We'll let the form submit naturally to FormSubmit.co for the first-time activation
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "AI Image Analysis & Trip Planner",
      category: "ai",
      description: "An AI-based web app to analyze images, identify locations, and generate comprehensive trip plans with navigation support.",
      tags: ["AI", "React", "Node.js", "Maps API"],
      link: "https://aiimageanalyzer.vercel.app/",
      image: "https://picsum.photos/seed/ai-image/800/600"
    },
    {
      title: "OTT Fraud Detection System",
      category: "ai",
      description: "System designed to detect multiple-user access on a single account with 97% accuracy using advanced identification patterns.",
      tags: ["ML", "Python", "Security", "Data Analysis"],
      link: "https://fraud-detection-in-ott-platforms.vercel.app/",
      image: "https://picsum.photos/seed/fraud/800/600"
    }
  ];

  const filteredProjects = activeTab === "all" ? projects : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "border-b border-border/40 bg-background/80 backdrop-blur-md py-3" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
              A
            </div>
            <span className="text-xl font-display font-bold tracking-tight">AARUSHI.</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="/resume.pdf" download="Aarushi_Resume.pdf">
              <Button variant="outline" size="sm" className="hidden sm:flex border-primary/50 text-primary hover:bg-primary/10 rounded-full">
                <Download className="w-4 h-4 mr-2" /> Resume
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <section id="about" className="mb-40 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
                <Sparkles className="w-3 h-3" />
                AVAILABLE FOR OPPORTUNITIES
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
                <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tighter">
                  Architecting <br />
                  <span className="text-gradient">Intelligence.</span>
                </h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative shrink-0 hidden md:block"
                >
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                  <div className="relative z-10 w-32 h-32 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src="https://iili.io/BwUZh0J.md.jpg" 
                      alt="Aarushi Profile" 
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
              <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                I'm a B.Tech CSE student specializing in <span className="text-white font-medium">AI & Machine Learning</span>. 
                I build full-stack applications that leverage data to solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:opacity-90 rounded-full px-8 shadow-xl shadow-primary/20 group"
                  onClick={() => scrollToSection("projects")}
                >
                  Explore Work <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex items-center gap-4">
                  <a href="https://github.com/Aarushi0208" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:text-primary transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/aarushi0208/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-secondary/50 hover:text-secondary transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              {/* Background Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -z-10" />
              
              {/* Main Image Container */}
              <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img 
                  src="https://iili.io/BwUZh0J.md.jpg" 
                  alt="Aarushi Professional" 
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Stats Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-3xl border-white/20 z-20 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Terminal className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Aarushi</h3>
                      <p className="text-xs text-muted-foreground">AI & ML Specialist</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-primary"
                      />
                    </div>
                    <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                      <span>Cloud Proficiency</span>
                      <span className="text-primary">92%</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 p-4 glass-card rounded-2xl border-white/10 z-30 hidden md:block"
              >
                <BrainCircuit className="w-8 h-8 text-secondary" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -left-8 p-4 glass-card rounded-2xl border-white/10 z-30 hidden md:block"
              >
                <Code2 className="w-8 h-8 text-accent" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-40">
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-bold mb-6 tracking-tighter">Technical <span className="text-gradient">Arsenal.</span></h2>
                <p className="text-lg text-muted-foreground">A curated selection of technologies and frameworks I use to bring ideas to life.</p>
              </div>
              <div className="flex gap-2 p-1 bg-white/5 rounded-full border border-white/10">
                {["all", "ai", "web"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === tab ? "bg-primary text-primary-foreground shadow-lg" : "hover:text-primary"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: "Frontend", 
                  icon: <Globe className="w-8 h-8 text-primary" />,
                  skills: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
                  color: "from-primary/20 to-transparent"
                },
                { 
                  title: "Backend", 
                  icon: <Database className="w-8 h-8 text-secondary" />,
                  skills: ["Node.js", "Express", "Java", "Python", "MySQL"],
                  color: "from-secondary/20 to-transparent"
                },
                { 
                  title: "AI & ML", 
                  icon: <BrainCircuit className="w-8 h-8 text-accent" />,
                  skills: ["TensorFlow", "NLP", "Pandas", "NumPy", "Matplotlib"],
                  color: "from-accent/20 to-transparent"
                },
                { 
                  title: "Tools", 
                  icon: <Terminal className="w-8 h-8 text-primary" />,
                  skills: ["GitHub", "Power BI", "Tableau", "VS Code", "Excel"],
                  color: "from-primary/20 to-transparent"
                }
              ].map((category, i) => (
                <motion.div key={i} variants={fadeIn}>
                  <Card className="glass-card h-full glow-hover border-white/5 group overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <CardHeader className="relative z-10">
                      <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                        {category.icon}
                      </div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map(skill => (
                          <Badge key={skill} variant="secondary" className="bg-white/5 border border-white/10 hover:bg-primary/20 hover:text-primary transition-all px-3 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-5xl font-bold mb-6 tracking-tighter">Featured <span className="text-gradient">Projects.</span></h2>
              <p className="text-lg text-muted-foreground">Real-world applications of my technical skills, from AI analysis to full-stack platforms.</p>
            </div>
            <Button variant="outline" className="rounded-full border-white/10 hover:bg-white/5 group">
              View All Projects <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div 
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Card className="glass-card overflow-hidden group h-full flex flex-col border-white/5">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
                        <Button size="sm" className="bg-primary text-primary-foreground rounded-full px-6" asChild>
                          <a href={project.link} target="_blank" rel="noreferrer">
                            Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-full px-6 border-white/20 hover:bg-white/10">
                          Case Study
                        </Button>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-md border-none">
                          {project.category.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase tracking-widest font-black text-primary/60">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="mb-40">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold tracking-tighter">Experience.</h2>
              </div>
              
              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
                {[
                  {
                    role: "Intern",
                    company: "Modern Ballistic Solutions",
                    period: "June 2025 - July 2025",
                    description: "Analyzed and cleaned manufacturing data using SQL. Created weekly reports in Tableau/Power BI to support operational decision-making."
                  },
                  {
                    role: "Google Cloud Facilitator",
                    company: "Google Cloud Program",
                    period: "April 2025 - July 2025",
                    description: "Completed 50+ hands-on labs and earned 25+ skill badges. Built proficiency in BigQuery, Kubernetes, and Networking."
                  },
                  {
                    role: "Intern",
                    company: "Excavate Research",
                    period: "May 2024 - July 2024",
                    description: "Software Development internship focusing on Java, JavaScript, Node.js, and Power BI. Contributed to full-stack impact."
                  }
                ].map((exp, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-16"
                  >
                    <div className="absolute left-0 top-1 w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center z-10 shadow-xl shadow-black/20">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                    <div className="glass-card p-6 rounded-3xl border-white/5 hover:border-primary/30 transition-all group">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                          <div className="text-primary font-medium">{exp.company}</div>
                        </div>
                        <Badge variant="outline" className="border-white/10 text-[10px] uppercase tracking-widest">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="pl-16 pt-4"
                >
                  <a href="/resume.pdf" download="Aarushi_Resume.pdf">
                    <Button variant="ghost" className="text-primary hover:bg-primary/10 rounded-2xl py-6 px-8 border border-primary/20 hover:border-primary/50 transition-all">
                      <Download className="w-5 h-5 mr-3" /> Download Full Resume
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Education & Certs */}
            <div className="space-y-16">
              <div>
                <div className="flex items-center gap-4 mb-12">
                  <div className="p-3 rounded-2xl bg-secondary/10 border border-secondary/20">
                    <GraduationCap className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter">Education.</h2>
                </div>
                <Card className="glass-card rounded-[2rem] border-white/5 overflow-hidden">
                  <div className="h-2 w-full bg-gradient-to-r from-primary to-secondary" />
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">B.Tech in CSE</h3>
                        <Badge className="bg-secondary/20 text-secondary border-none">2023 - PRESENT</Badge>
                      </div>
                      <div className="text-secondary font-medium mb-1">Specialization in AI & ML</div>
                      <div className="text-sm text-muted-foreground">K.R Mangalam University, Gurugram</div>
                    </div>
                    <Separator className="my-6 bg-white/5" />
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">High School</h3>
                        <Badge className="bg-white/5 text-muted-foreground border-none">UP TO 2023</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">Little Angels School • Non-Medical Stream</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-12">
                  <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter">Certifications.</h2>
                </div>
                <div className="grid gap-4">
                  {[
                    { title: "Applied Machine Learning", issuer: "Samatrix.io" },
                    { title: "Supply Chain Operations", issuer: "Flipkart" },
                    { title: "Dean's Honour Certificate", issuer: "Distinction in 3rd & 4th Sem" }
                  ].map((cert, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all group cursor-default"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:rotate-12 transition-transform">
                          <Award className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <div className="font-bold">{cert.title}</div>
                          <div className="text-xs text-muted-foreground">{cert.issuer}</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl font-bold mb-8 tracking-tighter">Let's <span className="text-gradient">Connect.</span></h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                I'm always looking for interesting projects and collaborations. 
                Whether you have a question or just want to say hi, my inbox is always open.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:aarushichhabradm@gmail.com" className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-1">Email Me</div>
                    <div className="text-lg font-medium">aarushichhabradm@gmail.com</div>
                  </div>
                </a>

                <a href="tel:7217748288" className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-1">Call Me</div>
                    <div className="text-lg font-medium">+91 7217748288</div>
                  </div>
                </a>
              </div>

              <div className="mt-12 flex gap-4">
                <Button variant="outline" size="lg" className="rounded-full border-white/10 hover:bg-white/5" asChild>
                  <a href="https://github.com/Aarushi0208" target="_blank" rel="noreferrer">
                    <Github className="w-5 h-5 mr-2" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-white/10 hover:bg-white/5" asChild>
                  <a href="https://www.linkedin.com/in/aarushi0208/" target="_blank" rel="noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            <Card className="glass-card rounded-[2.5rem] border-white/5 p-8 md:p-12">
              <form 
                className="space-y-6" 
                action="https://formsubmit.co/aarushichhabradm@gmail.com" 
                method="POST"
                onSubmit={handleSendMessage}
              >
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Disable Captcha for better UX after activation */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Success Page */}
                <input type="hidden" name="_next" value={window.location.href} />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                  <input 
                    name="subject"
                    type="text" 
                    required
                    placeholder="Project Inquiry"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                  <textarea 
                    name="message"
                    required
                    placeholder="How can I help you?"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSent}
                  className={`w-full rounded-2xl py-8 text-lg font-bold shadow-xl transition-all duration-500 group ${isSent ? "bg-green-500 text-white shadow-green-500/20" : "bg-primary text-primary-foreground shadow-primary/20"}`}
                >
                  {isSent ? (
                    <span className="flex items-center gap-2">
                      Message Sent Successfully! <Sparkles className="w-5 h-5 animate-pulse" />
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <span className="text-lg font-display font-bold tracking-tight">AARUSHI.</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-widest font-bold text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <Separator className="bg-white/5 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2026 Aarushi. All rights reserved.</div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-4 rounded-2xl bg-primary text-primary-foreground shadow-2xl shadow-primary/40 z-50 hover:scale-110 active:scale-95 transition-all"
      >
        <ArrowUpRight className="w-6 h-6 rotate-[-45deg]" />
      </motion.button>
    </div>
  );
}
