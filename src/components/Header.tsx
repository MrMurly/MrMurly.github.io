import { GitHubIcon } from "../assets/github-icon.tsx";

export const Header = () => {
  return (
    <div className="w-screen h-20 border-solid border-b bg-black/20">
      <div className="py-5 px-5 flex justify-between">
        <h1 className="text-4xl text-amber-50">
          Gustav Melefors Porfolio Website
        </h1>
        <div className="h-10 w-10">
          <GitHubIcon />
        </div>
      </div>
    </div>
  );
};
