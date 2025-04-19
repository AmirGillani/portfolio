import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";

import image1 from "../assets/projects/introverts.png";
import image2 from "../assets/projects/mobilemate.png";
import image3 from "../assets/projects/ecommerce.png";
import image4 from "../assets/projects/fakemessenger.png";
import image5 from "../assets/projects/places.png";
import image6 from "../assets/projects/doraemon.png";
import image7 from "../assets/projects/harrypotter.png";


import reactIcon from "../assets/react-js-icon.svg";
import nextJsIcon from "../assets/nextjs-icon.svg";
import nodeJsIcon from "../assets/node-js-icon.svg";
import expressJsIcon from "../assets/express-js-icon.svg";
import reduxJsIcon from "../assets/redux-icon.svg";
import mongoDbIcon from "../assets/mongodb-icon.svg";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Award", href: "#award" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Amir Shah",
  info: "Building seamless web experiences with the power of MERN Stack.",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Amir Hussain Shah, a MERN-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "Introverts",
    subtitle: "MERN Stack Project",
    image: image1,
    link: "https://introverts.netlify.app/",
  },
  {
    title: "Mobilemate",
    subtitle: "MERN Stack Project",
    image: image2,
    link: "https://www.mobilemate.io/",
  },
  {
    title: "Ecommerce App",
    subtitle: "MERN Stack Project",
    image: image3,
    link: "https://ecommerce-frontend-pi-one.vercel.app/",
  },
  {
    title: "Fake Messenger App",
    subtitle: "REACT JS Project",
    image: image4,
    link: "https://fake-messenger-eight.vercel.app/",
  },
  {
    title: "PLACES App",
    subtitle: "MERN Stack Project",
    image: image5,
    link: "https://places-app-orcin.vercel.app/",
  },
  {
    title: "Doraemon Fan Club",
    subtitle: "REACT JS Project",
    image: image6,
    link: "https://doraemon-beta.vercel.app/",
  },
 
  {
    title: "Harry Potter Fan Club",
    subtitle: "Pure JS Project",
    image: image7,
    link: "https://harrypotter-6zbk.vercel.app/",
  }
 
];

export const SKILLS = [
  {
    icon: reactIcon,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: nextJsIcon,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: mongoDbIcon,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: reduxJsIcon,
    name: "REDUX",
    experience: "1+ year",
  },
  {
    icon: nodeJsIcon,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: expressJsIcon,
    name: "Express JS",
    experience: "1+ year",
  },
];

export const ACHIEVEMENT = {
  title: "Awards & Achievements",
  award: "Worked On Live Projects",
  description:
    "Gained hands-on experience building full-stack web apps using MongoDB, Express.js, React, and Node.js.Completed a practical training program focused on real-world projects, version control, and deployment workflows.",
};

export const TESTIMONIALS = [
  {
    name: "Emily Johnson",
    title: "CEO, Tech Innovators",
    quote:
      "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    image: user1,
  },
  {
    name: "Michael Lee",
    title: "CTO, Creative Minds",
    quote:
      "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: user2,
  },
  {
    name: "Sophia Martinez",
    title: "Lead Developer, Digital Solutions",
    quote:
      "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: user3,
  },
  {
    name: "Daniel Thompson",
    title: "Project Manager, InnovateX",
    quote:
      "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook size={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord size={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram size={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaTwitter size={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub size={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin size={25} className="hover:opacity-80" />,
  },
];
