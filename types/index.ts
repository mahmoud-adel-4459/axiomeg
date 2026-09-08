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

export type PipelineGalleryCategory =
  | "Pipeline Construction"
  | "Water Networks"
  | "Industrial Pipelines"
  | "Energy Infrastructure";

export type PipelineGalleryItem = {
  id: string;
  title: string;
  category: PipelineGalleryCategory;
  image: string;
  summary: string;
  specs: {
    diameter?: string;
    standard?: string;
    grade?: string;
    coating?: string;
    application?: string;
    facility?: string;
  };
  details: string;
};

export type GlobalAgentRegion = "Middle East & Africa" | "Europe" | "North America" | "Asia-Pacific";

export type GlobalAgent = {
  id: string;
  country: string;
  city: string;
  region: GlobalAgentRegion;
  flag: string;
  companyName: string;
  scope: string;
  contactPerson: string;
  role: string;
  email: string;
  phone: string;
  address: string;
  authorizedLines: string[];
};

export type JobDepartment = "Engineering" | "Field Operations" | "Maintenance" | "Quality & HSE";

export type JobOpening = {
  id: string;
  title: string;
  department: JobDepartment;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
};

export type TrainingCategory =
  | "Technical Training"
  | "Safety & HSE Training"
  | "Engineering Training"
  | "Operational Training";

export type TrainingProgram = {
  id: string;
  title: string;
  category: TrainingCategory;
  summary: string;
  duration: string;
  targetAudience: string;
  modules: string[];
  certification: string;
  deliveryMethods: string[];
};

