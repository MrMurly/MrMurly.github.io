import { useRef } from "react";
import useOnScreen from "../hooks/isVisible";

export const Welcome = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div className="w-full h-screen">
      <h3 className="cursor typewriter-animation">Welcome!</h3>
    </div>
  );
};
