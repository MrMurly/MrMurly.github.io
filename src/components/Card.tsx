import { Project } from "../types/Project";
import { Tag } from "./Tag";

export const Card = ({
  title,
  smallImage,
  tags,
  shortDescription,
}: Project) => {
  return (
    <>
      <div className="rounded-md bg-cyan-900 flex flex-col justify-center p-5">
        <h3 className="text-center text-3xl font-bold capitalize">{title}</h3>
        <img className="object-fill w-50 h-50 self-center" src={smallImage} />
        <div className="flex flex-col gap-2 justify-center">
          <span className="max-w-100  font-extralight text-sm/snug">
            {shortDescription}
          </span>
          <div className="flex flex-row flex-wrap max-w-100 gap-2 justify-between">
            {tags?.map((tag, i) => <Tag title={tag} key={i} />)}
          </div>
        </div>
      </div>
    </>
  );
};
