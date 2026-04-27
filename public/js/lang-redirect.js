/**
 * Language detection and redirect for static hosting (GitHub Pages)
 * Detects browser language preference and redirects to appropriate locale
 */
(function() {
  const COOKIE_NAME = 'preferred-language';
  const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds
  
  // Get saved language preference
  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }
  
  // Set language preference cookie
  function setCookie(name, value, maxAge) {
    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
  }
  
  // Detect preferred language from browser
  function getBrowserLanguage() {
    const langs = navigator.languages || [navigator.language || navigator.userLanguage];
    for (const lang of langs) {
      const code = lang.toLowerCase();
      if (code === 'cs' || code.startsWith('cs-')) {
        return 'cs';
      }
      if (code === 'en' || code.startsWith('en-')) {
        return 'en';
      }
    }
    return null;
  }
  
  // Only run on root path
  if (window.location.pathname === '/') {
    const savedLang = getCookie(COOKIE_NAME);
    
    // No preference saved - detect from browser
    if (!savedLang) {
      const browserLang = getBrowserLanguage();
      
      if (browserLang === 'cs') {
        // Set cookie and redirect to Czech
        setCookie(COOKIE_NAME, 'cs', COOKIE_MAX_AGE);
        window.location.replace('/cs/');
        return;
      }
      
      // Default to English, save preference
      setCookie(COOKIE_NAME, 'en', COOKIE_MAX_AGE);
    }
  }
  
  // Update cookie when user explicitly visits a locale
  if (window.location.pathname.startsWith('/cs')) {
    setCookie(COOKIE_NAME, 'cs', COOKIE_MAX_AGE);
  } else if (window.location.pathname !== '/' && !window.location.pathname.startsWith('/cs')) {
    setCookie(COOKIE_NAME, 'en', COOKIE_MAX_AGE);
  }
})();
