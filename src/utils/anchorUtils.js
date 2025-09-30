// Utility functions for anchor navigation in React Router

export const scrollToAnchor = (anchorId) => {
  const element = document.getElementById(anchorId);
  if (element) {
    const headerHeight = 90; // Account for fixed header
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

export const handleAnchorClick = (event, path, anchor) => {
  if (window.location.pathname === path) {
    // Same page, just scroll
    event.preventDefault();
    scrollToAnchor(anchor);
  }
  // If different page, let React Router handle navigation and useEffect will handle scrolling
};