import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, children, className = "" }) => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  return (
    <div
      className={`rounded-2xl backdrop-blur-md p-6 md:p-8 mb-8 ${className}`}
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
      <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: isDarkMode ? themeColors.colors.pink[100] : '#6B4C57' }}>{title}</h2>
      {children}
    </div>
  );
};

export default ProjectSection;