import styled from "styled-components";

const TimeView = () => {
  return (
    <Container>
      <h2>Mon, 2/4 - Sun, 2/10</h2>
    </Container>
  );
};

export default TimeView;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
