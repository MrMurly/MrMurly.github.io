import { Project } from "../types/Project";
import { Card } from "./Card";

interface props {
  projects: Array<Project>;
  searchTerm: string;
}

export const FilteredProjectList = ({ projects, searchTerm }: props) => {
  return (
    <div className="flex w-lg-3/4  flex-row flex-wrap p-5 gap-5 justify-center">
      {projects.map((project) => {
        if (
          project.tags?.filter((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ).length === 0
        )
          return;

        return <Card {...project} />;
      })}
    </div>
  );
};
