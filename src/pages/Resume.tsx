import React from 'react';
import { Download, ExternalLink, GraduationCap, Briefcase, Wrench, Award, User } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useThemeColors } from '../hooks/useThemeColors';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';

interface ProjectExperienceItem {
  title: string;
  role: string;
  period: string;
  tech: string[];
}

interface SkillGroup {
  category: string;
  items: string[];
}

const Resume = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectExperiences: ProjectExperienceItem[] = [
    {
      title: 'CryptoWise Mobile',
      role: 'Project Leader & Full Stack Mobile Developer',
      period: 'Feb 2026 – Present',
      tech: ['Flutter', 'Firebase', 'CoinGecko API', 'Figma'],
    },
    {
      title: 'JakaAja (Smart Kanteen Mobile App)',
      role: 'Team Member',
      period: 'Aug 2025 – Jan 2026',
      tech: ['Flutter', 'Laravel', 'MySQL', 'Midtrans', 'Figma'],
    },
    {
      title: 'Kuliner Khas Toba',
      role: 'Team Member, Full Stack & UI/UX',
      period: 'Feb 2025 – Jul 2025',
      tech: ['Laravel', 'PHP', 'MySQL', 'Figma'],
    },
    {
      title: 'Kuliner Khas Medan',
      role: 'Frontend Developer',
      period: 'Sep 2024 – Jan 2025',
      tech: ['Laravel', 'PHP', 'MySQL', 'Figma'],
    },
  ];

  const skillGroups: SkillGroup[] = [
    {
      category: 'Mobile & Web',
      items: ['Flutter', 'Dart', 'Laravel (REST API)', 'HTML/CSS', 'PHP'],
    },
    {
      category: 'Database & Cloud',
      items: ['Firebase (Auth, Firestore, Messaging)', 'MySQL'],
    },
    {
      category: 'System Analysis & QA',
      items: ['UML', 'ERD', 'UI/UX Wireframing', 'Black Box Testing', 'UAT'],
    },
    {
      category: 'Tools',
      items: ['Git/GitHub', 'Postman', 'Draw.io', 'Figma'],
    },
  ];

  const certifications = [
    'Certificate of Competency – PT. Telkom Akses Indonesia (2023)',
    'Certificate of Completion – CV. Batam Copier (2022)',
    'TOEIC Prediction Test – Bina Nusantara (2022) & TOEIC ETS (2021)',
  ];

  const cardStyle: React.CSSProperties = isDarkMode
    ? {
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.72) 0%, rgba(15, 23, 42, 0.62) 100%)',
        border: '1px solid rgba(234, 190, 195, 0.22)',
        boxShadow: '0 8px 28px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(253, 213, 223, 0.1)',
      }
    : {
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 245, 247, 0.75) 100%)',
        border: '1px solid rgba(234, 190, 195, 0.45)',
        boxShadow: '0 8px 28px rgba(200, 139, 149, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
      };

  const headingColor = isDarkMode ? themeColors.colors.pink[100] : '#6B4C57';
  const bodyColor = isDarkMode ? themeColors.colors.dark[200] : '#4B363F';
  const mutedColor = isDarkMode ? themeColors.colors.pink[300] : '#8B5A65';

  return (
    <section
      aria-label="Resume page"
      className="flex-1 min-h-screen -mt-[70px] pt-[98px] md:-mt-[80px] md:pt-[116px] flex flex-col transition-colors duration-300"
      style={{
        background: isDarkMode
          ? 'radial-gradient(circle at 15% 6%, rgba(234, 190, 195, 0.1) 0%, transparent 42%), radial-gradient(circle at 85% 10%, rgba(253, 213, 223, 0.08) 0%, transparent 45%), #0A0F1B'
          : 'radial-gradient(circle at 12% 8%, rgba(253, 213, 223, 0.38) 0%, transparent 45%), radial-gradient(circle at 88% 12%, rgba(255, 221, 204, 0.34) 0%, transparent 48%), radial-gradient(circle at 50% 100%, rgba(250, 232, 237, 0.45) 0%, transparent 55%), #FFF9FA',
      }}
    >
      <div className="container mx-auto px-6 max-w-4xl flex-1 pb-10">
        {/* Back Button */}
        <div>
          <BackButton
            to="/"
            scrollToId=""
            label="Back to Home"
            ariaLabel="Navigate back to homepage"
          />
        </div>

        {/* Page Header & Action Buttons */}
        <header className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <div>
            <h1
              className="text-4xl font-bold tracking-tight"
              style={{ color: headingColor }}
            >
              Resume
            </h1>
            <p
              className="text-base md:text-lg font-medium mt-1.5"
              style={{ color: mutedColor }}
            >
              Informatics Engineering Student • Mobile &amp; Web Developer
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/CV-Chairunnisa-Yasfa.pdf"
              download="CV-Chairunnisa-Yasfa.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: isDarkMode ? '#8B5A65' : '#6B4C57',
                color: '#FFF5F7',
                border: isDarkMode
                  ? '1.5px solid rgba(253, 213, 223, 0.4)'
                  : '1.5px solid #6B4C57',
                boxShadow: isDarkMode
                  ? '0 4px 16px rgba(0, 0, 0, 0.3)'
                  : '0 4px 14px rgba(107, 76, 87, 0.25)',
              }}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download PDF</span>
            </a>

            <a
              href="/CV-Chairunnisa-Yasfa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: isDarkMode
                  ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.65) 0%, rgba(15, 23, 42, 0.5) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.78) 0%, rgba(255, 245, 247, 0.62) 100%)',
                color: isDarkMode ? themeColors.colors.pink[100] : '#6B4C57',
                border: isDarkMode
                  ? '1.5px solid rgba(234, 190, 195, 0.35)'
                  : '1.5px solid rgba(139, 90, 101, 0.42)',
                boxShadow: isDarkMode
                  ? '0 4px 14px rgba(0, 0, 0, 0.24)'
                  : '0 4px 14px rgba(200, 139, 149, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
              }}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              <span>View Full PDF</span>
            </a>
          </div>
        </header>

        {/* Resume Cards */}
        <div className="space-y-6">
          {/* Summary */}
          <article className="rounded-2xl backdrop-blur-md p-6 md:p-7" style={cardStyle}>
            <div className="flex items-center gap-2.5 mb-3">
              <User className="h-5 w-5 shrink-0" style={{ color: mutedColor }} aria-hidden="true" />
              <h2 className="text-xl font-bold" style={{ color: headingColor }}>
                Summary
              </h2>
            </div>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: bodyColor }}>
              Informatics Engineering student at Politeknik Negeri Batam with hands-on experience in cross-platform mobile and web application development using Flutter, Laravel, and Firebase. Skilled in REST API integration, database management, system analysis (UML/ERD), and software quality assurance testing (Black Box &amp; UAT).
            </p>
          </article>

          {/* Education */}
          <article className="rounded-2xl backdrop-blur-md p-6 md:p-7" style={cardStyle}>
            <div className="flex items-center gap-2.5 mb-3">
              <GraduationCap className="h-5 w-5 shrink-0" style={{ color: mutedColor }} aria-hidden="true" />
              <h2 className="text-xl font-bold" style={{ color: headingColor }}>
                Education
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-base md:text-lg font-semibold" style={{ color: headingColor }}>
                  Politeknik Negeri Batam
                </h3>
                <p className="text-sm md:text-base" style={{ color: bodyColor }}>
                  Diploma in Informatics Engineering (Mobile Development) • Batam, Indonesia
                </p>
              </div>
              <span
                className="inline-flex self-start sm:self-center items-center px-3 py-1 rounded-full text-xs font-semibold shrink-0"
                style={{
                  backgroundColor: isDarkMode ? 'rgba(234, 190, 195, 0.14)' : 'rgba(253, 213, 223, 0.45)',
                  color: isDarkMode ? themeColors.colors.pink[200] : '#6B4C57',
                  border: isDarkMode
                    ? '1px solid rgba(234, 190, 195, 0.25)'
                    : '1px solid rgba(234, 190, 195, 0.55)',
                }}
              >
                2024 – Present
              </span>
            </div>
          </article>

          {/* Project Experience */}
          <article className="rounded-2xl backdrop-blur-md p-6 md:p-7" style={cardStyle}>
            <div className="flex items-center gap-2.5 mb-5">
              <Briefcase className="h-5 w-5 shrink-0" style={{ color: mutedColor }} aria-hidden="true" />
              <h2 className="text-xl font-bold" style={{ color: headingColor }}>
                Project Experience
              </h2>
            </div>
            <div
              className="relative pl-5 space-y-6"
              style={{
                borderLeft: isDarkMode
                  ? '2px solid rgba(234, 190, 195, 0.22)'
                  : '2px solid rgba(234, 190, 195, 0.6)',
              }}
            >
              {projectExperiences.map((proj) => (
                <div key={proj.title} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500],
                      boxShadow: isDarkMode
                        ? '0 0 0 3px rgba(15, 23, 42, 0.85)'
                        : '0 0 0 3px rgba(255, 245, 247, 0.95)',
                    }}
                  />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="text-base md:text-lg font-semibold" style={{ color: headingColor }}>
                      {proj.title}
                    </h3>
                    <span className="text-xs font-medium shrink-0" style={{ color: mutedColor }}>
                      {proj.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium mt-0.5" style={{ color: bodyColor }}>
                    {proj.role}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {proj.tech.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: isDarkMode ? 'rgba(234, 190, 195, 0.12)' : 'rgba(250, 232, 237, 0.85)',
                          color: isDarkMode ? themeColors.colors.pink[200] : '#6B4C57',
                          border: isDarkMode
                            ? '1px solid rgba(234, 190, 195, 0.22)'
                            : '1px solid rgba(234, 190, 195, 0.45)',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Skills */}
          <article className="rounded-2xl backdrop-blur-md p-6 md:p-7" style={cardStyle}>
            <div className="flex items-center gap-2.5 mb-5">
              <Wrench className="h-5 w-5 shrink-0" style={{ color: mutedColor }} aria-hidden="true" />
              <h2 className="text-xl font-bold" style={{ color: headingColor }}>
                Skills
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {skillGroups.map((group) => (
                <div key={group.category}>
                  <h3 className="text-sm font-semibold mb-2.5" style={{ color: mutedColor }}>
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                        style={{
                          backgroundColor: isDarkMode ? 'rgba(234, 190, 195, 0.14)' : 'rgba(253, 213, 223, 0.38)',
                          color: isDarkMode ? themeColors.colors.pink[100] : '#563944',
                          border: isDarkMode
                            ? '1px solid rgba(234, 190, 195, 0.25)'
                            : '1px solid rgba(234, 190, 195, 0.55)',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Certifications */}
          <article className="rounded-2xl backdrop-blur-md p-6 md:p-7" style={cardStyle}>
            <div className="flex items-center gap-2.5 mb-4">
              <Award className="h-5 w-5 shrink-0" style={{ color: mutedColor }} aria-hidden="true" />
              <h2 className="text-xl font-bold" style={{ color: headingColor }}>
                Certifications
              </h2>
            </div>
            <ul className="space-y-2.5">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2.5 text-sm md:text-base" style={{ color: bodyColor }}>
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}
                  />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </section>
  );
};

export default Resume;
