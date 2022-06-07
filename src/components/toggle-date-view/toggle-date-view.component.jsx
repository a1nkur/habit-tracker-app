import styled from "styled-components";
import { DateSelect, ProgressMeter, GoalPercentageStatus } from "../index";

const ToggleDateView = () => {
  return (
    <Container>
      <DateSelect />
      <ProgressMeter />
      <GoalPercentageStatus />
    </Container>
  );
};

export default ToggleDateView;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
