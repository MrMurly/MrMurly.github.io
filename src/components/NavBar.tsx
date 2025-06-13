import { PropsWithChildren, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export const Navbar = ({ children }: PropsWithChildren) => {
  const { isMobile } = useIsMobile();
  const [openMenu, setMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {isMobile ? (
        <div id="menuToggle">
          <button
            onClick={handleMenuClick}
            className={`cursor-pointer ${openMenu ? "open" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="hidden">{children}</div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};
