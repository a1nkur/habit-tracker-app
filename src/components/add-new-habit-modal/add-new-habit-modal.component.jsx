import { useRef, useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { forwardRef } from "react";
import { ColorDots } from "../index";
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
  // createdAt: String,
  // updatedAt: String,
};

const ModalContainer = forwardRef(({ toggleModalOff }, ref) => {
  const reference = useRef(null);

  const arrayOfPredefinedColors = [
    "#f17300",
    "#48B8D0",
    "#535353",
    "#5665eb",
    "#3c4478",
    "#f16363",
    "#31c879",
    "#307e54",
  ];

  const [habitName, setHabitName] = useState("");
  const [habitType, setHabitType] = useState("");
  const [habitfrequency, setHabitfrequency] = useState([]);
  const [habitfrequencyOptions, setHabitfrequencyOptions] = useState("");
  const [habitColor, setHabitColor] = useState("");
  const [question, setQuestion] = useState("");

  const handleHabitTypeSelection = e => {
    setHabitType(e.target.id);
  };

  const handleManualFrequencySelection = e => {
    const doesDayAlreadyExist = habitfrequency.includes(e.target.id);

    console.log(doesDayAlreadyExist, "bitch");

    if (doesDayAlreadyExist) {
      const filteredArray = habitfrequency.filter(day => day !== e.target.id);
      setHabitfrequency([...filteredArray]);
    } else {
      setHabitfrequency(prevState => [...prevState, e.target.id]);
    }
  };

  const handleManualFrequencySelectionCheck = day => {
    return habitfrequency.includes(day);
  };

  const handleManualFrequencySelectionOptionsCheck = e => {
    switch (e.target.id) {
      case "Monday-Alternate":
        setHabitfrequency(["Monday", "Wednesday", "Friday"]);
        setHabitfrequencyOptions(e.target.id);
        break;
      case "Tuesday-Alternate":
        setHabitfrequency(["Tuesday", "Thursday", "Saturday"]);
        setHabitfrequencyOptions(e.target.id);
        break;
      case "Everyday":
        setHabitfrequency(["Monday", "Wednesday", "Friday", "Tuesday", "Thursday", "Saturday", "Sunday"]);
        setHabitfrequencyOptions(e.target.id);
        break;
      case "Weekends":
        setHabitfrequency(["Saturday", "Sunday"]);
        setHabitfrequencyOptions(e.target.id);
        break;
      default:
        alert("Error");
    }
  };

  return (
    <Container ref={reference}>
      <FormContainer>
        <Heading>Add your new habit.</Heading>
        <FormControl>
          <h2>Name your habit.</h2>
          <input
            type="text"
            name="habitName"
            id="habitName"
            value={habitName}
            onChange={e => setHabitName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <h2>Habit Type.</h2>
          <ButtonGroup>
            <HabitButtonType
              id="Measurable"
              type="button"
              onClick={e => setHabitType(e.target.id)}
              hasSelected={habitType === "Measurable" ? true : false}
            >
              Measurable <AiOutlineInfoCircle />
            </HabitButtonType>
            <HabitButtonType
              id="Non-Measurable"
              type="button"
              onClick={e => setHabitType(e.target.id)}
              hasSelected={habitType === "Non-Measurable" ? true : false}
            >
              Non-Measurable <AiOutlineInfoCircle />
            </HabitButtonType>
          </ButtonGroup>
        </FormControl>
        <FormControl>
          <h2>Choose a color.</h2>
          <ColorContainer>
            {arrayOfPredefinedColors.map((hexCode, index) => (
              <ColorDots hexCode={hexCode} index={index} setHabitColor={setHabitColor} habitColor={habitColor} />
            ))}
          </ColorContainer>
        </FormControl>

        <FormControl>
          <h2>Frequency.</h2>
          <ButtonGroup>
            <DayFrequencyButtonType
              bgColor={habitColor}
              id="Monday"
              type="button"
              onClick={handleManualFrequencySelection}
              hasSelected={handleManualFrequencySelectionCheck("Monday")}
            >
              M
            </DayFrequencyButtonType>
            <DayFrequencyButtonType
              bgColor={habitColor}
              id="Tuesday"
              type="button"
              onClick={handleManualFrequencySelection}
              hasSelected={handleManualFrequencySelectionCheck("Tuesday")}
            >
              T
            </DayFrequencyButtonType>
            <DayFrequencyButtonType
              bgColor={habitColor}
              id="Wednesday"
              type="button"
              onClick={handleManualFrequencySelection}
              hasSelected={handleManualFrequencySelectionCheck("Wednesday")}
            >
              W
            </DayFrequencyButtonType>
            <DayFrequencyButtonType
              bgColor={habitColor}
              id="Thursday"
              type="button"
              onClick={handleManualFrequencySelection}
              hasSelected={handleManualFrequencySelectionCheck("Thursday")}
            >
              T
            </DayFrequencyButtonType>
            <DayFrequencyButtonType
              bgColor={habitColor}
              id="Friday"
              type="button"
              onClick={handleManualFrequencySelection}
              hasSelected={handleManualFrequencySelectionCheck("Friday")}
            >
              F
            </DayFrequencyButtonType>
            <DayFrequencyButtonType
              bgColor={habitColor}
              id="Saturday"
              type="button"
              onClick={handleManualFrequencySelection}
              hasSelected={handleManualFrequencySelectionCheck("Saturday")}
            >
              S
            </DayFrequencyButtonType>
            <DayFrequencyButtonType
              bgColor={habitColor}
              id="Sunday"
              type="button"
              onClick={handleManualFrequencySelection}
              hasSelected={handleManualFrequencySelectionCheck("Sunday")}
            >
              S
            </DayFrequencyButtonType>
          </ButtonGroup>
          <OtherButtonGroup>
            <DayFrequencyOptionsButtonType
              bgColor={habitColor}
              id="Monday-Alternate"
              type="button"
              onClick={handleManualFrequencySelectionOptionsCheck}
              hasSelected={habitfrequencyOptions === "Monday-Alternate" ? true : false}
            >
              Monday Alternate
            </DayFrequencyOptionsButtonType>
            <DayFrequencyOptionsButtonType
              bgColor={habitColor}
              id="Tuesday-Alternate"
              type="button"
              onClick={handleManualFrequencySelectionOptionsCheck}
              hasSelected={habitfrequencyOptions === "Tuesday-Alternate" ? true : false}
            >
              Tuesday Alternate
            </DayFrequencyOptionsButtonType>
            <DayFrequencyOptionsButtonType
              bgColor={habitColor}
              id="Everyday"
              type="button"
              onClick={handleManualFrequencySelectionOptionsCheck}
              hasSelected={habitfrequencyOptions === "Everyday" ? true : false}
            >
              Everyday
            </DayFrequencyOptionsButtonType>
            <DayFrequencyOptionsButtonType
              bgColor={habitColor}
              id="Weekends"
              type="button"
              onClick={handleManualFrequencySelectionOptionsCheck}
              hasSelected={habitfrequencyOptions === "Weekends" ? true : false}
            >
              Weekends
            </DayFrequencyOptionsButtonType>
          </OtherButtonGroup>
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

// const HabitName = styled.input`
//   color: var(--black-shade-2);
//   border: 1px solid red;
// `;

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

const OtherButtonGroup = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  align-items: center;
  padding-top: 0.5rem;
`;

const HabitButtonType = styled.button`
  height: 3rem;
  width: 9rem;
  border-radius: 3px;
  border: 1px solid ${props => (props.hasSelected ? props.bgColor : "#ccc")};
  background-color: ${props => (props.hasSelected ? props.bgColor : "transparent")};
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

const DayFrequencyButtonType = styled(HabitButtonType)``;

const DayFrequencyOptionsButtonType = styled(HabitButtonType)`
  flex: 1;
  flex-basis: 15rem;
`;

const ColorContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  height: 2.5rem;
`;
