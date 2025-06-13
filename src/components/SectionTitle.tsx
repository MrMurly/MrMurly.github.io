import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

interface props {
  title: String;
  subTitle?: String;
}

export const SectionTitle = ({ title, subTitle }: props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  const getVisible = () => {
    return isVisible ? "cursor typewriter-animation" : "";
  };

  return (
    <div className="ml-10" ref={ref}>
      <h1
        className={`self-start text-4xl font-extrabold uppercase ${getVisible()}`}
      >
        {title}
      </h1>
      {subTitle ? <p>{subTitle}</p> : <></>}
    </div>
  );
};
