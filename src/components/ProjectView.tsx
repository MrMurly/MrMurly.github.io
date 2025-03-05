import { ChangeEvent, useState } from "react";
import { Card, CardProps } from "./Card";
import { SearchBar } from "./SearchBar";
import ReactLogo from "../assets/react.svg";
import { FilteredProjectList } from "./FilteredProjectList";

const lorumIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const ProjectView = () => {
  const [projects, _] = useState<Array<CardProps>>([
    {
      title: "Portfolio",
      description: lorumIpsum,
      tags: [
        {
          title: "Hobby",
        },
      ],
      logo: ReactLogo,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const search = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.currentTarget.value);

  return (
    <>
      <div className="w-full flex justify-center mt-5">
        <SearchBar search={search} />
      </div>
      <div className="grid grid-cols-3 gap-5 p-10 max-sm:grid-cols-1 max-md:grid-cols-2">
        <FilteredProjectList projects={projects} searchTerm={searchTerm} />
      </div>
    </>
  );
};
