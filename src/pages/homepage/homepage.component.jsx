import styled from "styled-components";
import { DisplayPanel, LeftPanel } from "../../components";

const HomePage = () => {
  return (
    <Container>
      <LeftPanel />
      <DisplayPanel />
    </Container>
  );
};

export default HomePage;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  display: flex;
  /* border: var(--border-1); */
  border-radius: 10px;
`;
