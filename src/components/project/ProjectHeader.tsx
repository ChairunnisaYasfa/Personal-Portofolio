import React from 'react';
import { Github, type LucideIcon } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

interface ProjectHeaderProps {
  icon: string;
  title: string;
  subtitle: string;
  githubUrl: string;
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ 
  icon, 
  title, 
  subtitle, 
  githubUrl, 
  features 
}) => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  return (
    <div
      className="rounded-2xl backdrop-blur-md p-6 md:p-8 mb-8"
      style={
        isDarkMode
          ? {
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.72) 0%, rgba(15, 23, 42, 0.62) 100%)',
              border: '1px solid rgba(234, 190, 195, 0.22)',
              boxShadow: '0 8px 28px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(253, 213, 223, 0.1)',
            }
          : {
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 245, 247, 0.75) 100%)',
              border: '1px solid rgba(234, 190, 195, 0.45)',
              boxShadow: '0 8px 28px rgba(200, 139, 149, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
            }
      }
    >
      <div className="flex flex-col sm:flex-row items-start gap-5 md:gap-6 mb-6">
        <img src={icon} alt={title} className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover shrink-0" loading="lazy" width="96" height="96" />
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: isDarkMode ? themeColors.colors.pink[100] : '#6B4C57' }}>{title}</h1>
          <p className="text-base md:text-lg font-medium" style={{ color: isDarkMode ? themeColors.colors.pink[300] : '#8B5A65' }}>{subtitle}</p>
          <div className="flex gap-4 mt-4">
            <a
              href={githubUrl}
              target="_blank"
              aria-label="View source code on GitHub (opens in new tab)"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: isDarkMode ? 'rgba(234, 190, 195, 0.16)' : 'rgba(253, 213, 223, 0.45)',
                border: isDarkMode
                  ? '1px solid rgba(234, 190, 195, 0.3)'
                  : '1px solid rgba(234, 190, 195, 0.6)',
                color: isDarkMode ? themeColors.colors.pink[200] : '#6B4C57',
              }}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              View Code
            </a>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="border-t pt-6" style={{ borderColor: isDarkMode ? 'rgba(234, 190, 195, 0.2)' : 'rgba(234, 190, 195, 0.45)' }}>
        <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: isDarkMode ? themeColors.colors.pink[100] : '#6B4C57' }}>Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-start gap-3">
                <Icon className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }} aria-hidden="true" />
                <div>
                  <h3 className="font-semibold" style={{ color: isDarkMode ? themeColors.colors.pink[100] : '#4E323D' }}>{feature.title}</h3>
                  <p className="text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[200] : '#563944' }}>{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;