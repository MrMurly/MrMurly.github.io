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
    <button onClick={onClick} className="hover:text-white/50">
      <a href={`#${title}`}>
        <h1 className="text-2xl">{title}</h1>
      </a>
    </button>
  );
};
