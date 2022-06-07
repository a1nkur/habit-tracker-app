import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const DateSelect = () => {
  return (
    <Container>
      <CurrentSelectedDate>
        <h2>Mon, Feb 18</h2>
      </CurrentSelectedDate>
      <ButtonGroup>
        <section>
          <FiChevronLeft />
        </section>
        <section>
          <FiChevronRight />
        </section>
      </ButtonGroup>
    </Container>
  );
};

export default DateSelect;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding-bottom: 0.4rem;
`;

const CurrentSelectedDate = styled.section``;

const ButtonGroup = styled.section`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  section {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
