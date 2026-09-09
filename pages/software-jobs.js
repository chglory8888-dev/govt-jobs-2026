import Head from "next/head";
import Link from "next/link";

export default function SoftwareJobs() {
  const roles = [
    {
      icon: "💻",
      title: "Frontend Developer",
      desc: "Build responsive websites and web applications using HTML, CSS, JavaScript and modern frameworks.",
    },
    {
      icon: "⚙️",
      title: "Backend Developer",
      desc: "Build APIs, databases and server-side applications using Java, Python, Node.js and other technologies.",
    },
    {
      icon: "🚀",
      title: "Full Stack Developer",
      desc: "Work across frontend, backend, databases and APIs to build complete web applications.",
    },
    {
      icon: "⚛️",
      title: "React Developer",
      desc: "Create modern interactive user interfaces using React and related frontend technologies.",
    },
    {
      icon: "🟢",
      title: "Node.js Developer",
      desc: "Build scalable backend services and APIs using JavaScript and Node.js.",
    },
    {
      icon: "🐍",
      title: "Python Developer",
      desc: "Develop applications, automation tools, APIs and data-related solutions using Python.",
    },
    {
      icon: "☕",
      title: "Java Developer",
      desc: "Build enterprise applications, backend services and APIs using Java and Spring.",
    },
    {
      icon: "🧪",
      title: "Software Tester",
      desc: "Test applications, identify bugs and ensure software quality through manual and automated testing.",
    },
  ];

  const roadmap = [
    {
      number: "01",
      title: "Learn Programming Basics",
      desc: "Understand variables, conditions, loops, functions, arrays, objects and problem solving.",
    },
    {
      number: "02",
      title: "Learn Git & GitHub",
      desc: "Learn repositories, commits, branches, pull requests and basic collaboration.",
    },
    {
      number: "03",
      title: "Choose Your Path",
      desc: "Select Frontend, Backend, Full Stack, Python, Java, Testing or another specialization.",
    },
    {
      number: "04",
      title: "Learn Web & APIs",
      desc: "Understand HTTP, REST APIs, JSON, authentication and client-server communication.",
    },
    {
      number: "05",
      title: "Build Projects",
      desc: "Create real applications instead of depending only on tutorials and certificates.",
    },
    {
      number: "06",
      title: "Create Portfolio",
      desc: "Publish projects on GitHub and create a professional portfolio website.",
    },
    {
      number: "07",
      title: "Prepare Resume",
      desc: "Create an ATS-friendly resume highlighting skills, projects and measurable results.",
    },
    {
      number: "08",
      title: "Practice Interviews",
      desc: "Prepare coding, technical, project-based and HR interview questions.",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "SQL",
    "REST APIs",
    "Git & GitHub",
    "TypeScript",
    "Data Structures",
    "Problem Solving",
    "Testing",
    "Debugging",
  ];

  const projects = [
    {
      icon: "🛒",
      title: "E-Commerce Website",
      desc: "Build product listings, search, filters, cart, authentication and checkout UI.",
    },
    {
      icon: "💼",
      title: "Job Portal",
      desc: "Create jobs listing, search, filters, job details and application functionality.",
    },
    {
      icon: "📝",
      title: "Task Management App",
      desc: "Build tasks, categories, status tracking, editing and local or database storage.",
    },
    {
      icon: "💰",
      title: "Expense Tracker",
      desc: "Track income and expenses with categories, summaries and charts.",
    },
    {
      icon: "🌦️",
      title: "Weather App",
      desc: "Create a responsive application that consumes a weather API and displays forecasts.",
    },
    {
      icon: "🎓",
      title: "Learning Platform",
      desc: "Build courses, lessons, progress tracking, quizzes and student dashboards.",
    },
  ];

  const technologies = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "SQL",
    "MongoDB",
    "GitHub",
  ];

  return (
    <>
      <Head>
        <title>IT & Software Careers 2026 | Career Hub 2026</title>

        <meta
          name="description"
          content="Explore IT and Software careers in 2026. Learn Frontend, Backend, Full Stack, React, Next.js, Python, Java, Node.js, Testing and software development skills."
        />

        <meta
          name="keywords"
          content="IT jobs 2026, software jobs 2026, fresher IT jobs, frontend developer, backend developer, full stack developer, React jobs, Python jobs, Java jobs, software testing"
        />

        <meta name="robots" content="index,follow" />

        <meta
          property="og:title"
          content="IT & Software Careers 2026 | Career Hub 2026"
        />

        <meta
          property="og:description"
          content="Learn software development skills, explore IT career paths, build projects and prepare for software jobs."
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
            <Link href="/resume-builder">Resume Builder</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}

      <header className="career-header">
        <div className="container">
          <div className="header-badge">💻 IT & SOFTWARE 2026</div>

          <h1>
            Build Your Career in
            <br />
            IT & Software
          </h1>

          <p>
            Learn programming, build real-world projects and prepare for
            software development and IT careers.
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
            <h2>Start Your Software Career</h2>

            <p>
              The IT industry offers multiple career paths including frontend,
              backend, full stack development, testing, cloud, cybersecurity,
              data and AI.
            </p>
          </div>

          <div className="notice-box">
            <strong>💡 Beginner Tip:</strong> Don't try to learn every
            programming language. Pick one career path, learn its core
            technologies and build practical projects.
          </div>
        </div>
      </section>

      {/* CAREER ROLES */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>Popular IT & Software Careers</h2>

            <p>Explore different roles and choose the path that suits you.</p>
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
            <h2>Software Developer Roadmap 2026</h2>

            <p>
              Follow a practical learning path from programming basics to your
              first software job.
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
            <h2>Important IT Skills</h2>

            <p>
              Focus on fundamentals first and then specialize in your chosen
              technology.
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

      {/* TECHNOLOGIES */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>Technologies to Explore</h2>

            <p>
              You can gradually add these technologies as your skills improve.
            </p>
          </div>

          <div className="career-grid">
            {technologies.map((technology) => (
              <div className="career-card" key={technology}>
                <div className="career-icon">🛠️</div>

                <h3>{technology}</h3>

                <p>
                  Learn the fundamentals and use it in at least one practical
                  project.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="resources-section">
        <div className="container">
          <div className="section-heading">
            <h2>Software Project Ideas</h2>

            <p>
              Build projects that demonstrate your ability to solve real
              problems.
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

      {/* FRESHER STRATEGY */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>How to Get Your First IT Job</h2>
          </div>

          <div className="career-grid">
            <div className="career-card">
              <div className="career-icon">1️⃣</div>

              <h3>Choose One Path</h3>

              <p>
                Decide whether you want to focus on frontend, backend, full
                stack, testing or another IT specialization.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">2️⃣</div>

              <h3>Learn the Fundamentals</h3>

              <p>
                Understand programming, databases, APIs, Git and problem
                solving instead of only memorizing syntax.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">3️⃣</div>

              <h3>Build Projects</h3>

              <p>
                Create 3–5 projects that demonstrate your practical
                development skills.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">4️⃣</div>

              <h3>Publish on GitHub</h3>

              <p>
                Keep your source code organized and write clear README files
                explaining your projects.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">5️⃣</div>

              <h3>Build Your Resume</h3>

              <p>
                Highlight your technical skills, projects, education and
                achievements using an ATS-friendly format.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">6️⃣</div>

              <h3>Apply & Practice</h3>

              <p>
                Apply consistently to suitable fresher and junior positions
                while practicing technical interviews.
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

            <Link href="/cybersecurity" className="category-grid-item">
              🔐 Cybersecurity
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
          <h2>IT & Software Careers in 2026</h2>

          <p>
            Software development is a broad career field with opportunities in
            frontend development, backend development, full stack engineering,
            testing, APIs, databases and application development.
          </p>

          <p>
            Beginners can start with programming fundamentals and gradually
            learn frameworks and tools required for their chosen role. Building
            practical applications is an important part of demonstrating
            software development ability.
          </p>

          <p>
            A strong entry-level portfolio can include responsive websites,
            dashboards, APIs, task management applications, e-commerce
            applications and other useful projects.
          </p>

          <p>
            Career Hub 2026 connects job discovery with career roadmaps,
            learning resources, resume preparation and interview preparation.
          </p>
        </div>
      </section>

      {/* DISCLAIMER */}

      <section className="career-section">
        <div className="container">
          <div className="notice-box">
            <strong>⚠️ Career Information:</strong> Job requirements vary by
            employer. Always check the official job description before
            applying.
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
            <Link href="/software-jobs">IT & Software</Link>
          </p>
        </div>
      </footer>
    </>
  );
    }
