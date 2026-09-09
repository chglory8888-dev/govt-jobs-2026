import Head from "next/head";
import Link from "next/link";

export default function CloudDevOps() {
  const roles = [
    {
      icon: "☁️",
      title: "Cloud Engineer",
      desc: "Design, configure and maintain cloud infrastructure, services and environments.",
    },
    {
      icon: "⚙️",
      title: "DevOps Engineer",
      desc: "Automate development, testing, deployment and infrastructure workflows.",
    },
    {
      icon: "🚀",
      title: "Cloud DevOps Engineer",
      desc: "Combine cloud infrastructure with automation, CI/CD and application deployment.",
    },
    {
      icon: "🔧",
      title: "Site Reliability Engineer",
      desc: "Improve application reliability, availability, monitoring and operational performance.",
    },
    {
      icon: "📦",
      title: "Cloud Support Engineer",
      desc: "Troubleshoot cloud services, infrastructure and technical issues.",
    },
    {
      icon: "🔐",
      title: "Cloud Security Engineer",
      desc: "Help secure cloud infrastructure, identities, workloads and access controls.",
    },
  ];

  const roadmap = [
    {
      number: "01",
      title: "Learn Linux",
      desc: "Understand files, permissions, processes, networking and command-line administration.",
    },
    {
      number: "02",
      title: "Learn Networking",
      desc: "Study IP addresses, DNS, HTTP, ports, firewalls and basic network architecture.",
    },
    {
      number: "03",
      title: "Learn Cloud Basics",
      desc: "Understand compute, storage, databases, networking, IAM and cloud regions.",
    },
    {
      number: "04",
      title: "Choose a Cloud",
      desc: "Start with AWS, Microsoft Azure or Google Cloud and learn its core services.",
    },
    {
      number: "05",
      title: "Learn Git",
      desc: "Use Git and GitHub for source control, collaboration and deployment workflows.",
    },
    {
      number: "06",
      title: "Learn Docker",
      desc: "Understand containers, images, Dockerfiles, volumes and container networking.",
    },
    {
      number: "07",
      title: "Learn CI/CD",
      desc: "Automate build, testing and deployment using modern CI/CD pipelines.",
    },
    {
      number: "08",
      title: "Learn Kubernetes",
      desc: "Understand containers, pods, deployments, services and basic orchestration.",
    },
    {
      number: "09",
      title: "Infrastructure as Code",
      desc: "Learn infrastructure automation concepts using tools such as Terraform.",
    },
    {
      number: "10",
      title: "Build Projects",
      desc: "Deploy practical applications and document the architecture in your portfolio.",
    },
  ];

  const skills = [
    "Linux",
    "Networking",
    "AWS",
    "Microsoft Azure",
    "Google Cloud",
    "Git",
    "GitHub",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Terraform",
    "Python",
    "Bash",
    "Monitoring",
    "Cloud Security",
    "Infrastructure",
  ];

  const tools = [
    {
      icon: "☁️",
      title: "AWS",
      desc: "Learn core services such as compute, storage, databases, networking and identity.",
    },
    {
      icon: "🔷",
      title: "Microsoft Azure",
      desc: "Explore cloud infrastructure, storage, networking, identity and application services.",
    },
    {
      icon: "🌐",
      title: "Google Cloud",
      desc: "Learn cloud compute, storage, networking, databases and deployment concepts.",
    },
    {
      icon: "🐳",
      title: "Docker",
      desc: "Package applications into portable containers and understand container workflows.",
    },
    {
      icon: "☸️",
      title: "Kubernetes",
      desc: "Learn the fundamentals of container orchestration and application deployment.",
    },
    {
      icon: "🏗️",
      title: "Terraform",
      desc: "Learn Infrastructure as Code concepts and reproducible infrastructure management.",
    },
  ];

  const projects = [
    {
      icon: "🌐",
      title: "Deploy a Web Application",
      desc: "Deploy a simple application to a cloud platform and document its architecture.",
    },
    {
      icon: "🐳",
      title: "Dockerized Application",
      desc: "Containerize a web application and run it using Docker.",
    },
    {
      icon: "🔄",
      title: "CI/CD Pipeline",
      desc: "Create a pipeline that builds, tests and deploys a sample application automatically.",
    },
    {
      icon: "☸️",
      title: "Kubernetes Deployment",
      desc: "Deploy a simple containerized application to a Kubernetes learning environment.",
    },
    {
      icon: "🏗️",
      title: "Terraform Infrastructure",
      desc: "Create a learning project demonstrating Infrastructure as Code concepts.",
    },
    {
      icon: "📊",
      title: "Cloud Monitoring",
      desc: "Build a monitoring setup for application or infrastructure metrics and alerts.",
    },
  ];

  const paths = [
    "AWS Cloud Engineer",
    "Azure Cloud Engineer",
    "DevOps Engineer",
    "Cloud Support Engineer",
    "Site Reliability Engineer",
    "Cloud Security",
    "Platform Engineer",
    "Infrastructure Engineer",
  ];

  return (
    <>
      <Head>
        <title>Cloud & DevOps Careers 2026 | Career Hub 2026</title>

        <meta
          name="description"
          content="Explore Cloud and DevOps careers in 2026. Learn AWS, Azure, Google Cloud, Linux, Docker, Kubernetes, CI/CD, Terraform and cloud engineering."
        />

        <meta
          name="keywords"
          content="Cloud jobs 2026, DevOps jobs 2026, AWS jobs, Azure jobs, Google Cloud jobs, Cloud Engineer, DevOps Engineer, Kubernetes, Docker, Terraform"
        />

        <meta name="robots" content="index,follow" />

        <meta
          property="og:title"
          content="Cloud & DevOps Careers 2026 | Career Hub 2026"
        />

        <meta
          property="og:description"
          content="Learn Cloud and DevOps skills, follow a roadmap, build projects and prepare for cloud careers."
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
            <Link href="/cloud-devops">Cloud & DevOps</Link>
            <Link href="/resume-builder">Resume Builder</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}

      <header className="career-header">
        <div className="container">
          <div className="header-badge">☁️ CLOUD & DEVOPS 2026</div>

          <h1>
            Build Your Career in
            <br />
            Cloud & DevOps
          </h1>

          <p>
            Learn Linux, cloud platforms, Docker, Kubernetes, CI/CD and
            infrastructure automation.
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
            <h2>What is Cloud & DevOps?</h2>

            <p>
              Cloud computing provides on-demand infrastructure and services,
              while DevOps focuses on collaboration, automation, continuous
              delivery and reliable software operations.
            </p>
          </div>

          <div className="notice-box">
            <strong>💡 Beginner Tip:</strong> Start with Linux and networking,
            then learn one cloud platform. After that, add Git, Docker and
            CI/CD before moving into Kubernetes and Infrastructure as Code.
          </div>
        </div>
      </section>

      {/* ROLES */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>Popular Cloud & DevOps Careers</h2>

            <p>
              Explore infrastructure, automation, reliability, support and
              cloud security roles.
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
            <h2>Cloud & DevOps Roadmap 2026</h2>

            <p>
              Follow a practical path from infrastructure fundamentals to
              cloud and DevOps projects.
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
            <h2>Important Cloud & DevOps Skills</h2>

            <p>
              Build strong infrastructure fundamentals and gradually add
              automation technologies.
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
            <h2>Cloud & DevOps Technologies</h2>

            <p>
              Learn practical usage instead of trying to memorize every
              service.
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
            <h2>Cloud & DevOps Project Ideas</h2>

            <p>
              Projects can demonstrate that you understand deployment,
              automation and infrastructure concepts.
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
            <h2>Cloud Career Paths</h2>

            <p>
              After learning the fundamentals, choose a specialization.
            </p>
          </div>

          <div className="category-grid">
            {paths.map((path) => (
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
            <h2>How to Start a Cloud or DevOps Career</h2>
          </div>

          <div className="career-grid">
            <div className="career-card">
              <div className="career-icon">1️⃣</div>

              <h3>Learn Linux</h3>

              <p>
                Become comfortable with the Linux command line, permissions,
                processes and basic administration.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">2️⃣</div>

              <h3>Learn Networking</h3>

              <p>
                Understand DNS, HTTP, TCP/IP, ports, routing and basic
                networking concepts.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">3️⃣</div>

              <h3>Choose One Cloud</h3>

              <p>
                Start with AWS, Azure or Google Cloud and understand its core
                infrastructure services.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">4️⃣</div>

              <h3>Learn Automation</h3>

              <p>
                Add Git, scripting, Docker and CI/CD to understand automated
                software delivery.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">5️⃣</div>

              <h3>Build Projects</h3>

              <p>
                Deploy applications and create infrastructure projects that
                demonstrate practical skills.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">6️⃣</div>

              <h3>Apply for Roles</h3>

              <p>
                Search for Cloud Support, Junior Cloud Engineer, DevOps and
                infrastructure-related entry-level positions.
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

            <Link href="/cybersecurity" className="category-grid-item">
              🔐 Cybersecurity
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

      {/* SEO */}

      <section className="seo-content">
        <div className="container">
          <h2>Cloud & DevOps Careers in 2026</h2>

          <p>
            Cloud and DevOps careers cover infrastructure, application
            deployment, automation, monitoring, reliability and cloud security.
            Organizations use cloud platforms to run applications and
            services at different scales.
          </p>

          <p>
            Beginners can build a strong foundation by learning Linux,
            networking and cloud fundamentals. Git, Docker, CI/CD and
            Infrastructure as Code can then be added progressively.
          </p>

          <p>
            Practical projects can include deploying applications, creating
            containerized services, building CI/CD pipelines, monitoring
            infrastructure and demonstrating Infrastructure as Code.
          </p>

          <p>
            Career Hub 2026 combines job discovery with career roadmaps,
            learning resources, resume preparation and interview preparation.
          </p>
        </div>
      </section>

      {/* SAFETY */}

      <section className="career-section">
        <div className="container">
          <div className="notice-box">
            <strong>⚠️ Important:</strong> Practice cloud and infrastructure
            technologies in your own accounts or authorized environments.
            Always review cloud costs and security settings before deploying
            resources.
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
            <Link href="/cybersecurity">Cybersecurity</Link> ·{" "}
            <Link href="/cloud-devops">Cloud & DevOps</Link>
          </p>
        </div>
      </footer>
    </>
  );
    }
