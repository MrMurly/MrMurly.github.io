interface props {
  title: string;
  scrollTarget: string;
}

export const NavItem = ({ title, scrollTarget }: props) => {
  const onClick = () => {
    const element = document.getElementById(scrollTarget);

    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button onClick={onClick} className="hover:text-gray-400">
      <a href={`#${title}`}>
        <h1 className="text-2xl uppercase">{title}</h1>
      </a>
    </button>
  );
};
