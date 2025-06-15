export type Project = {
  title: string;
  smallImage: string;
  largeImage?: string;
  shortDescription: string;
  longDescription?: string;
  tags: Array<string>;
  dateStarted?: Date;
  dateEnded?: Date;
  projectLink?: string;
};
