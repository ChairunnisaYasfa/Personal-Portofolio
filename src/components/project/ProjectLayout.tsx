import React from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import BackButton from '../BackButton';
import Footer from '../Footer';

interface ProjectLayoutProps {
  children: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children }) => {
  const { isDarkMode } = useDarkMode();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      aria-label="Project details"
      className="flex-1 min-h-screen -mt-[70px] pt-[98px] md:-mt-[80px] md:pt-[116px] flex flex-col transition-colors duration-300"
      style={{
        background: isDarkMode
          ? 'radial-gradient(circle at 15% 6%, rgba(234, 190, 195, 0.1) 0%, transparent 42%), radial-gradient(circle at 85% 10%, rgba(253, 213, 223, 0.08) 0%, transparent 45%), #0A0F1B'
          : 'radial-gradient(circle at 12% 8%, rgba(253, 213, 223, 0.38) 0%, transparent 45%), radial-gradient(circle at 88% 12%, rgba(255, 221, 204, 0.34) 0%, transparent 48%), radial-gradient(circle at 50% 100%, rgba(250, 232, 237, 0.45) 0%, transparent 55%), #FFF9FA',
      }}
    >
      <div className="container mx-auto px-6 max-w-4xl flex-1 pb-10">
        <BackButton />
        {children}
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </section>
  );
};

export default ProjectLayout;