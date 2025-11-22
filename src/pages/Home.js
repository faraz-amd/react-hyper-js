import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [expandedCards, setExpandedCards] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formMessage, setFormMessage] = useState({ text: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const revealRefs = useRef([]);

  const experienceData = [
    {
      id: 1,
      title: 'Senior Test Engineer',
      company: 'Coforge Limited',
      period: '2022 – 2023',
      description:
        'Developed robust automation scripts for regression testing, reducing manual testing efforts by 70% and enabling faster release cycles.',
      details: [
        'Led automation framework development using Selenium and Java',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
        'Mentored junior engineers on best practices for test automation',
        'Created reusable test utilities increasing code reusability by 60%',
      ],
      tags: ['Automation', 'CI/CD', 'Regression Testing'],
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'KGS Advisors LLP',
      period: '2021 – Present',
      description:
        'Led a team in developing automated testing frameworks, resulting in 40% increase in testing efficiency and 50% increase in test coverage.',
      details: [
        'Architected end-to-end testing framework supporting multiple projects',
        'Established testing standards and guidelines for the engineering team',
        'Integrated API testing with RestAssured, improving coverage by 50%',
        'Collaborated with DevOps to streamline CI/CD processes',
      ],
      tags: ['Team Leadership', 'Framework Development', 'Quality Assurance'],
    },
    {
      id: 3,
      title: 'Test Engineer',
      company: 'Radoratory Technologies',
      period: '2019 – 2021',
      description:
        'Designed and implemented scalable code for web applications, leading to 20% increase in user engagement within the first month.',
      details: [
        'Developed comprehensive test suites for web applications',
        'Optimized test execution time by implementing parallel test runs',
        'Created test documentation and training materials for the team',
        'Identified and resolved critical bugs before production releases',
      ],
      tags: ['Web Development', 'Test Design', 'Performance'],
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || !window.IntersectionObserver) {
      revealRefs.current.forEach((el) => {
        if (el) el.classList.add('fade-in');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleCard = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopyEmail = async () => {
    const email = 'faraz.ahmad@live.in';
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormMessage({ text: '', type: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormMessage({ text: '', type: '' });

    const errors = [];
    if (!formData.name.trim()) errors.push('Name is required');
    if (!formData.email.trim()) {
      errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    if (!formData.message.trim()) errors.push('Message is required');

    if (errors.length > 0) {
      setFormMessage({ text: errors.join('. '), type: 'error' });
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormMessage({
        text: "Thank you! Your message has been sent. I'll get back to you soon.",
        type: 'success',
      });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormMessage({ text: '', type: '' }), 5000);
    }, 1500);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
      const targetPosition = element.offsetTop - navHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main id="main-content" className="landing-page">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-badge">Automation & Software Engineering</div>
          <h1 className="hero-title">
            Building Efficient
            <span className="gradient-text">Testing Solutions</span>
          </h1>
          <p className="hero-description">
            Senior Test Engineer passionate about automation frameworks, CI/CD
            pipelines, and creating robust software testing strategies that
            drive quality and efficiency.
          </p>
          <div className="hero-actions">
            <Link to="/resume" className="btn btn-primary">
              View Resume
            </Link>
            <Link to="/components" className="btn btn-secondary">
              Explore Components
            </Link>
          </div>
          <p className="hero-note">
            Building a prototype or automation demo? Remix the component library
            to speed up your workflow while keeping the visuals on brand.
            <Link to="/components">Browse the toolkit →</Link>
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">70%</div>
              <div className="stat-label">Testing Efficiency Gain</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50%</div>
              <div className="stat-label">Test Coverage Increase</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-title">automation.test.js</span>
            </div>
            <div className="code-content">
              <pre>
                <code>
                  <span className="code-keyword">describe</span>(
                  <span className="code-string">'E2E Test Suite'</span>, ()
                  =&gt; {'{'}
                  {'\n'} <span className="code-keyword">it</span>(
                  <span className="code-string">
                    'should automate workflows'
                  </span>
                  , <span className="code-keyword">async</span> () =&gt; {'{'}
                  {'\n'} <span className="code-keyword">await</span> page.goto(
                  <span className="code-string">'/dashboard'</span>);
                  {'\n'} <span className="code-keyword">await</span>{' '}
                  expect(page).toHaveTitle(/
                  <span className="code-string">Automation</span>/);
                  {'\n'} {'}'});
                  {'\n'}
                  {'}'});
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Passionate About Automation</h2>
          </div>
          <div
            className="about-content reveal"
            ref={(el) => (revealRefs.current[0] = el)}
          >
            <div className="about-text">
              <p>
                I'm a Senior Test Engineer with over 4 years of experience
                specializing in test automation, framework development, and
                CI/CD implementation. My passion lies in creating efficient,
                scalable testing solutions that reduce manual effort and
                accelerate delivery cycles.
              </p>
              <p>
                I've successfully led teams in developing automated testing
                frameworks, resulting in significant improvements in testing
                efficiency and coverage. My expertise spans across multiple
                technologies including Selenium, Playwright, API testing, and
                continuous integration pipelines, and I share those learnings
                through a reusable component library creators can drop into
                their own workflows.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">⚡</div>
                  <div>
                    <h3>Performance</h3>
                    <p>70% reduction in manual testing efforts</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🚀</div>
                  <div>
                    <h3>Innovation</h3>
                    <p>Built scalable automation frameworks</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🎯</div>
                  <div>
                    <h3>Quality</h3>
                    <p>25% reduction in post-release issues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Technical Expertise</span>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>
          <div className="skills-grid">
            <div
              className="skill-category reveal"
              ref={(el) => (revealRefs.current[1] = el)}
            >
              <h3 className="skill-category-title">Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Bash</span>
              </div>
            </div>
            <div
              className="skill-category reveal"
              ref={(el) => (revealRefs.current[2] = el)}
            >
              <h3 className="skill-category-title">Testing Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Selenium</span>
                <span className="skill-tag">Playwright</span>
                <span className="skill-tag">Cucumber</span>
                <span className="skill-tag">RestAssured</span>
                <span className="skill-tag">Postman</span>
              </div>
            </div>
            <div
              className="skill-category reveal"
              ref={(el) => (revealRefs.current[3] = el)}
            >
              <h3 className="skill-category-title">DevOps & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Jenkins</span>
              </div>
            </div>
            <div
              className="skill-category reveal"
              ref={(el) => (revealRefs.current[4] = el)}
            >
              <h3 className="skill-category-title">Methodologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">Agile</span>
                <span className="skill-tag">Test Automation</span>
                <span className="skill-tag">API Testing</span>
                <span className="skill-tag">E2E Testing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section id="projects" className="experience">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Professional Journey</span>
            <h2 className="section-title">Key Achievements</h2>
          </div>
          <div className="experience-grid">
            {experienceData.map((exp, index) => (
              <div
                key={exp.id}
                className={`experience-card reveal ${
                  expandedCards[exp.id] ? 'is-expanded' : ''
                }`}
                ref={(el) => (revealRefs.current[5 + index] = el)}
              >
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <span className="experience-company">{exp.company}</span>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                {expandedCards[exp.id] && (
                  <div className="experience-details">
                    <ul>
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="experience-tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <button
                  className="expand-toggle"
                  aria-expanded={expandedCards[exp.id]}
                  onClick={() => toggleCard(exp.id)}
                >
                  {expandedCards[exp.id] ? 'Show Less' : 'Learn More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Let's Build Something Great Together</h2>
            <p className="cta-description">
              Interested in automation solutions or software engineering? Let's
              connect and discuss how we can create efficient, scalable testing
              strategies.
            </p>
            <div className="cta-actions">
              <Link to="/resume" className="btn btn-primary btn-large">
                View Full Resume
              </Link>
              <button
                className={`btn btn-secondary btn-large ${
                  copied ? 'copied' : ''
                }`}
                title="Copy email to clipboard"
                onClick={handleCopyEmail}
              >
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            </div>
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={
                      formMessage.type === 'error' && !formData.name
                        ? 'form-error'
                        : ''
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={
                      formMessage.type === 'error' && !formData.email
                        ? 'form-error'
                        : ''
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className={
                      formMessage.type === 'error' && !formData.message
                        ? 'form-error'
                        : ''
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {formMessage.text && (
                  <div className={`form-message form-${formMessage.type}`}>
                    {formMessage.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
