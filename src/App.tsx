import { ChangeEvent, useState } from "react";
import "./App.css";
import ReactLogo from "./assets/react.svg";
import { Card, CardProps } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";

const lorumIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

/*
  
  TODO: Break out search and project functionality into something else
  
  */
function App() {
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

  const FilteredProjectView = projects.map((project) => {
    if (
      project.tags?.filter((tag) =>
        tag.title.toLowerCase().includes(searchTerm.toLowerCase()),
      ).length === 0
    )
      return;

    return <Card {...project} />;
  });
  return (
    <div className="font-mono text-white">
      <Header />
      <div className="w-full flex justify-center mt-5">
        <SearchBar search={search} />
      </div>
      <div className="grid grid-cols-3 gap-5 p-10 max-sm:grid-cols-1 max-md:grid-cols-2">
        {FilteredProjectView}
      </div>
      <Footer />
    </div>
  );
}

export default App;
