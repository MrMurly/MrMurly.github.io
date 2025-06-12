import { GitHubIcon } from "./icons/github-icon";

export const Footer = () => {
  return (
    <div className="h-max w-screen border-t border-solid bg-black/20 p-15">
      <div className="flex gap-50 max-lg:flex-col max-lg:gap-5 justify-center">
        <div className="flex h-10 gap-3">
          <GitHubIcon />
          <GitHubIcon />
          <GitHubIcon />
          <GitHubIcon />
          <GitHubIcon />
        </div>
      </div>
    </div>
  );
};
