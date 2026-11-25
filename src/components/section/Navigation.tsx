import { useState, useEffect, useMemo, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors, withAlpha } from '../../hooks/useThemeColors';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isProgrammaticScrollRef = useRef(false);
  const scrollResetTimeoutRef = useRef<number | null>(null);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = useMemo(() => [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' }
  ], []);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveTab('');
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      setIsScrolled(window.scrollY > 10);

      if (location.pathname !== '/') return;

      // Clear active state when back at the top Hero section (unless just clicked)
      if (window.scrollY < 120) {
        if (!isProgrammaticScrollRef.current) {
          setActiveTab('');
        }
        return;
      }

      // Update active tab once scrolled into sections
      const sections = tabs.map(tab => tab.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveTab(currentSection);
      }
    };

    const handleResize = () => {
      // Close mobile menu if screen becomes desktop size
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (scrollResetTimeoutRef.current !== null) {
        window.clearTimeout(scrollResetTimeoutRef.current);
      }
    };
  }, [tabs, isMobileMenuOpen, location.pathname]);

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    isProgrammaticScrollRef.current = true;
    if (scrollResetTimeoutRef.current !== null) {
      window.clearTimeout(scrollResetTimeoutRef.current);
    }
    scrollResetTimeoutRef.current = window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 900);

    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      aria-label="Main navigation"
    >
      <div
        className="nav-glass-bar"
        style={{
          width: '100%',
          maxWidth: '56rem',
          pointerEvents: 'auto',
          borderRadius: '9999px',
          padding: '0.4rem 0.75rem 0.4rem 1.4rem',
          border: `1px solid ${withAlpha(
            themeColors.colors.pink[300],
            isDarkMode ? (isScrolled ? 0.3 : 0.2) : (isScrolled ? 0.62 : 0.45)
          )}`,
          boxShadow: isDarkMode
            ? `0 ${isScrolled ? '8px 28px' : '4px 20px'} rgba(0, 0, 0, ${isScrolled ? 0.36 : 0.24}), inset 0 1px 0 ${withAlpha(themeColors.colors.pink[200], 0.14)}`
            : `0 ${isScrolled ? '8px 26px' : '4px 18px'} ${withAlpha(themeColors.colors.pink[300], isScrolled ? 0.24 : 0.15)}, inset 0 1px 0 rgba(255, 255, 255, 0.78)`,
          backdropFilter: 'saturate(180%) blur(16px)',
          WebkitBackdropFilter: 'saturate(180%) blur(16px)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          background: isDarkMode
            ? `linear-gradient(135deg,
                ${withAlpha(themeColors.colors.dark[900], isScrolled ? 0.76 : 0.56)},
                ${withAlpha(themeColors.colors.dark[800], isScrolled ? 0.58 : 0.38)})`
            : `linear-gradient(135deg,
                ${withAlpha(themeColors.colors.pink[50], isScrolled ? 0.74 : 0.52)},
                ${withAlpha(themeColors.colors.pink[200], isScrolled ? 0.38 : 0.22)})`
        }}
      >
        <div className="nav-container">
          <button
            className="signature-name"
            style={{
              cursor: 'pointer',
              color: isDarkMode ? themeColors.colors.pink[200] : themeColors.colors.pink[600],
              background: 'none',
              border: 'none',
              outline: 'none'
            }}
            onClick={() => window.location.href = '/'}
            aria-label="Chaeraa - Go to homepage"
          >
            Chaeraa
          </button>

          {/* Desktop Navigation */}
          <div className="nav-tabs desktop-nav">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`nav-tab rounded-full ${isActive ? 'active' : ''}`}
                  style={{
                    borderRadius: '9999px',
                    color: isActive
                      ? (isDarkMode ? themeColors.colors.pink[200] : themeColors.colors.pink[800])
                      : themeColors.text.accent,
                    background: isActive
                      ? withAlpha(themeColors.colors.pink[200], isDarkMode ? 0.16 : 0.45)
                      : 'transparent',
                    border: isActive
                      ? `1px solid ${withAlpha(themeColors.colors.pink[300], isDarkMode ? 0.34 : 0.58)}`
                      : '1px solid transparent',
                    boxShadow: isActive && !isDarkMode
                      ? 'inset 0 1px 0 rgba(255, 255, 255, 0.65)'
                      : 'none'
                  }}
                  aria-label={`Navigate to ${tab.label} section`}
                >
                  {tab.label}
                </button>
              );
            })}
            <div style={{ marginLeft: '0.2rem' }}>
              <DarkModeToggle
                checked={isDarkMode}
                onChange={toggleDarkMode}
                compact
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn relative"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            style={{
              background: withAlpha(
                isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.pink[50],
                isDarkMode ? 0.6 : 0.65
              ),
              border: `1px solid ${withAlpha(themeColors.colors.pink[300], isDarkMode ? 0.3 : 0.5)}`,
              borderRadius: '9999px',
              cursor: 'pointer',
              padding: '7px',
              display: 'none',
              color: isDarkMode ? themeColors.colors.pink[200] : themeColors.colors.pink[600],
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ position: 'relative', width: '18px', height: '18px', margin: 'auto' }}>
              <Menu
                size={18}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transition: 'opacity 0.3s ease',
                  opacity: isMobileMenuOpen ? 0 : 1
                }}
              />
              <X
                size={18}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transition: 'opacity 0.3s ease',
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        style={{
          width: '100%',
          maxWidth: '56rem',
          marginTop: isMobileMenuOpen ? '8px' : '0px',
          borderRadius: '20px',
          flexDirection: 'column',
          padding: isMobileMenuOpen ? '0.75rem' : '0 0.75rem',
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
          background: isDarkMode
            ? `linear-gradient(135deg, ${withAlpha(themeColors.colors.dark[900], 0.86)}, ${withAlpha(themeColors.colors.dark[800], 0.78)})`
            : `linear-gradient(135deg, ${withAlpha(themeColors.colors.pink[50], 0.85)}, ${withAlpha(themeColors.colors.pink[100], 0.72)})`,
          border: isMobileMenuOpen
            ? `1px solid ${withAlpha(themeColors.colors.pink[300], isDarkMode ? 0.28 : 0.5)}`
            : '1px solid transparent',
          maxHeight: isMobileMenuOpen ? '380px' : '0',
          overflow: isMobileMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: isMobileMenuOpen ? 1 : 0,
          boxShadow: isMobileMenuOpen
            ? (isDarkMode
                ? '0 10px 28px rgba(0, 0, 0, 0.35)'
                : `0 10px 28px ${withAlpha(themeColors.colors.pink[300], 0.22)}, inset 0 1px 0 rgba(255, 255, 255, 0.75)`)
            : 'none',
          backdropFilter: 'saturate(180%) blur(18px)',
          WebkitBackdropFilter: 'saturate(180%) blur(18px)',
        }}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={`mobile-nav-tab rounded-full ${activeTab === tab.id ? 'active' : ''}`}
            style={{
              background: activeTab === tab.id
                ? withAlpha(
                    themeColors.colors.pink[200],
                    isDarkMode ? 0.14 : 0.5
                  )
                : 'none',
              border: activeTab === tab.id
                ? `1px solid ${withAlpha(themeColors.colors.pink[300], isDarkMode ? 0.35 : 0.6)}`
                : '1px solid transparent',
              borderRadius: '9999px',
              padding: '0.65rem 1.1rem',
              textAlign: 'left',
              color: activeTab === tab.id
                ? (isDarkMode ? themeColors.colors.pink[200] : themeColors.colors.pink[800])
                : themeColors.text.accent,
              fontWeight: activeTab === tab.id ? '600' : '500',
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: isMobileMenuOpen ? 1 : 0,
              transitionDelay: isMobileMenuOpen ? `${index * 0.06}s` : '0s',
              marginBottom: '0.35rem',
              minHeight: '40px',
              display: 'flex',
              alignItems: 'center',
              outline: 'none',
              width: '100%'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.background = withAlpha(
                  themeColors.colors.pink[200],
                  isDarkMode ? 0.08 : 0.3
                );
                e.currentTarget.style.borderColor = withAlpha(themeColors.colors.pink[300], 0.35);
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.background = 'none';
                e.currentTarget.style.borderColor = 'transparent';
              }
            }}
            onFocus={(e) => e.currentTarget.blur()}
            aria-label={`Navigate to ${tab.label} section`}
          >
            {tab.label}
          </button>
        ))}
        <div
          className="mt-2 px-4"
          style={{
            borderTop: `1px solid ${withAlpha(themeColors.colors.pink[300], isDarkMode ? 0.2 : 0.4)}`,
            paddingTop: '0.6rem',
            opacity: isMobileMenuOpen ? 1 : 0,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: isMobileMenuOpen ? '0.25s' : '0s',
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <DarkModeToggle
            checked={isDarkMode}
            onChange={toggleDarkMode}
            compact
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;