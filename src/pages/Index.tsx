import { useState } from "react";
import profilePhoto from "@/assets/profile-placeholder.jpg";
import { ChevronLeft, ChevronRight, Mail, Linkedin, Github, BookOpen, Download, ExternalLink } from "lucide-react";

const coreValues = [
{ title: "Creative Expression", description: "Clarity of thought deserves clarity of voice. I value writing and storytelling as tools to communicate complex ideas meaningfully." },
{ title: "Collaboration", description: "Respecting collective intelligence" },
{ title: "Collaboration", description: "Great things are built together. I value diverse perspectives and thrive in environments where ideas flow freely." },
{ title: "Excellence", description: "I hold myself to the highest standards, delivering quality work that speaks for itself and exceeds expectations." },
{ title: "Impact", description: "I'm driven by the desire to create meaningful change — building solutions that matter and leave a lasting impression." }];


const skills = [
"JavaScript", "TypeScript", "React", "Node.js", "Python", "HTML/CSS",
"Git", "REST APIs", "SQL", "Tailwind CSS", "Figma", "Agile/Scrum"];


const projects = [
{
  title: "E-Commerce Platform",
  description: "A full-stack e-commerce application with user authentication, product management, cart functionality, and payment integration.",
  tech: ["React", "Node.js", "MongoDB"],
  link: "#"
},
{
  title: "Task Management App",
  description: "A collaborative project management tool with real-time updates, drag-and-drop boards, and team collaboration features.",
  tech: ["TypeScript", "React", "Firebase"],
  link: "#"
},
{
  title: "Portfolio Website",
  description: "A responsive personal portfolio showcasing projects, skills, and professional experience with a warm, elegant design.",
  tech: ["React", "Tailwind CSS", "Framer Motion"],
  link: "#"
},
{
  title: "Blog Platform",
  description: "A content management system with markdown support, SEO optimization, and analytics dashboard for tracking readership.",
  tech: ["Next.js", "PostgreSQL", "Prisma"],
  link: "#"
}];


const resumeData = {
  experience: [
  { role: "Software Developer", company: "Tech Company", period: "2022 – Present", description: "Building scalable web applications and leading frontend architecture decisions." },
  { role: "Junior Developer", company: "Startup Inc.", period: "2020 – 2022", description: "Developed features for the core product and improved performance by 40%." }],

  education: [
  { degree: "B.Sc. Computer Science", school: "University Name", period: "2016 – 2020" }]

};

const Index = () => {
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
                <img alt="Profile photo" className="w-full h-full object-cover" src="/lovable-uploads/57f5b255-e9ec-4866-8b99-b16768be1fb6.png" />
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
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:opacity-90 transition-opacity">
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
            <a href="mailto:your@email.com" className="flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all group">
              <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-body font-medium text-sm">Email</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all group">
              <Linkedin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-body font-medium text-sm">LinkedIn</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all group">
              <Github className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-body font-medium text-sm">GitHub</span>
            </a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all group">
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