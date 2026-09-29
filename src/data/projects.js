export const projects = [
  {
    id: "shopnest",
    title: "ShopNest — E-commerce store",
    summary: "Fast storefront with cart, search and secure checkout.",
    thumbClass: "t1",
    tags: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Vercel"],
    caseStudy: {
      problem: "slow, hard-to-find products.",
      solution:
        "SSR/ISR pages, server-side search, Zod-validated checkout.",
      result: "Lighthouse 95+, LCP under 2.5s.",
    },
    links: [
      { label: "Live demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },

  {
    id: "taskflow",
    title: "TaskFlow — Team task board",
    summary:
      "Real-time kanban board where teammates see changes instantly.",
    thumbClass: "t2",
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "WebSockets"],
    caseStudy: {
      problem: "teams lost track of updates.",
      solution: "live sync over WebSockets, Redux state, JWT login.",
      result: "tested with Jest and Cypress.",
    },
    links: [
      { label: "Live demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },

  {
    id: "fittrack",
    title: "FitTrack — Mobile app",
    summary:
      "Android and iOS app to log workouts and see progress charts.",
    thumbClass: "t3",
    tags: ["React Native", "Expo", "Firebase", "Context API"],
    caseStudy: {
      problem: "users forgot to log workouts.",
      solution:
        "quick-add screen, Firebase Auth and sync, push reminders.",
      result: "one codebase for two platforms.",
    },
    links: [
      { label: "Demo video", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];

export const timeline = [
  {
    when: "2022 – 2026",
    title: "BS Computer Science",
    text: "University of Gujrat, Pakistan",
  },
];