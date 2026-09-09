import Head from "next/head";
import { useState } from "react";

export default function ResumeBuilder() {
  const [form, setForm] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    summary: "",
    skills: "",
    education: "",
    experience: "",
    projects: "",
    certifications: "",
    achievements: "",
  });

  const [showResume, setShowResume] = useState(false);

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const generateResume = () => {
    if (!form.name.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!form.email.trim()) {
      alert("Please enter your email.");
      return;
    }

    setShowResume(true);

    setTimeout(() => {
      document
        .getElementById("resume-preview")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const printResume = () => {
    window.print();
  };

  const clearForm = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear all resume details?"
    );

    if (!confirmed) return;

    setForm({
      name: "",
      role: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      summary: "",
      skills: "",
      education: "",
      experience: "",
      projects: "",
      certifications: "",
      achievements: "",
    });

    setShowResume(false);
  };

  const splitItems = (value) => {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  };

  return (
    <>
      <Head>
        <title>Free Resume Builder 2026 | ATS Resume | Career Hub</title>

        <meta
          name="description"
          content="Create a professional ATS-friendly resume with Career Hub 2026. Add your skills, education, projects, experience and certifications."
        />

        <meta
          name="keywords"
          content="resume builder 2026, ATS resume builder, free resume builder India, fresher resume, software developer resume, data analyst resume, government job resume"
        />

        <meta name="robots" content="index, follow" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="/resume-builder" />

        <style>{`
          .resume-builder-wrapper {
            padding: 40px 0 70px;
          }

          .resume-builder-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 28px;
            align-items: start;
          }

          .resume-form-card,
          .resume-preview-card {
            background: #ffffff;
            border: 1px solid #e1e7ef;
            border-radius: 14px;
            padding: 24px;
            box-shadow: 0 5px 18px rgba(18, 63, 122, 0.06);
          }

          .resume-form-card h2,
          .resume-preview-card h2 {
            margin-top: 0;
            color: #123f7a;
          }

          .resume-field {
            margin-bottom: 16px;
          }

          .resume-field label {
            display: block;
            margin-bottom: 7px;
            font-size: 14px;
            font-weight: 700;
            color: #243149;
          }

          .resume-field input,
          .resume-field textarea {
            width: 100%;
            border: 1px solid #d7deea;
            border-radius: 9px;
            padding: 12px;
            background: #ffffff;
            color: #172033;
            outline: none;
          }

          .resume-field input:focus,
          .resume-field textarea:focus {
            border-color: #123f7a;
            box-shadow: 0 0 0 3px rgba(18, 63, 122, 0.08);
          }

          .resume-field textarea {
            min-height: 100px;
            resize: vertical;
          }

          .resume-actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 20px;
          }

          .resume-action-primary,
          .resume-action-secondary,
          .resume-action-danger {
            border: 0;
            border-radius: 9px;
            padding: 12px 18px;
            font-weight: 700;
            cursor: pointer;
          }

          .resume-action-primary {
            background: #123f7a;
            color: #ffffff;
          }

          .resume-action-secondary {
            background: #edf3fb;
            color: #123f7a;
          }

          .resume-action-danger {
            background: #fdebed;
            color: #b4232f;
          }

          .resume-preview {
            background: #ffffff;
            color: #111827;
            border: 1px solid #dfe4ec;
            padding: 34px;
            min-height: 700px;
          }

          .resume-name {
            font-size: 30px;
            font-weight: 800;
            margin: 0 0 5px;
            color: #111827;
          }

          .resume-role {
            font-size: 17px;
            font-weight: 700;
            color: #123f7a;
            margin-bottom: 12px;
          }

          .resume-contact {
            font-size: 12px;
            line-height: 1.7;
            border-bottom: 1px solid #cfd6df;
            padding-bottom: 12px;
            margin-bottom: 20px;
          }

          .resume-section {
            margin-top: 20px;
          }

          .resume-section h3 {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.7px;
            color: #123f7a;
            border-bottom: 1px solid #d6dce5;
            padding-bottom: 5px;
            margin-bottom: 9px;
          }

          .resume-section p {
            font-size: 13px;
            line-height: 1.65;
            white-space: pre-line;
            margin: 0;
          }

          .resume-skills {
            display: flex;
            flex-wrap: wrap;
            gap: 7px;
          }

          .resume-skill {
            font-size: 12px;
            border: 1px solid #d5dce7;
            padding: 5px 8px;
            border-radius: 5px;
          }

          .resume-empty {
            text-align: center;
            padding: 70px 20px;
            color: #697386;
          }

          .resume-tip-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            margin-top: 25px;
          }

          .resume-tip {
            background: #ffffff;
            border: 1px solid #e1e7ef;
            border-radius: 12px;
            padding: 18px;
          }

          .resume-tip h3 {
            margin-top: 0;
            color: #123f7a;
          }

          .resume-tip p {
            margin-bottom: 0;
            font-size: 14px;
            line-height: 1.6;
          }

          @media (max-width: 850px) {
            .resume-builder-grid {
              grid-template-columns: 1fr;
            }

            .resume-tip-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 500px) {
            .resume-builder-wrapper {
              padding: 25px 0 50px;
            }

            .resume-form-card,
            .resume-preview-card {
              padding: 16px;
            }

            .resume-preview {
              padding: 20px;
            }

            .resume-name {
              font-size: 24px;
            }
          }

          @media print {
            body * {
              visibility: hidden;
            }

            #resume-print-area,
            #resume-print-area * {
              visibility: visible;
            }

            #resume-print-area {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }

            .no-print {
              display: none !important;
            }

            .resume-preview {
              border: none;
              box-shadow: none;
              min-height: auto;
            }
          }
        `}</style>
      </Head>

      <div className="page">

        {/* NAVIGATION */}
        <nav className="top-nav no-print">
          <div className="container nav-inner">

            <a href="/" className="brand">
              Career Hub 2026
            </a>

            <div className="nav-links">
              <a href="/">Jobs</a>
              <a href="/career-roadmaps">Roadmaps</a>
              <a href="/courses">Courses</a>
              <a href="/resume-builder">Resume</a>
              <a href="/interview-prep">Interview</a>
            </div>

          </div>
        </nav>

        {/* HERO */}
        <header className="career-header no-print">
          <div className="container">

            <div className="header-badge">
              📄 Career Tool 2026
            </div>

            <h1>ATS Resume Builder</h1>

            <p>
              Create a clean, professional and job-focused resume in a few
              simple steps.
            </p>

            <div className="hero-buttons">

              <a
                href="/career-roadmaps"
                className="hero-primary"
              >
                🗺️ Career Roadmaps
              </a>

              <a
                href="/interview-prep"
                className="hero-secondary"
              >
                🎤 Interview Prep
              </a>

            </div>

          </div>
        </header>

        {/* BUILDER */}
        <main className="resume-builder-wrapper">

          <div className="container">

            <div className="section-heading no-print">

              <h2>📝 Build Your Resume</h2>

              <p>
                Fill in your details below. Your resume preview will update
                when you generate it.
              </p>

            </div>

            <div className="resume-builder-grid">

              {/* FORM */}
              <section className="resume-form-card no-print">

                <h2>Personal Information</h2>

                <div className="resume-field">

                  <label>Full Name *</label>

                  <input
                    type="text"
                    placeholder="e.g. Glory Challapalli"
                    value={form.name}
                    onChange={(e) =>
                      updateField("name", e.target.value)
                    }
                  />

                </div>

                <div className="resume-field">

                  <label>Target Job Role</label>

                  <input
                    type="text"
                    placeholder="e.g. Data Analyst"
                    value={form.role}
                    onChange={(e) =>
                      updateField("role", e.target.value)
                    }
                  />

                </div>

                <div className="resume-field">

                  <label>Email *</label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) =>
                      updateField("email", e.target.value)
                    }
                  />

                </div>

                <div className="resume-field">

                  <label>Phone</label>

                  <input
                    type="tel"
                    placeholder="Your phone number"
                    value={form.phone}
                    onChange={(e) =>
                      updateField("phone", e.target.value)
                    }
                  />

                </div>

                <div className="resume-field">

                  <label>Location</label>

                  <input
                    type="text"
                    placeholder="City, State"
                    value={form.location}
                    onChange={(e) =>
                      updateField("location", e.target.value)
                    }
                  />

                </div>

                <div className="resume-field">

                  <label>LinkedIn</label>

                  <input
                    type="text"
                    placeholder="linkedin.com/in/yourname"
                    value={form.linkedin}
                    onChange={(e) =>
                      updateField("linkedin", e.target.value)
                    }
                  />

                </div>

                <div className="resume-field">

                  <label>GitHub / Portfolio</label>

                  <input
                    type="text"
                    placeholder="github.com/yourname"
                    value={form.github}
                    onChange={(e) =>
                      updateField("github", e.target.value)
                    }
                  />

                </div>

                <h2>Professional Summary</h2>

                <div className="resume-field">

                  <label>Summary</label>

                  <textarea
                    placeholder="Write 2–4 lines about your skills, education, experience and career goal."
                    value={form.summary}
                    onChange={(e) =>
                      updateField("summary", e.target.value)
                    }
                  />

                </div>

                <h2>Skills</h2>

                <div className="resume-field">

                  <label>
                    Skills — separate each skill with a comma
                  </label>

                  <textarea
                    placeholder="Python, SQL, Excel, Power BI, Statistics"
                    value={form.skills}
                    onChange={(e) =>
                      updateField("skills", e.target.value)
                    }
                  />

                </div>

                <h2>Education</h2>

                <div className="resume-field">

                  <label>Education</label>

                  <textarea
                    placeholder={`MSc Statistics
University Name
2020
CGPA: 7.8`}
                    value={form.education}
                    onChange={(e) =>
                      updateField("education", e.target.value)
                    }
                  />

                </div>

                <h2>Experience</h2>

                <div className="resume-field">

                  <label>Experience</label>

                  <textarea
                    placeholder={`Job Title — Company
2023–2025
• Achievement or responsibility
• Achievement or responsibility`}
                    value={form.experience}
                    onChange={(e) =>
                      updateField("experience", e.target.value)
                    }
                  />

                </div>

                <h2>Projects</h2>

                <div className="resume-field">

                  <label>Projects</label>

                  <textarea
                    placeholder={`Project Name
• What you built
• Technologies used
• Result / achievement`}
                    value={form.projects}
                    onChange={(e) =>
                      updateField("projects", e.target.value)
                    }
                  />

                </div>

                <h2>Certifications</h2>

                <div className="resume-field">

                  <label>Certifications</label>

                  <textarea
                    placeholder={`Python Certification
SQL Certification
Google Project Management`}
                    value={form.certifications}
                    onChange={(e) =>
                      updateField("certifications", e.target.value)
                    }
                  />

                </div>

                <h2>Achievements</h2>

                <div className="resume-field">

                  <label>Achievements</label>

                  <textarea
                    placeholder="Awards, competitions, publications, achievements..."
                    value={form.achievements}
                    onChange={(e) =>
                      updateField("achievements", e.target.value)
                    }
                  />

                </div>

                <div className="resume-actions">

                  <button
                    type="button"
                    className="resume-action-primary"
                    onClick={generateResume}
                  >
                    ✨ Generate Resume
                  </button>

                  <button
                    type="button"
                    className="resume-action-secondary"
                    onClick={clearForm}
                  >
                    Clear
                  </button>

                </div>

              </section>

              {/* PREVIEW */}
              <section
                className="resume-preview-card"
                id="resume-preview"
              >

                <div className="no-print">

                  <h2>👀 Resume Preview</h2>

                  {!showResume && (
                    <div className="resume-empty">

                      <div style={{ fontSize: "45px" }}>
                        📄
                      </div>

                      <h3>Your Resume Will Appear Here</h3>

                      <p>
                        Fill in your details and click
                        <strong> Generate Resume</strong>.
                      </p>

                    </div>
                  )}

                </div>

                {showResume && (

                  <div id="resume-print-area">

                    <div className="resume-preview">

                      <h1 className="resume-name">
                        {form.name}
                      </h1>

                      {form.role && (
                        <div className="resume-role">
                          {form.role}
                        </div>
                      )}

                      <div className="resume-contact">

                        {form.email && (
                          <span>
                            {form.email}
                          </span>
                        )}

                        {form.phone && (
                          <span>
                            {" • "}
                            {form.phone}
                          </span>
                        )}

                        {form.location && (
                          <span>
                            {" • "}
                            {form.location}
                          </span>
                        ))}

                        {(form.linkedin || form.github) && (

                          <div>

                            {form.linkedin && (
                              <span>
                                LinkedIn: {form.linkedin}
                              </span>
                            )}

                            {form.github && (
                              <span>
                                {" • "}
                                Portfolio/GitHub: {form.github}
                              </span>
                            )}

                          </div>
                        )}

                      </div>

                      {form.summary && (

                        <section className="resume-section">

                          <h3>
                            Professional Summary
                          </h3>

                          <p>
                            {form.summary}
                          </p>

                        </section>
                      )}

                      {form.skills && (

                        <section className="resume-section">

                          <h3>
                            Skills
                          </h3>

                          <div className="resume-skills">

                            {splitItems(form.skills).map((skill) => (
                              <span className="resume-skill" key={skill}>
                                {skill}
                              </span>
                             ))}

                          </div>

                        </section>
                      )}

                      {form.education && (

                        <section className="resume-section">

                          <h3>
                            Education
                          </h3>

                          <p>
                            {form.education}
                          </p>

                        </section>
                      )}

                      {form.experience && (

                        <section className="resume-section">

                          <h3>
                            Experience
                          </h3>

                          <p>
                            {form.experience}
                          </p>

                        </section>
                      )}

                      {form.projects && (

                        <section className="resume-section">

                          <h3>
                            Projects
                          </h3>

                          <p>
                            {form.projects}
                          </p>

                        </section>
                      )}

                      {form.certifications && (

                        <section className="resume-section">

                          <h3>
                            Certifications
                          </h3>

                          <p>
                            {form.certifications}
                          </p>

                        </section>
                      )}

                      {form.achievements && (

                        <section className="resume-section">

                          <h3>
                            Achievements
                          </h3>

                          <p>
                            {form.achievements}
                          </p>

                        </section>
                      )}

                    </div>

                    <div className="resume-actions no-print">

                      <button
                        type="button"
                        className="resume-action-primary"
                        onClick={printResume}
                      >
                        🖨️ Print / Save PDF
                      </button>

                      <button
                        type="button"
                        className="resume-action-secondary"
                        onClick={() => setShowResume(false)}
                      >
                        ✏️ Edit Resume
                      </button>

                    </div>

                  </div>
                )}

              </section>

            </div>

            {/* RESUME TIPS */}
            <section className="career-section no-print">

              <div className="section-heading">

                <h2>
                  💡 ATS Resume Tips
                </h2>

                <p>
                  Follow these simple practices to make your resume easier
                  for recruiters and applicant tracking systems to read.
                </p>

              </div>

              <div className="resume-tip-grid">

                <div className="resume-tip">

                  <h3>
                    🎯 Use Relevant Keywords
                  </h3>

                  <p>
                    Match important skills and keywords from the job
                    description with your genuine qualifications.
                  </p>

                </div>

                <div className="resume-tip">

                  <h3>
                    📊 Show Achievements
                  </h3>

                  <p>
                    Whenever possible, describe results using numbers,
                    percentages or measurable outcomes.
                  </p>

                </div>

                <div className="resume-tip">

                  <h3>
                    🧹 Keep It Clean
                  </h3>

                  <p>
                    Use simple headings, readable formatting and avoid
                    unnecessary graphics or complicated layouts.
                  </p>

                </div>

                <div className="resume-tip">

                  <h3>
                    📝 Customize Your Resume
                  </h3>

                  <p>
                    Adjust your professional summary and skills according
                    to the position you are applying for.
                  </p>

                </div>

                <div className="resume-tip">

                  <h3>
                    💻 Highlight Projects
                  </h3>

                  <p>
                    Freshers can use academic, personal and practical
                    projects to demonstrate technical skills.
                  </p>

                </div>

                <div className="resume-tip">

                  <h3>
                    🔍 Proofread
                  </h3>

                  <p>
                    Check spelling, grammar, dates, phone number, email and
                    links before submitting your resume.
                  </p>

                </div>

              </div>

            </section>

            {/* FINAL CTA */}
            <section className="career-section no-print">

              <div className="notice-box">

                🚀 <strong>Next Step:</strong> After creating your resume,
                practice common HR and technical interview questions.

                <div style={{ marginTop: "15px" }}>

                  <a
                    href="/interview-prep"
                    className="hero-primary"
                  >
                    🎤 Practice Interviews
                  </a>

                </div>

              </div>

            </section>

          </div>

        </main>

        {/* FOOTER */}
        <footer className="site-footer no-print">

          <div className="container">

            <p>
              © 2026 Career Hub 2026. Career information and career tools
              for job seekers.
            </p>

            <div className="footer-links">

              <a href="/">
                Jobs
              </a>

              <a href="/career-roadmaps">
                Career Roadmaps
              </a>

              <a href="/courses">
                Courses
              </a>

              <a href="/resume-builder">
                Resume Builder
              </a>

              <a href="/interview-prep">
                Interview Preparation
              </a>

            </div>

          </div>

        </footer>

      </div>
    </>
  );
}
