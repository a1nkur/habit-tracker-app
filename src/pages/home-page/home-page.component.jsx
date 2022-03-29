import styled from "styled-components";
import { DisplayPanel, LeftPanel, Layout } from "../../components";

const HomePage = () => {
  return (
    <Container>
      <Layout>
        <LeftPanel />
        <DisplayPanel />
      </Layout>
    </Container>
  );
};

export default HomePage;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  display: flex;
  border-radius: 10px;
`;
