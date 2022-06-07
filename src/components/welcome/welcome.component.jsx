import styled from "styled-components";

const Welcome = () => {
  return (
    <Container>
      <h1>Hey there, {"Ankur"}.</h1>

      <span>
        {"5"}hrs {"42"}mins till bedtime.
      </span>
    </Container>
  );
};

export default Welcome;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  h1 {
    font-size: 2rem;
    padding-bottom: 0.2rem;
  }

  span {
    font-size: 1.1rem;
    font-weight: 300;
    color: var(--gray-shade-primary);
  }
`;
