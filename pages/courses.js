import Head from "next/head";
import Link from "next/link";

const coursePaths = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    level: "Beginner → Advanced",
    description:
      "Build foundations in Python, statistics, machine learning and Generative AI.",
    skills: [
      "Python",
      "Statistics",
      "NumPy & Pandas",
      "Machine Learning",
      "Generative AI",
      "Prompt Engineering",
    ],
    link: "/ai-careers",
  },
  {
    icon: "📊",
    title: "Data Analytics",
    level: "Beginner → Job Ready",
    description:
      "Learn the most useful tools for becoming a Data Analyst or BI professional.",
    skills: [
      "Excel",
      "SQL",
      "Statistics",
      "Power BI",
      "Python",
      "Data Visualization",
    ],
    link: "/data-analytics",
  },
  {
    icon: "💻",
    title: "Software Development",
    level: "Beginner → Developer",
    description:
      "Learn programming and modern web development by building practical projects.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
    ],
    link: "/software-jobs",
  },
  {
    icon: "🔐",
    title: "Cybersecurity",
    level: "Beginner → Security",
    description:
      "Build a foundation in networking, Linux and cybersecurity fundamentals.",
    skills: [
      "Networking",
      "Linux",
      "Security Basics",
      "Threat Detection",
      "SIEM",
      "Incident Response",
    ],
    link: "/cybersecurity",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    level: "Beginner → Cloud Engineer",
    description:
      "Learn cloud infrastructure and DevOps technologies used in modern applications.",
    skills: [
      "Linux",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    link: "/cloud-devops",
  },
  {
    icon: "🏠",
    title: "Remote Job Skills",
    level: "Beginner → Remote Ready",
    description:
      "Develop practical skills needed for remote jobs and online professional work.",
    skills: [
      "Communication",
      "Excel",
      "Google Workspace",
      "Git",
      "Time Management",
      "Remote Collaboration",
    ],
    link: "/remote-jobs",
  },
];

const skillCategories = [
  {
    icon: "🐍",
    title: "Python",
    description: "Programming, automation, data analysis and AI.",
  },
  {
    icon: "📗",
    title: "Excel",
    description:
      "Advanced formulas, PivotTables, Power Query and reporting.",
  },
  {
    icon: "🗄️",
    title: "SQL",
    description: "Queries, joins, aggregation, databases and analytics.",
  },
  {
    icon: "📈",
    title: "Power BI",
    description:
      "Dashboards, data modeling, DAX and business intelligence.",
  },
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "HTML, CSS, JavaScript, React and modern web applications.",
  },
  {
    icon: "🐙",
    title: "Git & GitHub",
    description:
      "Version control, repositories and professional collaboration.",
  },
  {
    icon: "🧠",
    title: "Statistics",
    description:
      "Probability, distributions, hypothesis testing and analytics.",
  },
  {
    icon: "🤖",
    title: "Generative AI",
    description:
      "AI tools, prompting, APIs and practical AI applications.",
  },
];

const learningSteps = [
  {
    icon: "1️⃣",
    title: "Choose One Skill",
    text:
      "Pick one career direction instead of trying to learn everything together.",
  },
  {
    icon: "2️⃣",
    title: "Learn Fundamentals",
    text:
      "Understand the basic concepts before moving to advanced topics.",
  },
  {
    icon: "3️⃣",
    title: "Practice Daily",
    text:
      "Solve exercises and build small examples while learning.",
  },
  {
    icon: "4️⃣",
    title: "Build Projects",
    text:
      "Turn your knowledge into practical projects that you can showcase.",
  },
  {
    icon: "5️⃣",
    title: "Create Portfolio",
    text:
      "Keep your best projects and achievements in a professional portfolio.",
  },
  {
    icon: "6️⃣",
    title: "Prepare Resume",
    text:
      "Create an ATS-friendly resume focused on your target role.",
  },
  {
    icon: "7️⃣",
    title: "Prepare Interviews",
    text:
      "Practice technical, aptitude and HR questions.",
  },
  {
    icon: "8️⃣",
    title: "Apply for Jobs",
    text:
      "Apply consistently to suitable fresher and entry-level opportunities.",
  },
];

const projectIdeas = [
  "📊 Sales Dashboard",
  "🌐 Personal Portfolio",
  "🤖 AI Chatbot",
  "📈 Business Analytics Dashboard",
  "🗄️ SQL Database Project",
  "💻 Full Stack Web App",
  "🔐 Security Monitoring Lab",
  "☁️ Cloud Deployment Project",
];

export default function Courses() {
  return (
    <>
      <Head>
        <title>Skills & Courses 2026 | Career Hub 2026</title>

        <meta
          name="description"
          content="Explore skills and learning paths for AI, Data Analytics, Software Development, Cybersecurity, Cloud, DevOps, Python, Excel, SQL, Power BI and remote careers."
        />

        <meta
          name="keywords"
          content="skills courses 2026, career courses India, AI courses, data analytics courses, Python course, Excel course, SQL course, Power BI course, software development roadmap"
        />

        <meta name="robots" content="index, follow" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
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
              🎓 Skills & Learning 2026
            </div>

            <h1>
              Skills & Courses
            </h1>

            <p>
              Learn practical skills, follow structured career paths and
              become job-ready step by step.
            </p>

            <div className="hero-buttons">

              <Link
                href="/career-roadmaps"
                className="hero-primary"
              >
                🗺️ View Roadmaps
              </Link>

              <Link
                href="/resume-builder"
                className="hero-secondary"
              >
                📄 Build Resume
              </Link>

            </div>

          </div>

        </header>

        {/* INTRO */}

        <section className="career-section">

          <div className="container">

            <div className="section-heading">

              <h2>
                🎯 Learn Skills That Lead to Careers
              </h2>

              <p>
                Choose a career direction, identify the required skills and
                follow a structured learning plan.
              </p>

            </div>

            <div className="notice-box">

              💡 <strong>Important:</strong> You don't need dozens of
              certificates to start a career. Focus on useful skills,
              practical projects and demonstrating what you can do.

            </div>

          </div>

        </section>

        {/* CAREER LEARNING PATHS */}

        <section className="career-section">

          <div className="container">

            <div className="section-heading">

              <h2>
                🚀 Career Learning Paths
              </h2>

              <p>
                Choose a path based on your interests and career goals.
              </p>

            </div>

            <div className="career-grid">

              {coursePaths.map((course) => (

                <article
                  className="career-card"
                  key={course.title}
                >

                  <div className="career-icon">
                    {course.icon}
                  </div>

                  <h3>
                    {course.title}
                  </h3>

                  <p>
                    <strong>
                      {course.level}
                    </strong>
                  </p>

                  <p>
                    {course.description}
                  </p>

                  <div className="category-grid">

                    {course.skills.map((skill) => (

                      <div
                        className="category-grid-item"
                        key={`${course.title}-${skill}`}
                      >
                        {skill}
                      </div>

                    ))}

                  </div>

                  <Link
                    href={course.link}
                    className="apply-button"
                  >
                    Explore Path →
                  </Link>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* POPULAR SKILLS */}

        <section className="skills-section">

          <div className="container">

            <div className="section-heading">

              <h2>
                🔥 Popular Job Skills
              </h2>

              <p>
                Skills that can be useful across multiple career paths.
              </p>

            </div>

            <div className="career-grid">

              {skillCategories.map((skill) => (

                <div
                  className="skill-card"
                  key={skill.title}
                >

                  <div className="career-icon">
                    {skill.icon}
                  </div>

                  <h3>
                    {skill.title}
                  </h3>

                  <p>
                    {skill.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* LEARNING PROCESS */}

        <section className="resources-section">

          <div className="container">

            <div className="section-heading">

              <h2>
                🧭 How to Learn for a Job
              </h2>

              <p>
                Follow this simple process from beginner to job applicant.
              </p>

            </div>

            <div className="career-grid">

              {learningSteps.map((step) => (

                <div
                  className="resource-card"
                  key={step.title}
                >

                  <div className="career-icon">
                    {step.icon}
                  </div>

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

        {/* PROJECTS */}

        <section className="career-section">

          <div className="container">

            <div className="section-heading">

              <h2>
                💡 Beginner Project Ideas
              </h2>

              <p>
                Projects can help you demonstrate practical knowledge when
                applying for jobs.
              </p>

            </div>

            <div className="category-grid">

              {projectIdeas.map((project) => (

                <div
                  className="category-grid-item"
                  key={project}
                >
                  {project}
                </div>

              ))}

            </div>

            <div className="notice-box">

              🚀 <strong>Project Tip:</strong> Don't just copy a tutorial.
              Change the project, add your own features and be ready to
              explain how it works during an interview.

            </div>

          </div>

        </section>

        {/* FREE LEARNING STRATEGY */}

        <section className="career-section">

          <div className="container">

            <div className="section-heading">

              <h2>
                📚 Smart Learning Strategy
              </h2>

            </div>

            <div className="career-grid">

              <div className="career-card">

                <div className="career-icon">
                  🆓
                </div>

                <h3>
                  Start With Free Resources
                </h3>

                <p>
                  Begin with documentation, tutorials, practice platforms,
                  educational videos and free learning materials.
                </p>

              </div>

              <div className="career-card">

                <div className="career-icon">
                  💳
                </div>

                <h3>
                  Paid Courses
                </h3>

                <p>
                  Consider paid courses when you need structured lessons,
                  projects, mentoring or a clear curriculum.
                </p>

              </div>

              <div className="career-card">

                <div className="career-icon">
                  🏆
                </div>

                <h3>
                  Certificates
                </h3>

                <p>
                  Certificates can support your profile, but practical
                  skills and projects should remain the priority.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* CAREER LINKS */}

        <section className="career-section">

          <div className="container">

            <div className="section-heading">

              <h2>
                ⚡ Continue Your Career Journey
              </h2>

            </div>

            <div className="category-grid">

              <Link
                href="/career-roadmaps"
                className="category-grid-item"
              >
                🗺️ Career Roadmaps
              </Link>

              <Link
                href="/ai-careers"
                className="category-grid-item"
              >
                🤖 AI Careers
              </Link>

              <Link
                href="/data-analytics"
                className="category-grid-item"
              >
                📊 Data Analytics
              </Link>

              <Link
                href="/software-jobs"
                className="category-grid-item"
              >
                💻 Software Jobs
              </Link>

              <Link
                href="/cybersecurity"
                className="category-grid-item"
              >
                🔐 Cybersecurity
              </Link>

              <Link
                href="/cloud-devops"
                className="category-grid-item"
              >
                ☁️ Cloud & DevOps
              </Link>

              <Link
                href="/remote-jobs"
                className="category-grid-item"
              >
                🏠 Remote Jobs
              </Link>

              <Link
                href="/resume-builder"
                className="category-grid-item"
              >
                📄 Resume Builder
              </Link>

              <Link
                href="/interview-prep"
                className="category-grid-item"
              >
                🎤 Interview Preparation
              </Link>

              <Link
                href="/"
                className="category-grid-item"
              >
                🏛️ Government Jobs
              </Link>

            </div>

          </div>

        </section>

        {/* SEO CONTENT */}

        <section className="seo-content">

          <div className="container">

            <h2>
              Best Career Skills to Learn in 2026
            </h2>

            <p>
              Career Hub 2026 helps beginners identify practical skills for
              modern careers including Artificial Intelligence, Data
              Analytics, Software Development, Cybersecurity, Cloud and
              DevOps.
            </p>

            <p>
              Instead of trying to learn every technology, choose one career
              path and follow a structured roadmap. Learn the fundamentals,
              practice regularly, build projects and prepare for interviews.
            </p>

            <h3>
              Skills for Freshers
            </h3>

            <p>
              Freshers can start with skills such as Excel, SQL, Python,
              JavaScript, data visualization, communication, Git and
              problem-solving depending on their target career.
            </p>

            <h3>
              From Learning to Employment
            </h3>

            <p>
              Learning is only one part of the process. A strong career
              strategy also includes projects, portfolio development,
              resume preparation, interview practice and consistent job
              applications.
            </p>

          </div>

        </section>

        {/* DISCLAIMER */}

        <section className="career-section">

          <div className="container">

            <div className="notice-box">

              ⚠️ <strong>Note:</strong> Learning resources, technologies,
              course availability and employer requirements can change.
              Always verify current course details and job requirements
              before making decisions.

            </div>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="site-footer">

          <div className="container">

            <div className="footer-brand">

              <h3>
                🚀 Career Hub 2026
              </h3>

              <p>
                Jobs • Skills • Courses • Roadmaps • Resume • Interviews
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

          </div>

        </footer>

      </div>
    </>
  );
}
