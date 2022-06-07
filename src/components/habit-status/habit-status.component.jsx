import styled from "styled-components";
import { HabitCard } from "../index";

const HabitStatus = () => {
  return (
    <Container>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(eachHabit => (
        <HabitCard eachHabit={eachHabit} />
      ))}
    </Container>
  );
};

export default HabitStatus;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  border: 1px solid #ddd;
  border-radius: 3px;

  overflow-y: auto;
  height: 100%;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* The emerging W3C standard
   that is currently Firefox-only */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.7) transparent;
  }

  /* Works on Chrome/Edge/Safari */
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-shade-primary);
    border-radius: 20px;
    border: transparent;
  }
`;
