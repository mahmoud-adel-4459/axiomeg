export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export type CoreService = {
  slug: string;
  title: string;
  summary: string;
  href: string;
  icon: string;
};

export type SolutionCategory = {
  slug: string;
  title: string;
  summary: string;
  image: string;
};

export type Solution = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  description: string;
  features: { title: string; text: string }[];
  specs?: { label: string; value: string }[];
  extraTitle?: string;
  extraText?: string;
  extraFeatures?: { title: string; text: string }[];
};

export type ApproachStep = {
  number: string;
  title: string;
  text: string;
};

export type WhyChooseItem = {
  title: string;
  text: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  paragraphs: string[];
};
