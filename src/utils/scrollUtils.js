/**
 * Smoothly scrolls to a section with offset for fixed navigation
 * @param {string} sectionId - The ID of the section to scroll to (e.g., '#about')
 * @param {number} offset - Additional offset in pixels (default: 20)
 */
export const scrollToSection = (sectionId, offset = 20) => {
  const element = document.querySelector(sectionId);
  if (element) {
    const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
    const targetPosition = element.offsetTop - navHeight - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  }
};

/**
 * Handles hash link navigation with proper routing
 * @param {string} currentPath - Current route path
 * @param {string} sectionId - The section ID to navigate to
 */
export const handleHashNavigation = (currentPath, sectionId) => {
  if (currentPath !== '/') {
    // Navigate to home first, then scroll after a brief delay
    window.location.href = `/${sectionId}`;
  } else {
    // Already on home page, just scroll
    scrollToSection(sectionId);
  }
};
