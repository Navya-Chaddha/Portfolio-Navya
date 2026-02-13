import { useState } from "react";
import profilePhoto from "@/assets/profile-placeholder.jpg";
import { ChevronLeft, ChevronRight, Mail, Linkedin, Github, BookOpen, Download, ExternalLink } from "lucide-react";

const coreValues = [
{ title: "Creativity", description: "I approach problems with originality,blending logic with imaginative thinking." },
{ title: "Collaboration", description: "I believe that the strongest ideas emerge when diverse minds think together." },
{ title: "Discipline", description: "I commit to consistent effort and focused execution in everything I pursue." },
{ title: "Integrity", description: "I stay grounded in honesty,accountability and doing what is right even when it is difficult." },
{ title: "Visionary", description: "I think beyond the present,designing solutions with long-term impact in mind." }];


const skills = [
"Java", "C/C++", "Computational Math", "Python", "NumPy",
"Git", "Matplotlib", "Differential & Integral Calculus", "HTML/CSS"];


const projects = [
{
  title: "TerraLoop",
    description: "Led a team to build a sustainability app for a college hackathon, tackling India's ₹92,000 crore fruit and vegetable waste problem. Developed the full-stack architecture and integrated AI for freshness detection and automated market listings, featuring a gamified user experience.",
    tech: ["React", "Node.js", "MongoDB", "AI/ML", "Tailwind CSS"],
    link: "https://github.com/Navya-Chaddha/TerraLoop.git"
},
{
  title: "Cointroller",
  description: "This is a gamified financial tracker built in C to help students manage daily expenses.Developed during my first year, it uses file handling and structures to record, categorize, and analyze spending. The project focuses on bridging the gap between low-level programming and real-world utility for the youth.",
  tech: ["C"],
  link: "https://github.com/Navya-Chaddha/Cointroller.git"
},
{
  title: "Zenith",
  description: "A space-tech media platform I founded to simplify space science through an immersive e-newspaper experience.I integrated AI-driven insights and motion graphics to transform complex blogs into interactive journeys. By bridging the gap between text and visualization, Zenith makes space discovery accessible to everyone.",
  tech: ["React", "TypeScript", "Framer Motion", "AI Integration"],
  link: "https://github.com/Navya-Chaddha/v0-zenith-space-website-er.git"
}
];


const resumeData = 
{
  experience: 
  [
  { role: "Founder & Lead Developer", company: "Zenith", period: "2023 – Present", description: "Building a space-tech media platform to simplify space science for a global audience." },
  ],

  education: 
  [
  {
    degree: "B.Tech in Mathematics and Computing",
    school: "Jaypee Institute of Information Technology (JIIT), Noida",
    period: "2025 – 2029"
  },
  {
    degree: "10+2",
    school: "St. Mary's Convent Inter College Prayagraj ",
    period: "2011-2025"
  }
]
};

const Index = () =>
   {
  const [currentValue, setCurrentValue] = useState(0);
  const [activeTab, setActiveTab] = useState<"skills" | "projects">("skills");

  const nextValue = () => setCurrentValue((prev) => (prev + 1) % coreValues.length);
  const prevValue = () => setCurrentValue((prev) => (prev - 1 + coreValues.length) % coreValues.length);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-display text-xl font-bold text-primary">
          </span>
          <div className="hidden md:flex gap-8 font-body text-sm tracking-wide">
            <a href="#hero" className="hover:text-primary transition-colors">Home</a>
            <a href="#values" className="hover:text-primary transition-colors">Values</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills & Projects</a>
            <a href="#resume" className="hover:text-primary transition-colors">Resume</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <p className="font-body tracking-[0.3em] uppercase mb-4 text-foreground text-xl">Hello, I'm</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Navya<br />
              <span className="text-primary">Chaddha</span>
            </h1>
            <p className="font-body text-lg leading-relaxed max-w-md mb-8 text-card-foreground">Mathematics & Computing student driven by curiosity about Space and Sustainability. I use logic, data, and code to understand complex systems and transform them into ethical, meaningful solutions. 

            </p>
            <div className="flex gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:opacity-90 transition-opacity">
                Get in Touch
              </a>
              <a href="#skills" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-body font-medium rounded-lg hover:bg-accent transition-colors">View my Work

              </a>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img src="/uploads/img1.png" alt="Navya Chaddha Profile" className="w-full h-full object-cover"/>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Carousel */}
      <section id="values" className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">What Drives Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">Core Values</h2>

          <div className="relative">
            <div className="bg-background rounded-2xl p-10 md:p-16 shadow-lg min-h-[250px] flex flex-col items-center justify-center transition-all">
              <div className="w-12 h-1 bg-primary rounded-full mb-6" />
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-4">
                {coreValues[currentValue].title}
              </h3>
              <p className="font-body text-lg text-muted-foreground max-w-lg leading-relaxed">
                {coreValues[currentValue].description}
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8">
              <button onClick={prevValue} className="p-3 rounded-full border border-border hover:bg-accent transition-colors" aria-label="Previous value">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {coreValues.map((_, i) =>
                <button
                  key={i}
                  onClick={() => setCurrentValue(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentValue ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground"}`}
                  aria-label={`Go to value ${i + 1}`} />

                )}
              </div>
              <button onClick={nextValue} className="p-3 rounded-full border border-border hover:bg-accent transition-colors" aria-label="Next value">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Projects */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 text-center">What I Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">Skills & Projects</h2>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-8 py-3 rounded-lg font-body font-medium transition-all ${activeTab === "skills" ? "bg-primary text-primary-foreground" : "bg-accent text-foreground hover:bg-muted"}`}>

              Skills
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-8 py-3 rounded-lg font-body font-medium transition-all ${activeTab === "projects" ? "bg-primary text-primary-foreground" : "bg-accent text-foreground hover:bg-muted"}`}>

              Projects
            </button>
          </div>

          {activeTab === "skills" &&
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in">
              {skills.map((skill) =>
            <div key={skill} className="bg-card border border-border rounded-xl p-5 text-center font-body font-medium hover:border-primary/50 hover:shadow-md transition-all">
                  {skill}
                </div>
            )}
            </div>
          }

          {activeTab === "projects" &&
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
              {projects.map((project) =>
            <div key={project.title} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all group">
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) =>
                <span key={t} className="px-3 py-1 bg-accent text-sm font-body rounded-full">{t}</span>
                )}
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-1 text-primary font-body font-medium text-sm hover:underline">
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
            )}
            </div>
          }
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 text-center">My Journey</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">Resume</h2>

          <div className="mb-12">
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 bg-primary rounded-full" /> Experience
            </h3>
            <div className="space-y-6">
              {resumeData.experience.map((exp, i) =>
              <div key={i} className="bg-background rounded-xl p-6 border border-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="font-display text-lg font-semibold">{exp.role}</h4>
                    <span className="font-body text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="font-body text-primary font-medium text-sm mb-2">{exp.company}</p>
                  <p className="font-body text-muted-foreground">{exp.description}</p>
                </div>
              )}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
              <div className="w-8 h-1 bg-primary rounded-full" /> Education
            </h3>
            {resumeData.education.map((edu, i) =>
            <div key={i} className="bg-background rounded-xl p-6 border border-border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h4 className="font-display text-lg font-semibold">{edu.degree}</h4>
                  <span className="font-body text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <p className="font-body text-primary font-medium text-sm">{edu.school}</p>
              </div>
            )}
          </div>

          <div className="text-center">
  <a href="/uploads/Navya-resume.pdf" download="Navya_Chaddha_Resume.pdf" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:opacity-90 transition-opacity">
    <Download className="w-4 h-4" /> Download Resume
  </a>
</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Let's Connect</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="font-body text-lg text-muted-foreground mb-12 max-w-md mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a href="navya200407.chaddha@gmail.com" className="flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all group">
              <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-body font-medium text-sm">Email</span>
            </a>
            <a href="https://www.linkedin.com/in/navya-chaddha-97434521b/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all group">
              <Linkedin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-body font-medium text-sm">LinkedIn</span>
            </a>
            <a href="https://github.com/Navya-Chaddha" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all group">
              <Github className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-body font-medium text-sm">GitHub</span>
            </a>
            <a href="https://medium.com/@navya200407.chaddha" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all group">
              <BookOpen className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-body font-medium text-sm">Medium</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border text-center">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Navya Chaddha. All rights reserved.
        </p>
      </footer>
    </div>);

};

export default Index;