import styled from "styled-components";

import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { AddNewHabitModal } from "../index";

const AddNewHabit = () => {
  const [isAddNewHabitModalOpen, setIsAddNewHabitModalOpen] = useState(false);

  const handleClick = () => setIsAddNewHabitModalOpen(true);



  return (
    <Container>
      <Button type="button" onClick={handleClick}>
        <FiPlus />
        add habit
      </Button>
      {isAddNewHabitModalOpen && <AddNewHabitModal toggleModalOff={setIsAddNewHabitModalOpen} />}
    </Container>
  );
};

export default AddNewHabit;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  flex: 1;
  height: 3rem;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  height: 100%;
  font-weight: 700;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  border-radius: 30px;
  color: var(--blue-shade-primary);
  border: none;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #ccc;
  width: 80%;

  svg {
    font-size: 1rem;
  }

  &:first-child {
    background-color: #fff;
  }
`;
