import { SectionTitle } from "./Section.styled";

const Section = ({ title, children }) => {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </>
  );
};

export default Section;
