import { Atom, BookOpen, ClipboardList, GraduationCap, Monitor, School, type LucideIcon } from "lucide-react";

export type Job = { id: number; title: string; school: string; city: string; salary: string; board: string; type: string };
export type Link = { label: string; href: string };

export const site = {
  name: "VidyaHire",
  logo: ["Vidya", "Hire"],
  tagline: "School & Teacher Jobs",
  description: "Post openings, discover roles, and hire with clarity — built for Indian schools and educators.",
};

export const routes = { home: "/", login: "/login", register: "/register", jobs: "/jobs", schools: "/schools", about: "/about", forgot: "/forgot" };

export const navLinks: Link[] = [
  { label: "Home", href: routes.home },
  { label: "Find Jobs", href: routes.jobs },
  { label: "For Schools", href: routes.schools },
  { label: "About Us", href: routes.about },
];

export const hero = {
  title: "Find the Right Opportunity. Shape the Future.",
  subtitle:
    "Schools find qualified teachers and educational professionals discover their next career move — all in one place, built for India.",
  primary: { label: "Find Jobs", href: routes.jobs },
  secondary: { label: "For Schools", href: routes.schools },
  image: { src: "/hero.png", alt: "Smiling teacher", width: 650, height: 550 },
};

export const search = {
  what: "What?",
  where: "Where?",
  keyword: "Job title or keywords",
  category: "Any Classification",
  location: "City or state",
  action: "Search Jobs",
};

export const sections = {
  jobs: { title: "Featured Jobs", subtitle: "Latest openings from schools hiring across India" },
  categories: { title: "Popular Categories", subtitle: "Explore roles that match your expertise" },
};

export const stats = [
  { value: "2,400+", label: "open roles" },
  { value: "850+", label: "schools hiring" },
  { value: "Free", label: "for teachers, always" },
];

export const jobs: Job[] = [
  { id: 1, title: "PGT Physics", school: "Delhi Public School, Rohini", city: "New Delhi", salary: "₹45k – ₹60k / month", board: "CBSE", type: "Full-time" },
  { id: 2, title: "TGT Mathematics", school: "Ryan International School", city: "Mumbai, Maharashtra", salary: "₹35k – ₹48k / month", board: "ICSE", type: "Full-time" },
  { id: 3, title: "Primary Teacher (English)", school: "Kendriya Vidyalaya No. 2", city: "Bengaluru, Karnataka", salary: "₹28k – ₹38k / month", board: "CBSE", type: "Contract" },
  { id: 4, title: "Computer Science Teacher", school: "Amity International School", city: "Noida, Uttar Pradesh", salary: "₹40k – ₹55k / month", board: "CBSE", type: "Full-time" },
  { id: 5, title: "Academic Coordinator", school: "Narayana e-Techno School", city: "Hyderabad, Telangana", salary: "₹60k – ₹75k / month", board: "CBSE", type: "Full-time" },
  { id: 6, title: "Music Teacher", school: "The Heritage School", city: "Kolkata, West Bengal", salary: "₹500 / hour", board: "ICSE", type: "Part-time" },
];

export const categories: { label: string; count: number; icon: LucideIcon }[] = [
  { label: "Primary Teacher", count: 640, icon: BookOpen },
  { label: "PGT Teacher", count: 420, icon: Atom },
  { label: "TGT Teacher", count: 510, icon: GraduationCap },
  { label: "School Principal", count: 85, icon: School },
  { label: "Academic Coordinator", count: 130, icon: ClipboardList },
  { label: "Computer Teacher", count: 210, icon: Monitor },
];

export const ctas = [
  { title: "Looking for a teaching job?", text: "Build your profile once, upload your resume and apply to schools across India.", action: { label: "Find Jobs", href: routes.jobs }, tone: "brand" },
  { title: "Looking to hire teachers?", text: "Post openings, review matched applicants and hire with clarity.", action: { label: "Post a Job", href: routes.schools }, tone: "cream" },
] as const;

export const footer: { title: string; links: Link[] }[] = [
  { title: "For Teachers", links: [{ label: "Browse Jobs", href: routes.jobs }, { label: "Create Profile", href: routes.register }, { label: "Login", href: routes.login }] },
  { title: "For Schools", links: [{ label: "Post a Job", href: routes.schools }, { label: "Register School", href: routes.register }] },
  { title: "Company", links: [{ label: "About Us", href: routes.about }, { label: "Home", href: routes.home }] },
];

export const auth = {
  title: "Welcome back",
  subtitle: "Sign in as a school or teacher to continue.",
  panel: "Thousands of schools and educators across India hire and grow with us.",
};
