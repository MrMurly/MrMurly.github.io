import { GitHubIcon } from "../assets/github-icon.tsx";

export const Header = () => {
  return (
    <div className="w-screen h-max border-solid border-b bg-black/20">
      <div className="py-5 px-5 flex justify-between">
        {/* <h1 className="text-4xl ">Gustav Melefors Porfolio Website</h1> */}
        <div className="h-10 max-lg:h-20">
          <GitHubIcon />
        </div>
      </div>
    </div>
  );
};
