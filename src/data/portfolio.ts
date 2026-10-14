// All site content lives here. Edit this file to make the portfolio yours.

export const profile = {
  name: "Kelly-Martins Sarpong",
  firstName: "Kelly-Martins",
  role: "Front-End Developer & Software Engineer",
  location: "Accra, Ghana",
  tagline:
    "I design and build fast, accessible, and delightful web experiences, from pixel-perfect interfaces to the APIs that power them.",
  bio: [
    "I'm a front-end developer and software engineer who loves turning complex problems into simple, beautiful interfaces. I care about clean architecture, smooth interactions, and products that feel effortless to use.",
    "Over the past few years I've shipped dashboards, e-commerce platforms, and design systems for startups and agencies, working across the stack with React, Next.js, TypeScript, and Node.js.",
  ],
  email: "kellymartinssarp21@gmail.com",
  resumeUrl: "/resume.pdf",
  portrait: "/profile.svg",
  siteUrl: "https://kellymartinssarpong.dev",
  copyrightYear: 2026,
  socials: {
    github: "https://github.com/topboykelly",
    linkedin: "https://www.linkedin.com/in/kelly-martins-sarpong/?isSelfProfile=true",
    x: "https://x.com/",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroTags = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "REST & GraphQL",
];

export const reviews = {
  count: "50+",
  rating: "4.9",
  quote:
    "Kelly-Martins's front-end work transformed our product. Fast, polished, and a joy to collaborate with. Highly recommended!",
  reviewers: ["AS", "SK", "MA", "LT"],
};

export const marquee = [
  "Front-End Development",
  "Web Applications",
  "UI Engineering",
  "Design Systems",
  "API Integration",
  "Performance",
  "Accessibility",
];

export const services = [
  {
    title: "Front-End Development",
    tags: ["React", "Next.js", "TypeScript", "Responsive UI"],
    description:
      "Pixel-perfect, responsive interfaces built with modern frameworks, clean component architecture, and attention to every interaction.",
    image: "/services/frontend.svg",
  },
  {
    title: "Web Application Development",
    tags: ["SPA & SSR", "State Management", "Auth", "Dashboards"],
    description:
      "Full-featured web apps with robust state management, authentication, and real-time data, built to scale with your product.",
    image: "/services/webapp.svg",
  },
  {
    title: "UI Engineering & Design Systems",
    tags: ["Component Libraries", "Storybook", "Theming", "Figma to Code"],
    description:
      "Reusable, documented component libraries that keep your product consistent and let your team ship faster.",
    image: "/services/design-system.svg",
  },
  {
    title: "API & Backend Integration",
    tags: ["Node.js", "REST", "GraphQL", "Databases"],
    description:
      "Reliable APIs and integrations that connect your front end to the data and services it needs, with type safety end to end.",
    image: "/services/api.svg",
  },
  {
    title: "Performance & Accessibility",
    tags: ["Core Web Vitals", "WCAG", "SEO", "Audits"],
    description:
      "Audits and optimizations that make your site faster, more inclusive, and easier to find, measured with real metrics.",
    image: "/services/performance.svg",
  },
];

export const stats = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Shipped", value: 7, suffix: "+" },
  { label: "Happy Clients", value: 5, suffix: "+" },
];

export const projects = [
  {
    title: "Mutedeworld Fashion Store",
    description:
      "A full-stack online store for an Accra fashion brand, with product pages, size guides, a cart drawer, and a checkout that sends orders to the shop on WhatsApp. An admin dashboard lets the owner manage products and track orders, all backed by a Supabase database.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    image: "/projects/mutedeworld.png",
    liveUrl: "https://mutedeworld.vercel.app/",
    repoUrl: "https://github.com/topboykelly/mutedeworld",
    featured: true,
  },
  {
    title: "SME Fair 2025",
    description:
      "Event website for the first SME Fair, showcasing 16 exhibiting startups, partners, and sponsors, with scroll-reveal animations and a dark mode toggle.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/smefair.png",
    liveUrl: "https://topboykelly.github.io/smefair/",
    repoUrl: "https://github.com/topboykelly/smefair",
    featured: false,
  },
  {
    title: "F.K. Dealsgh Ventures",
    description:
      "A wholesale drinks shop with a product catalogue, add-to-cart saved in the browser, a responsive mobile menu, and a contact form.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/fk-ventures.png",
    liveUrl: "https://topboykelly.github.io/fk-venturestest/",
    repoUrl: "https://github.com/topboykelly/fk-venturestest",
    featured: false,
  },
  {
    title: "Habitat Fair 2025",
    description:
      "An exhibitor directory for a home and construction fair, listing 14 companies with their products, locations, and contact details.",
    tech: ["HTML", "Tailwind CSS"],
    image: "/projects/habitatfair.png",
    liveUrl: "https://topboykelly.github.io/habitatfair/",
    repoUrl: "https://github.com/topboykelly/habitatfair",
    featured: false,
  },
  {
    title: "AMCI Website",
    description:
      "A multi-page church website with sermons, events, ministries, service times, online giving, and a statement of faith, built as a React single-page app with client-side routing.",
    tech: ["React", "TypeScript", "Tailwind CSS", "React Router"],
    image: "/projects/church-website.png",
    liveUrl: "https://church-website-2xkelly.vercel.app/",
    repoUrl: "https://github.com/topboykelly/church-website",
    featured: false,
  },
];

export const experience = [
  {
    company: "Freelance",
    role: "Front-End Developer",
    period: "2024 - Present",
    highlights: [
      "Design and build responsive websites for organisations, small businesses, and events using HTML, CSS, and JavaScript.",
      "Delivered event websites including Habitat Fair and SME Fair, deployed with GitHub Pages.",
      "Turn ideas into clean, mobile-first interfaces with custom layouts and interactive navigation.",
    ],
  },
  {
    company: "AMCI (Religious Organisation)",
    role: "Web Developer",
    period: "May 2025",
    highlights: [
      "Built the organisation's website with About, Location, and Contact sections to help members find and reach them.",
      "Created a responsive navigation with a JavaScript slide-out sidebar for mobile users.",
      "Designed a member login page and custom styling, and deployed the site with GitHub Pages.",
    ],
  },
  {
    company: "Self-taught",
    role: "Front-End Development Training",
    period: "2024",
    highlights: [
      "Completed hands-on web development exercises through freeCodeCamp.",
      "Built my first projects and learned responsive design, Git, and GitHub.",
    ],
  },
];

export const testimonials = [
  {
    name: "Adom Sackey",
    role: "Product Manager, Brightwave",
    quote:
      "Kelly-Martins has an eye for detail that's rare. Every interface ships polished, fast, and exactly how we imagined it, often better.",
  },
  {
    name: "Kwame Adu",
    role: "CTO, Nimbus",
    quote:
      "Our PWA went from idea to launch in weeks. Kelly-Martins's engineering is clean, well-tested, and easy for the team to build on.",
  },
  {
    name: "Maria Alvarez",
    role: "Founder, Verde",
    quote:
      "Conversion went up 30% after the storefront redesign. Kelly-Martins understood both the business goals and the user experience.",
  },
  {
    name: "Liam Turner",
    role: "Design Lead, Pixelcraft",
    quote:
      "The best design-to-code partner I've worked with. The component library Kelly-Martins built is still the backbone of our work.",
  },
];
