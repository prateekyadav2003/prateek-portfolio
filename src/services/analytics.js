// Visitor Analytics Wrapper (Google Analytics integration ready)

export const initAnalytics = (measurementId) => {
  if (!measurementId) {
    console.log("Analytics: Initialized in development mode (no measurement ID)");
    return;
  }

  // Inject Google Analytics gtag scripts
  const scriptSrc = document.createElement('script');
  scriptSrc.async = true;
  scriptSrc.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(scriptSrc);

  const scriptInit = document.createElement('script');
  scriptInit.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(scriptInit);
  
  console.log(`Analytics: Google Analytics initialized with ${measurementId}`);
};

export const trackEvent = (eventName, params = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  } else {
    console.log(`[Analytics Mock] Event tracked: "${eventName}"`, params);
  }
};
