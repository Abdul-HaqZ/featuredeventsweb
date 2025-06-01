import { useEffect } from 'react';

export const setupScrollAnimations = () => {
  // Add animation classes to Tailwind config if needed
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes fadeInUp {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }

    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
  `;
  document.head.appendChild(style);
};

// Intersection Observer Hook for scroll animations
export const useScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animation');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );
      
      elements.forEach((element) => {
        observer.observe(element);
      });
      
      return () => {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      };
    };
    
    animateOnScroll();
    
    // Re-run when DOM might change
    window.addEventListener('load', animateOnScroll);
    return () => {
      window.removeEventListener('load', animateOnScroll);
    };
  }, []);
};