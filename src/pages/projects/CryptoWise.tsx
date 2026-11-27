import { Trophy, LineChart, Coins, ShieldCheck } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import ImageCarousel from '../../components/ImageCarousel';
import { socialLinks } from '../../config/socialLinks';

import dashboardGameImg from '../../assets/cryptowise/dashboard-game.png';
import dailyMissionImg from '../../assets/cryptowise/daily-mission.png';
import previewImg from '../../assets/cryptowise/preview.webp';
import chartImg from '../../assets/cryptowise/chart.webp';

const CryptoWise = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Gamified Edu-Quests',
      description: 'Daily missions, interactive quizzes, XP progression, levels, and real-time leaderboards.',
    },
    {
      icon: LineChart,
      title: 'Live Market & Charts',
      description: 'Real-time cryptocurrency pricing, interactive price charts, and asset search via CoinGecko API.',
    },
    {
      icon: Coins,
      title: 'Virtual Trading Simulation',
      description: 'Risk-free simulated trading environment to practice portfolio decisions safely.',
    },
    {
      icon: ShieldCheck,
      title: 'Firebase Cloud Sync',
      description: 'Secure authentication and real-time user progress persistence backed by Cloud Firestore.',
    },
  ];

  const technologies = ['Flutter', 'Dart', 'Firebase', 'CoinGecko API', 'Figma'];

  const highlights = [
    'Integrated Firebase Authentication & Cloud Firestore for user sessions, XP, levels, Daily Missions, and real-time Leaderboards.',
    'Connected with CoinGecko API for live cryptocurrency market prices, charts, asset search, and virtual trading simulation.',
    'Authored SRS, UML diagrams (Use Case, Activity), ERD, Figma UI wireframes, and conducted Black Box & UAT testing.',
  ];

  const snapshots = [dashboardGameImg, dailyMissionImg, previewImg, chartImg];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon="/icon/logo.png"
        title="CryptoWise Mobile"
        subtitle="Project Leader & Full Stack Mobile Developer (Feb 2026 – Present)"
        githubUrl={socialLinks.repositories.projectOne}
        features={features}
      />

      <ImageCarousel images={snapshots} projectName="CryptoWise Mobile" />

      <ProjectSection title="Project Overview">
        <ProjectOverview
          paragraphs={[
            'A gamified cryptocurrency literacy mobile application that helps users learn about crypto markets safely through daily missions, interactive quizzes, and virtual trading simulations.',
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

export default CryptoWise;
