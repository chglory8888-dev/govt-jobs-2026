import Head from "next/head";
import Link from "next/link";

const roadmaps = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description:
      "Learn Python, statistics, machine learning and Generative AI to build a career in AI.",
    stages: [
      "Python Basics",
      "Statistics",
      "SQL & Data",
      "Machine Learning",
      "Generative AI",
      "Projects",
      "Resume & Portfolio",
      "Interviews",
    ],
    link: "/ai-careers",
    button: "Explore AI Careers",
  },
  {
    icon: "📊",
    title: "Data Analytics",
    description:
      "Build job-ready skills in Excel, SQL, Power BI, Python and business analytics.",
    stages: [
      "Advanced Excel",
      "SQL",
      "Statistics",
      "Power BI",
      "Python",
      "Data Projects",
      "Portfolio",
      "Interviews",
    ],
    link: "/data-analytics",
    button: "Explore Data Analytics",
  },
  {
    icon: "💻",
    title: "Software Development",
    description:
      "Become a software developer by learning programming, web technologies and real-world development.",
    stages: [
      "Programming Basics",
      "Git & GitHub",
      "HTML & CSS",
      "JavaScript",
      "React / Next.js",
      "APIs",
      "Projects",
      "Interviews",
    ],
    link: "/software-jobs",
    button: "Explore Software Careers",
  },
  {
    icon: "🔐",
    title: "Cybersecurity",
    description:
      "Start your cybersecurity journey with networking, Linux, security fundamentals and practical labs.",
    stages: [
      "Computer Basics",
      "Networking",
      "Linux",
      "Security Fundamentals",
      "Security Labs",
      "Security Tools",
      "Projects",
      "Interviews",
    ],
    link: "/cybersecurity",
    button: "Explore Cybersecurity",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    description:
      "Learn cloud platforms, Linux, Docker, Kubernetes, CI/CD and infrastructure technologies.",
    stages: [
      "Linux",
      "Networking",
      "Cloud Basics",
      "AWS / Azure / GCP",
      "Git",
      "Docker",
      "CI/CD",
      "Kubernetes",
      "Terraform",
      "Projects",
    ],
    link: "/cloud-devops",
    button: "Explore Cloud & DevOps",
  },
  {
    icon: "🏠",
    title: "Remote Careers",
    description:
      "Prepare for work-from-home opportunities across software, analytics, support, writing and operations.",
    stages: [
      "Choose a Skill",
      "Build Core Skills",
      "Create Projects",
      "Portfolio",
      "Resume",
      "Communication",
      "Remote Job Search",
      "Online Interviews",
    ],
    link: "/remote-jobs",
    button: "Explore Remote Jobs",
  },
  {
    icon: "🏛️",
    title: "Government Jobs",
    description:
      "Track government opportunities and prepare for Central Government, Defence, Railway, SSC and other jobs.",
    stages: [
      "Choose Department",
      "Check Eligibility",
      "Find Notifications",
      "Understand Syllabus",
      "Prepare Subjects",
      "Practice Previous Papers",
      "Mock Tests",
      "Apply Before Deadline",
    ],
    link: "/",
    button: "View Government Jobs",
  },
  {
    icon: "🏦",
    title: "Banking Careers",
    description:
      "Explore banking opportunities and prepare for banking examinations and recruitment.",
    stages: [
      "Quantitative Aptitude",
      "Reasoning",
      "English",
      "General Awareness",
      "Banking Awareness",
      "Computer Knowledge",
      "Mock Tests",
      "Applications",
    ],
    link: "/banking",
    button: "Explore Banking Jobs",
  },
  {
    icon: "🚆",
    title: "Railway Careers",
    description:
      "Explore Railway recruitment opportunities and build a structured preparation plan.",
    stages: [
      "Check Eligibility",
      "Understand Exam Pattern",
      "Mathematics",
      "Reasoning",
      "General Awareness",
      "Technical Subjects",
      "Previous Papers",
      "Mock Tests",
    ],
    link: "/railway",
    button: "Explore Railway Jobs",
  },
  {
    icon: "📋",
    title: "SSC Careers",
    description:
      "Prepare for SSC opportunities with a structured approach covering aptitude, reasoning and English.",
    stages: [
      "Choose SSC Exam",
      "Check Eligibility",
      "Quantitative Aptitude",
      "Reasoning",
      "English",
      "General Awareness",
      "Previous Papers",
      "Mock Tests",
    ],
    link: "/ssc",
    button: "Explore SSC Jobs",
  },
  {
    icon: "🏥",
    title: "Healthcare Careers",
    description:
      "Explore healthcare-related government and professional career opportunities.",
    stages: [
      "Choose Career",
      "Check Qualification",
      "Understand Requirements",
      "Build Required Skills",
      "Find Notifications",
      "Prepare",
      "Apply",
      "Interview / Exam",
    ],
    link: "/healthcare",
    button: "Explore Healthcare Jobs",
  },
  {
    icon: "🏢",
    title: "PSU Careers",
    description:
      "Explore Public Sector Undertaking opportunities and prepare according to the required qualification and examination.",
    stages: [
      "Choose PSU",
      "Check Qualification",
      "Check Recruitment",
      "Understand Selection",
      "Technical Preparation",
      "Aptitude",
      "Previous Papers",
      "Apply",
    ],
    link: "/psu",
    button: "Explore PSU Jobs",
  },
  {
    icon: "🪖",
    title: "Defence Careers",
    description:
      "Explore defence career opportunities and understand eligibility, examinations and selection stages.",
    stages: [
      "Choose Defence Career",
      "Check Eligibility",
      "Written Exam",
      "Physical Preparation",
      "Medical Requirements",
      "Previous Papers",
      "Mock Tests",
      "Selection Process",
    ],
    link: "/defence",
    button: "Explore Defence Jobs",
  },
];

const generalSteps = [
  {
    icon: "🎯",
    title: "Choose Your Career",
    text: "Select a career based on your education, interests, strengths and job opportunities.",
  },
  {
    icon: "📚",
    title: "Learn the Basics",
    text: "Build strong fundamentals before moving to advanced topics.",
  },
  {
    icon: "🛠️",
    title: "Build Skills",
    text: "Practice the tools, technologies and subjects required for your target role.",
  },
  {
    icon: "💡",
    title: "Create Projects",
    text: "Build practical projects that demonstrate what you can actually do.",
  },
  {
    icon: "📄",
    title: "Prepare Resume",
    text: "Create an ATS-friendly resume highlighting your skills and projects.",
  },
  {
    icon: "🌐",
    title: "Build Your Profile",
    text: "Maintain professional profiles and showcase your projects and achievements.",
  },
  {
    icon: "🎤",
    title: "Prepare Interviews",
    text: "Practice technical, aptitude, HR and role-specific interview questions.",
  },
  {
    icon: "🚀",
    title: "Apply Consistently",
    text: "Apply to relevant opportunities and continuously improve based on feedback.",
  },
];

export default function CareerRoadmaps() {
  return (
    <>
      <Head>
        <title>Career Roadmaps 2026 | Career Hub 2026</title>

        <meta
          name="description"
          content="Explore career roadmaps for AI, Data Analytics, Software Development, Cybersecurity, Cloud & DevOps, Government Jobs, Banking, Railway, SSC, Healthcare and PSU careers."
        />

        <meta
          name="keywords"
          content="career roadmap 2026, AI roadmap, data analyst roadmap, software developer roadmap, cybersecurity roadmap, cloud roadmap, government jobs roadmap, career guide India"
        />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="/career-roadmaps" />
      </Head>

      <div className="page">

        {/* NAVIGATION */}
        <nav className="top-nav">
          <div className="container nav-inner">
            <Link href="/" className="brand">
              Career Hub 2026
            </Link>

            <div className="nav-links">
              <Link href="/">Jobs</Link>
              <Link href="/career-roadmaps">Roadmaps</Link>
              <Link href="/ai-careers">AI Careers</Link>
              <Link href="/data-analytics">Data</Link>
              <Link href="/software-jobs">IT Jobs</Link>
              <Link href="/remote-jobs">Remote</Link>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <header className="career-header">
          <div className="container">

            <div className="header-badge">
              🗺️ Career Guidance 2026
            </div>

            <h1>Career Roadmaps 2026</h1>

            <p>
              Step-by-step career roadmaps to help you move from beginner
              to job-ready professional.
            </p>

            <div className="hero-buttons">
              <Link href="/" className="hero-primary">
                🔎 Find Jobs
              </Link>

              <Link href="/courses" className="hero-secondary">
                🎓 Explore Skills
              </Link>
            </div>

          </div>
        </header>

        {/* INTRO */}
        <section className="career-section">
          <div className="container">

            <div className="section-heading">
              <h2>Choose Your Career Path</h2>
              <p>
                Don't know where to start? Select a roadmap and follow the
                recommended learning and job-preparation stages.
              </p>
            </div>

            <div className="notice-box">
              💡 <strong>Beginner Tip:</strong> You do not need to learn
              everything at once. Choose one career path, learn the basics,
              practice consistently and build projects.
            </div>

          </div>
        </section>

        {/* ROADMAPS */}
        <section className="career-section">
          <div className="container">

            <div className="section-heading">
              <h2>🚀 Career Roadmaps</h2>
              <p>Choose a path and start learning step by step.</p>
            </div>

            <div className="career-grid">

              {roadmaps.map((roadmap) => (
                <article className="career-card" key={roadmap.title}>

                  <div className="career-icon">
                    {roadmap.icon}
                  </div>

                  <h3>{roadmap.title}</h3>

                  <p>{roadmap.description}</p>

                  <div className="category-grid">
                    {roadmap.stages.map((stage, index) => (
                      <div
                        className="category-grid-item"
                        key={`${roadmap.title}-${stage}`}
                      >
                        {index + 1}. {stage}
                      </div>
                    ))}
                  </div>

                  <Link
                    href={roadmap.link}
                    className="apply-button"
                  >
                    {roadmap.button} →
                  </Link>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* GENERAL JOB ROADMAP */}
        <section className="skills-section">
          <div className="container">

            <div className="section-heading">
              <h2>🎯 General Job-Ready Roadmap</h2>
              <p>
                This process works for most career paths.
              </p>
            </div>

            <div className="career-grid">

              {generalSteps.map((step, index) => (
                <div className="skill-card" key={step.title}>

                  <div className="career-icon">
                    {step.icon}
                  </div>

                  <h3>
                    {index + 1}. {step.title}
                  </h3>

                  <p>{step.text}</p>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* CAREER SELECTION */}
        <section className="resources-section">
          <div className="container">

            <div className="section-heading">
              <h2>🤔 How to Choose the Right Career?</h2>
              <p>
                Consider these factors before spending months learning a new
                skill.
              </p>
            </div>

            <div className="resource-grid">

              <div className="resource-card">
                <h3>🎓 Education</h3>
                <p>
                  Check whether your current qualification matches the
                  requirements of the career.
                </p>
              </div>

              <div className="resource-card">
                <h3>❤️ Interest</h3>
                <p>
                  Choose something you can continue learning and practicing
                  consistently.
                </p>
              </div>

              <div className="resource-card">
                <h3>💪 Strengths</h3>
                <p>
                  Consider whether your strengths are more suited to
                  technology, numbers, communication, analysis or other areas.
                </p>
              </div>

              <div className="resource-card">
                <h3>📈 Opportunities</h3>
                <p>
                  Research the type of jobs, entry-level roles and skills
                  required in your target field.
                </p>
              </div>

              <div className="resource-card">
                <h3>💰 Salary Potential</h3>
                <p>
                  Consider salary growth, but also evaluate skills,
                  experience and long-term career progression.
                </p>
              </div>

              <div className="resource-card">
                <h3>🌍 Work Style</h3>
                <p>
                  Decide whether you prefer office, remote, hybrid,
                  government or field-based work.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* QUICK LINKS */}
        <section className="career-section">
          <div className="container">

            <div className="section-heading">
              <h2>⚡ Quick Career Links</h2>
            </div>

            <div className="category-grid">

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
                href="/courses"
                className="category-grid-item"
              >
                🎓 Skills & Courses
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
                🎤 Interview Prep
              </Link>

              <Link
                href="/"
                className="category-grid-item"
              >
                🏛️ Government Jobs
              </Link>

              <Link
                href="/banking"
                className="category-grid-item"
              >
                🏦 Banking
              </Link>

              <Link
                href="/railway"
                className="category-grid-item"
              >
                🚆 Railway
              </Link>

              <Link
                href="/ssc"
                className="category-grid-item"
              >
                📋 SSC
              </Link>

              <Link
                href="/defence"
                className="category-grid-item"
              >
                🪖 Defence
              </Link>

              <Link
                href="/healthcare"
                className="category-grid-item"
              >
                🏥 Healthcare
              </Link>

              <Link
                href="/psu"
                className="category-grid-item"
              >
                🏢 PSU
              </Link>

            </div>

          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="seo-content">
          <div className="container">

            <h2>Career Roadmaps in India 2026</h2>

            <p>
              Choosing the right career can be difficult when there are
              hundreds of different courses, technologies and job
              opportunities available. A career roadmap provides a structured
              path showing what to learn first, what to practice next and how
              to prepare for employment.
            </p>

            <p>
              Career Hub 2026 provides roadmaps for AI and Machine Learning,
              Data Analytics, Software Development, Cybersecurity, Cloud and
              DevOps, Remote Careers and several government career paths.
            </p>

            <h3>How to become job ready</h3>

            <p>
              Start with fundamentals, develop practical skills, complete
              projects, prepare a strong resume, build a professional
              portfolio and practice interviews. Consistent practice is more
              important than trying to learn many technologies simultaneously.
            </p>

            <h3>For freshers</h3>

            <p>
              Freshers should focus on skills that match entry-level job
              descriptions. Projects, practical knowledge, communication and
              a clear understanding of fundamentals can help demonstrate
              job readiness.
            </p>

          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="career-section">
          <div className="container">

            <div className="notice-box">
              ⚠️ <strong>Important:</strong> Career roadmaps are general
              educational guidance. Job requirements, eligibility, salaries,
              recruitment processes and technologies can change. Always check
              the official notification or employer requirements before
              applying.
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">

            <h3>Career Hub 2026</h3>

            <p>
              Jobs • Careers • Skills • Roadmaps • Resume • Interviews
            </p>

            <div className="category-grid">

              <Link href="/" className="category-grid-item">
                Home
              </Link>

              <Link
                href="/career-roadmaps"
                className="category-grid-item"
              >
                Career Roadmaps
              </Link>
              <Link
  href="/courses"
  className="category-grid-item"
>
  🎓 Skills & Courses
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

              
