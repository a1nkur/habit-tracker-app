import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";

const HabitCard = ({ eachHabit }) => {
  return (
    <Container>
      <RowOne>
        <span>habit name</span>
        <BiDotsVerticalRounded />
      </RowOne>
      <RowTwo>
        <button>mark complete</button>
      </RowTwo>
    </Container>
  );
};

export default HabitCard;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  min-height: 4.5rem;
  border-left: 7px solid var(--blue-shade-1);
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  padding: 0 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RowOne = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;

const RowTwo = styled.section`
  button {
    width: 100%;
    height: 2.5rem;
    border-radius: 3px;
    background-color: transparent;
    border: 1px solid #ddd;
    cursor: pointer;
    text-transform: capitalize;
    color: var(--blue-shade-1);
    font-weight: 600;
  }
`;
