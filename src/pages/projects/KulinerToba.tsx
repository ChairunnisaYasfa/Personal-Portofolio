import { UtensilsCrossed, Star, ShoppingCart, CreditCard } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import ImageCarousel from '../../components/ImageCarousel';
import { socialLinks } from '../../config/socialLinks';
import { comingSoon } from '../../assets';

import menuImg from '../../assets/kuliner-toba/menu.png';
import detailMenuImg from '../../assets/kuliner-toba/detail-menu.png';
import fiturUnggulanImg from '../../assets/kuliner-toba/fitur-unggulan.png';

const KulinerToba = () => {
  const features = [
    {
      icon: UtensilsCrossed,
      title: 'Culinary Directory',
      description: 'Structured catalog showcasing authentic traditional Batak Toba dishes and regional specialties.',
    },
    {
      icon: Star,
      title: 'Reviews & Recommendations',
      description: 'Menu detail pages featuring customer ratings, reviews, and curated dish recommendations.',
    },
    {
      icon: ShoppingCart,
      title: 'Ordering & Cart System',
      description: 'Smooth shopping cart and order management built with Laravel, PHP, and MySQL.',
    },
    {
      icon: CreditCard,
      title: 'Midtrans Payment Gateway',
      description: 'Integrated online payment processing for seamless and reliable customer transactions.',
    },
  ];

  const technologies = ['Laravel', 'PHP', 'MySQL', 'Midtrans', 'Figma'];

  const highlights = [
    'Designed end-to-end UI/UX and user flows using Figma.',
    'Built structured culinary directories, menu detail pages with customer ratings & reviews, and shopping cart features using Laravel, PHP, and MySQL.',
    'Integrated Midtrans payment gateway for seamless online transactions.',
  ];

  const snapshots = [menuImg, detailMenuImg, fiturUnggulanImg];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={comingSoon}
        title="Kuliner Khas Toba (Toba Taste)"
        subtitle="Team Member, Full Stack Developer & UI/UX Designer (Feb 2025 – Jul 2025)"
        githubUrl={socialLinks.repositories.projectTwo}
        features={features}
      />

      <ImageCarousel images={snapshots} projectName="Kuliner Khas Toba (Toba Taste)" />

      <ProjectSection title="Project Overview">
        <ProjectOverview
          paragraphs={[
            'A web-based culinary information and ordering platform for authentic Batak Toba cuisine (Toba Taste), featuring a curated menu catalog, customer reviews and ratings, dish recommendations, and order management.',
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

export default KulinerToba;
