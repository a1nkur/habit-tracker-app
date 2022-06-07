import styled from "styled-components";
import { BiCog } from "react-icons/bi";

const Welcome = () => {
  return (
    <Container>
      <Headline>
        <h1>Hey there, {"Ankur"}.</h1>
        <BiCog />
      </Headline>
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

const Headline = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;
