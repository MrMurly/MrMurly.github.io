import { useState } from "react";
import ReactLogo from "../assets/react.svg";
import { Project } from "../types/Project";
import { Card } from "./Card";
import { SectionTitle } from "./SectionTitle";

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

  return (
    <div className="flex justify-center w-3/4 m-auto flex-col content-center mt-5">
      <SectionTitle
        title={"projects"}
        subTitle={"Here is some work I have done"}
      />
      <div className="flex flex-row flex-wrap p-5 gap-5 justify-center mt-3">
        {projects.map((project: Project) => (
          <Card {...project} />
        ))}
      </div>
    </div>
  );
};
