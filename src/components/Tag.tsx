export interface TagProps {
  title: string;
}

export const Tag = ({ title }: TagProps) => {
  return (
    <div className="rounded-md bg-blue-400 p-1 px-3">
      <span className="font-mono captialize cursoer">{title}</span>
    </div>
  );
};
