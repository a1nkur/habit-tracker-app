import styled from "styled-components";

const GoalPercentageStatus = () => {
  return (
    <Container>
      <small>33% of daily goals achieved.</small>
    </Container>
  );
};

export default GoalPercentageStatus;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  text-align: end;
  color: var(--gray-shade-1);
`;
