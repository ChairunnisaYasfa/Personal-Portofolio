import { Smartphone, Store, Clock, CreditCard, ImageIcon } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { socialLinks } from '../../config/socialLinks';
import { comingSoon } from '../../assets';

const JakaAja = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const features = [
    {
      icon: Smartphone,
      title: 'Mobile Canteen Ordering',
      description: 'Responsive Flutter mobile app connecting students and campus canteen tenants effortlessly.',
    },
    {
      icon: Store,
      title: 'Tenant Management',
      description: 'Dedicated tenant and menu workflows synced through Laravel REST APIs and MySQL.',
    },
    {
      icon: Clock,
      title: 'Real-Time Order Tracking',
      description: 'Streamlined order status updates from checkout through pickup readiness.',
    },
    {
      icon: CreditCard,
      title: 'Digital Payment Integration',
      description: 'Cashless payment workflow powered by Midtrans integration.',
    },
  ];

  const technologies = ['Flutter', 'Laravel', 'MySQL', 'Midtrans', 'Figma'];

  const highlights = [
    'Developed responsive mobile interfaces using Flutter integrated with Laravel REST API and MySQL.',
    'Implemented tenant and order management workflows along with Midtrans payment integration.',
    'Contributed to SRS documentation and system validation (Black Box Testing & UAT).',
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={comingSoon}
        title="JakaAja — Smart Kanteen"
        subtitle="Team Member — Mobile & UI/UX Developer (Aug 2025 – Jan 2026)"
        githubUrl={socialLinks.repositories.projectThree}
        features={features}
      />

      <ProjectSection title="Project Snapshots">
        <div
          className="rounded-xl p-8 md:p-12 flex flex-col items-center justify-center text-center"
          style={{
            backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.55)' : 'rgba(255, 245, 247, 0.78)',
            border: isDarkMode
              ? '1px dashed rgba(234, 190, 195, 0.28)'
              : '1px dashed rgba(234, 190, 195, 0.65)',
          }}
        >
          <ImageIcon
            className="h-10 w-10 mb-3"
            style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}
            aria-hidden="true"
          />
          <p
            className="text-base font-semibold mb-1"
            style={{ color: isDarkMode ? themeColors.colors.pink[100] : '#6B4C57' }}
          >
            Snapshots Coming Soon
          </p>
          <p
            className="text-sm max-w-md"
            style={{ color: isDarkMode ? themeColors.colors.dark[300] : '#8B5A65' }}
          >
            Mobile app screenshots for JakaAja — Smart Kanteen are currently being prepared and will be added soon.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Project Overview">
        <ProjectOverview
          paragraphs={[
            'A smart campus canteen mobile ordering application designed to connect students and canteen tenants efficiently through seamless browsing, ordering, and digital payments.',
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={technologies} />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights highlights={highlights} />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default JakaAja;
