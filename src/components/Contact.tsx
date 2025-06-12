import { SectionTitle } from "./SectionTitle";

export const Contact = () => {
  return (
    <div className="mb-5" id="contact-scroll">
      <SectionTitle title={"contact"} />
      <div className="ml-15">
        <p>Gustav Melefors</p>
        <p>Linköping, Sweden</p>
        <p>
          Tel: <a href="tel:+46720241539">+46 720241539</a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:gustav.melefors@gmail.com">
            gustav.melefors@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};
