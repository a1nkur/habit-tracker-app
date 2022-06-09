import styled from "styled-components";

const ToolTipBox = () => {
  return <Container>Lorem ipsum dolor sit amet.</Container>;
};

export default ToolTipBox;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  height: 10rem;
  width: 8rem;
  border: 1px solid red;
  background-color: #fff;
  position: absolute;
  top: 45%;
  left: 75%;
`;
