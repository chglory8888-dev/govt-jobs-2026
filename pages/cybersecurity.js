import Head from "next/head";
import Link from "next/link";

export default function Cybersecurity() {
  const roles = [
    {
      icon: "🛡️",
      title: "Cybersecurity Analyst",
      desc: "Monitor security events, investigate threats and help protect systems and data.",
    },
    {
      icon: "🚨",
      title: "SOC Analyst",
      desc: "Monitor security alerts, investigate suspicious activity and respond to incidents.",
    },
    {
      icon: "🔐",
      title: "Security Engineer",
      desc: "Design, implement and maintain security controls across IT environments.",
    },
    {
      icon: "🔎",
      title: "Security Tester",
      desc: "Identify vulnerabilities and help organizations improve application and system security.",
    },
    {
      icon: "🌐",
      title: "Network Security Analyst",
      desc: "Protect networks using firewalls, monitoring, access controls and security technologies.",
    },
    {
      icon: "☁️",
      title: "Cloud Security Analyst",
      desc: "Help secure cloud infrastructure, identities, workloads and data.",
    },
  ];

  const roadmap = [
    {
      number: "01",
      title: "Learn Computer Basics",
      desc: "Understand operating systems, files, processes, hardware and basic troubleshooting.",
    },
    {
      number: "02",
      title: "Learn Networking",
      desc: "Study TCP/IP, DNS, HTTP, ports, protocols, routing and network fundamentals.",
    },
    {
      number: "03",
      title: "Learn Linux",
      desc: "Practice Linux commands, permissions, processes, users and basic system administration.",
    },
    {
      number: "04",
      title: "Learn Security Fundamentals",
      desc: "Understand authentication, authorization, encryption, vulnerabilities and common attacks.",
    },
    {
      number: "05",
      title: "Practice Security Labs",
      desc: "Use legal training environments to practice investigation, defensive security and testing.",
    },
    {
      number: "06",
      title: "Learn Security Tools",
      desc: "Become familiar with tools used for monitoring, network analysis and vulnerability assessment.",
    },
    {
      number: "07",
      title: "Build a Portfolio",
      desc: "Document labs, defensive projects, scripts, reports and security research.",
    },
    {
      number: "08",
      title: "Prepare for Interviews",
      desc: "Practice networking, Linux, security concepts, incident response and scenario-based questions.",
    },
  ];

  const skills = [
    "Networking",
    "TCP/IP",
    "Linux",
    "Windows",
    "Cybersecurity Fundamentals",
    "Threat Detection",
    "Incident Response",
    "Security Monitoring",
    "Authentication",
    "Encryption",
    "Vulnerability Management",
    "Firewalls",
    "SIEM Fundamentals",
    "Python",
    "SQL",
    "Problem Solving",
  ];

  const tools = [
    {
      icon: "📡",
      title: "Wireshark",
      desc: "Learn network traffic analysis and understand how protocols communicate.",
    },
    {
      icon: "🖥️",
      title: "Linux",
      desc: "Practice command-line operations, permissions, processes and system administration.",
    },
    {
      icon: "📊",
      title: "SIEM Platforms",
      desc: "Learn how security events are collected, searched, correlated and investigated.",
    },
    {
      icon: "🔍",
      title: "Nmap",
      desc: "Understand network discovery and service identification in authorized environments.",
    },
    {
      icon: "🐍",
      title: "Python",
      desc: "Use Python for automation, log processing and security-related data analysis.",
    },
    {
      icon: "📝",
      title: "Security Reports",
      desc: "Learn to document findings, evidence, impact and recommended remediation.",
    },
  ];

  const projects = [
    {
      icon: "🚨",
      title: "Security Log Analyzer",
      desc: "Create a project that parses sample logs and identifies unusual authentication patterns.",
    },
    {
      icon: "📊",
      title: "SOC Dashboard",
      desc: "Build a dashboard using sample security events, severity levels and incident statistics.",
    },
    {
      icon: "🔐",
      title: "Password Security Demo",
      desc: "Create a safe educational project demonstrating password hashing and authentication concepts.",
    },
    {
      icon: "🌐",
      title: "Network Monitoring Lab",
      desc: "Use an authorized lab environment to study network traffic and document observations.",
    },
    {
      icon: "🐍",
      title: "Security Automation",
      desc: "Build a Python script that processes sample logs or performs a defensive automation task.",
    },
    {
      icon: "📋",
      title: "Incident Response Report",
      desc: "Create a simulated incident and document detection, investigation, containment and recovery.",
    },
  ];

  const careerPaths = [
    "SOC Analyst",
    "Cybersecurity Analyst",
    "Security Engineer",
    "Cloud Security",
    "Network Security",
    "Application Security",
    "GRC Analyst",
    "Incident Response",
  ];

  return (
    <>
      <Head>
        <title>Cybersecurity Careers 2026 | Career Hub 2026</title>

        <meta
          name="description"
          content="Explore Cybersecurity careers in 2026. Learn networking, Linux, security fundamentals, SOC, incident response, cloud security and cybersecurity skills."
        />

        <meta
          name="keywords"
          content="Cybersecurity jobs 2026, SOC Analyst jobs, Security Analyst, Cybersecurity careers, Network Security, Cloud Security, Ethical Hacking, Cybersecurity roadmap"
        />

        <meta name="robots" content="index,follow" />

        <meta
          property="og:title"
          content="Cybersecurity Careers 2026 | Career Hub 2026"
        />

        <meta
          property="og:description"
          content="Cybersecurity roadmap, skills, tools, projects and career paths for beginners."
        />

        <meta property="og:type" content="website" />
      </Head>

      {/* NAVIGATION */}

      <nav className="top-nav">
        <div className="container nav-inner">
          <Link href="/" className="nav-logo">
            Career Hub 2026
          </Link>

          <div className="nav-links">
            <Link href="/">Jobs</Link>
            <Link href="/ai-careers">AI Careers</Link>
            <Link href="/data-analytics">Data Analytics</Link>
            <Link href="/software-jobs">IT & Software</Link>
            <Link href="/cybersecurity">Cybersecurity</Link>
            <Link href="/resume-builder">Resume Builder</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}

      <header className="career-header">
        <div className="container">
          <div className="header-badge">🔐 CYBERSECURITY 2026</div>

          <h1>
            Build Your Career in
            <br />
            Cybersecurity
          </h1>

          <p>
            Learn networking, Linux, security fundamentals and defensive
            security skills to start your cybersecurity career.
          </p>

          <div className="hero-buttons">
            <Link href="/" className="hero-primary">
              🔎 Find Jobs
            </Link>

            <Link href="/resume-builder" className="hero-secondary">
              📄 Build Resume
            </Link>
          </div>
        </div>
      </header>

      {/* INTRO */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>What is Cybersecurity?</h2>

            <p>
              Cybersecurity focuses on protecting computers, networks,
              applications, systems and data from unauthorized access,
              disruption and security threats.
            </p>
          </div>

          <div className="notice-box">
            <strong>💡 Beginner Tip:</strong> Start with networking, Linux and
            security fundamentals. You do not need to learn every security
            tool before applying for your first job.
          </div>
        </div>
      </section>

      {/* CAREER ROLES */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>Popular Cybersecurity Careers</h2>

            <p>
              Cybersecurity has multiple career paths ranging from monitoring
              and incident response to engineering and cloud security.
            </p>
          </div>

          <div className="career-grid">
            {roles.map((role) => (
              <div className="career-card" key={role.title}>
                <div className="career-icon">{role.icon}</div>

                <h3>{role.title}</h3>

                <p>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>Cybersecurity Roadmap 2026</h2>

            <p>
              Follow this practical roadmap from beginner fundamentals to
              entry-level cybersecurity roles.
            </p>
          </div>

          <div className="career-grid">
            {roadmap.map((step) => (
              <div className="career-card" key={step.number}>
                <div className="career-icon">{step.number}</div>

                <h3>{step.title}</h3>

                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section className="skills-section">
        <div className="container">
          <div className="section-heading">
            <h2>Important Cybersecurity Skills</h2>

            <p>
              Build strong fundamentals before moving into advanced
              specialization.
            </p>
          </div>

          <div className="category-grid">
            {skills.map((skill) => (
              <div className="category-grid-item" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>Cybersecurity Tools & Practice</h2>

            <p>
              Learn tools through legal labs, sample datasets and authorized
              environments.
            </p>
          </div>

          <div className="career-grid">
            {tools.map((tool) => (
              <div className="career-card" key={tool.title}>
                <div className="career-icon">{tool.icon}</div>

                <h3>{tool.title}</h3>

                <p>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="resources-section">
        <div className="container">
          <div className="section-heading">
            <h2>Cybersecurity Project Ideas</h2>

            <p>
              Create safe, defensive projects that demonstrate your practical
              knowledge.
            </p>
          </div>

          <div className="resource-grid">
            {projects.map((project) => (
              <div className="career-card" key={project.title}>
                <div className="career-icon">{project.icon}</div>

                <h3>{project.title}</h3>

                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER PATHS */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>Cybersecurity Career Paths</h2>

            <p>
              After learning the fundamentals, you can specialize in one of
              these areas.
            </p>
          </div>

          <div className="category-grid">
            {careerPaths.map((path) => (
              <div className="category-grid-item" key={path}>
                {path}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRESHER STRATEGY */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>How to Get Your First Cybersecurity Job</h2>
          </div>

          <div className="career-grid">
            <div className="career-card">
              <div className="career-icon">1️⃣</div>

              <h3>Build Fundamentals</h3>

              <p>
                Learn networking, Linux, operating systems and core
                cybersecurity concepts.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">2️⃣</div>

              <h3>Practice Labs</h3>

              <p>
                Use authorized cybersecurity training environments and
                document what you learn.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">3️⃣</div>

              <h3>Build Projects</h3>

              <p>
                Create defensive projects involving logs, dashboards,
                monitoring, automation and incident response.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">4️⃣</div>

              <h3>Create Portfolio</h3>

              <p>
                Publish project documentation, scripts and reports on GitHub
                without exposing sensitive information.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">5️⃣</div>

              <h3>Prepare Resume</h3>

              <p>
                Highlight cybersecurity skills, projects, labs,
                certifications and relevant technical knowledge.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">6️⃣</div>

              <h3>Apply for Entry Roles</h3>

              <p>
                Search for SOC Analyst, Security Analyst, IT Security and
                related junior positions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CAREERS */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>Explore More Career Paths</h2>
          </div>

          <div className="category-grid">
            <Link href="/ai-careers" className="category-grid-item">
              🤖 AI Careers
            </Link>

            <Link href="/data-analytics" className="category-grid-item">
              📊 Data Analytics
            </Link>

            <Link href="/software-jobs" className="category-grid-item">
              💻 IT & Software
            </Link>

            <Link href="/cloud-devops" className="category-grid-item">
              ☁️ Cloud & DevOps
            </Link>

            <Link href="/remote-jobs" className="category-grid-item">
              🏠 Remote Jobs
            </Link>

            <Link href="/resume-builder" className="category-grid-item">
              📄 Resume Builder
            </Link>

            <Link href="/interview-prep" className="category-grid-item">
              🎤 Interview Preparation
            </Link>

            <Link href="/" className="category-grid-item">
              🏛️ Government Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}

      <section className="seo-content">
        <div className="container">
          <h2>Cybersecurity Careers in 2026</h2>

          <p>
            Cybersecurity is an important technology career covering network
            security, security monitoring, incident response, vulnerability
            management, application security, cloud security and governance.
          </p>

          <p>
            Beginners can start by learning computer networks, Linux, Windows,
            authentication, security principles and basic scripting. Practical
            labs can help candidates understand how security concepts work in
            real environments.
          </p>

          <p>
            A cybersecurity portfolio can include security log analysis,
            monitoring dashboards, defensive automation, incident response
            reports and documented training-lab exercises.
          </p>

          <p>
            Career Hub 2026 brings together career resources, job discovery,
            learning roadmaps, resume preparation and interview preparation.
          </p>
        </div>
      </section>

      {/* SAFETY NOTE */}

      <section className="career-section">
        <div className="container">
          <div className="notice-box">
            <strong>🔒 Practice Safely:</strong> Only test systems, networks
            and applications that you own or have explicit permission to test.
            Use authorized labs for cybersecurity practice.
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer>
        <div className="container">
          <p>
            © 2026 Career Hub 2026. Jobs, Skills, Careers & Learning
            Resources.
          </p>

          <p>
            <Link href="/">Home</Link> ·{" "}
            <Link href="/ai-careers">AI Careers</Link> ·{" "}
            <Link href="/data-analytics">Data Analytics</Link> ·{" "}
            <Link href="/software-jobs">IT & Software</Link> ·{" "}
            <Link href="/cybersecurity">Cybersecurity</Link>
          </p>
        </div>
      </footer>
    </>
  );
    }
