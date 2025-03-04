import { Tag, TagProps } from "./Tag";

export interface CardProps {
  title: string;
  description: string;
  tags: [TagProps] | undefined;
  logo: string;
}

export const Card = ({ title, description, tags, logo }: CardProps) => {
  return (
    <>
      <div className="rounded-md bg-cyan-900 flex flex-col justify-center p-5">
        <h3>{title}</h3>
        <img className="object-fill w-50 h-50 self-center" src={logo} />
        <div className="flex flex-col gap-2">
          <span className="max-w-100">{description}</span>
          <div className="flex flex-row flex-wrap max-w-100 justify-center gap-2">
            {tags?.map((tag, i) => <Tag {...tag} key={i} />)}
          </div>
        </div>
      </div>
    </>
  );
};
