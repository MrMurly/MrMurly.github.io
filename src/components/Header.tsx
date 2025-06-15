import { Navbar } from "./NavBar.tsx";
import { NavItem } from "./NavItem.tsx";

export const Header = () => {
  return (
    <div className="w-screen border-solid border-b backdrop-blur-sm  z-10 relative bg-black/20">
      <div className="py-5 px-5 flex justify-between">
        <div className="">
          <h3 className="text-3xl lg:text-4xl">Gustav Melefors</h3>
        </div>
        <Navbar>
          <NavItem title={"Projects"} scrollTarget={"projects-scroll"} />
          <NavItem title={"Contact"} scrollTarget={"contact-scroll"} />
        </Navbar>
      </div>
    </div>
  );
};
