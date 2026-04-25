import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:saibharathg2912@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  const skills = [
    { category: 'SIEM & Monitoring', items: ['Splunk', 'Chronicle (Google SIEM)', 'Log Analysis', 'Alert Triage'] },
    { category: 'Network Security', items: ['Wireshark', 'Nmap', 'Firewalls', 'TCP/IP', 'VPNs'] },
    { category: 'Penetration Testing', items: ['Burp Suite', 'Kali Linux', 'Vulnerability Assessment'] },
    { category: 'Systems & Scripting', items: ['Windows Server', 'Linux', 'PowerShell (Basic)', 'Bash (Basic)'] },
    { category: 'Frameworks', items: ['MITRE ATT&CK', 'NIST', 'Cyber Kill Chain', 'Incident Response'] },
  ]

  const projects = [
    {
      title: 'Neural Cryptography Research',
      description: 'Dissertation research on Tree Parity Machine (TPM) based key exchange protocols. Explored quantum-resistant encryption using neural network synchronization as an alternative to traditional Diffie-Hellman methods.',
      tech: ['Cryptography', 'Neural Networks', 'TPM', 'Quantum Security', 'Research'],
      liveUrl: null,
      githubUrl: null,
      icon: '🔐'
    },
    {
      title: 'ChalsHomeDesign',
      description: 'Full-stack home design application with 2D/3D visualization, budget calculator, and PDF export.',
      tech: ['React', 'Three.js', 'Canvas API', 'jsPDF', 'Vercel'],
      liveUrl: 'https://chals-homedesign.vercel.app',
      githubUrl: 'https://github.com/Chals1518/chals-homedesign',
      icon: '🏠'
    },
    {
      title: 'JobHunt IDE',
      description: 'VS Code extension enabling developers to search jobs using Boolean operators without leaving their IDE. Features salary filters, stack-based matching, and application tracking.',
      tech: ['VS Code Extension', 'TypeScript', 'REST APIs', 'Boolean Search'],
      liveUrl: null,
      githubUrl: null,
      icon: '💼',
      comingSoon: true
    }
  ]

  const certifications = [
    { name: 'CompTIA Security+', status: 'In Progress', expected: 'June 2026', icon: '🎯' },
    { name: 'Google Cybersecurity Certificate', status: 'Planned', expected: '2026', icon: '📋' },
  ]

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-brand" onClick={() => scrollToSection('home')}>
          <span className="brand-icon">🛡️</span>
          <span>SBG</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button>
          <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</button>
          <button onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button>
          <button onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button>
          <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-badge">Available for opportunities</div>
          <h1>Sai Bharath Gopinath</h1>
          <h2>Cybersecurity Analyst</h2>
          <p className="hero-tagline">
            Defending digital assets with 2+ years of SOC experience in threat detection, 
            incident response, and penetration testing.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn-primary">View Projects</button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">Contact Me</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Security Tools</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Commitment</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="cyber-shield">
            <div className="shield-ring ring-1"></div>
            <div className="shield-ring ring-2"></div>
            <div className="shield-ring ring-3"></div>
            <div className="shield-center">🛡️</div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a dedicated Cybersecurity Analyst with over 2 years of hands-on experience 
              in Security Operations Centers (SOC) and Network Operations Centers (NOC). 
              My expertise spans threat detection, incident response, and penetration testing.
            </p>
            <p>
              My dissertation research focused on Neural Cryptography using Tree Parity Machines — 
              exploring quantum-resistant key exchange protocols as alternatives to traditional 
              cryptographic methods. This research strengthened my understanding of advanced 
              security concepts and emerging threats.
            </p>
            <p>
              Currently pursuing CompTIA Security+ certification while building innovative 
              security tools. Based in Liverpool, UK, I'm seeking opportunities where I can 
              leverage my experience to protect organizations from cyber threats.
            </p>
            <div className="about-highlights">
              <div className="highlight"><span className="highlight-icon">🎯</span><span>Threat Detection & Analysis</span></div>
              <div className="highlight"><span className="highlight-icon">🔍</span><span>Incident Response</span></div>
              <div className="highlight"><span className="highlight-icon">🛡️</span><span>Penetration Testing</span></div>
              <div className="highlight"><span className="highlight-icon">📊</span><span>SIEM Management</span></div>
            </div>
          </div>
          <div className="about-certs">
            <h3>Certifications</h3>
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <span className="cert-icon">{cert.icon}</span>
                <div className="cert-info">
                  <strong>{cert.name}</strong>
                  <span className={`cert-status ${cert.status === 'In Progress' ? 'in-progress' : 'planned'}`}>
                    {cert.status} • {cert.expected}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.comingSoon ? 'coming-soon' : ''}`}>
              <div className="project-icon">{project.icon}</div>
              {project.comingSoon && <span className="coming-soon-badge">Coming Soon</span>}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live">
                    🌐 Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
                    💻 GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm currently looking for SOC Analyst opportunities. Feel free to reach out!</p>
            <div className="contact-details">
              <a href="mailto:saibharathg2912@gmail.com" className="contact-item">
                <span className="contact-icon">📧</span>
                <span>saibharathg2912@gmail.com</span>
              </a>
              <a href="tel:07454591324" className="contact-item">
                <span className="contact-icon">📱</span>
                <span>07454591324</span>
              </a>
              <a href="https://github.com/Chals1518" target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="contact-icon">💻</span>
                <span>github.com/Chals1518</span>
              </a>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Liverpool, UK</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Sai Bharath Gopinath. All rights reserved.</p>
        <p>Built with React • Deployed on Vercel</p>
      </footer>
    </div>
  )
}

export default App