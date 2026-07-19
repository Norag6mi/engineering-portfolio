export interface ProjectMediaItem {
  type: "image" | "video";
  src: string;
  title?: string;
}

export interface Project {
  id: number;
  title: string;
  overview: string;
  problem: string;

  architecture: string[];
  features: string[];
  technologies: string[];

  github: string;
  demo?: string;

  media: ProjectMediaItem[];
}