import styled from "styled-components";

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  height: 90vh;
  width: 90vw;
  border-radius: 10px;

  display: flex;
`;
