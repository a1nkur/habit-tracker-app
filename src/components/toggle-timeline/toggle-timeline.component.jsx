import styled from "styled-components";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import TimeView from "../time-view/time-view.component";

const ToggleTimeline = () => {
  return (
    <Container>
      <ButtonGroup>
        <section>
          <FiChevronLeft />
        </section>
        <section>
          <FiChevronRight />
        </section>
      </ButtonGroup>
      <TimeView />
    </Container>
  );
};

export default ToggleTimeline;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  display: grid;
  grid-template-columns: 1.25fr 3.75fr;
`;

const ButtonGroup = styled.section`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  flex: 1;

  section {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
