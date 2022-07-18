import { MainSection, Title, Header, Container } from "./styled";

const Section = ({ title, content, filtersContent }) => (
  <MainSection>
    <Header>
      <Title>{title}</Title>
      {filtersContent}
    </Header >
    <Container>
      {content}
    </Container>
  </MainSection>
);

export default Section;