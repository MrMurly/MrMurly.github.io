import { GitHubIcon } from "../assets/github-icon";

export const Footer = () => {
  return (
    <div className=" h-64 w-screen border-t border-solid bg-black/20 p-15">
      <div className="flex gap-50">
        <div className="">
          <h3 className="font-bold text-2xl">Contact Info</h3>
          <p>Gustav Melefors</p>
          <p>Linköping, Sweden</p>
          <p>
            Tel: <a href="tel:+46720241539">+46 720241539</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:gustav.melefors@gmail.com">
              gustav.melefors@gmail.com
            </a>
          </p>
        </div>
        <div className="h-10">
          <h3 className="font-bold text-2xl">Links</h3>
          <div className="flex h-10 gap-3">
            <GitHubIcon />
            <GitHubIcon />
            <GitHubIcon />
            <GitHubIcon />
            <GitHubIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
