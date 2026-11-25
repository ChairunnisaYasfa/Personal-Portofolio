import { useEffect, useRef } from 'react';
import { colors } from '../styles/colors';
import { useDarkMode } from '../contexts/DarkModeContext';

interface AsciiMorphTextProps {
  text: string;
}

const AsciiMorphText: React.FC<AsciiMorphTextProps> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    const container = containerRef.current;

    if (!container) return;

    container.innerHTML = '';

    const timeouts: number[] = [];
    const intervals: number[] = [];
    const words = text.split(' ');
    const letterSpans: { span: HTMLSpanElement; target: string }[] = [];

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.whiteSpace = 'nowrap';

      word.split('').forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        wordSpan.appendChild(span);
        letterSpans.push({ span, target: letter });
      });

      container.appendChild(wordSpan);

      if (wordIndex < words.length - 1) {
        const spaceSpan = document.createElement('span');
        spaceSpan.textContent = ' ';
        spaceSpan.style.whiteSpace = 'pre';
        container.appendChild(spaceSpan);
      }
    });

    letterSpans.forEach(({ span, target }, index) => {
      let iterations = 0;

      const timeoutId = window.setTimeout(() => {
        const intervalId = window.setInterval(() => {
          if (iterations < 10) {
            span.textContent = chars[Math.floor(Math.random() * chars.length)];
            span.style.opacity = '1';
            span.style.color = isDarkMode ? colors.pink[200] : colors.pink[700];
          } else {
            span.textContent = target;
            span.style.opacity = '1';
            span.style.color = isDarkMode ? colors.pink[50] : colors.pink[900];
            window.clearInterval(intervalId);
          }
          iterations++;
        }, 45);
        intervals.push(intervalId);
      }, index * 55);

      timeouts.push(timeoutId);
    });

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
      intervals.forEach((id) => window.clearInterval(id));
    };
  }, [text, isDarkMode]);

  return (
    <div 
      ref={containerRef}
      className="ascii-morph-text"
      style={{
        fontSize: 'clamp(1.35rem, 3.2vw, 2.35rem)',
        fontWeight: 800,
        fontFamily: 'monospace',
        letterSpacing: '0.02em',
        lineHeight: 1.25,
        textAlign: 'left',
        margin: '0.25rem 0 0.5rem',
        textShadow: isDarkMode
          ? '0 2px 14px rgba(10, 15, 27, 0.8), 0 0 18px rgba(253, 213, 223, 0.35)'
          : '0 2px 12px rgba(255, 255, 255, 0.85), 0 1px 2px rgba(107, 76, 87, 0.25)',
      }}
    />
  );
};

export default AsciiMorphText;