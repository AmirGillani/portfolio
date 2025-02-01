import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";

import image1 from "../assets/project1.png";
import image2 from "../assets/project2.png";
import image3 from "../assets/project3.png";
import image4 from "../assets/project4.png";
import image5 from "../assets/project5.png";
import image6 from "../assets/project6.png";
import image7 from "../assets/project7.png";
import image8 from "../assets/project8.png";
import image9 from "../assets/project9.png";
import image10 from "../assets/project10.png";

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
    title: "POTTER HEADS",
    subtitle: "A pure HTML,Tailwind and vanilla JS project.",
    image: image1,
    link: "https://harrypotter-6zbk.vercel.app/",
  },
  {
    title: "Mobilemate",
    subtitle: "A LIVE full MERN stack project.",
    image: image3,
    link: "https://www.mobilemate.io/",
  },
  {
    title: "Admin Pannel For Mobilemate",
    subtitle: "A full stack project to manage mobilamate ",
    image: image7,
    link: "https://www.mobilemate.io/",
  },
  {
    title: "Ecommerce App",
    subtitle: "A MERN stack project",
    image: image9,
    link: "https://ecommerce-frontend-pi-one.vercel.app/",
  },
  {
    title: "Places App",
    subtitle: "A MERN stack project",
    image: image8,
    link: "https://places-app-orcin.vercel.app/",
  },
  {
    title: "Fake Messenger Chats",
    subtitle: "A React JS project for fake chats.",
    image: image6,
    link: "https://fake-messenger-eight.vercel.app/",
  },
  {
    title: "Amazon Clone",
    subtitle: "Pure HTML and CSS project.",
    image: image2,
    link: "#projects",
  },

  {
    title: "Facebook Clone",
    subtitle: "A pure HTML and CSS project.",
    image: image4,
    link: "#projects",
  },
  {
    title: "ATO Books",
    subtitle: "A pure HTML and CSS project.",
    image: image5,
    link: "#projects",
  },

  {
    title: "Toonworld4all",
    subtitle: "A HTML and CSSproject.",
    image: image10,
    link: "#projects",
  },
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
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024",
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
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
