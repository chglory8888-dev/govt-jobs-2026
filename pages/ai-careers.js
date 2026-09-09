import Head from "next/head";
import Link from "next/link";

export default function AICareers() {
  const roles = [
    {
      icon: "🤖",
      title: "AI Engineer",
      description:
        "Build and deploy AI-powered applications and intelligent systems.",
      skills: "Python • Machine Learning • APIs • AI Tools",
    },
    {
      icon: "🧠",
      title: "Machine Learning Engineer",
      description:
        "Develop machine learning models and production-ready ML systems.",
      skills: "Python • ML • Statistics • TensorFlow",
    },
    {
      icon: "✨",
      title: "Generative AI Specialist",
      description:
        "Work with LLMs, prompt engineering and AI automation.",
      skills: "LLMs • Prompt Engineering • APIs • Automation",
    },
    {
      icon: "📊",
      title: "AI Data Analyst",
      description:
        "Combine analytics and AI to generate useful business insights.",
      skills: "Excel • SQL • Power BI • Python • AI",
    },
    {
      icon: "💬",
      title: "Prompt Engineer",
      description:
        "Design effective prompts and workflows for generative AI systems.",
      skills: "Prompting • LLMs • AI Tools • Automation",
    },
    {
      icon: "🔬",
      title: "Data Scientist",
      description:
        "Use statistics, programming and machine learning to solve problems.",
      skills: "Python • Statistics • SQL • ML • Visualization",
    },
  ];

  const roadmap = [
    {
      number: "01",
      title: "Learn Python",
      text: "Start with Python fundamentals, functions, lists, dictionaries and basic programming.",
    },
    {
      number: "02",
      title: "Learn Statistics",
      text: "Understand probability, descriptive statistics, distributions and hypothesis testing.",
    },
    {
      number: "03",
      title: "Learn SQL & Data",
      text: "Practice SQL queries, databases, data cleaning and exploratory analysis.",
    },
    {
      number: "04",
      title: "Learn Machine Learning",
      text: "Study regression, classification, clustering, model evaluation and feature engineering.",
    },
    {
      number: "05",
      title: "Explore Generative AI",
      text: "Learn LLM concepts, prompt engineering, AI APIs and practical AI workflows.",
    },
    {
      number: "06",
      title: "Build Projects",
      text: "Create real projects and publish them on GitHub to demonstrate your skills.",
    },
  ];

  const skills = [
    "Python",
    "SQL",
    "Statistics",
    "Machine Learning",
    "Generative AI",
    "Prompt Engineering",
    "Power BI",
    "Excel",
    "Git & GitHub",
    "APIs",
    "Data Visualization",
    "Problem Solving",
  ];

  return (
    <>
      <Head>
        <title>AI Careers 2026 | Career Hub 2026</title>

        <meta
          name="description"
          content="Explore AI careers in 2026 including AI Engineer, Machine Learning Engineer, Generative AI Specialist, Data Scientist and AI Data Analyst. Learn skills and career roadmap."
        />

        <meta
          name="keywords"
          content="AI careers 2026, AI jobs, machine learning jobs, generative AI careers, data scientist, prompt engineer, AI engineer"
        />

        <meta
          name="robots"
          content="index, follow"
        />
      </Head>

      <main className="container">

        {/* NAVIGATION */}

        <nav className="top-nav">

          <Link href="/">
            🏠 Home
          </Link>

          <Link href="/ai-careers">
            🤖 AI Careers
          </Link>

          <Link href="/data-analytics">
            📊 Data Analytics
          </Link>

          <Link href="/software-jobs">
            💻 IT & Software
          </Link>

          <Link href="/remote-jobs">
            🏠 Remote Jobs
          </Link>

          <Link href="/resume-builder">
            📄 Resume
          </Link>

        </nav>

        {/* HERO */}

        <header className="career-header">

          <div className="header-badge">
            🤖 Future Careers
          </div>

          <h1>
            AI Careers <span>2026</span>
          </h1>

          <p>
            Build skills for the AI-powered future.
          </p>

          <small>
            AI • Machine Learning • Generative AI • Data Science • Automation
          </small>

          <div className="hero-buttons">

            <a
              href="#roadmap"
              className="hero-primary"
            >
              🧭 Start Roadmap
            </a>

            <Link
              href="/"
              className="hero-secondary"
            >
              🔎 Find Jobs
            </Link>

          </div>

        </header>

        {/* INTRO */}

        <section className="seo-content">

          <h2>
            Why Choose an AI Career?
          </h2>

          <p>
            Artificial Intelligence is transforming industries such
            as software, finance, healthcare, education, marketing,
            manufacturing and cybersecurity.
          </p>

          <p>
            A career in AI can combine programming, statistics,
            data analysis, machine learning and modern generative
            AI technologies.
          </p>

          <p>
            You do not need to learn everything at once. Start with
            fundamentals and gradually build practical projects.
          </p>

        </section>

        {/* CAREER ROLES */}

        <section className="career-section">

          <div className="section-heading">

            <span>🔥 POPULAR ROLES</span>

            <h2>
              AI Career Opportunities
            </h2>

            <p>
              Explore different career paths in artificial intelligence.
            </p>

          </div>

          <div className="career-grid">

            {roles.map((role) => (

              <article
                className="career-card"
                key={role.title}
              >

                <div className="career-icon">
                  {role.icon}
                </div>

                <h3>
                  {role.title}
                </h3>

                <p>
                  {role.description}
                </p>

                <small>
                  <strong>Skills:</strong>{" "}
                  {role.skills}
                </small>

              </article>

            ))}

          </div>

        </section>

        {/* ROADMAP */}

        <section
          id="roadmap"
          className="skills-section"
        >

          <div className="section-heading">

            <span>🧭 STEP BY STEP</span>

            <h2>
              AI Career Roadmap
            </h2>

            <p>
              A practical path for beginners.
            </p>

          </div>

          <div className="career-grid">

            {roadmap.map((item) => (

              <article
                className="career-card"
                key={item.number}
              >

                <div className="career-icon">
                  {item.number}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>

            ))}

          </div>

        </section>

        {/* SKILLS */}

        <section className="resources-section">

          <div className="section-heading">

            <span>🎓 SKILLS</span>

            <h2>
              Important AI Skills
            </h2>

            <p>
              Build these skills gradually through practice.
            </p>

          </div>

          <div className="category-grid">

            {skills.map((skill) => (

              <div
                className="category-grid-item"
                key={skill}
              >
                {skill}
              </div>

            ))}

          </div>

        </section>

        {/* PROJECT IDEAS */}

        <section className="seo-content">

          <h2>
            AI Project Ideas for Beginners
          </h2>

          <ul>

            <li>
              🤖 AI chatbot using an API
            </li>

            <li>
              📊 AI-powered data analysis dashboard
            </li>

            <li>
              📝 Resume analyzer
            </li>

            <li>
              💬 Question-answer assistant
            </li>

            <li>
              📈 Machine learning prediction project
            </li>

            <li>
              🧠 AI study assistant
            </li>

          </ul>

        </section>

        {/* CAREER ADVICE */}

        <section className="seo-content">

          <h2>
            How to Get Your First AI Job
          </h2>

          <ol>

            <li>
              Learn the fundamentals.
            </li>

            <li>
              Complete practical projects.
            </li>

            <li>
              Create a strong GitHub portfolio.
            </li>

            <li>
              Build an ATS-friendly resume.
            </li>

            <li>
              Practice technical and HR interviews.
            </li>

            <li>
              Apply consistently to internships and entry-level roles.
            </li>

          </ol>

        </section>

        {/* RELATED CAREERS */}

        <section className="resources-section">

          <div className="section-heading">

            <span>🚀 EXPLORE MORE</span>

            <h2>
              Related Career Paths
            </h2>

          </div>

          <div className="resource-grid">

            <Link href="/data-analytics">

              <span>📊</span>

              <h3>
                Data Analytics
              </h3>

              <p>
                Excel, SQL, Power BI and Python.
              </p>

            </Link>

            <Link href="/software-jobs">

              <span>💻</span>

              <h3>
                IT & Software
              </h3>

              <p>
                Software development and testing.
              </p>

            </Link>

            <Link href="/cybersecurity">

              <span>🔐</span>

              <h3>
                Cybersecurity
              </h3>

              <p>
                Security, SOC and ethical hacking.
              </p>

            </Link>

            <Link href="/cloud-devops">

              <span>☁️</span>

              <h3>
                Cloud & DevOps
              </h3>

              <p>
                Cloud infrastructure and automation.
              </p>

            </Link>

          </div>

        </section>

        {/* DISCLAIMER */}

        <div className="notice-box">

          <strong>📌 Career Note:</strong>

          <span>
            Job requirements, salaries and technologies can vary
            by company and role. Always check the latest official
            job description before applying.
          </span>

        </div>

        {/* FOOTER */}

        <footer>

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

            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/disclaimer">
              Disclaimer
            </Link>

            <Link href="/terms">
              Terms
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
