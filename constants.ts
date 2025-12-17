import { Project, Service, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "The Glass Extension",
    category: "Residential",
    image: "https://picsum.photos/id/122/800/1200", // Tall
    size: "tall"
  },
  {
    id: 2,
    title: "Pinner Modern Loft",
    category: "Renovation",
    image: "https://picsum.photos/id/193/1200/800", // Wide
    size: "wide"
  },
  {
    id: 3,
    title: "Greater London Estate",
    category: "New Build",
    image: "https://picsum.photos/id/233/800/800", // Square
    size: "square"
  },
  {
    id: 4,
    title: "Minimalist Kitchen",
    category: "Interior",
    image: "https://picsum.photos/id/364/800/1200", // Tall
    size: "tall"
  },
  {
    id: 5,
    title: "Urban Sanctuary",
    category: "Residential",
    image: "https://picsum.photos/id/439/800/800", // Square
    size: "square"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Architectural Planning",
    description: "Navigating local regulations in Pinner and Greater London to secure permissions seamlessly.",
    icon: "ruler"
  },
  {
    id: 2,
    title: "Interior Design",
    description: "Crafting bespoke interiors that harmonize with the structural integrity of your home.",
    icon: "pencil"
  },
  {
    id: 3,
    title: "Project Management",
    description: "Guiding you through every step, from concept sketches to the final brick.",
    icon: "clipboard"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sagar Patel",
    role: "Homeowner",
    text: "Sandeep was excellent at helping us get our application approved. He was very responsive throughout which was fantastic and his responsiveness was reassuring.",
    stars: 5
  },
  {
    id: 2,
    name: "Greg Tanner",
    role: "Renovation Client",
    text: "Our first experience of extending and remodelling our house. Sandeep was excellent at understanding our initial thoughts and guiding us through the maze.",
    stars: 5
  },
  {
    id: 3,
    name: "D M",
    role: "Property Developer",
    text: "I selected Sandeep at SSK Architects based on his outstanding reviews, and it was definitely the right choice. Provided detailed advice about regulations.",
    stars: 5
  }
];