import Head from "next/head";
import Link from "next/link";

export default function RemoteJobs() {
  const roles = [
    {
      icon: "💻",
      title: "Remote Software Developer",
      desc: "Build websites, applications, APIs and software products while working remotely.",
    },
    {
      icon: "📊",
      title: "Remote Data Analyst",
      desc: "Analyze data, create dashboards and prepare business reports from anywhere.",
    },
    {
      icon: "🧾",
      title: "Remote MIS Executive",
      desc: "Prepare reports, manage spreadsheets and support business operations remotely.",
    },
    {
      icon: "🎧",
      title: "Customer Support",
      desc: "Help customers through chat, email or calls using remote support systems.",
    },
    {
      icon: "✍️",
      title: "Content Writer",
      desc: "Create articles, website content, documentation and marketing content remotely.",
    },
    {
      icon: "🎨",
      title: "Graphic Designer",
      desc: "Create social media graphics, presentations, marketing materials and digital designs.",
    },
    {
      icon: "📱",
      title: "Digital Marketing",
      desc: "Work on SEO, social media, content marketing, analytics and online campaigns.",
    },
    {
      icon: "🧪",
      title: "QA Tester",
      desc: "Test websites and applications, identify issues and document software defects.",
    },
  ];

  const roadmap = [
    {
      number: "01",
      title: "Choose a Remote Skill",
      desc: "Pick software development, data analytics, support, design, marketing, testing or another suitable path.",
    },
    {
      number: "02",
      title: "Build Core Skills",
      desc: "Learn the tools and fundamentals required for your chosen remote role.",
    },
    {
      number: "03",
      title: "Create Projects",
      desc: "Build practical work samples that demonstrate what you can actually do.",
    },
    {
      number: "04",
      title: "Build Portfolio",
      desc: "Create a professional portfolio or GitHub profile containing your strongest work.",
    },
    {
      number: "05",
      title: "Prepare Resume",
      desc: "Create an ATS-friendly resume focused on relevant skills, projects and achievements.",
    },
    {
      number: "06",
      title: "Improve Communication",
      desc: "Practice written and spoken communication because remote work relies heavily on clear communication.",
    },
    {
      number: "07",
      title: "Search Carefully",
      desc: "Check job descriptions, company information, location requirements and employment terms before applying.",
    },
    {
      number: "08",
      title: "Prepare for Interviews",
      desc: "Practice technical, behavioral and remote-work scenario questions.",
    },
  ];

  const skills = [
    "Communication",
    "Time Management",
    "Email Writing",
    "Microsoft Excel",
    "Google Workspace",
    "SQL",
    "Python",
    "JavaScript",
    "Data Analysis",
    "Customer Support",
    "Digital Marketing",
    "Content Writing",
    "Graphic Design",
    "Git & GitHub",
    "Problem Solving",
    "Remote Collaboration",
  ];

  const remoteTools = [
    {
      icon: "💬",
      title: "Communication",
      desc: "Learn professional chat, email and video-meeting communication.",
    },
    {
      icon: "📅",
      title: "Task Management",
      desc: "Understand task tracking, deadlines, priorities and project workflows.",
    },
    {
      icon: "☁️",
      title: "Cloud Documents",
      desc: "Work efficiently with shared documents, spreadsheets and files.",
    },
    {
      icon: "💻",
      title: "Git & GitHub",
      desc: "Useful for remote software teams and collaborative development.",
    },
    {
      icon: "📊",
      title: "Analytics Tools",
      desc: "Excel, Power BI, SQL and related tools can support remote analytics roles.",
    },
    {
      icon: "🎥",
      title: "Video Meetings",
      desc: "Practice professional online meetings, presentations and screen sharing.",
    },
  ];

  const projects = [
    {
      icon: "📊",
      title: "Business Dashboard",
      desc: "Create an Excel or Power BI dashboard and publish a portfolio case study.",
    },
    {
      icon: "💻",
      title: "Portfolio Website",
      desc: "Build a responsive personal website showcasing your skills and projects.",
    },
    {
      icon: "📝",
      title: "Content Portfolio",
      desc: "Create sample articles, product descriptions or technical documentation.",
    },
    {
      icon: "🎨",
      title: "Design Portfolio",
      desc: "Create sample banners, social media designs, presentations and UI concepts.",
    },
    {
      icon: "🧪",
      title: "QA Testing Portfolio",
      desc: "Document sample test cases, bug reports and testing scenarios.",
    },
    {
      icon: "📈",
      title: "Marketing Project",
      desc: "Create a sample SEO, social media or digital marketing campaign analysis.",
    },
  ];

  const categories = [
    "Software Development",
    "Data Analytics",
    "Customer Support",
    "MIS & Reporting",
    "Content Writing",
    "Digital Marketing",
    "Graphic Design",
    "QA Testing",
    "Virtual Assistant",
    "Online Operations",
  ];

  return (
    <>
      <Head>
        <title>Remote & Work From Home Jobs 2026 | Career Hub 2026</title>

        <meta
          name="description"
          content="Explore remote and work from home career opportunities in 2026. Learn remote skills, build a portfolio, prepare your resume and find suitable remote roles."
        />

        <meta
          name="keywords"
          content="remote jobs 2026, work from home jobs 2026, WFH jobs, remote jobs for freshers, online jobs, remote software jobs, remote data analyst jobs"
        />

        <meta name="robots" content="index,follow" />

        <meta
          property="og:title"
          content="Remote & Work From Home Jobs 2026 | Career Hub 2026"
        />

        <meta
          property="og:description"
          content="Remote career roadmap, work from home skills, projects and job-search guidance."
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
            <Link href="/remote-jobs">Remote Jobs</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}

      <header className="career-header">
        <div className="container">
          <div className="header-badge">🏠 REMOTE / WORK FROM HOME 2026</div>

          <h1>
            Build Your Career
            <br />
            From Anywhere
          </h1>

          <p>
            Explore remote-friendly careers, build practical skills and learn
            how to prepare for work-from-home opportunities.
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
            <h2>What Are Remote Jobs?</h2>

            <p>
              Remote jobs allow employees or contractors to perform their work
              away from a traditional office. Depending on the employer, a
              role may be fully remote, hybrid or location-restricted.
            </p>
          </div>

          <div className="notice-box">
            <strong>💡 Important:</strong> Always check whether a position is
            fully remote, hybrid, time-zone restricted or available only in
            specific countries or cities.
          </div>
        </div>
      </section>

      {/* ROLES */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>Popular Remote Career Options</h2>

            <p>
              Remote opportunities exist across technology, analytics,
              operations, support, design and content.
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
            <h2>Remote Career Roadmap 2026</h2>

            <p>
              Follow these steps to become more prepared for remote
              opportunities.
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
            <h2>Skills for Remote Work</h2>

            <p>
              Combine technical skills with communication, organization and
              remote collaboration skills.
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
            <h2>Remote Work Tools & Skills</h2>

            <p>
              Learn how to collaborate, communicate and manage work effectively
              from a remote environment.
            </p>
          </div>

          <div className="career-grid">
            {remoteTools.map((tool) => (
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
            <h2>Remote Portfolio Project Ideas</h2>

            <p>
              Work samples can make it easier for employers to understand your
              practical abilities.
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

      {/* CATEGORIES */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>Remote Job Categories</h2>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <div className="category-grid-item" key={category}>
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB SEARCH STRATEGY */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>How to Find Legitimate Remote Jobs</h2>
          </div>

          <div className="career-grid">
            <div className="career-card">
              <div className="career-icon">1️⃣</div>

              <h3>Check the Employer</h3>

              <p>
                Research the company and verify that the position is actually
                associated with the stated employer.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">2️⃣</div>

              <h3>Read the Job Description</h3>

              <p>
                Check required skills, work location, time zone, employment
                type and responsibilities.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">3️⃣</div>

              <h3>Never Pay to Apply</h3>

              <p>
                Be cautious of jobs asking applicants for upfront fees,
                deposits or unusual payments to receive employment.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">4️⃣</div>

              <h3>Use Professional Profiles</h3>

              <p>
                Keep your resume, professional profile and portfolio
                consistent and up to date.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">5️⃣</div>

              <h3>Show Your Work</h3>

              <p>
                Share relevant projects, dashboards, writing samples, designs
                or software repositories.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">6️⃣</div>

              <h3>Prepare for Online Interviews</h3>

              <p>
                Test your internet connection, microphone, camera and meeting
                setup before interviews.
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

            <Link href="/cloud-devops" className="category-grid-item">
              ☁️ Cloud & DevOps
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
          <h2>Remote & Work From Home Careers in 2026</h2>

          <p>
            Remote work can be found across software development, data
            analytics, customer support, content, design, marketing, testing
            and business operations. The exact remote arrangement depends on
            the employer and position.
          </p>

          <p>
            Candidates looking for work-from-home opportunities should focus on
            building skills that can be demonstrated online. A portfolio,
            professional resume and clear communication can help demonstrate
            your capabilities.
          </p>

          <p>
            Technical candidates can explore software development, data
            analytics, cybersecurity and cloud careers. Other candidates can
            explore customer support, content writing, digital marketing,
            design and operations.
          </p>

          <p>
            Career Hub 2026 combines job discovery with career roadmaps,
            learning resources, resume preparation and interview preparation.
          </p>
        </div>
      </section>

      {/* DISCLAIMER */}

      <section className="career-section">
        <div className="container">
          <div className="notice-box">
            <strong>⚠️ Scam Awareness:</strong> Be careful with unsolicited
            job offers, requests for money, fake interviews and requests for
            sensitive financial or account information. Verify employers
            independently before proceeding.
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
            <Link href="/remote-jobs">Remote Jobs</Link>
          </p>
        </div>
      </footer>
    </>
  );
}
