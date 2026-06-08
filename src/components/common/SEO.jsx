import { useEffect } from 'react';
import { BIO, PROJECTS } from '../../config/constants';

const SEO = ({ title, description, keywords, canonical, includeProjects = false }) => {
  useEffect(() => {
    // Update Document Title
    if (title) {
      document.title = `${title} | Prateek Yadav`;
    } else {
      document.title = 'Prateek Yadav | Full Stack Developer & MCA Cloud Computing Student';
    }

    // Update Meta Description
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }

    // Update Meta Keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // Update Canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Add JSON-LD Structured Data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: BIO.name,
      jobTitle: BIO.title,
      email: BIO.email,
      telephone: BIO.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: BIO.location.split(',')[0],
        addressCountry: 'India'
      },
      url: BIO.github,
      sameAs: [
        BIO.linkedin,
        BIO.github
      ],
      knowsAbout: BIO.roles
    };

    // Add Project schema if requested
    if (includeProjects && PROJECTS.length > 0) {
      structuredData.creates = PROJECTS.map(project => ({
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        url: project.github,
        applicationCategory: 'WebApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD'
        },
        author: {
          '@type': 'Person',
          name: BIO.name
        }
      }));
    }

    // Add Breadcrumb schema if on a sub-page
    if (window.location.pathname !== '/') {
      structuredData.breadcrumbList = {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://prateekyadav.dev/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: title || 'Portfolio',
            item: `https://prateekyadav.dev${window.location.pathname}`
          }
        ]
      };
    }

    let scriptTag = document.getElementById('structured-data');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, canonical, includeProjects]);

  return null;
};

export default SEO;
