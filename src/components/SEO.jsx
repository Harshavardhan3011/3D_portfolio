import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://3-d-portfolio-r2sfqdje3-harshas-projects-462d12b3.vercel.app";
const DEFAULT_DESCRIPTION =
  "Explore Harsha Vardhan's developer portfolio, featuring web development projects, technical skills, experience, and expertise in React, JavaScript, Node.js, and modern web technologies.";

const pageMetadata = {
  "/": {
    title: "Harsha Vardhan | Full Stack Developer Portfolio",
    description: DEFAULT_DESCRIPTION,
  },
  "/about": {
    title: "About Harsha Vardhan | Full Stack Developer",
    description: "Learn about Harsha Vardhan, a full stack developer building responsive web applications and modern user interfaces.",
  },
  "/skills": {
    title: "Skills | Harsha Vardhan Full Stack Developer",
    description: "Explore Harsha Vardhan's technical skills in React, JavaScript, Tailwind CSS, Python, SQL, Git, and modern web development.",
  },
  "/projects": {
    title: "Projects | Harsha Vardhan Developer Portfolio",
    description: "Browse web development projects built by Harsha Vardhan using React, JavaScript, Tailwind CSS, and other modern technologies.",
  },
  "/gaming": {
    title: "Gaming Arena | Harsha Vardhan Portfolio",
    description: "Explore the interactive gaming and creative work of full stack developer Harsha Vardhan.",
  },
  "/resume": {
    title: "Resume | Harsha Vardhan Full Stack Developer",
    description: "View Harsha Vardhan's resume, technical experience, education, skills, and developer background.",
  },
  "/contact": {
    title: "Contact Harsha Vardhan | Full Stack Developer",
    description: "Get in touch with Harsha Vardhan about web development, full stack projects, and collaboration opportunities.",
  },
};

function setMeta(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SEO() {
  const { pathname } = useLocation();
  const metadata = pageMetadata[pathname] || pageMetadata["/"];
  const canonicalUrl = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

  useEffect(() => {
    document.title = metadata.title;
    setMeta("name", "description", metadata.description);
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("name", "twitter:title", metadata.title);
    setMeta("name", "twitter:description", metadata.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [canonicalUrl, metadata]);

  useEffect(() => {
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Harsha Vardhan",
        url: SITE_URL,
        jobTitle: "Full Stack Developer",
        sameAs: [
          "https://github.com/Harshavardhan3011",
          "https://www.linkedin.com/in/harshavardhanv",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Harsha Vardhan | Full Stack Developer Portfolio",
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,
        author: { "@type": "Person", name: "Harsha Vardhan" },
      },
      {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        name: metadata.title,
        url: canonicalUrl,
        mainEntity: { "@type": "Person", name: "Harsha Vardhan" },
      },
    ];

    let script = document.getElementById("portfolio-structured-data");
    if (!script) {
      script = document.createElement("script");
      script.id = "portfolio-structured-data";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [canonicalUrl, metadata]);

  return null;
}
