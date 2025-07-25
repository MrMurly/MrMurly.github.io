import { PropsWithChildren, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export const Navbar = ({ children }: PropsWithChildren) => {
  const { isMobile } = useIsMobile();
  const [openMenu, setMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {isMobile ? (
        <div id="menuToggle" className="">
          <button
            onClick={handleMenuClick}
            className={`py-2 cursor-pointer ${openMenu ? "open" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className={`${openMenu ? "absolute" : "hidden"} right-0 py-3  top-[101%] backdrop-blur-sm w-[50vw] h-fit slide-in border-l-1 border-b-1 border-amber-50`}
          >
            <div className="flex gap-5 flex-col justify-start">{children}</div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row gap-10 mr-15 my-auto">{children}</div>
      )}
    </>
  );
};
