import { SectionTitle } from "./SectionTitle";

export const Contact = () => {
  return (
    <div className="">
      <SectionTitle title={"contact"} />
      <p>Gustav Melefors</p>
      <p>Linköping, Sweden</p>
      <p>
        Tel: <a href="tel:+46720241539">+46 720241539</a>
      </p>
      <p>
        Email:{" "}
        <a href="mailto:gustav.melefors@gmail.com">gustav.melefors@gmail.com</a>
      </p>
    </div>
  );
};
