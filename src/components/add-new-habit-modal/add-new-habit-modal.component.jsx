import { useRef, useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { forwardRef } from "react";
import { HabitTypeSelection } from "../index";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Backdrop = () => {
  return <BackdropContainer></BackdropContainer>;
};

const addNewHabit = {
  habitName: String,
  habitType: String,
  habitfrequency: Array,
  habitColor: String,
  question: String,
  createdAt: String,
  updatedAt: String,
};

const ModalContainer = forwardRef(({ toggleModalOff }, ref) => {
  const reference = useRef(null);
  const [habitType, setHabitType] = useState("");
  // onClick={() => toggleModalOff(false)}

  const handleHabitTypeSelection = e => {
    setHabitType(e.target.id);
  };

  return (
    <Container ref={reference}>
      <FormContainer>
        <Heading>Add your new habit.</Heading>
        <FormControl>
          <h2>Name your habit.</h2>
          <input type="text" name="habitName" id="habitName" />
        </FormControl>
        <FormControl>
          <h2>Habit Type.</h2>
          <ButtonGroup>
            <HabitButtonType
              id="Measurable"
              type="button"
              onClick={handleHabitTypeSelection}
              hasSelected={habitType === "Measurable" ? true : false}
            >
              Measurable <AiOutlineInfoCircle />
            </HabitButtonType>
            <HabitButtonType
              id="Non-Measurable"
              type="button"
              onClick={handleHabitTypeSelection}
              hasSelected={habitType === "Non-Measurable" ? true : false}
            >
              Non-Measurable <AiOutlineInfoCircle />
            </HabitButtonType>
          </ButtonGroup>
        </FormControl>
      </FormContainer>
    </Container>
  );
});
const AddNewHabitModal = ({ toggleModalOff }) => {
  const reference = useRef(null);

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(
        <ModalContainer toggleModalOff={toggleModalOff} ref={reference} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default AddNewHabitModal;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  height: 100vh;
  width: 40vw;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100000001;
  background-color: #fff;
  padding: 1rem;
`;

const BackdropContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100000000;
  background: rgba(0, 0, 0, 0.75);
  overflow: none;
`;

const FormContainer = styled.form`
  height: 100%;
  width: 100%;
`;

const Heading = styled.h1`
  color: var(--black-shade-2);
  padding-bottom: 1.5rem;
`;

const HabitName = styled.input`
  color: var(--black-shade-2);
  border: 1px solid red;
`;

const FormControl = styled.section`
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;

  min-height: 4rem;

  label {
    padding-bottom: 0.5rem;
    color: var(--gray-shade-1);
  }

  input {
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 2rem;

    &:focus {
      outline: none;
    }
  }

  /* border: 1px solid red; */

  h2 {
    color: var(--gray-shade-1);
    font-size: 1.1rem;
    padding-bottom: 0.5rem;
  }
`;

const ButtonGroup = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HabitButtonType = styled.button`
  height: 3rem;
  width: 9rem;
  border-radius: 3px;
  border: 1px solid ${props => (props.hasSelected ? "var(--blue-shade-1)" : "#ccc")};
  background-color: ${props => (props.hasSelected ? "var(--blue-shade-1)" : "transparent")};
  color: ${props => (props.hasSelected ? "#fff" : "#000")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  svg {
    font-size: 0.8rem;
  }
`;
