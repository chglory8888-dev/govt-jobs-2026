import Head from "next/head";
import Link from "next/link";

export default function CareerRoadmaps() {
  const roadmaps = [
    {
      icon: "📊",
      title: "Data Analyst",
      description:
        "Learn Excel, SQL, Power BI, Python and data visualization to become job-ready.",
      steps: [
        "Excel",
        "SQL",
        "Power BI",
        "Statistics",
        "Python",
        "Projects",
      ],
    },
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description:
        "Build a foundation in Python, Machine Learning and Generative AI.",
      steps: [
        "Python",
        "Statistics",
        "Machine Learning",
        "Deep Learning",
        "Generative AI",
        "Projects",
      ],
    },
    {
      icon: "💻",
      title: "Software Developer",
      description:
        "Follow a practical path from programming basics to full-stack development.",
      steps: [
        "Programming",
        "Git & GitHub",
        "HTML/CSS",
        "JavaScript",
        "React",
        "Projects",
      ],
    },
    {
      icon: "🔐",
      title: "Cybersecurity",
      description:
        "Learn networking, Linux, security fundamentals and SOC concepts.",
      steps: [
        "Networking",
        "Linux",
        "Security Basics",
        "Ethical Hacking",
        "SOC",
        "Projects",
      ],
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description:
        "Build cloud and deployment skills using modern DevOps tools.",
      steps: [
        "Linux",
        "Git",
        "Cloud Basics",
        "AWS/Azure",
        "Docker",
        "DevOps",
      ],
    },
    {
      icon: "📈",
      title: "Business Analyst",
      description:
        "Develop business analysis, reporting, communication and data skills.",
      steps: [
        "Excel",
        "Business Basics",
        "SQL",
        "Power BI",
        "Documentation",
        "Case Studies",
      ],
    },
    {
      icon: "🧪",
      title: "QA / Testing",
      description:
        "Learn software testing fundamentals and automation concepts.",
      steps: [
        "Testing Basics",
        "Test Cases",
        "API Testing",
        "SQL",
        "Automation",
        "Projects",
      ],
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Learn design thinking, wireframes, prototypes and user experience.",
      steps: [
        "Design Basics",
        "Figma",
        "Wireframes",
        "Prototypes",
        "UX Research",
        "Portfolio",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Career Roadmaps 2026 | Career Hub</title>

        <meta
          name="description"
          content="Career Roadmaps 2026 for Data Analytics, AI, Software Development, Cybersecurity, Cloud, DevOps, Business Analysis and QA."
        />

        <meta name="robots" content="index, follow" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>

      <main className="container">
        {/* NAVIGATION */}

        <nav className="top-nav">
          <Link href="/">🏠 Home</Link>

          <Link href="/career-roadmaps">🗺️ Roadmaps</Link>

          <Link href="/courses">🎓 Courses</Link>

          <Link href="/resume-builder">📄 Resume</Link>

          <Link href="/interview-prep">🎤 Interview</Link>

          <a href="#roadmaps">🚀 Explore</a>
        </nav>

        {/* HERO */}

        <header className="header career-header">
          <div className="header-badge">🚀 CAREER HUB 2026</div>

          <h1>🗺️ Career Roadmaps</h1>

          <p>Learn the Right Skills. Follow the Right Path.</p>

          <small>
            Beginner → Skills → Projects → Resume → Interview → Job
          </small>

          <div className="hero-buttons">
            <a href="#roadmaps" className="hero-primary">
              🗺️ Explore Roadmaps
            </a>

            <Link href="/jobs" className="hero-secondary">
              🔎 Find Jobs
            </Link>
          </div>
        </header>

        {/* NOTICE */}

        <div className="notice-box">
          <strong>💡 Tip:</strong>

          <span>
            Choose one career path and focus on building practical skills and
            projects consistently.
          </span>
        </div>

        {/* ROADMAPS */}

        <section id="roadmaps" className="career-section">
          <div className="section-heading">
            <span>🧭 STEP-BY-STEP</span>

            <h2>Choose Your Career Roadmap</h2>

            <p>
              Explore beginner-friendly career paths for 2026.
            </p>
          </div>

          <div className="career-grid">
            {roadmaps.map((roadmap) => (
              <article
                className="career-card"
                key={roadmap.title}
              >
                <div className="career-icon">{roadmap.icon}</div>

                <h3>{roadmap.title}</h3>

                <p>{roadmap.description}</p>

                <div className="roadmap-steps">
                  {roadmap.steps.map((step, index) => (
                    <div
                      className="roadmap-step"
                      key={`${roadmap.title}-${step}`}
                    >
                      <span>{index + 1}</span>

                      <strong>{step}</strong>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}

        <section className="skills-section">
          <div className="section-heading">
            <span>🎯 YOUR JOURNEY</span>

            <h2>From Beginner to Job-Ready</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <span>1️⃣</span>

              <h3>Choose a Career</h3>

              <p>
                Select one career path based on your interests and goals.
              </p>
            </div>

            <div className="skill-card">
              <span>2️⃣</span>

              <h3>Learn Skills</h3>

              <p>
                Build the fundamental technical and professional skills.
              </p>
            </div>

            <div className="skill-card">
              <span>3️⃣</span>

              <h3>Build Projects</h3>

              <p>
                Create practical projects to demonstrate your knowledge.
              </p>
            </div>

            <div className="skill-card">
              <span>4️⃣</span>

              <h3>Apply for Jobs</h3>

              <p>
                Prepare your resume, practice interviews and start applying.
              </p>
            </div>
          </div>
        </section>

        {/* CAREER TOOLS */}

        <section className="resources-section">
          <div className="section-heading">
            <span>🧰 CAREER TOOLS</span>

            <h2>Build Your Career</h2>

            <p>
              Continue your career preparation with these resources.
            </p>
          </div>

          <div className="resource-grid">
            <Link href="/courses">
              <span>🎓</span>

              <h3>Skills & Courses</h3>

              <p>Learn important job-ready skills.</p>
            </Link>

            <Link href="/resume-builder">
              <span>📄</span>

              <h3>Resume Builder</h3>

              <p>Create an ATS-friendly resume.</p>
            </Link>

            <Link href="/interview-prep">
              <span>🎤</span>

              <h3>Interview Preparation</h3>

              <p>Practice HR and technical questions.</p>
            </Link>

            <Link href="/remote-jobs">
              <span>🏠</span>

              <h3>Remote Jobs</h3>

              <p>Explore work-from-home opportunities.</p>
            </Link>
          </div>
        </section>

        {/* GOVERNMENT JOB CATEGORIES */}

        <section className="category-links">
          <div className="section-heading">
            <span>🇮🇳 GOVERNMENT JOBS</span>

            <h2>Explore Government Jobs</h2>
          </div>

          <div className="category-grid">
            <Link
              href="/banking"
              className="category-grid-item"
            >
              🏦 Banking Jobs 2026
            </Link>

            <Link
              href="/central-government"
              className="category-grid-item"
            >
              🏛️ Central Government
            </Link>

            <Link
              href="/railway"
              className="category-grid-item"
            >
              🚆 Railway Jobs 2026
            </Link>

            <Link
              href="/ssc"
              className="category-grid-item"
            >
              📋 SSC Jobs 2026
            </Link>

            <Link
              href="/defence"
              className="category-grid-item"
            >
              🛡️ Defence Jobs 2026
            </Link>

            <Link
              href="/psu"
              className="category-grid-item"
            >
              🏢 PSU Jobs 2026
            </Link>

            <Link
              href="/healthcare"
              className="category-grid-item"
            >
              🏥 Healthcare Jobs 2026
            </Link>

            <Link
              href="/courses"
              className="category-grid-item"
            >
              🎓 Skills & Courses
            </Link>
          </div>
        </section>

        {/* ADVERTISEMENT */}

        <section className="ad-placeholder">
          <span>Advertisement</span>
        </section>

        {/* SEO CONTENT */}

        <section className="seo-content">
          <h2>
            Career Roadmaps 2026 – Build Job-Ready Skills
          </h2>

          <p>
            Career Hub 2026 provides practical career roadmaps for students,
            freshers and job seekers. Each roadmap helps you understand which
            skills to learn and what steps to follow.
          </p>

          <p>
            Popular career paths include Data Analytics, Artificial
            Intelligence, Software Development, Cybersecurity, Cloud and
            DevOps, Business Analysis and Software Testing.
          </p>

          <p>
            Learning skills alone is not enough. Build practical projects,
            prepare a professional resume, practice interviews and apply for
            suitable opportunities.
          </p>
        </section>

        {/* FOOTER */}

        <footer>
          <div className="footer-brand">
            <h3>🚀 Career Hub 2026</h3>

            <p>
              Jobs • Skills • Careers • Opportunities
            </p>
          </div>

          <div className="footer-links">
            <Link href="/">Home</Link>

            <Link href="/career-roadmaps">
              Career Roadmaps
            </Link>

            <Link href="/courses">Courses</Link>

            <Link href="/resume-builder">
              Resume Builder
            </Link>

            <Link href="/interview-prep">
              Interview Prep
            </Link>

            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/disclaimer">
              Disclaimer
            </Link>

            <Link href="/terms">
              Terms &amp; Conditions
            </Link>
          </div>

          <p className="copyright">
            © 2026 Career Hub 2026. All Rights Reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
