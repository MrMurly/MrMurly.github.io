import { Project } from "../types/Project";
import { Tag } from "./Tag";
import { useRef, useState } from "react";

export const Card = ({
  title,
  smallImage,
  tags,
  shortDescription,
}: Project) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateRef = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);

  const [transformStyle, setTransformStyle] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
  );

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    const centerX = box.width / 2;
    const centerY = box.height / 2;

    const rotateX = (y - centerY) / 50;
    const rotateY = (centerX - x) / 50;

    rotateRef.current = { x: rotateX, y: rotateY };

    if (!animationFrame.current) {
      animationFrame.current = requestAnimationFrame(() => {
        const { x, y } = rotateRef.current;
        setTransformStyle(
          `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale3d(1,1,1)`,
        );
        animationFrame.current = null;
      });
    }
  };

  const onMouseLeave = () => {
    rotateRef.current = { x: 0, y: 0 };
    setTransformStyle(
      `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`,
    );
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="shadow-xl shadow-cyan-900/50 min-h -100 card rounded-md bg-black/50 flex flex-col justify-start p-5 w-75 group transition-all will-change-transform truncate"
      style={{
        transform: transformStyle,
        transition: "transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)",
      }}
    >
      <h3 className="text-wrap text-center text-3xl font-bold capitalize">
        {title}
      </h3>
      <img className="object-cover self-center" src={smallImage} alt={title} />
      <div className="flex-col gap-2 justify-center flex">
        <span className="mt-5 max-w-100 font-extralight text-sm/snug text-wrap">
          {shortDescription}
        </span>
        <div className="flex-row flex-wrap max-w-100 gap-2 justify-between flex">
          {tags
            ?.sort((a, b) => a.length - b.length)
            .map((tag, i) => <Tag title={tag} key={i} />)}
        </div>
      </div>
    </div>
  );
};
