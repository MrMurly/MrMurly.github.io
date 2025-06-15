import { useState } from "react";
import { Project } from "../types/Project";
import { Card } from "./Card";
import { SectionTitle } from "./SectionTitle";

export const ProjectView = () => {
  const [projects, _] = useState<Array<Project>>([
    {
      title: "ZombieSurvivors",
      dateEnded: new Date("2022-11-14"),
      dateStarted: new Date("2022-12-06"),
      largeImage: "https://i.imgur.com/Q7GOqcp.png",
      projectLink: "https://gitlab.liu.se/gusme799/tdp005",
      longDescription:
        "ZombieSurvivors is a small arcade game were the player fights agianst an onslaught of enemies, arriving in waves. Eeach more difficult then the last. As the waves grow more difficult so does the player, accumulating more and more exp for each enemy killed. The goal is to survive for as long as possible.\n\nDuring this project I have learned how to structure my time and effort into a small chunk of time while maintaining a healthy work-life balance. I have also learned why and how to properly structure my code before before writing, not just doing whatever will get the job done.\n",
      shortDescription:
        "ZombieSurvivors is a small arcade game were the player fights agianst an onslaught of enemies, arriving in waves.",
      smallImage: "https://i.imgur.com/ciL92Ry.png",
      tags: ["C++", "OOP", "doxygen", "Polymorphism", "SFML"],
    },

    {
      title: "old portfolio website",
      dateStarted: new Date("2022-12-25"),
      dateEnded: new Date("2024-03-03"),
      projectLink: "https://github.com/MrMurly/portfolio",
      longDescription:
        "A portfolio website to highlight projects I've worked on. This website was built using a MERN stack and deployed to Render, a hosting site.  This has been devolped in my own spare time,  and took quite some time to get up  and running. Having started this project in 2022, I only finished it recently in 2024, since i had to put it on the backburner when my studies started ramping up.",
      shortDescription:
        "A portfolio website to highlight projects i've worked on. No longer in use due to performance and better costs alternatives.",
      smallImage:
        "https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png",
      tags: [
        "React",
        "Node",
        "MERN-stack",
        "typescript",
        "Express",
        "MongoDB",
        "Mongoose",
      ],
    },
    {
      title: "D plus plus",
      dateStarted: new Date("2022-02-22T00:00:00.000+00:00"),
      dateEnded: new Date("2022-04-25T00:00:00.000+00:00"),
      projectLink: "https://github.com/MrMurly/dpluspus",
      longDescription:
        "A programming language devolped in ruby with elements from  C++. This project got me to deeper understand how parsing works but especially how programming languages are constructed. We got to  develop our own language with a proper grammer.  The original purpose of the language was to print out a dungeon, hence the d in the name, but this was scrapped since we couln't fit it in within the time frame. A lot of bugs happened in this project which took a significantly longer time to fix then expected.",
      shortDescription:
        "A programming language devolped in ruby with elements from  C++.",
      smallImage:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190902124355/ruby-programming-language.png",
      tags: ["Ruby", "Lexer", "Parser", "rd-parse", "pair-programming"],
    },
  ]);

  return (
    <div className="mb-5" id="projects-scroll">
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
