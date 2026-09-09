import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const interviewCategories = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    questions: [
      "What is Machine Learning?",
      "Difference between AI, ML and Deep Learning?",
      "What is supervised learning?",
      "What is overfitting?",
      "What is a neural network?",
      "What is Generative AI?",
    ],
  },
  {
    icon: "📊",
    title: "Data Analyst",
    questions: [
      "What is data analysis?",
      "Difference between WHERE and HAVING in SQL?",
      "What is a PivotTable?",
      "What is a KPI?",
      "What is data cleaning?",
      "How do you explain a dashboard?",
    ],
  },
  {
    icon: "💻",
    title: "Software Development",
    questions: [
      "What is an API?",
      "Difference between frontend and backend?",
      "What is React?",
      "What is Git?",
      "What is object-oriented programming?",
      "How do you debug an application?",
    ],
  },
  {
    icon: "🔐",
    title: "Cybersecurity",
    questions: [
      "What is cybersecurity?",
      "What is phishing?",
      "What is a firewall?",
      "What is authentication?",
      "What is encryption?",
      "What is incident response?",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    questions: [
      "What is cloud computing?",
      "What is AWS?",
      "What is Docker?",
      "What is Kubernetes?",
      "What is CI/CD?",
      "What is Infrastructure as Code?",
    ],
  },
  {
    icon: "🏛️",
    title: "Government Jobs",
    questions: [
      "Tell us about yourself.",
      "Why do you want this position?",
      "What are your strengths?",
      "What are your career goals?",
      "Why should we select you?",
      "How do you handle pressure?",
    ],
  },
];

const hrQuestions = [
  "Tell me about yourself.",
  "Why should we hire you?",
  "What are your strengths?",
  "What is your biggest weakness?",
  "Why do you want this job?",
  "Where do you see yourself in five years?",
  "Why did you choose this career?",
  "Tell me about a difficult situation you handled.",
  "How do you handle pressure?",
  "Are you comfortable working in a team?",
  "Why should we select you over other candidates?",
  "Do you have any questions for us?",
];

const aptitudeTopics = [
  {
    icon: "🔢",
    title: "Quantitative Aptitude",
    topics: [
      "Percentages",
      "Profit & Loss",
      "Time & Work",
      "Time & Distance",
      "Ratio & Proportion",
      "Averages",
      "Simple & Compound Interest",
      "Number Systems",
    ],
  },
  {
    icon: "🧩",
    title: "Logical Reasoning",
    topics: [
      "Number Series",
      "Coding-Decoding",
      "Blood Relations",
      "Directions",
      "Syllogisms",
      "Puzzles",
      "Seating Arrangement",
      "Data Sufficiency",
    ],
  },
  {
    icon: "📖",
    title: "English",
    topics: [
      "Grammar",
      "Vocabulary",
      "Reading Comprehension",
      "Sentence Correction",
      "Fill in the Blanks",
      "Synonyms",
      "Antonyms",
      "Para Jumbles",
    ],
  },
];

const preparationSteps = [
  {
    icon: "1️⃣",
    title: "Understand the Role",
    text: "Read the job description carefully and identify the skills and responsibilities expected.",
  },
  {
    icon: "2️⃣",
    title: "Revise Fundamentals",
    text: "Review the core concepts related to the position before practicing advanced questions.",
  },
  {
    icon: "3️⃣",
    title: "Practice Questions",
    text: "Solve technical, aptitude and role-specific questions regularly.",
  },
  {
    icon: "4️⃣",
    title: "Practice Explaining",
    text: "Don't only memorize answers. Practice explaining concepts in simple language.",
  },
  {
    icon: "5️⃣",
    title: "Mock Interviews",
    text: "Practice answering questions aloud and improve your confidence and communication.",
  },
  {
    icon: "6️⃣",
    title: "Research Company",
    text: "Understand the company, role, products and industry before the interview.",
  },
  {
    icon: "7️⃣",
    title: "Prepare Questions",
    text: "Keep a few thoughtful questions ready to ask the interviewer.",
  },
  {
    icon: "8️⃣",
    title: "Review & Improve",
    text: "After every practice interview, identify weak areas and work on them.",
  },
];

export default function InterviewPrep() {
  const [openCategory, setOpenCategory] = useState(null);
  const [search, setSearch] = useState("");

  const filteredHRQuestions = hrQuestions.filter((question) =>
    question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Interview Preparation 2026 | Career Hub</title>

        <meta
          name="description"
          content="Prepare for job interviews with HR questions, aptitude topics, technical interview questions and career-specific interview preparation for AI, Data Analytics, Software, Cybersecurity and Cloud."
        />

        <meta
          name="keywords"
          content="interview preparation 2026, interview questions, HR interview questions, technical interview questions, aptitude preparation, data analyst interview, software developer interview"
        />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="/interview-prep" />

        <style>{`
          .interview-wrapper {
            padding: 40px 0 70px;
          }

          .interview-search {
            max-width: 650px;
            margin: 25px auto;
          }

          .interview-search input {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid #d7deea;
            border-radius: 10px;
            font-size: 15px;
            outline: none;
          }

          .interview-search input:focus {
            border-color: #123f7a;
            box-shadow: 0 0 0 3px rgba(18, 63, 122, 0.08);
          }

          .question-list {
            margin-top: 15px;
          }

          .question-item {
            background: #ffffff;
            border: 1px solid #e1e7ef;
            border-radius: 9px;
            padding: 12px 14px;
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 600;
          }

          .interview-category-card {
            background: #ffffff;
            border: 1px solid #e1e7ef;
            border-radius: 14px;
            padding: 22px;
            box-shadow: 0 5px 18px rgba(18, 63, 122, 0.06);
          }

          .interview-category-card h3 {
            color: #123f7a;
            margin-top: 10px;
          }

          .question-toggle {
            width: 100%;
            border: 0;
            background: #edf3fb;
            color: #123f7a;
            padding: 11px 14px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 700;
            margin-top: 12px;
          }

          .question-toggle:hover {
            background: #e2ebf8;
          }

          .answer-box {
            margin-top: 10px;
            padding: 13px;
            background: #f7f9fc;
            border-left: 3px solid #123f7a;
            border-radius: 5px;
            font-size: 13px;
            line-height: 1.6;
          }

          .interview-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background: #ffffff;
          }

          .interview-table th,
          .interview-table td {
            border: 1px solid #e1e7ef;
            padding: 12px;
            text-align: left;
            font-size: 13px;
          }

          .interview-table th {
            background: #f2f6fb;
            color: #123f7a;
          }

          @media (max-width: 700px) {
            .interview-wrapper {
              padding: 25px 0 50px;
            }

            .interview-category-card {
              padding: 16px;
            }

            .interview-table {
              display: block;
              overflow-x: auto;
            }
          }
        `}</style>
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
              <Link href="/courses">Courses</Link>
              <Link href="/resume-builder">Resume</Link>
              <Link href="/interview-prep">Interview</Link>
            </div>

          </div>
        </nav>

        {/* HERO */}
        <header className="career-header">
          <div className="container">

            <div className="header-badge">
              🎤 Interview Preparation 2026
            </div>

            <h1>Interview Preparation Hub</h1>

            <p>
              Prepare for aptitude tests, HR rounds and technical interviews
              with structured practice.
            </p>

            <div className="hero-buttons">

              <Link
                href="/resume-builder"
                className="hero-primary"
              >
                📄 Build Resume
              </Link>

              <Link
                href="/career-roadmaps"
                className="hero-secondary"
              >
                🗺️ Career Roadmaps
              </Link>

            </div>

          </div>
        </header>

        {/* INTRO */}
        <main className="interview-wrapper">

          <div className="container">

            <div className="section-heading">
              <h2>🎯 Prepare With a Strategy</h2>

              <p>
                Good interview preparation combines technical knowledge,
                aptitude practice, communication and confidence.
              </p>
            </div>

            <div className="notice-box">
              💡 <strong>Interview Tip:</strong> Don't memorize answers
              word-for-word. Understand the concept and practice explaining
              it naturally.
            </div>

            {/* SEARCH */}
            <div className="interview-search">
              <input
                type="search"
                placeholder="🔎 Search HR questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

          </div>

          {/* HR QUESTIONS */}
          <section className="career-section">
            <div className="container">

              <div className="section-heading">
                <h2>👔 Common HR Interview Questions</h2>
                <p>
                  Practice these questions before attending interviews.
                </p>
              </div>

              <div className="career-grid">

                {filteredHRQuestions.map((question, index) => (
                  <div
                    className="career-card"
                    key={question}
                  >

                    <div className="career-icon">
                      {index + 1}
                    </div>

                    <h3>{question}</h3>

                    <p>
                      Prepare a genuine answer using your own education,
                      experience, projects and career goals.
                    </p>

                  </div>
                ))}

              </div>

              {filteredHRQuestions.length === 0 && (
                <div className="no-jobs">
                  No matching questions found.
                </div>
              )}

            </div>
          </section>

          {/* TECHNICAL */}
          <section className="career-section">
            <div className="container">

              <div className="section-heading">
                <h2>💻 Technical Interview Preparation</h2>

                <p>
                  Select a career area and practice the questions commonly
                  associated with that field.
                </p>
              </div>

              <div className="career-grid">

                {interviewCategories.map((category, categoryIndex) => {

                  const isOpen = openCategory === categoryIndex;

                  return (
                    <article
                      className="interview-category-card"
                      key={category.title}
                    >

                      <div className="career-icon">
                        {category.icon}
                      </div>

                      <h3>{category.title}</h3>

                      <p>
                        Practice important concepts and prepare explanations
                        for common interview questions.
                      </p>

                      <button
                        type="button"
                        className="question-toggle"
                        onClick={() =>
                          setOpenCategory(
                            isOpen ? null : categoryIndex
                          )
                        }
                      >
                        {isOpen
                          ? "Hide Questions ▲"
                          : "Show Questions ▼"}
                      </button>

                      {isOpen && (
                        <div className="question-list">

                          {category.questions.map(
                            (question) => (
                              <div
                                className="question-item"
                                key={question}
                              >
                                ❓ {question}
                              </div>
                            )
                          )}

                        </div>
                      )}

                    </article>
                  );
                })}

              </div>

            </div>
          </section>

          {/* APTITUDE */}
          <section className="career-section">
            <div className="container">

              <div className="section-heading">
                <h2>🧠 Aptitude Preparation</h2>

                <p>
                  Aptitude tests are common in many fresher recruitment
                  processes and competitive examinations.
                </p>
              </div>

              <div className="career-grid">

                {aptitudeTopics.map((category) => (
                  <div
                    className="career-card"
                    key={category.title}
                  >

                    <div className="career-icon">
                      {category.icon}
                    </div>

                    <h3>{category.title}</h3>

                    <div className="category-grid">

                      {category.topics.map((topic) => (
                        <div
                          className="category-grid-item"
                          key={topic}
                        >
                          {topic}
                        </div>
                      ))}

                    </div>

                  </div>
                ))}

              </div>

            </div>
          </section>

          {/* STAR METHOD */}
          <section className="resources-section">
            <div className="container">

              <div className="section-heading">
                <h2>⭐ STAR Method for Behavioral Questions</h2>

                <p>
                  Use a structured approach when answering questions about
                  your past experiences.
                </p>
              </div>

              <table className="interview-table">

                <thead>
                  <tr>
                    <th>Part</th>
                    <th>Meaning</th>
                    <th>What to Explain</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td><strong>S — Situation</strong></td>
                    <td>Context</td>
                    <td>
                      Explain what was happening.
                    </td>
                  </tr>

                  <tr>
                    <td><strong>T — Task</strong></td>
                    <td>Responsibility</td>
                    <td>
                      Explain what you needed to accomplish.
                    </td>
                  </tr>

                  <tr>
                    <td><strong>A — Action</strong></td>
                    <td>What you did</td>
                    <td>
                      Explain the specific actions you took.
                    </td>
                  </tr>

                  <tr>
                    <td><strong>R — Result</strong></td>
                    <td>Outcome</td>
                    <td>
                      Explain what happened and what you learned.
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>
          </section>

          {/* PREPARATION ROADMAP */}
          <section className="skills-section">
            <div className="container">

              <div className="section-heading">
                <h2>🗺️ Interview Preparation Roadmap</h2>

                <p>
                  Follow these steps before your next interview.
                </p>
              </div>

              <div className="career-grid">

                {preparationSteps.map((step) => (
                  <div
                    className="skill-card"
                    key={step.title}
                  >

                    <div className="career-icon">
                      {step.icon}
                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.text}</p>

                  </div>
                ))}

              </div>

            </div>
          </section>

          {/* MOCK INTERVIEW */}
          <section className="career-section">
            <div className="container">

              <div className="section-heading">
                <h2>🎤 Mock Interview Checklist</h2>
              </div>

              <div className="category-grid">

                <div className="category-grid-item">
                  ✅ 60-second introduction
                </div>

                <div className="category-grid-item">
                  ✅ Explain your strongest project
                </div>

                <div className="category-grid-item">
                  ✅ Explain your technical skills
                </div>

                <div className="category-grid-item">
                  ✅ Explain one difficult problem you solved
                </div>

                <div className="category-grid-item">
                  ✅ Explain your strengths
                </div>

                <div className="category-grid-item">
                  ✅ Explain an area you are improving
                </div>

                <div className="category-grid-item">
                  ✅ Why this company?
                </div>

                <div className="category-grid-item">
                  ✅ Why this role?
                </div>

                <div className="category-grid-item">
                  ✅ Expected questions about your resume
                </div>

                <div className="category-grid-item">
                  ✅ Questions to ask the interviewer
                </div>

              </div>

            </div>
          </section>

          {/* FRESHER TIPS */}
          <section className="career-section">
            <div className="container">

              <div className="section-heading">
                <h2>🌟 Interview Tips for Freshers</h2>
              </div>

              <
