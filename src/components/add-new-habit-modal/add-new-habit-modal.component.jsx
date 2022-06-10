import { useRef, useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { forwardRef } from "react";
import { ColorDots, ToolTipBox } from "../index";
import { AiOutlineInfoCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { backdropAnimation, ModalSlideAnimation } from "../../animation";
import { motion } from "framer-motion";

const Backdrop = () => {
  return (
    <BackdropContainer variants={backdropAnimation} initial="hidden" animate="visible" exit="exit"></BackdropContainer>
  );
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
  const [habitColor, setHabitColor] = useState("#f17300");
  const [question, setQuestion] = useState("");

  const [showToolTp, setShowToolTip] = useState(true);

  const handleHabitTypeSelection = e => {
    setHabitType(e.target.id);
  };

  const handleManualFrequencySelection = e => {
    const doesDayAlreadyExist = habitfrequency.includes(e.target.id);

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

  const handleFormSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container ref={reference} variants={ModalSlideAnimation} initial="hidden" animate="visible" exit="exit">
      <FormContainer onSubmit={handleFormSubmit}>
        <Heading>
          <h1> Add your new pipeline.</h1>
          <AiOutlineCloseCircle onClick={() => toggleModalOff(false)} />
        </Heading>
        <FormControl>
          <h2>Name your pipeline.</h2>
          <input
            type="text"
            name="habitName"
            id="habitName"
            value={habitName}
            onChange={e => setHabitName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <h2>Custom question.</h2>
          <input
            type="text"
            name="habitName"
            id="habitName"
            value={question}
            onChange={e => setQuestion(e.target.value)}
          />
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
          <h2>Habit Type.</h2>
          <ButtonGroup>
            <HabitButtonType
              bgColor={habitColor}
              id="Measurable"
              type="button"
              onClick={e => setHabitType(e.target.id)}
              hasSelected={habitType === "Measurable" ? true : false}
            >
              Measurable
              <AiOutlineInfoCircle onMouseEnter={() => setShowToolTip(true)} onMouseOut={() => setShowToolTip(false)} />
              {/* {showToolTp && <ToolTipBox id="Measurable" />} */}
            </HabitButtonType>
            <HabitButtonType
              bgColor={habitColor}
              id="Non-Measurable"
              type="button"
              onClick={e => setHabitType(e.target.id)}
              hasSelected={habitType === "Non-Measurable" ? true : false}
            >
              Non-Measurable
              <AiOutlineInfoCircle onMouseEnter={() => setShowToolTip(true)} onMouseOut={() => setShowToolTip(false)} />
              {/* {showToolTp && <ToolTipBox id="Non-Measurable" />} */}
            </HabitButtonType>
          </ButtonGroup>
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
        <FormControlEnd>
          <ActionButtonType type="button" onClick={() => toggleModalOff(false)}>
            Close
          </ActionButtonType>
          <ActionButtonType type="submit">Add</ActionButtonType>
        </FormControlEnd>
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

const Container = styled(motion.section)`
  height: 100vh;
  width: 40vw;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100000001;
  background-color: #fff;
  padding: 1rem;
`;

const BackdropContainer = styled(motion.section)`
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

const Heading = styled.section`
  h1 {
    color: var(--black-shade-2);
    font-size: 1.7rem;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;

  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
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
  position: relative;
  svg {
    font-size: 1rem;
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

const FormControlEnd = styled(FormControl)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
  min-height: 4rem;
`;

const ActionButtonType = styled(HabitButtonType)`
  flex: 1;
  flex-basis: 15rem;
`;
