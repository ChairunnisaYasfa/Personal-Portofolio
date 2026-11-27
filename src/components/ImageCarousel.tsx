import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useThemeColors } from '../hooks/useThemeColors';

interface ImageCarouselProps {
  images: string[];
  projectName: string;
}

const ImageCarousel = ({ images, projectName }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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
      <h2 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: isDarkMode ? themeColors.colors.pink[100] : '#6B4C57' }}>Project Snapshots</h2>
      
      <div className="relative">
        {/* Main Image Display with Sliding Animation */}
        <div
          className="relative rounded-xl overflow-hidden h-[380px] sm:h-[480px] md:h-[560px]"
          style={{ 
            backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.72)' : 'rgba(255, 245, 247, 0.85)',
            border: isDarkMode
              ? '1px solid rgba(234, 190, 195, 0.18)'
              : '1px solid rgba(234, 190, 195, 0.4)',
            maxHeight: '70vh'
          }}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${projectName} screenshot ${index + 1}`}
                className="w-full h-full object-contain flex-shrink-0 cursor-pointer p-2 sm:p-4"
                onClick={() => setIsEnlarged(true)}
                loading="lazy"
                width="800"
                height="600"
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-300" 
            style={{ 
              backgroundColor: isDarkMode 
                ? `${themeColors.colors.pink[800]}CC` // 80% opacity with hex 
                : `${themeColors.colors.pink[400]}CC`, // 80% opacity with hex
              color: isDarkMode ? themeColors.colors.pink[100] : themeColors.colors.dark[700]
            } as React.CSSProperties}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-300" 
            style={{ 
              backgroundColor: isDarkMode 
                ? `${themeColors.colors.pink[800]}CC` // 80% opacity with hex 
                : `${themeColors.colors.pink[400]}CC`, // 80% opacity with hex
              color: isDarkMode ? themeColors.colors.pink[100] : themeColors.colors.dark[700]
            } as React.CSSProperties}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-0 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 flex items-center justify-center`}
              style={{ 
                minWidth: '44px',
                minHeight: '44px',
                padding: '0',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              } as React.CSSProperties}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span 
                className="rounded-full transition-all"
                style={{
                  width: index === currentIndex ? '32px' : '12px',
                  height: '12px',
                  backgroundColor: index === currentIndex 
                    ? themeColors.primary 
                    : isDarkMode 
                      ? themeColors.colors.dark[600]
                      : themeColors.colors.dark[400]
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Enlarged Image Modal */}
      {isEnlarged && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-8"
          onClick={() => setIsEnlarged(false)}
        >
          <div className="relative max-w-[70vw] max-h-[70vh]">
            <img
              src={images[currentIndex]}
              alt={`${projectName} screenshot ${currentIndex + 1} enlarged`}
              className="max-w-full max-h-[70vh] object-contain"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsEnlarged(false);
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Close enlarged image"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Navigation in enlarged view */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;