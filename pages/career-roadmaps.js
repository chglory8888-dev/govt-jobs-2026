import Head from "next/head";
import Link from "next/link";

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
      "Build a strong foundation in Python, statistics, machine learning and Generative AI.",
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
      "Follow a practical path from programming fundamentals to modern software development.",
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
      "Build cloud, deployment and automation skills using modern DevOps tools.",
    steps: [
      "Linux",
      "Git",
      "Cloud Basics",
      "AWS / Azure",
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
      "Learn software testing fundamentals, API testing and automation concepts.",
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

const journeySteps = [
  {
    icon: "1️⃣",
    title: "Choose a Career",
    text:
      "Select one career path based on your interests, skills and career goals.",
  },
  {
    icon: "2️⃣",
    title: "Learn Skills",
    text:
      "Build the fundamental technical and professional skills required for the role.",
  },
  {
    icon: "3️⃣",
    title: "Build Projects",
    text:
      "Create practical projects that demonstrate your knowledge and problem-solving ability.",
  },
  {
    icon: "4️⃣",
    title: "Apply for Jobs",
    text:
      "Prepare your resume, practice interviews and start applying for suitable opportunities.",
  },
];

const careerTools = [
  {
    icon: "🎓",
    title: "Skills & Courses",
    description: "Learn important job-ready skills.",
    href: "/courses",
  },
  {
    icon: "📄",
    title: "Resume Builder",
    description: "Create an ATS-friendly resume.",
    href: "/resume-builder",
  },
  {
    icon: "🎤",
    title: "Interview Preparation",
    description: "Practice HR and technical questions.",
    href: "/interview-prep",
  },
  {
    icon: "🏠",
    title: "Remote Jobs",
    description: "Explore work-from-home opportunities.",
    href: "/remote-jobs",
  },
];

const governmentCategories = [
  {
    icon: "🏦",
    title: "Banking Jobs 2026",
    href: "/banking",
  },
  {
    icon: "🏛️",
    title: "Central Government",
    href: "/central-government",
  },
  {
    icon: "🚆",
    title: "Railway Jobs 2026",
    href: "/railway",
  },
  {
    icon: "📋",
    title: "SSC Jobs 2026",
    href: "/ssc",
  },
  {
    icon: "🛡️",
    title: "Defence Jobs 2026",
    href: "/defence",
  },
  {
    icon: "🏢",
    title: "PSU Jobs 2026",
    href: "/psu",
  },
  {
    icon: "🏥",
    title: "Healthcare Jobs 2026",
    href: "/healthcare",
  },
  {
    icon: "🎓",
    title: "Skills & Courses",
    href: "/courses",
  },
];

export default function CareerRoadmaps() {
  return (
    <>
      <Head>
        <title>Career Roadmaps 2026 | Career Hub</title>

        <meta
          name="description"
          content="Explore career roadmaps for Data Analytics, AI and Machine Learning, Software Development, Cybersecurity, Cloud and DevOps, Business Analysis, QA Testing and UI/UX Design."
        />

        <meta
          name="keywords"
          content="career roadmaps 2026, data analyst roadmap, AI ML roadmap, software developer roadmap, cybersecurity roadmap, cloud devops roadmap, business analyst roadmap, QA testing roadmap, UI UX roadmap"
        />

        <meta name="robots" content="index, follow" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <link
          rel="canonical"
          href="https://govt-jobs-2026-8m3h.vercel.app/career-roadmaps"
        />
      </Head>

      <div className="page">

        {/* NAVIGATION */}

        <nav className="top-nav">
          <div className="container nav-inner">

            <Link href="/" className="brand">
              Career Hub 2026
            </Link>

            <div className="nav-links">

              <Link href="/">
                Jobs
              </Link>

              <Link href="/career-roadmaps">
                Roadmaps
              </Link>

              <Link href="/courses">
                Courses
              </Link>

              <Link href="/resume-builder">
                Resume
              </Link>

              <Link href="/interview-prep">
                Interview
              </Link>

            </div>

          </div>
        </nav>

        {/* HERO */}

        <header className="career-header">

          <div className="container">

            <div className="header-badge">
              🚀 CAREER HUB 2026
            </div>

            <h1>
              🗺️ Career Roadmaps
            </h1>

            <p>
              Learn the Right Skills. Follow the Right Path.
            </p>

            <small>
              Beginner → Skills → Projects → Resume → Interview → Job
            </small>

            <div className="hero-buttons">

              <a
                href="#roadmaps"
                className="hero-primary"
              >
                🗺️ Explore Roadmaps
              </a>

              <Link
                href="/"
                className="hero-secondary"
              >
                🔎 Find Jobs
              </Link>

            </div>

          </div>

        </header>

        {/* MAIN CONTENT */}

        <main>

          {/* NOTICE */}

          <section className="career-section">

            <div className="container">

              <div className="notice-box">

                <strong>
                  💡 Tip:
                </strong>

                <span>
                  Choose one career path and focus on building
                  practical skills and projects consistently.
                </span>

              </div>

            </div>

          </section>

          {/* ROADMAPS */}

          <section
            id="roadmaps"
            className="career-section"
          >

            <div className="container">

              <div className="section-heading">

                <span>
                  🧭 STEP-BY-STEP
                </span>

                <h2>
                  Choose Your Career Roadmap
                </h2>

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

                    <div className="career-icon">
                      {roadmap.icon}
                    </div>

                    <h3>
                      {roadmap.title}
                    </h3>

                    <p>
                      {roadmap.description}
                    </p>

                    <div className="roadmap-steps">

                      {roadmap.steps.map(
                        (step, index) => (

                          <div
                            className="roadmap-step"
                            key={`${roadmap.title}-${step}`}
                          >

                            <span>
                              {index + 1}
                            </span>

                            <strong>
                              {step}
                            </strong>

                          </div>

                        )
                      )}

                    </div>

                  </article>

                ))}

              </div>

            </div>

          </section>

          {/* HOW IT WORKS */}

          <section className="skills-section">

            <div className="container">

              <div className="section-heading">

                <span>
                  🎯 YOUR JOURNEY
                </span>

                <h2>
                  From Beginner to Job-Ready
                </h2>

                <p>
                  Follow a simple process to turn learning
                  into career opportunities.
                </p>

              </div>

              <div className="skills-grid">

                {journeySteps.map((step) => (

                  <div
                    className="skill-card"
                    key={step.title}
                  >

                    <span>
                      {step.icon}
                    </span>

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </section>

          {/* CAREER TOOLS */}

          <section className="resources-section">

            <div className="container">

              <div className="section-heading">

                <span>
                  🧰 CAREER TOOLS
                </span>

                <h2>
                  Build Your Career
                </h2>

                <p>
                  Continue your career preparation with these resources.
                </p>

              </div>

              <div className="resource-grid">

                {careerTools.map((tool) => (

                  <Link
                    href={tool.href}
                    key={tool.title}
                  >

                    <span>
                      {tool.icon}
                    </span>

                    <h3>
                      {tool.title}
                    </h3>

                    <p>
                      {tool.description}
                    </p>

                  </Link>

                ))}

              </div>

            </div>

          </section>

          {/* GOVERNMENT JOB CATEGORIES */}

          <section className="category-links">

            <div className="container">

              <div className="section-heading">

                <span>
                  🇮🇳 GOVERNMENT JOBS
                </span>

                <h2>
                  Explore Government Jobs
                </h2>

                <p>
                  Explore popular government job categories available
                  on Career Hub.
                </p>

              </div>

              <div className="category-grid">

                {governmentCategories.map((category) => (

                  <Link
                    href={category.href}
                    className="category-grid-item"
                    key={category.title}
                  >
                    {category.icon} {category.title}
                  </Link>

                ))}

              </div>

            </div>

          </section>

          {/* ADVERTISEMENT */}

          <section className="career-section">

            <div className="container">

              <div className="ad-placeholder">

                <span>
                  Advertisement
                </span>

              </div>

            </div>

          </section>

          {/* SEO CONTENT */}

          <section className="career-section">

            <div className="container">

              <div className="seo-content">

                <h2>
                  Career Roadmaps 2026 – Build Job-Ready Skills
                </h2>

                <p>
                  Career Hub 2026 provides practical career
                  roadmaps for students, freshers and job seekers.
                  Each roadmap helps you understand which skills
                  to learn and what steps to follow.
                </p>

                <p>
                  Popular career paths include Data Analytics,
                  Artificial Intelligence, Software Development,
                  Cybersecurity, Cloud and DevOps, Business
                  Analysis, Software Testing and UI/UX Design.
                </p>

                <p>
                  Learning skills alone is not enough. Build
                  practical projects, prepare a professional
                  resume, practice interviews and apply for
                  suitable opportunities.
                </p>

              </div>

            </div>

          </section>

          {/* FINAL CTA */}

          <section className="career-section">

            <div className="container">

              <div className="final-cta">

                <h2>
                  🚀 Start Your Career Journey
                </h2>

                <p>
                  Choose a roadmap, build practical skills,
                  create projects and prepare for your next
                  career opportunity.
                </p>

                <div className="hero-buttons">

                  <Link
                    href="/resume-builder"
                    className="hero-primary"
                  >
                    📄 Build Resume
                  </Link>

                  <Link
                    href="/interview-prep"
                    className="hero-secondary"
                  >
                    🎤 Practice Interview
                  </Link>

                </div>

              </div>

            </div>

          </section>

        </main>

        {/* FOOTER */}

        <footer className="site-footer">

          <div className="container">

            <div className="footer-brand">

              <h3>
                🚀 Career Hub 2026
              </h3>

              <p>
                Jobs • Skills • Careers • Opportunities
              </p>

            </div>

            <div className="footer-links">

              <Link href="/">
                Home
              </Link>

              <Link href="/career-roadmaps">
                Career Roadmaps
              </Link>

              <Link href="/courses">
                Courses
              </Link>

              <Link href="/resume-builder">
                Resume Builder
              </Link>

              <Link href="/interview-prep">
                Interview Preparation
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

          </div>

        </footer>

      </div>
    </>
  );
}

