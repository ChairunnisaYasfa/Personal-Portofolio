import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useThemeColors } from '../hooks/useThemeColors';

interface BackButtonProps {
  to?: string;
  scrollToId?: string;
  label?: string;
  ariaLabel?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ 
  to = '/', 
  scrollToId = 'projects',
  label = 'Back to Projects',
  ariaLabel = 'Navigate back to projects section'
}) => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
    if (scrollToId) {
      setTimeout(() => {
        const element = document.getElementById(scrollToId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <button 
      onClick={handleClick}
      aria-label={ariaLabel}
      className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full font-semibold backdrop-blur-md transition-all hover:opacity-90 cursor-pointer" 
      style={{
        color: isDarkMode ? themeColors.colors.pink[100] : '#6B4C57',
        background: isDarkMode
          ? 'rgba(30, 41, 59, 0.58)'
          : 'rgba(255, 255, 255, 0.68)',
        border: isDarkMode
          ? '1px solid rgba(234, 190, 195, 0.28)'
          : '1px solid rgba(255, 255, 255, 0.8)',
        boxShadow: isDarkMode
          ? '0 4px 14px rgba(0, 0, 0, 0.22)'
          : '0 4px 14px rgba(200, 139, 149, 0.14)',
      }}
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
    </button>
  );
};

export default BackButton;