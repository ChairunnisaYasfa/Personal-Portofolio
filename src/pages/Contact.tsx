import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useThemeColors } from '../hooks/useThemeColors';
import { swissBg } from '../assets';
import BackButton from '../components/BackButton';
import { socialLinks } from '../config/socialLinks';

const Contact = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const glassCardStyle: React.CSSProperties = isDarkMode
    ? {
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.68) 0%, rgba(15, 23, 42, 0.56) 100%)',
        border: '1px solid rgba(234, 190, 195, 0.24)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(253, 213, 223, 0.14)',
      }
    : {
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 245, 247, 0.6) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        boxShadow: '0 8px 30px rgba(200, 139, 149, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.85)',
      };

  const cardActionStyle: React.CSSProperties = isDarkMode
    ? {
        backgroundColor: 'rgba(234, 190, 195, 0.16)',
        border: '1px solid rgba(234, 190, 195, 0.28)',
        color: themeColors.colors.pink[200],
      }
    : {
        backgroundColor: 'rgba(253, 213, 223, 0.45)',
        border: '1px solid rgba(234, 190, 195, 0.6)',
        color: '#6B4C57',
      };

  return (
    <section
      aria-label="Contact page"
      className="flex-1 min-h-screen -mt-[70px] pt-[98px] md:-mt-[80px] md:pt-[116px] pb-20 transition-colors duration-300 relative overflow-hidden flex flex-col"
    >
      {/* Dreamy Frosted Sky Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
      >
        <div
          className="w-full h-full bg-cover bg-center blur-md scale-105"
          style={{ backgroundImage: `url(${swissBg})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: isDarkMode
              ? 'linear-gradient(180deg, rgba(10, 15, 27, 0.72) 0%, rgba(30, 27, 46, 0.64) 55%, rgba(10, 15, 27, 0.84) 100%)'
              : 'linear-gradient(180deg, rgba(255, 249, 250, 0.56) 0%, rgba(253, 213, 223, 0.38) 50%, rgba(255, 245, 247, 0.72) 100%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex-1 flex flex-col justify-center">
        {/* Back Button */}
        <div>
          <BackButton
            to="/"
            scrollToId=""
            label="Back to Home"
            ariaLabel="Navigate back to homepage"
          />
        </div>

        {/* Contact Header */}
        <header className="text-center mb-12">
          <h1
            className="text-4xl font-bold mb-4"
            style={{
              color: isDarkMode ? themeColors.colors.pink[100] : '#6B4C57',
              textShadow: isDarkMode
                ? '0 2px 14px rgba(10, 15, 27, 0.8)'
                : '0 2px 12px rgba(255, 255, 255, 0.9)',
            }}
          >
            Let&apos;s Connect!
          </h1>
          <p className="text-lg" style={{ color: themeColors.text.secondary }}>
          </p>
        </header>

        {/* Contact Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto w-full" aria-label="Contact methods">
          
          {/* Email Card */}
          <article
            className="rounded-2xl backdrop-blur-md p-6 text-center hover:scale-105 transition-all duration-300"
            style={glassCardStyle}
            aria-labelledby="email-heading"
          >
            <div className="flex justify-center mb-4">
              <Mail className="h-12 w-12" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[600] }} aria-hidden="true" />
            </div>
            <h3 id="email-heading" className="text-xl font-semibold mb-3" style={{ color: isDarkMode ? themeColors.colors.white : '#4E323D' }}>Email</h3>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label={`Send email to ${socialLinks.email}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all hover:opacity-85"
              style={cardActionStyle}
            >
              Send Email
            </a>
            <p className="text-xs font-medium mt-3" style={{ color: isDarkMode ? themeColors.colors.dark[200] : '#563944' }}>{socialLinks.display.email}</p>
          </article>

          {/* GitHub Card */}
          <article
            className="rounded-2xl backdrop-blur-md p-6 text-center hover:scale-105 transition-all duration-300"
            style={glassCardStyle}
            aria-labelledby="github-heading"
          >
            <div className="flex justify-center mb-4">
              <Github className="h-12 w-12" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[600] }} aria-hidden="true" />
            </div>
            <h3 id="github-heading" className="text-xl font-semibold mb-3" style={{ color: isDarkMode ? themeColors.colors.white : '#4E323D' }}>GitHub</h3>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View GitHub profile at ${socialLinks.display.github} (opens in new tab)`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all hover:opacity-85"
              style={cardActionStyle}
            >
              View Profile
            </a>
            <p className="text-xs font-medium mt-3" style={{ color: isDarkMode ? themeColors.colors.dark[200] : '#563944' }}>{socialLinks.display.github}</p>
          </article>

          {/* LinkedIn Card */}
          <article
            className="rounded-2xl backdrop-blur-md p-6 text-center hover:scale-105 transition-all duration-300"
            style={glassCardStyle}
            aria-labelledby="linkedin-heading"
          >
            <div className="flex justify-center mb-4">
              <Linkedin className="h-12 w-12" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[600] }} aria-hidden="true" />
            </div>
            <h3 id="linkedin-heading" className="text-xl font-semibold mb-3" style={{ color: isDarkMode ? themeColors.colors.white : '#4E323D' }}>LinkedIn</h3>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect on LinkedIn at ${socialLinks.display.linkedin} (opens in new tab)`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all hover:opacity-85"
              style={cardActionStyle}
            >
              Connect
            </a>
            <p className="text-xs font-medium mt-3" style={{ color: isDarkMode ? themeColors.colors.dark[200] : '#563944' }}>{socialLinks.display.linkedin}</p>
          </article>

          {/* Instagram Card */}
          <article
            className="rounded-2xl backdrop-blur-md p-6 text-center hover:scale-105 transition-all duration-300"
            style={glassCardStyle}
            aria-labelledby="instagram-heading"
          >
            <div className="flex justify-center mb-4">
              <Instagram className="h-12 w-12" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[600] }} aria-hidden="true" />
            </div>
            <h3 id="instagram-heading" className="text-xl font-semibold mb-3" style={{ color: isDarkMode ? themeColors.colors.white : '#4E323D' }}>Instagram</h3>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow on Instagram at @${socialLinks.display.instagram} (opens in new tab)`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all hover:opacity-85"
              style={cardActionStyle}
            >
              Follow
            </a>
            <p className="text-xs font-medium mt-3" style={{ color: isDarkMode ? themeColors.colors.dark[200] : '#563944' }}>@{socialLinks.display.instagram}</p>
          </article>

        </section>
      </div>
    </section>
  );
};

export default Contact;