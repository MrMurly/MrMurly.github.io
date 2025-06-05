export type Project = {
  title: string;
  smallImage: string;
  largeImage?: string;
  shortDescription: string;
  longDescription?: string;
  tags: Array<string>;
  technologies: Array<string>;
  dateStarted?: Date;
  projectLink?: string;
};
