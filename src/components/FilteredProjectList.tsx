import { Card, CardProps } from "./Card";

interface props {
  projects: Array<CardProps>;
  searchTerm: string;
}

export const FilteredProjectList = ({ projects, searchTerm }: props) => {
  return projects.map((project) => {
    if (
      project.tags?.filter((tag) =>
        tag.title.toLowerCase().includes(searchTerm.toLowerCase()),
      ).length === 0
    )
      return;

    return <Card {...project} />;
  });
};
