// Portfolio configuration and static data constants

export const BIO = {
  name: "Prateek Yadav",
  title: "Full Stack Developer",
  tagline: "Building scalable, modern web applications with a love for clean code and innovative cloud solutions.",
  roles: [
    "Full Stack Developer",
    "MCA Cloud Computing Student",
    "React.js Enthusiast",
    "Problem Solver"
  ],
  email: "prateekyadav12203@gmail.com",
  phone: "+91 9695717496",
  location: "Noida, UP, India",
  linkedin: "https://linkedin.com/in/prateek-yadav-686b311b7",
  github: "https://github.com/prateekyadav2003",
  githubUsername: "prateekyadav2003",
  resumeUrl: "/PrateekYadav_PortfolioResume.pdf"
};

export const SKILL_CATEGORIES = [
  {
    title: "🎨 Frontend",
    skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React.js"]
  },
  {
    title: "⚙️ Backend",
    skills: ["PHP", "Node.js (Learning)"]
  },
  {
    title: "🗄️ Database",
    skills: ["MySQL", "PostgreSQL"]
  },
  {
    title: "💻 Languages",
    skills: ["C", "C++", "Java"]
  },
  {
    title: "🔧 Tools",
    skills: ["Git", "GitHub"]
  },
  {
    title: "🧠 Concepts",
    skills: ["DSA", "OOP", "REST APIs"]
  }
];

export const PROJECTS = [
  {
    id: "cloud-drive",
    title: "Cloud Drive",
    emoji: "☁️",
    gradientClass: "from-indigo-600/30 to-cyan-500/20",
    shortDesc: "A cloud-based file storage system allowing users to upload, manage, and access files securely from anywhere.",
    overview: "Cloud Drive is a responsive, feature-rich cloud file storage application built to replicate platforms like Google Drive. It allows users to manage files, create folder structures, tag favorites, and recover deleted items from a trash bin.",
    techStack: ["React.js", "Node.js", "PostgreSQL", "AWS S3", "Tailwind CSS"],
    features: [
      "Secure user authentication with OTP capabilities",
      "Robust file upload, download, and deletion",
      "Dynamic folder structure creation and management",
      "File search, rename, and categorization",
      "Drag-and-drop file uploads with progress tracking",
      "Trash bin recovery and file soft-delete",
      "Favorited file markings for quick access",
      "Secure direct media previews (images, text, documents)"
    ],
    challenges: "Handling multiple concurrent large file uploads and displaying visual uploading progress indicators without blocking the application interface state.",
    solutions: "Leveraged Axios cancel tokens and built custom upload progress hook tracking. Utilized AWS S3 multipart uploads combined with secure presigned URLs to handle high-bandwidth uploads efficiently.",
    improvements: [
      "In-browser code editor for text and configuration files",
      "Shared links management with expiration timers and passwords",
      "Global CDN integration for ultra-fast downloads and media streaming"
    ],
    github: "https://github.com/prateekyadav2003/Cloud-Drive.git",
    demo: "https://cloud-driveapp.netlify.app"
  },
  {
    id: "pg-finder",
    title: "PG Finder & PG Owner Platform",
    emoji: "🏠",
    gradientClass: "from-purple-600/30 to-indigo-500/20",
    shortDesc: "A dual-portal accommodation platform connecting PG seekers with property owners featuring advanced searches.",
    overview: "PG Finder & PG Owner is a full-stack accommodation portal connecting seekers and landlords. Landlords can register, list properties, manage rooms, amenities, prices, and view analytics. Seekers can search based on location, budget, and contact owners directly.",
    techStack: ["React.js", "PHP", "MySQL", "Bootstrap", "Git", "GitHub"],
    features: [
      "Dual portal layout with dedicated landlord dashboard and seeker listing search",
      "Advanced filtering system for price ranges, room types, locations, and amenities",
      "Interactive landlord portal for property submissions, updates, and bookings",
      "Dynamic search listings showing room vacancies in real-time",
      "Direct communication links for seekers to call or message property owners",
      "Secure authentication, form validations, and SQL injection prevention schemas"
    ],
    challenges: "Synchronizing listing updates and maintaining optimal database search queries across thousands of location records.",
    solutions: "Constructed relational database schema in MySQL, indexing location, pricing, and availability columns. Formulated prepared statements in PHP to avoid injection while speeding up query retrieval times.",
    improvements: [
      "Map-based geolocation search displaying PG options on a live map layout",
      "Integrated UPI/NetBanking rent payment gateway",
      "Real-time chatbot for direct booking inquiries"
    ],
    github: "https://github.com/prateekyadav2003/PGFinder-PGOwner.git",
    demo: "https://github.com/prateekyadav2003/project"
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    emoji: "🎵",
    gradientClass: "from-cyan-600/30 to-purple-500/20",
    shortDesc: "A pixel-perfect Spotify UI clone featuring interactive audio playback and playlist controls.",
    overview: "This project is a high-fidelity frontend replica of the Spotify web player. It incorporates fully responsive UI styling, interactive sidebar, responsive tracklists, play queues, and real-time audio controls.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Web Audio API", "Tailwind CSS"],
    features: [
      "Fully interactive music player dashboard matching Spotify signature dark UI",
      "Working playback controls including Play, Pause, Next, Previous, and Shuffle",
      "Interactive music progress bar displaying current time and buffering",
      "Custom playlist layout with track rows, album art, and artist credits",
      "Dynamic volume control slider syncing with HTML5 Audio elements",
      "Fully responsive layout translating to mobile screen sizes seamlessly"
    ],
    challenges: "Synchronizing the music progress bar scrubbing behavior smoothly with background audio events without creating visual lag.",
    solutions: "Developed lightweight JavaScript audio element event listener wrappers that hook into requestAnimationFrame for smooth progression bar renders.",
    improvements: [
      "Integrate with official Spotify Web API to sync real-time user libraries",
      "Fetch and render scrolling synchronized lyrics for playing tracks",
      "Build collaborative listening rooms using WebSockets"
    ],
    github: "https://github.com/prateekyadav2003/Spotify_Clone",
    demo: "https://prateekyadav2003.github.io/Spotify_Clone/"
  }
];

export const EXPERIENCE = [
  {
    role: "Full-Stack Web Development Intern",
    company: "Tech Internship Company",
    period: "Aug 2024 – Nov 2024",
    details: [
      "Built and maintained responsive frontend interfaces using HTML5, CSS3, Bootstrap, and JavaScript.",
      "Integrated RESTful APIs and implemented server-side logic in PHP with MySQL for dynamic functionality.",
      "Debugged production issues, identified performance bottlenecks, and optimized speed and scalability.",
      "Participated in agile code reviews, daily stand-ups, and contributed to technical documentation.",
      "Managed version control using Git and GitHub for collaborative multi-developer workflows."
    ]
  },
  {
    role: "Academic Full-Stack Project Developer",
    company: "University Projects",
    period: "2024 – 2025",
    details: [
      "Designed and built full-stack PG Finder portal bridging property owners and students.",
      "Architected backend server scripts, secure session handling, and relational MySQL databases.",
      "Engineered frontend views utilizing HTML5, CSS3, Bootstrap, and React components."
    ]
  },
  {
    role: "Future Internship / Placement Placeholder",
    company: "Available for Roles",
    period: "Immediate Start",
    details: [
      "Seeking positions as a Frontend Developer, Full-Stack Developer, or Cloud Computing Associate.",
      "Eager to apply skills in React, Node, SQL, and Cloud architectures to help build production-grade web systems."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "MCA — Cloud Computing",
    school: "Galgotias University",
    period: "Sep 2025 – Jul 2027",
    details: "Master of Computer Applications with specialization in Cloud Computing. Gaining deep exposure to AWS systems, cloud infrastructure planning, containerization, and DevOps workflows."
  },
  {
    degree: "BCA — Computer Science",
    school: "DDU Gorakhpur University",
    period: "Aug 2022 – Jun 2025",
    details: "Completed Bachelor of Computer Applications. Studied core computer science concepts including Object-Oriented Programming, Data Structures, Relational Databases, and Web Development."
  }
];

export const CERTIFICATES = [
  {
    id: "nptel-cloud",
    title: "Cloud Computing and Distributed System",
    issuer: "SWAYAM-NPTEL & IIT Kanpur",
    tags: ["NPTEL", "Cloud Computing", "Distributed Systems"],
    category: "Cloud",
    file: "/certificates/Prateek NPTEL Cloud Certificate.pdf",
    icon: "☁️"
  },
  {
    id: "aws-ml",
    title: "AWS Academy Graduate — Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS Academy)",
    tags: ["AWS", "Machine Learning", "Training Badge"],
    category: "Cloud",
    file: "/certificates/Prateek_AWSMachine_Learning_Foundations.pdf",
    icon: "🔥"
  },
  {
    id: "oracle-sql",
    title: "Database Programming with SQL",
    issuer: "Oracle",
    tags: ["Oracle", "SQL", "Database"],
    category: "Database",
    file: "/certificates/SQL.jpg",
    icon: "🔐"
  },
  {
    id: "tata-datavis",
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata Group — Job Simulation",
    tags: ["Tata Group", "Data Visualisation", "Business Insights"],
    category: "Data",
    file: "/certificates/DataVisualizatiob.jpg",
    icon: "📈"
  },
  {
    id: "cyber-hacking",
    title: "Ethical Hacking with AI 2026 Bootcamp",
    issuer: "Cybersecurity Ghost",
    tags: ["Ethical Hacking", "AI Security", "Cybersecurity"],
    category: "Security",
    file: "/certificates/Ethical Hacking Bootcamp certificate.jpeg",
    icon: "🔑"
  }
];

export const SERVICES = [
  {
    title: "Frontend Development",
    icon: "🎨",
    description: "Responsive and premium user interfaces utilizing React.js, Tailwind CSS, HTML5, and CSS3. Smooth Framer Motion transitions and focus on details."
  },
  {
    title: "Full Stack Development",
    icon: "⚡",
    description: "End-to-end web architectures featuring clean server-side application logic (Node.js/PHP) and custom database design (MySQL/PostgreSQL)."
  },
  {
    title: "Responsive Web Design",
    icon: "📱",
    description: "Mobile-first layout structures ensuring applications display correctly on desktop, tablet, and mobile devices."
  },
  {
    title: "Cloud-Based Solutions",
    icon: "☁️",
    description: "Building applications prepared for cloud deployments. Integrations with AWS storage APIs (S3), cloud databases, and scalable hosting frameworks."
  }
];

export const ACHIEVEMENTS = [
  {
    id: "projects",
    num: 10,
    suffix: "+",
    lbl: "Projects Built",
    icon: "🚀",
    desc: "Created multiple single-page React apps and full-stack platforms like PG Finder."
  },
  {
    id: "skills",
    num: 15,
    suffix: "+",
    lbl: "Technologies Mastered",
    icon: "📚",
    desc: "Proficient in languages, web frameworks, databases, version controls, and cloud foundations."
  },
  {
    id: "certifications",
    num: 5,
    suffix: "",
    lbl: "Certifications",
    icon: "🎓",
    desc: "Certified by IIT Kanpur (NPTEL), AWS Academy, Oracle, Tata Group, and security providers."
  },
  {
    id: "academics",
    num: 2025,
    suffix: "",
    lbl: "BCA Grad Year",
    icon: "⭐",
    desc: "Graduated in Computer Science with focus on software development and data structures."
  }
];
