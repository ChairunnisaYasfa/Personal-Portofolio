import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const experiences = [
    {
      title: "Operator Assembly",
      company: "PT. TDK Electronics Indonesia",
      location: "Batam, Indonesia",
      period: "September 2023 - Present",
      description: [
        "Assembled electronic components into finished products following standard operating procedures and quality standards.",
        "Operated automated machinery and assembly tools to support efficient production workflows.",
      ]
    },
    {
      title: "Field Enumerator / Mobile Data Collector",
      company: "Badan Pusat Statistik (Contract)",
      location: "Riau Islands, Indonesia",
      period: "June 2026 - September 2026",
      description: [
        "Collected and verified economic census data through field surveys and direct interviews with business owners in accordance with the Standard Operating Procedures (SOP) established by Statistics Indonesia (BPS).",
        "Ensured data accuracy and completeness while maintaining professionalism, effective communication, and confidentiality throughout the data collection process.",
        "Collaborated with supervisors and fellow enumerators to achieve survey targets within the assigned schedule.",
      ]
    },
    {
      title: "Administrative Assistant (Internship)",
      company: "CV. Batam Copier",
      location: "Batam, Indonesia",
      period: "January 2022 - March 2022",
      description: [
        "Monitored and analyzed production workflows through data processing to ensure schedules were met on time.",
        "Collaborated with the production team and reported product shortages or improvement ideas directly to supervisors.",
      ]
    }
  ];

  return (
    <section id="experience" className="py-8 relative" style={{
      background: themeColors.background.sections?.experience || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      {/* Subtle gradient overlay for top edge blending */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`,
          zIndex: 1
        }}
      />
      {/* Subtle gradient overlay for bottom edge blending to white divider */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.white} 100%)`,
          zIndex: 1
        }}
      />
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Experience</h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 border-pink-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg bg-white/95 dark:bg-gray-800/95">
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <CardTitle className="text-2xl" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-400 mt-1">{exp.company}</p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <div className="flex items-center sm:justify-end gap-2 text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="h-4 w-4 shrink-0" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2" style={{ color: themeColors.primary }}>•</span>
                      <span className="text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600] }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;