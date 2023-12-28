import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Felipe Parra",
  initials: "FP",
  location: "Acapulco, Gro. Mexico, CST",
  locationLink: "https://www.google.com/maps/place/Acapulco+de+Ju%C3%A1rez,+Gro./@16.823294,-100.180155,10z",
  about:
    "Full Stack Developer focused on building products with extra attention to details",
  summary:
    `I am a results-driven Software Developer with over 5 years of experience in developing, implementing, and
    maintaining web applications across various industries, specialized on JavaScript like a Full Stack Developer. I am
    proficient in modern web technologies such as React, Vue, Node, Express, Firebase, and MongoDB. My proven track
    record of delivering high-quality applications from conception to launch, streamlining functionality, and optimizing
    user experience positions me as an expert in the field.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/1909786?v=4",
  personalWebsiteUrl: "https://github.com/felipe-parra",
  contact: {
    email: "felipeparra.dev@gmail.com",
    tel: "+52",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/felipe-parra",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/felipe-parra-ramirez/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/_felipeparra",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Platzi Inc",
      degree: "Database Career",
      start: "2020",
      end: "2020",
    },
    {
      school: "Platzi Inc",
      degree: "JavaScript School",
      start: "2020",
      end: "2020",
    },
    {
      school: "Ironhack Mexico",
      degree: "Web Dev Mern Stack",
      start: "2019",
      end: "2019",
    },
    {
      school: "Hipocrates University",
      degree: "Bachelor's Degree in Computerstystems engineer",
      start: "2009",
      end: "2014",
    },
  ],
  work: [
    {
      company: "Group Wayssen",
      link: "https://www.wayssen.com/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: "https://www.wayssen.com/assets/img/logo.png",
      start: "2023",
      end: "2023",
      description:
        `Add support and use of Sumsub KYC (Know Your Client), on existing platform with NestJS.
        Create a proof of concept to understand the operation and requirements for implementation.
        Lead the team to be responsible for giving the general vision of the operation of the KYC.`,
    },
    {
      company: "Hello Doctor Inc",
      link: "https://www.linkedin.com/company/hellodoctormx/",
      badges: ["Hybrid"],
      title: "Senior Full Stack Developer",
      logo: "https://media.licdn.com/dms/image/C4E0BAQHRrWnhCHk8CA/company-logo_200_200/0/1645646549632/hellodoctormx_logo?e=1711584000&v=beta&t=iCxeGzldVvIzF8ILOTfi3Ma7JsFXxMqR2J-2_aN8il0",
      start: "2022",
      end: "2023",
      description:
        `Led the development of a web app using React JS, Firebase, and other technologies, while ensuring
        code quality through linters and Husky.
        Enhanced user experience by updating the landing page for app downloads and creating multilingual support
        for both the company's website and a tailored health concierge solution in the hospitality industry.
        Contributed to the development of new features for a React Native mobile app and integrated internal APIs for
        improved interoperability.`,
    },
    {
      company: "Pack & Pack Logistics",
      link: "https://www.linkedin.com/company/packandpack/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: "https://media.licdn.com/dms/image/C4E0BAQGPpD5jE25RIA/company-logo_200_200/0/1630653869557/packandpack_logo?e=1711584000&v=beta&t=3A6ynGwwc-pOt82pwDh4mxQOnjYKGmeI0lcOUoDuQ08",
      start: "2021",
      end: "2022",
      description:
        `Worked on maintenance and development of new features for frontend and backend platforms, using
        technologies like Node, Express, Axios, Cors, Passport, Nodemailer, VueJS, Nuxt, Vuex, and Angular.
        Collaborated on a joint project with Netflix within the company.
        Contributed to the development of a new platform from scratch, implementing authentication strategies,
        business logic middleware, code style linters, and unit tests for the backend, as well as developing the frontend
        from the ground up.`,
    },
    {
      company: "Magno Technology / Colombo Development",
      link: "https://www.linkedin.com/company/magnotechnology/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: "https://media.licdn.com/dms/image/C510BAQErCTakNqeUGw/company-logo_200_200/0/1631307973254?e=1711584000&v=beta&t=FK0L12vwquinr7iFQ55c4V8JE2LKcOpI_YfG3E5h0AE",
      start: "2021",
      end: "2021",
      description: `Developed a web application using Node, Express, Axios, Cors, Passport, Nodemailer for the Backend API, and
      NextJS, React, Redux, React-Intl, and Sass on the frontend.
      Worked on development components such as user sign-up, order tracking, and product details to deliver an
      international e-commerce website that provides and tracks orders for customers.`,
    },
    {
      company: "Pharmassist",
      link: null,
      badges: ["Hybrid"],
      title: "Full Stack Developer",
      logo: null,
      start: "2020",
      end: "2021",
      description: `Developed a web application using Node, Express, Axios, Cors, Passport, Nodemailer for the Backend API, and
      NextJS, React, Redux, React-Intl, and Sass on the frontend.
      Worked on development components such as user sign-up, order tracking, and product details to deliver an
      international e-commerce website that provides and tracks orders for customers.`,
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "React Native",
    "Node.js",
    "Express",
    "NesJS",
    "MongoDB",
    "Firebase",
    "GCP",
    "AWS",
    "Python",
    "Flask",
    "FastAPI",
  ],
  projects: [
    {
      title: "Today I Learned",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "Shadcn",
        "MongoDB",
      ],
      description: "Explore Today I Learned, where you can record and share your daily learnings. Join our community passionate about knowledge and personal growth! 📚✨",
      logo: null,
      link: {
        label: "https://today-i-learn-one.vercel.app/",
        href: "https://today-i-learn-one.vercel.app/",
      },
    },
    {
      title: "Infrastructure as Code - AWS Lab",
      techStack: ["Side Project", "Python", "AWS", "Pulumi"],
      description:
        "This project contains the code needed to create an AWS infrastructure using the Infrastructure as Code (IaC) approach with Pulumi.",
      logo: null,
      link: {
        label: "github.com/felipe-parra/iac-lab",
        href: "https://github.com/felipe-parra/iac-lab",
      },
    },
    {
      title: "Meme generator",
      techStack: ["Side Project", "ReactJS", "CSS"],
      description:
        "A simple meme generator site",
      logo: null,
      link: {
        label: "github.com/felipe-parra/meme-generator-app",
        href: "https://github.com/felipe-parra/meme-generator-app",
      }
    },
    {
      title: "Candy Crush",
      techStack: ["Side Project", "JavaScript", "CSS", "HTML5"],
      description:
        "Basic Game of Candy Crush, using html, js & css",
      logo: null,
      link: {
        label: "github.com/felipe-parra/candy-crush-basic-js",
        href: "https://github.com/felipe-parra/candy-crush-basic-js",
      }
    },
  ],
} as const;
