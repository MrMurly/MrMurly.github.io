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
    <div onClick={onClick}>
      <a href="#projects">
        <h1 className="text-2xl">{title}</h1>
      </a>
    </div>
  );
};
