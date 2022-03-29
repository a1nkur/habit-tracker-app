import styled from "styled-components";

const DisplayPanel = () => {
  return <Container></Container>;
};

export default DisplayPanel;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  height: 90vh;
  width: calc(90vw - 15rem);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: var(--white - shade - secondary);
  border-top: var(--border-1);
  border-bottom: var(--border-1);
  border-right: var(--border-1);
`;
