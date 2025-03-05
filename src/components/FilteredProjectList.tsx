import { Project } from "../types/Project";
import { Card } from "./Card";

interface props {
  projects: Array<Project>;
  searchTerm: string;
}

export const FilteredProjectList = ({ projects, searchTerm }: props) => {
  return projects.map((project) => {
    if (
      project.tags?.filter((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      ).length === 0
    )
      return;

    return <Card {...project} />;
  });
};
