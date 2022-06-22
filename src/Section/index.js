import { MainSection, Title, Header, Container } from "./styled";

const Section = ({ title, container, filtersContent }) => (
  <MainSection>
    <Header>
      <Title>{title}</Title>
      {filtersContent}
    </Header >
    <Container>
      {container}
    </Container>
  </MainSection>
);

export default Section;