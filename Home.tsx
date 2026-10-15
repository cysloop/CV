import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;
const EMAIL = "moodyy549@gmail.com";
const CV_FILE = `${BASE_URL}assets/mohammed-fadhl-cv.pdf`;
const SKULL_IMAGE = `${BASE_URL}assets/cyber-skull.jpg`;

const navigation = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Learning", href: "#learning" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const learningPaths = [
  {
    title: "Junior Security Analyst Intro",
    description: "Simulated analyst duties, alert triage, log analysis, and incident response.",
    code: "01",
  },
  {
    title: "SOC Role in Blue Team",
    description: "SOC operations, Blue Team responsibilities, and Level 1 analyst workflows.",
    code: "02",
  },
  {
    title: "Snort",
    description: "Configured Snort IDS to detect threats, analyze traffic, and create detection rules.",
    code: "03",
  },
  {
    title: "Traffic Analysis Essentials",
    description: "Studied network traffic analysis fundamentals and identified suspicious activity.",
    code: "04",
  },
  {
    title: "Network Traffic Basics",
    description: "Hands-on practice capturing, monitoring, and analyzing network traffic.",
    code: "05",
  },
];

const certifications = [
  { year: "2025", title: "Black Hat Middle East & Africa", note: "Visitor · SAFCSP & Tahaluf · 10 CPD Credits" },
  { year: "2024", title: "SLED / FED & GRC Virtual Cybersecurity Conference", note: "Data Connectors Cybersecurity Community" },
  { year: "2024", title: "Black Hat Middle East & Africa", note: "Visitor" },
  { year: "2021", title: "Cyber Wars and Cybercrime", note: "Digital Giving Initiative" },
  { year: "2021", title: "Introduction to High Performance Computing", note: "Digital Giving Initiative" },
  { year: "2021", title: "Cybersecurity Fundamentals", note: "Digital Giving Initiative" },
  { year: "2015", title: "Algorithms & Mental Calculation Course", note: "Abbad Bin Bishr Elementary School" },
];

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-heading__index">{number}<span> / 06</span></div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {description && <p className="section-heading__description">{description}</p>}
      </div>
    </div>
  );
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}<ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Mohammed Fadhl — home">
          <span className="wordmark__mark">MF<span>.</span></span>
          <span className="wordmark__caption">CYBERSECURITY<br />PORTFOLIO</span>
        </a>
        <nav className={`main-nav${menuOpen ? " main-nav--open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              className={activeSection === item.href.slice(1) ? "is-active" : ""}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>LET'S CONNECT <ArrowUpRight size={14} /></a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-frame" aria-labelledby="hero-title">
          <div className="hero__content">
            <div className="availability"><span className="status-dot" /> OPEN TO CYBERSECURITY CO-OP</div>
            <p className="hero__overline">DEFENSE MINDED <span>·</span> ALWAYS LEARNING</p>
            <h1 id="hero-title">Mohammed<br /><span>Fadhl</span> Al-Moshtaher<span className="hero__period">.</span></h1>
            <p className="hero__role">CYBERSECURITY STUDENT <span>/</span> RIYADH, SAUDI ARABIA</p>
            <p className="hero__summary">
              Building practical security skills through hands-on labs, network defense, and a constant curiosity for how systems can be made safer.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#contact">GET IN TOUCH <ArrowUpRight size={16} /></a>
              <a className="button button--outline" href={CV_FILE} download="Mohammed-Fadhl-Al-Moshtaher-CV.pdf">
                DOWNLOAD CV <ArrowDownToLine size={16} />
              </a>
            </div>
            <div className="hero__quicklinks" aria-label="Social links">
              <ExternalLink href="https://linkedin.com/in/mofadhl"><Linkedin size={15} /> LINKEDIN</ExternalLink>
              <ExternalLink href="https://github.com/cysloop"><Github size={15} /> GITHUB</ExternalLink>
              <ExternalLink href="https://tryhackme.com/p/cysloop"><ShieldCheck size={15} /> TRYHACKME</ExternalLink>
            </div>
          </div>

          <div className="hero__visual" aria-label="Cybersecurity visual">
            <div className="visual-topline"><span><span className="visual-dot" /> SYSTEM / PROFILE</span><span>RIYADH / SAUDI ARABIA</span></div>
            <div className="hero__image-wrap">
              <img src={SKULL_IMAGE} alt="Dark terminal-style skull artwork representing cybersecurity" />
              <div className="image-scanline" aria-hidden="true" />
              <div className="visual-crosshair visual-crosshair--tl" aria-hidden="true" />
              <div className="visual-crosshair visual-crosshair--br" aria-hidden="true" />
              <div className="visual-stamp"><Terminal size={14} /><span>DEFENSE<br />IN DEPTH</span></div>
              <div className="visual-index">FIG. 01 — DIGITAL PERIMETER</div>
            </div>
            <div className="visual-footer"><span>FOCUS AREAS</span><span>NETWORK DEFENSE <i>·</i> SOC <i>·</i> ANALYSIS</span></div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Resume highlights">
          <div className="signal-item"><span className="signal-value">4.88<span>/5</span></span><span className="signal-label">ACADEMIC GPA</span></div>
          <div className="signal-item"><span className="signal-value">117</span><span className="signal-label">CERTIFIED VOLUNTEER HOURS</span></div>
          <div className="signal-item"><span className="signal-value">05</span><span className="signal-label">TRYHACKME LABS & PATHS</span></div>
          <div className="signal-item signal-item--status"><span className="status-dot" /><span className="signal-label">SEEKING A CO-OP OPPORTUNITY</span></div>
        </section>

        <section className="content-section" id="about">
          <SectionHeading number="01" eyebrow="PROFILE / 01" title="A little about me" description="Curiosity is the first line of defense." />
          <div className="about-grid">
            <div className="about-copy">
              <p className="lead-copy">I’m currently seeking a <strong>Co-op opportunity in Cybersecurity</strong> to put my practical technical skills to work and keep growing through real-world experience.</p>
              <p>My learning spans network traffic analysis, Blue Team workflows, alert triage, and system hardening. I enjoy understanding how things fail—and using that knowledge to help them hold up.</p>
            </div>
            <div className="about-facts">
              <div className="fact-row"><span>01</span><span>Based in</span><strong>Riyadh, Saudi Arabia</strong></div>
              <div className="fact-row"><span>02</span><span>Current focus</span><strong>Cybersecurity / Blue Team</strong></div>
              <div className="fact-row"><span>03</span><span>Languages</span><strong>Arabic · English</strong></div>
              <div className="fact-row"><span>04</span><span>Availability</span><strong className="green-text">Co-op opportunity</strong></div>
            </div>
          </div>
        </section>

        <section className="content-section content-section--bordered" id="education">
          <SectionHeading number="02" eyebrow="EDUCATION / 02" title="Learning with intent" description="Building a strong foundation at King Saud University." />
          <article className="education-card">
            <div className="education-card__date"><span>2025 — 2026</span><span className="education-card__signal"><span className="status-dot" /> DIPLOMA PROGRAM</span></div>
            <div className="education-card__body">
              <p className="eyebrow">KING SAUD UNIVERSITY <span>·</span> RIYADH, SAUDI ARABIA</p>
              <h3>Diploma in Cybersecurity</h3>
              <p>College of Applied Studies<br />Computer Science &amp; Engineering Department</p>
            </div>
            <div className="gpa-block"><span>ACADEMIC PERFORMANCE</span><strong>4.88<span> / 5.00</span></strong><div className="gpa-bar"><span /></div></div>
          </article>
        </section>

        <section className="content-section content-section--bordered" id="projects">
          <SectionHeading number="03" eyebrow="SELECTED WORK / 03" title="Hands-on, by design" description="A practical look at defensive configuration and network security." />
          <article className="project-card">
            <div className="project-card__top"><span className="project-type"><Terminal size={14} /> SECURITY PROJECT</span><span className="project-year">2026</span></div>
            <div className="project-card__main">
              <div className="project-card__title"><p className="eyebrow">UBUNTU SERVER ENVIRONMENT</p><h3>Firewall Deployment<br />&amp; Security Hardening</h3></div>
              <div className="project-card__detail">
                <p>Deployed and configured a local network firewall to filter, monitor, and control incoming and outgoing traffic.</p>
                <ul>
                  <li>Built custom command-line rulesets to enforce access controls and secure exposed services.</li>
                  <li>Performed network baseline checks, log analysis, and troubleshooting to isolate anomalies.</li>
                  <li>Verified defensive configurations across the Ubuntu Server environment.</li>
                </ul>
              </div>
            </div>
            <div className="project-tags"><span>UBUNTU SERVER</span><span>FIREWALL RULES</span><span>LOG ANALYSIS</span><span>NETWORK DEFENSE</span></div>
          </article>
        </section>

        <section className="content-section content-section--bordered" id="learning">
          <SectionHeading number="04" eyebrow="TRYHACKME / 04" title="Learning by doing" description="Completed technical learning paths and specialized rooms · 2025–2026." />
          <div className="learning-header"><div><span className="status-dot" /> PRACTICAL LABS</div><ExternalLink href="https://tryhackme.com/p/cysloop">VIEW TRYHACKME PROFILE</ExternalLink></div>
          <div className="learning-list">
            {learningPaths.map((item) => (
              <article className="learning-row" key={item.code}>
                <span className="learning-row__code">{item.code}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ArrowUpRight className="learning-row__arrow" size={17} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="content-section content-section--bordered" id="experience">
          <SectionHeading number="05" eyebrow="EXPERIENCE / 05" title="Showing up & contributing" description="Leadership, community involvement, and continued learning beyond the classroom." />
          <div className="experience-grid">
            <div className="experience-column">
              <div className="column-label"><span>01</span> LEADERSHIP &amp; ACHIEVEMENTS</div>
              <article className="timeline-card">
                <div className="timeline-card__meta"><span>2026</span><span>KING SAUD UNIVERSITY</span></div>
                <h3>Session Moderator &amp; Presenter</h3>
                <p className="timeline-card__sub">Panel discussion: Cybersecurity and Cryptography</p>
                <p>Moderated the session, led the technical dialogue, and interviewed a faculty expert on cryptography standards—demonstrating public speaking and technical leadership.</p>
              </article>
              <article className="timeline-card">
                <div className="timeline-card__meta"><span>2024</span><span>AL MANSOURAH SECONDARY SCHOOL</span></div>
                <h3>School Logo Designer</h3>
                <p>Designed the official school logo for the 2024 academic year and received formal recognition from the school administration.</p>
              </article>
              <div className="activity-list">
                <p className="eyebrow">SELECTED UNIVERSITY ACTIVITIES · 2026</p>
                <span>“The Road to the Future” — KSU College of Applied Studies</span>
                <span>“Ambitious Youth &amp; Prosperous Economy: Vision 2030 Career Market” — KSU</span>
                <span>“Artificial Intelligence Developments” — King Saud University</span>
              </div>
            </div>

            <div className="experience-column volunteer-column">
              <div className="column-label"><span>02</span> COMMUNITY &amp; VOLUNTEERING</div>
              <article className="volunteer-card">
                <div className="volunteer-hours"><strong>117</strong><span>CERTIFIED<br />VOLUNTEER HOURS</span></div>
                <p className="eyebrow">VOLUNTEER <span>·</span> 2025—2026</p>
                <p>Contributed across five community organizations and university groups.</p>
                <div className="organization-list">
                  <span>Riyadh Region Municipality</span>
                  <span>College of Community, KSU</span>
                  <span>Al-Bir Charitable Society — Al-Shufayyah Center</span>
                  <span>Student Clubs Administration, KSU — including Saudi Red Crescent</span>
                  <span>Dawah and Guidance Association — Al-Sahafa</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section content-section--bordered" id="skills">
          <SectionHeading number="06" eyebrow="SKILLS & TRAINING / 06" title="Tools, skills & foundations" description="A growing toolkit shaped by coursework, practical labs, and collaboration." />
          <div className="skills-layout">
            <div className="skills-panel"><p className="eyebrow">CORE COMPETENCIES</p><div className="skill-tags"><span>Critical &amp; analytical thinking</span><span>Teamwork</span><span>Advanced use of technology</span><span>Microsoft Office 365</span><span>Professional presentation skills</span><span>Technical communication</span><span>Fast problem solving</span></div></div>
            <div className="skills-panel skills-panel--certs"><p className="eyebrow">CERTIFICATIONS &amp; SPECIALIZED TRAINING</p><div className="cert-list">{certifications.map((item) => <div className="cert-row" key={`${item.year}-${item.title}`}><span>{item.year}</span><div><strong>{item.title}</strong><small>{item.note}</small></div></div>)}</div></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-section__grid" aria-hidden="true" />
          <div className="contact-content">
            <p className="eyebrow"><span className="status-dot" /> OPEN TO THE NEXT CHALLENGE</p>
            <h2>Let’s make<br /><span>systems safer.</span></h2>
            <p className="contact-copy">Looking for a cybersecurity Co-op candidate who’s eager to learn, contribute, and grow? I’d be glad to connect.</p>
            <a className="button button--primary contact-button" href={`mailto:${EMAIL}`}>START A CONVERSATION <ArrowUpRight size={16} /></a>
          </div>
          <div className="contact-details">
            <button type="button" className="contact-detail contact-detail--copy" onClick={copyEmail} aria-label="Copy email address">
              <span className="contact-detail__icon">{copied ? <Check size={17} /> : <Mail size={17} />}</span>
              <span><small>EMAIL</small><strong>{copied ? "COPIED TO CLIPBOARD" : EMAIL}</strong></span>
              <span className="contact-detail__action">{copied ? <Check size={16} /> : <Copy size={15} />}</span>
            </button>
            <a className="contact-detail" href="tel:+966577297206"><span className="contact-detail__icon"><Phone size={17} /></span><span><small>PHONE</small><strong>+966 57 729 7206</strong></span><ArrowUpRight className="contact-detail__action" size={15} /></a>
            <div className="contact-detail"><span className="contact-detail__icon"><MapPin size={17} /></span><span><small>LOCATION</small><strong>Riyadh, Saudi Arabia</strong></span></div>
            <div className="contact-socials">
              <ExternalLink href="https://linkedin.com/in/mofadhl"><Linkedin size={16} /> LINKEDIN</ExternalLink>
              <ExternalLink href="https://github.com/cysloop"><Github size={16} /> GITHUB</ExternalLink>
              <ExternalLink href="https://tryhackme.com/p/cysloop"><ShieldCheck size={16} /> TRYHACKME</ExternalLink>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <a className="footer-mark" href="#top">MF<span>.</span></a>
          <span>MOHAMMED FADHL AL-MOSHTAHER <i>·</i> CYBERSECURITY</span>
          <a href="#top">BACK TO TOP <ArrowRight size={14} /></a>
          <small>© {new Date().getFullYear()} · BUILT WITH INTENTION</small>
        </footer>
      </main>
    </div>
  );
}
