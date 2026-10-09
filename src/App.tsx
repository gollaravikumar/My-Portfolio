import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  ChevronRight,
  Code2,
  Database,
  FileChartColumnIncreasing,
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Send,
  X,
} from "lucide-react";

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
] as const;

const techBadges = ["Python", "SQL", "Excel", "Power BI", "Tableau"];

const skills = [
  {
    title: "Programming",
    icon: Code2,
    tone: "mint",
    tools: ["Python", "Java"],
  },
  {
    title: "Python libraries",
    icon: Layers3,
    tone: "blue",
    tools: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Data analysis",
    icon: Database,
    tone: "violet",
    tools: ["Excel", "SQL"],
  },
  {
    title: "BI & visualization",
    icon: BarChart3,
    tone: "amber",
    tools: ["Power BI", "Tableau"],
  },
];

const projects = [
  {
    id: "01",
    title: "E-Commerce Sales & Customer Analytics",
    description: "I analyzed more than 1,500 e-commerce orders with Excel, SQL, Python, and Power BI.",
    datasetSize: "1,500+ orders",
    repository: "https://github.com/gollaravikumar/E-Commerce-Sales-Customer-Analytics-Project",
    technologies: ["Excel", "SQL", "Python", "Pandas", "Matplotlib", "Power BI"],
    kind: "commerce" as const,
  },
  {
    id: "02",
    title: "Employee Attrition Analysis",
    description: "I analyzed 300 employee records for an employee attrition analysis using Excel, SQL, Python, and Power BI.",
    datasetSize: "300 records",
    repository: "https://github.com/gollaravikumar/Employee-Attrition-Analysis-Project",
    technologies: ["Excel", "SQL", "Python", "Power BI"],
    kind: "people" as const,
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Mohan Babu University",
    date: "2023 — 2027",
    result: "8.67",
    icon: GraduationCap,
  },
  {
    degree: "Intermediate MPC",
    school: "GSH Junior College",
    location: "Rajahmundry, Andhra Pradesh",
    date: "2021 — 2023",
    result: "89.01%",
    icon: FileChartColumnIncreasing,
  },
  {
    degree: "Matriculation",
    school: "Novy High School",
    location: "Tuggali, Andhra Pradesh",
    date: "2020 — 2021",
    result: "99.83%",
    icon: Award,
  },
];

const certifications = [
  { name: "Google Data Analytics Professional Certificate", issuer: "Google" },
  { name: "Microsoft Power BI Data Analyst", issuer: "Microsoft" },
  { name: "Python for Data Analysis", issuer: "Cisco" },
  { name: "SQL for Data Analytics", issuer: "Udemy" },
];

function ResumeButton({ className = "" }: { className?: string }) {
  return (
    <a
      className={`resume-button ${className}`}
      href="mailto:grk18d@gmail.com?subject=Resume%20request"
      aria-label="Email Ravi Kumar to request a resume"
    >
      <Mail size={15} strokeWidth={2} />
      <span>Request Resume</span>
    </a>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand${light ? " brand-light" : ""}`} href="#home" aria-label="Golla Ravi Kumar, home">
      <span className="brand-mark">GRK</span>
      <span className="brand-name">Golla Ravi Kumar</span>
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}`}>
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function DashboardPreview({ kind }: { kind: "commerce" | "people" }) {
  const commerce = kind === "commerce";
  return (
    <div className={`dashboard-preview ${commerce ? "commerce-dashboard" : "people-dashboard"}`} aria-label={`${commerce ? "E-commerce" : "Employee attrition"} dashboard design mockup`}>
      <div className="dashboard-top">
        <div className="dashboard-brand"><span className="dashboard-logo"><BarChart3 size={14} /></span><span>{commerce ? "Sales overview" : "People analytics"}</span></div>
        <span className="dashboard-filter">All time <ChevronRight size={12} /></span>
      </div>
      <div className="dashboard-kpis">
        {(commerce
          ? [["Revenue trends", "Explore"], ["Orders", "1,500+"], ["Segments", "Explore"]]
          : [["Records", "300"], ["Attrition", "Explore"], ["Groups", "Compare"]]
        ).map(([label, value], i) => (
          <div className="dashboard-kpi" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <i className={`kpi-spark spark-${i + 1}`} />
          </div>
        ))}
      </div>
      <div className="dashboard-charts">
        <div className="chart-panel line-panel">
          <div className="chart-title">{commerce ? "Revenue over time" : "Attrition by department"}<span>•••</span></div>
          {commerce ? (
            <svg className="line-chart" viewBox="0 0 300 88" role="img" aria-label="Illustrative revenue trend chart">
              <defs><linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#26c6b5" stopOpacity=".25" /><stop offset="100%" stopColor="#26c6b5" stopOpacity="0" /></linearGradient></defs>
              {[18, 40, 62, 84].map((y) => <line key={y} x1="0" x2="300" y1={y} y2={y} className="chart-gridline" />)}
              <path d="M0 72 C22 65 27 55 48 59 S80 52 99 54 S123 33 147 41 S178 47 193 29 S222 38 239 23 S272 32 300 8 V88 H0Z" fill="url(#areaFill)" />
              <path d="M0 72 C22 65 27 55 48 59 S80 52 99 54 S123 33 147 41 S178 47 193 29 S222 38 239 23 S272 32 300 8" fill="none" stroke="#32c7b6" strokeWidth="2.6" />
              <circle cx="239" cy="23" r="3.5" fill="#e8fbf9" stroke="#32c7b6" strokeWidth="2" />
            </svg>
          ) : (
            <div className="department-bars">{[["Department A", 72], ["Department B", 52], ["Department C", 38], ["Other", 26]].map(([label, width]) => <div className="department-row" key={label}><span>{label}</span><i><b style={{ width: `${width}%` }} /></i></div>)}</div>
          )}
          {commerce && <div className="chart-months"><span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span></div>}
        </div>
        <div className="chart-panel side-panel">
          <div className="chart-title">{commerce ? "By category" : "Workforce mix"}<span>•••</span></div>
          <div className="donut-wrap"><div className="donut-chart"><span>{commerce ? "Top" : "Team"}<b>{commerce ? "Cat." : "mix"}</b></span></div></div>
          <div className="donut-legend"><span><i />{commerce ? "Category A" : "Group A"}</span><span><i />{commerce ? "Category B" : "Group B"}</span><span><i />{commerce ? "Category C" : "Group C"}</span></div>
        </div>
      </div>
      <div className="dashboard-footer"><span><i /> Illustrative dashboard preview</span><span>{commerce ? "SALES & CUSTOMER INSIGHTS" : "WORKFORCE OVERVIEW"}</span></div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-art" aria-label="Illustrative analytics dashboard">
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="floating-dot dot-one" />
      <div className="floating-dot dot-two" />
      <div className="floating-dot dot-three" />
      <div className="float-card float-insight">
        <span className="float-icon"><BarChart3 size={15} /></span>
        <span><small>DATA ANALYSIS</small><b>From questions to charts</b></span>
      </div>
      <div className="hero-dashboard">
        <div className="hero-dash-head"><div><i /><i /><i /></div><span>ANALYTICS OVERVIEW</span><span className="dash-head-dots">•••</span></div>
        <div className="hero-dash-content">
          <div className="hero-dash-title"><span>Performance snapshot</span><small>Last 6 months&nbsp;⌄</small></div>
          <div className="hero-metrics">
            <div><small>Revenue trends</small><b>Explore</b><span>Visual analysis</span></div>
            <div><small>Customer groups</small><b>Explore</b><span>Segment view</span></div>
          </div>
          <div className="hero-chart-wrap">
            <div className="chart-y-labels"><span>80k</span><span>60k</span><span>40k</span><span>20k</span></div>
            <div className="hero-chart">
              <div className="hero-chart-grid"><i /><i /><i /><i /></div>
              <svg viewBox="0 0 390 145" preserveAspectRatio="none" aria-hidden="true">
                <defs><linearGradient id="heroArea" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#4ed6c4" stopOpacity=".2" /><stop offset="100%" stopColor="#4ed6c4" stopOpacity="0" /></linearGradient></defs>
                <path d="M0 119 C30 108 36 91 65 100 S96 82 127 86 S160 55 191 67 S226 73 254 47 S290 61 318 35 S353 38 390 9 V145 H0Z" fill="url(#heroArea)" />
                <path d="M0 119 C30 108 36 91 65 100 S96 82 127 86 S160 55 191 67 S226 73 254 47 S290 61 318 35 S353 38 390 9" fill="none" stroke="#50d7c4" strokeWidth="3" />
                <circle cx="318" cy="35" r="5" fill="#0e1929" stroke="#50d7c4" strokeWidth="3" />
              </svg>
            </div>
          </div>
          <div className="chart-x-labels"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span></div>
          <div className="hero-bar-area">
            <div className="hero-bar-heading"><span>Revenue by category</span><small>View report <ArrowUpRight size={11} /></small></div>
            <div className="hero-bars">{[46, 70, 54, 88, 62, 76, 46, 67, 94, 60, 78, 52, 84].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div>
          </div>
        </div>
      </div>
      <div className="float-card float-bars">
        <span className="mini-bars">{[30, 52, 39, 72, 56, 90].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</span>
        <span><small>REPORTING</small><b>Insights that add up</b></span>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    const revealObserver = new IntersectionObserver(
      (entries, currentObserver) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll(".scroll-reveal").forEach((element) => revealObserver.observe(element));
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <Logo />
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <div className={`nav-content${menuOpen ? " nav-open" : ""}`}>
            <div className="nav-links">
              {navItems.map(([label, id]) => (
                <a key={id} className={activeSection === id ? "nav-active" : ""} href={`#${id}`} onClick={closeMenu}>{label}</a>
              ))}
            </div>
            <div className="nav-social" aria-label="Social profiles">
              <a href="https://www.linkedin.com/in/golla-ravi-kumar18/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)"><Linkedin size={17} /></a>
              <a href="https://github.com/gollaravikumar" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)"><Github size={17} /></a>
            </div>
            <ResumeButton className="nav-resume" />
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-backdrop-grid" />
          <div className="hero-glow" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <span className="hero-label"><span className="status-dot" /> ASPIRING DATA ANALYST</span>
              <h1>Golla Ravi<br /><span> Kumar.</span></h1>
              <p className="hero-tagline">Data analysis &amp; business intelligence<br /><span>Computer Science student · 2023–2027</span></p>
              <p className="hero-description">I’m Golla Ravi Kumar, a Computer Science and Engineering student at Mohan Babu University. I use Python, SQL, Excel, and BI tools to work through practical data questions.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View Projects <ArrowRight size={16} /></a>
                <ResumeButton className="button-outline" />
                <a className="text-link" href="#contact">Get in touch <ArrowDownRight size={15} /></a>
              </div>
              <div className="tech-row"><span>TOOLS I WORK WITH</span><div>{techBadges.map((tool) => <span className="tech-badge" key={tool}>{tool}</span>)}</div></div>
            </div>
            <HeroVisual />
          </div>
          <a href="#about" className="scroll-hint" aria-label="Scroll to about section"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="container">
            <div className="about-layout">
              <div className="about-main">
                <SectionHeading eyebrow="ABOUT" title={<>I’m Ravi, a student<br /><span>working with data.</span></>} />
                <p className="about-copy">I’m studying Computer Science and Engineering at Mohan Babu University. I’m interested in data analysis and business intelligence, and I like making information easier to understand through clear charts and reports.</p>
                <p className="about-copy">I’ve worked on sales and employee attrition analyses and completed a Data Analyst and Business Intelligence internship at Cognevance Technologies.</p>
                <a href="#experience" className="inline-link">View my internship <ArrowRight size={15} /></a>
              </div>
              <div className="about-highlights">
                <div className="highlights-top"><span>AT A GLANCE</span><span className="snapshot-icon"><BarChart3 size={15} /></span></div>
                <div className="highlight-item"><span className="highlight-icon"><GraduationCap size={18} /></span><span><small>STUDYING</small><b>B.Tech Computer Science</b><em>2023 — 2027</em></span></div>
                <div className="highlight-item"><span className="highlight-icon"><BarChart3 size={18} /></span><span><small>ACADEMICS</small><b>CGPA 8.67</b><em>Mohan Babu University</em></span></div>
                <div className="highlight-item"><span className="highlight-icon"><BriefcaseBusiness size={18} /></span><span><small>INTERNSHIP</small><b>Data Analyst & BI Intern</b><em>Cognevance Technologies</em></span></div>
                <div className="highlight-item"><span className="highlight-icon"><Database size={18} /></span><span><small>TOOLS</small><b>Python · SQL · Power BI</b><em>Plus Excel, Tableau, and Java</em></span></div>
              </div>
            </div>
            <div className="about-bottom-note"><span className="note-line" /><span>My focus: careful analysis and clear communication.</span><span className="note-line" /></div>
          </div>
        </section>

        <section className="skills-section section-pad" id="skills">
          <div className="container">
            <SectionHeading eyebrow="SKILLS" title={<>Tools I use to work<br /><span>with data.</span></>} description="Programming, data analysis, and visualization tools I’ve used in coursework and projects." />
            <div className="skills-grid">
              {skills.map(({ title, icon: Icon, tone, tools }, index) => (
                <article className={`skill-card skill-${tone} scroll-reveal`} key={title}>
                  <div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-index">0{index + 1}</span></div>
                  <h3>{title}</h3>
                  <div className="skill-tools">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                  <div className="skill-card-decoration"><i /><i /><i /></div>
                </article>
              ))}
            </div>
            <div className="skills-footnote"><span className="skills-foot-icon"><BarChart3 size={14} /></span> My skills include Python, Java, Pandas, NumPy, Matplotlib, Seaborn, Excel, SQL, Power BI, and Tableau.</div>
          </div>
        </section>

        <section className="projects-section section-pad" id="projects">
          <div className="container">
            <div className="projects-heading-row">
              <SectionHeading eyebrow="PROJECTS" title={<>A couple of data projects<br /><span>I’ve worked on.</span></>} description="Two analyses: e-commerce orders and employee attrition." />
              <span className="project-count"><b>02</b><span>FEATURED<br />PROJECTS</span></span>
            </div>
            <div className="projects-list">
              {projects.map((project) => (
                <article className="project-card scroll-reveal" key={project.id}>
                  <div className="project-visual"><DashboardPreview kind={project.kind} /><span className="mockup-label"><span /> DESIGN MOCKUP</span></div>
                  <div className="project-details">
                    <div className="project-number">PROJECT {project.id}<span> · </span>DATA ANALYTICS</div>
                    <h3><a className="project-title-link" href={project.repository} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
                    <p>{project.description}</p>
                    <div className="project-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                    <div className="project-record-count"><span>DATASET</span><b>{project.datasetSize}</b></div>
                    <a className="project-repository-link" href={project.repository} target="_blank" rel="noopener noreferrer"><Github size={17} /> View on GitHub <ArrowUpRight size={14} /></a>
                  </div>
                </article>
              ))}
            </div>
            <div className="projects-disclaimer"><span className="disclaimer-mark">i</span> Dashboard visuals are illustrative design mockups, not screenshots or claims about project results.</div>
          </div>
        </section>

        <section className="experience-section section-pad" id="experience">
          <div className="container">
            <div className="experience-layout">
              <div className="experience-intro">
                <SectionHeading eyebrow="EXPERIENCE" title={<>Data Analyst &amp;<br /><span>BI internship.</span></>} description="My internship at Cognevance Technologies." />
                <div className="experience-date-stamp"><span className="stamp-icon"><BriefcaseBusiness size={17} /></span><span><b>JULY – OCTOBER 2025</b><small>INTERNSHIP</small></span></div>
              </div>
              <article className="experience-card scroll-reveal">
                <div className="timeline-rail"><span /></div>
                <div className="experience-card-content">
                  <div className="experience-card-header"><span className="experience-overline">INTERNSHIP <i /> JULY – OCTOBER 2025</span><span className="experience-mark">CT</span></div>
                  <h3>Data Analyst &<br />Business Intelligence Intern</h3>
                  <p className="company-name">Cognevance Technologies</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="education-section section-pad" id="education">
          <div className="container">
            <div className="education-top">
              <SectionHeading eyebrow="EDUCATION" title={<>Computer Science<br /><span>and Engineering.</span></>} description="B.Tech at Mohan Babu University." />
              <div className="education-note"><span className="education-note-icon"><GraduationCap size={18} /></span>2023–2027<br />CGPA 8.67</div>
            </div>
            <div className="education-list">
              {education.map(({ degree, school, location, date, result, icon: Icon }, index) => (
                <article className={`education-item scroll-reveal${index === 0 ? " education-current" : ""}`} key={degree}>
                  <div className="education-year">{date}</div>
                  <div className="education-marker"><Icon size={17} /></div>
                  <div className="education-detail"><h3>{degree}</h3><p>{school} <span>·</span> {location}</p></div>
                  <div className="education-result"><span>{index === 0 ? "CGPA" : "RESULT"}</span><b>{result}</b></div>
                  {index === 0 && <span className="current-tag"><i /> IN PROGRESS</span>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="certifications-section section-pad" id="certifications">
          <div className="container">
            <SectionHeading eyebrow="CERTIFICATIONS" title={<>Courses and certificates<br /><span>in my toolkit.</span></>} description="Additional training in data analytics, Power BI, Python, and SQL." />
            <div className="cert-grid">
              {certifications.map(({ name, issuer }, index) => (
                <article className="cert-card scroll-reveal" key={name}>
                  <div className="cert-mark">{issuer[0]}</div>
                  <div className="cert-meta">CERTIFICATION 0{index + 1}</div>
                  <h3>{name}</h3>
                  <div className="cert-issuer"><span className="issuer-dot" /> Issued by <b>{issuer}</b></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="achievement-section">
          <div className="container">
            <article className="achievement-card">
              <div className="achievement-icon-wrap"><Award size={23} /></div>
              <div className="achievement-copy">
                <span className="achievement-kicker">ACADEMIC ACHIEVEMENT</span>
                <h2>Outstanding Student Recognition</h2>
                <p>Received a Certificate of Appreciation for securing the highest marks in the Intermediate Public Examinations.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="container">
            <div className="contact-card">
              <div className="contact-glow" />
              <div className="contact-content">
                <span className="eyebrow"><span className="eyebrow-dot" /> OPEN TO OPPORTUNITIES</span>
                <h2>Have a question or<br /><span>an opportunity in mind?</span></h2>
                <p>I’m interested in data analysis and business intelligence roles, internships, and conversations about working with data.</p>
                <a className="button button-primary contact-email-button" href="mailto:grk18d@gmail.com"><Mail size={16} /> Send me an email <ArrowRight size={15} /></a>
              </div>
              <div className="contact-details">
                <span className="contact-label">GET IN TOUCH</span>
                <a className="contact-detail-link" href="mailto:grk18d@gmail.com"><span className="contact-detail-icon"><Mail size={17} /></span><span><small>EMAIL</small><b>grk18d@gmail.com</b></span><ArrowUpRight size={15} /></a>
                <a className="contact-detail-link" href="tel:+919848712872"><span className="contact-detail-icon"><Send size={17} /></span><span><small>PHONE</small><b>+91 9848712872</b></span><ArrowUpRight size={15} /></a>
                <div className="contact-socials">
                  <span>PROFILES</span>
                  <a href="https://www.linkedin.com/in/golla-ravi-kumar18/" target="_blank" rel="noopener noreferrer" aria-label="Golla Ravi Kumar on LinkedIn (opens in a new tab)"><Linkedin size={17} /><span>LinkedIn</span><ArrowUpRight size={13} /></a>
                  <a href="https://github.com/gollaravikumar" target="_blank" rel="noopener noreferrer" aria-label="Golla Ravi Kumar on GitHub (opens in a new tab)"><Github size={17} /><span>GitHub</span><ArrowUpRight size={13} /></a>
                </div>
              </div>
              <div className="contact-index">LET’S MAKE SOMETHING<br />MEANINGFUL WITH DATA <ArrowDownRight size={15} /></div>
            </div>
            <p className="form-note"><span className="form-note-dot" /> Email is the best way to reach me. My resume is available on request.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand"><Logo light /><p>Data analysis and business intelligence.<br />Computer Science student, 2023–2027.</p></div>
          <div className="footer-navigation"><span>EXPLORE</span><div>{[["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Experience", "experience"], ["Education", "education"], ["Certifications", "certifications"], ["Contact", "contact"]].map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div></div>
          <div className="footer-social"><span>ELSEWHERE</span><div><a href="https://www.linkedin.com/in/golla-ravi-kumar18/" target="_blank" rel="noopener noreferrer" aria-label="Golla Ravi Kumar on LinkedIn"><Linkedin size={17} /></a><a href="https://github.com/gollaravikumar" target="_blank" rel="noopener noreferrer" aria-label="Golla Ravi Kumar on GitHub"><Github size={17} /></a><a href="mailto:grk18d@gmail.com" aria-label="Email Ravi Kumar"><Mail size={17} /></a></div></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Golla Ravi Kumar</span><a href="#home">BACK TO TOP <ArrowUpRight size={13} /></a></div>
      </footer>
      <a className={`back-to-top${showTop ? " back-to-top-visible" : ""}`} href="#home" aria-label="Back to top"><ArrowDown size={16} /></a>
    </>
  );
}

export default App;
