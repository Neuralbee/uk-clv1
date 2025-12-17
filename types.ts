export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: string; // e.g., "large", "tall" for grid
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  stars: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}