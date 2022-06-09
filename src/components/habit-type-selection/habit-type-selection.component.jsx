import styled from "styled-components";

const HabitTypeSelection = ({ setHabitType }) => {
  return (
    <Container>
      <ColOne onClick={() => setHabitType("dichotomous")}>
        <h1>Yes or No</h1>
        <section>
          <small>e.g. Did you wake up early today?</small>
          <small>e.g. Did you exercise?</small>
        </section>
      </ColOne>
      <ColTwo onClick={() => setHabitType("measurable")}></ColTwo>
    </Container>
  );
};

export default HabitTypeSelection;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  border: 1px solid #ddd;
  height: 100%;
  width: 100%;
`;

const ColOne = styled.section`
  height: 100%;
  width: 100%;

  border-right: 1px solid #ddd;

  /* padding-top: 4rem; */

  display: grid;
  place-items: center;

  h1 {
    font-size: 2rem;
  }
`;

const ColTwo = styled.section`
  height: 100%;
  width: 100%;
`;
