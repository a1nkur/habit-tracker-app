import styled from "styled-components";

const LeftPanel = () => {
  return <Container></Container>;
};

export default LeftPanel;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  height: 90vh;
  width: 15rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  background: rgba(194, 214, 207, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(194, 214, 207, 0.31);
`;
