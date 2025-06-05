import { ChangeEvent, useState } from "react";
import { SearchBar } from "./SearchBar";
import ReactLogo from "../assets/react.svg";
import { FilteredProjectList } from "./FilteredProjectList";
import { Project } from "../types/Project";

const lorumIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const ProjectView = () => {
  const [projects, _] = useState<Array<Project>>([
    {
      title: "Portfolio",
      shortDescription: lorumIpsum,
      smallImage: ReactLogo,
      tags: ["Hobby"],
      technologies: ["React", "Typescript", "Vite", "Tailwind CSS"],
    },
    {
      title: "Portfolio",
      shortDescription: lorumIpsum,
      smallImage: ReactLogo,
      tags: ["Hobby"],
      technologies: ["React", "Typescript", "Vite", "Tailwind CSS"],
    },
    {
      title: "Portfolio",
      shortDescription: lorumIpsum,
      smallImage: ReactLogo,
      tags: ["Hobby"],
      technologies: ["React", "Typescript", "Vite", "Tailwind CSS"],
    },
    {
      title: "Portfolio",
      shortDescription: lorumIpsum,
      smallImage: ReactLogo,
      tags: ["Hobby"],
      technologies: ["React", "Typescript", "Vite", "Tailwind CSS"],
    },
    {
      title: "Portfolio",
      shortDescription: lorumIpsum,
      smallImage: ReactLogo,
      tags: ["Hobby"],
      technologies: ["React", "Typescript", "Vite", "Tailwind CSS"],
    },
    {
      title: "Portfolio",
      shortDescription: lorumIpsum,
      smallImage: ReactLogo,
      tags: ["Hobby"],
      technologies: ["React", "Typescript", "Vite", "Tailwind CSS"],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const search = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.currentTarget.value);

  return (
    <div className="flex justify-center m-auto flex-col content-center">
      <div className="w-full flex justify-center mt-5">
        <SearchBar search={search} />
      </div>
      <FilteredProjectList projects={projects} searchTerm={searchTerm} />
    </div>
  );
};
