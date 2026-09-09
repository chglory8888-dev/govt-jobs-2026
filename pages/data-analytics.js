import Head from "next/head";
import Link from "next/link";

export default function DataAnalytics() {
  const roles = [
    {
      icon: "📊",
      title: "Data Analyst",
      desc: "Analyze business data and create useful reports, dashboards and insights.",
    },
    {
      icon: "📈",
      title: "BI Analyst",
      desc: "Build interactive dashboards and business intelligence reports.",
    },
    {
      icon: "💼",
      title: "Business Analyst",
      desc: "Convert business requirements and data into actionable decisions.",
    },
    {
      icon: "🧾",
      title: "MIS Analyst",
      desc: "Prepare daily, weekly and monthly management reports using Excel and BI tools.",
    },
    {
      icon: "📋",
      title: "Reporting Analyst",
      desc: "Automate reports, track KPIs and communicate business performance.",
    },
    {
      icon: "🤖",
      title: "Junior Data Scientist",
      desc: "Use statistics, Python and machine learning to solve data problems.",
    },
  ];

  const roadmap = [
    {
      number: "01",
      title: "Master Excel",
      desc: "Learn formulas, XLOOKUP, Pivot Tables, charts, Power Query and dashboards.",
    },
    {
      number: "02",
      title: "Learn SQL",
      desc: "Practice SELECT, WHERE, JOIN, GROUP BY, subqueries and window functions.",
    },
    {
      number: "03",
      title: "Learn Statistics",
      desc: "Understand averages, probability, distributions, correlation and hypothesis testing.",
    },
    {
      number: "04",
      title: "Learn Power BI",
      desc: "Create professional dashboards, reports, data models and DAX calculations.",
    },
    {
      number: "05",
      title: "Learn Python",
      desc: "Use Pandas, NumPy and Matplotlib for data cleaning and analysis.",
    },
    {
      number: "06",
      title: "Build Projects",
      desc: "Create real-world projects and publish them on GitHub.",
    },
    {
      number: "07",
      title: "Build Resume",
      desc: "Create an ATS-friendly resume focused on measurable projects and skills.",
    },
    {
      number: "08",
      title: "Prepare Interviews",
      desc: "Practice Excel, SQL, statistics, Power BI and HR interview questions.",
    },
  ];

  const skills = [
    "Advanced Excel",
    "SQL",
    "Power BI",
    "Tableau",
    "Python",
    "Pandas",
    "NumPy",
    "Statistics",
    "Data Visualization",
    "DAX",
    "Power Query",
    "Data Cleaning",
    "Dashboard Design",
    "Business Intelligence",
    "Git & GitHub",
    "Problem Solving",
  ];

  const projects = [
    {
      icon: "💰",
      title: "Sales Dashboard",
      desc: "Analyze sales, revenue, profit, products, regions and monthly performance.",
    },
    {
      icon: "👥",
      title: "HR Analytics",
      desc: "Analyze employee attrition, departments, salaries and workforce trends.",
    },
    {
      icon: "🏦",
      title: "Banking Analytics",
      desc: "Analyze customer transactions, loans, deposits and customer segments.",
    },
    {
      icon: "🛒",
      title: "E-Commerce Analytics",
      desc: "Analyze orders, customers, products, revenue and customer behavior.",
    },
    {
      icon: "🏥",
      title: "Healthcare Analytics",
      desc: "Create dashboards for patients, departments, treatments and operational KPIs.",
    },
    {
      icon: "📦",
      title: "Inventory Analytics",
      desc: "Track stock levels, fast-moving products, slow-moving products and reorder trends.",
    },
  ];

  const tools = [
    "Microsoft Excel",
    "SQL",
    "Power BI",
    "Tableau",
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Jupyter Notebook",
    "GitHub",
  ];

  return (
    <>
      <Head>
        <title>Data Analytics Careers 2026 | Career Hub 2026</title>

        <meta
          name="description"
          content="Learn Data Analytics in 2026 with Excel, SQL, Power BI, Python and Statistics. Explore Data Analyst jobs, skills, projects, roadmap and career opportunities."
        />

        <meta
          name="keywords"
          content="Data Analyst jobs 2026, Data Analytics careers, Excel, SQL, Power BI, Python, Data Science, MIS Analyst, Business Analyst, BI Analyst"
        />

        <meta name="robots" content="index,follow" />

        <meta
          property="og:title"
          content="Data Analytics Careers 2026 | Career Hub 2026"
        />

        <meta
          property="og:description"
          content="Complete Data Analytics roadmap with Excel, SQL, Power BI, Python, Statistics, projects and career opportunities."
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
            <Link href="/resume-builder">Resume Builder</Link>
            <Link href="/interview-prep">Interview Prep</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}

      <header className="career-header">
        <div className="container">
          <div className="header-badge">📊 DATA ANALYTICS 2026</div>

          <h1>
            Build Your Career in
            <br />
            Data Analytics
          </h1>

          <p>
            Learn Excel, SQL, Power BI, Statistics and Python to become a
            job-ready Data Analyst.
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
            <h2>What is Data Analytics?</h2>

            <p>
              Data Analytics is the process of collecting, cleaning,
              analyzing and visualizing data to help organizations make better
              decisions.
            </p>
          </div>

          <div className="notice-box">
            <strong>💡 Beginner Tip:</strong> You do not need to learn
            everything at once. Start with Excel → SQL → Power BI and then
            add Python and advanced statistics.
          </div>
        </div>
      </section>

      {/* CAREER ROLES */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>Popular Data Analytics Careers</h2>
            <p>Choose a role based on your interests and skills.</p>
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
            <h2>Data Analyst Roadmap 2026</h2>

            <p>
              Follow this step-by-step path from beginner to job-ready
              professional.
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
            <h2>Important Data Analytics Skills</h2>

            <p>
              These skills can improve your chances of getting entry-level
              analytics jobs.
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
            <h2>Tools to Learn</h2>

            <p>
              Focus on practical usage instead of simply collecting
              certificates.
            </p>
          </div>

          <div className="career-grid">
            {tools.map((tool) => (
              <div className="career-card" key={tool}>
                <div className="career-icon">🛠️</div>

                <h3>{tool}</h3>

                <p>
                  Learn the fundamentals and create at least one practical
                  project using this tool.
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
            <h2>Data Analytics Project Ideas</h2>

            <p>
              Projects are one of the best ways to demonstrate practical
              analytics skills.
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

      {/* JOB STRATEGY */}

      <section className="career-section">
        <div className="container">
          <div className="section-heading">
            <h2>How to Get Your First Data Job</h2>
          </div>

          <div className="career-grid">
            <div className="career-card">
              <div className="career-icon">1️⃣</div>
              <h3>Learn Core Skills</h3>
              <p>
                Start with Excel, SQL and Power BI before moving into advanced
                tools.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">2️⃣</div>
              <h3>Build 3–5 Projects</h3>
              <p>
                Create projects that demonstrate data cleaning, analysis,
                visualization and business insights.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">3️⃣</div>
              <h3>Create GitHub Portfolio</h3>
              <p>
                Upload SQL queries, Python notebooks, dashboards and project
                documentation.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">4️⃣</div>
              <h3>Optimize Your Resume</h3>
              <p>
                Highlight relevant skills, projects, tools and measurable
                achievements.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">5️⃣</div>
              <h3>Practice Interviews</h3>
              <p>
                Practice SQL, Excel, statistics, Power BI and common HR
                questions.
              </p>
            </div>

            <div className="career-card">
              <div className="career-icon">6️⃣</div>
              <h3>Apply Consistently</h3>
              <p>
                Apply to Data Analyst, MIS, Reporting, BI and Business Analyst
                opportunities.
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

            <Link href="/remote-jobs" className="category-grid-item">
              🏠 Remote Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}

      <section className="seo-content">
        <div className="container">
          <h2>Data Analytics Careers in 2026</h2>

          <p>
            Data analytics continues to be an important career path across
            technology, banking, healthcare, retail, finance, education and
            other industries. Entry-level candidates can start by learning
            Excel, SQL, data visualization and business reporting.
          </p>

          <p>
            Power BI and Tableau can help candidates create interactive
            dashboards, while Python can be used for data cleaning, analysis
            and automation. Statistics provides the foundation for
            understanding patterns and making data-driven decisions.
          </p>

          <p>
            A strong portfolio should demonstrate practical problem solving.
            Candidates can build projects around sales, finance, HR,
            healthcare, e-commerce and other real-world datasets.
          </p>

          <p>
            Career Hub 2026 brings together career resources, job opportunities,
            skills, resume preparation and interview preparation in one place.
          </p>
        </div>
      </section>

      {/* DISCLAIMER */}

      <section className="career-section">
        <div className="container">
          <div className="notice-box">
            <strong>⚠️ Career Information:</strong> Job requirements, salaries
            and technologies can vary by company and location. Always verify
            requirements directly from the employer before applying.
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
            <Link href="/resume-builder">Resume Builder</Link>
          </p>
        </div>
      </footer>
    </>
  );
            }
