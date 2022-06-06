import styled from "styled-components";

const ToggleButtonGroup = () => {
  return (
    <Container>
      <Button type="button">week</Button>
      <Button type="button">month</Button>
      <Button type="button">year</Button>
      <Button type="button">all time</Button>
    </Container>
  );
};

export default ToggleButtonGroup;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 3rem;
  border-radius: 30px;

  padding: 0.3rem;

  background-color: var(--gray-shade-secondary);
`;

const Button = styled.button`
  text-transform: capitalize;
  height: 100%;

  border-radius: 30px;
  color: var(--black-shade-secondary);
  border: none;
  cursor: pointer;
  background-color: transparent;

  &:first-child {
    background-color: #fff;
  }
`;
