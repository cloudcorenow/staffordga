export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}