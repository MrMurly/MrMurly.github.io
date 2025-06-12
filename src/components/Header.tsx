import { NavItem } from "./NavItem.tsx";

export const Header = () => {
  return (
    <div className="w-screen h-max border-solid border-b backdrop-blur-sm  fixed left-0 top-0 z-10 ">
      <div className="py-5 px-5 flex justify-between">
        <div className="h-10 max-lg:h-20">
          <h3 className="text-4xl">Gustav Melefors</h3>
        </div>
        <div className="flex gap-10">
          <NavItem title={"Projects"} scrollTarget={"projects-scroll"} />
          <NavItem title={"Contact"} scrollTarget={"contact-scroll"} />
        </div>
      </div>
    </div>
  );
};
