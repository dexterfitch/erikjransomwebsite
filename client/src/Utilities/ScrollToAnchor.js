// Scroll to anchor element with React Router V6 (hash links, anchor links)
// https://dev.to/mindactuate/scroll-to-anchor-element-with-react-router-v6-38op


import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    const scrollToElement = () => {
      const header = document.querySelector('#top-nav-container');
      const headerOffset = header ? header.offsetHeight + 10 : 0; // 0 if no header
      const element = document.getElementById(lastHash.current);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        lastHash.current = '';
      }
    };

    if (lastHash.current) {
      setTimeout(scrollToElement, 100);
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
