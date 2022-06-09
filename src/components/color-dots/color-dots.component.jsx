import styled from "styled-components";
import { MdOutlineDone } from "react-icons/md";

const ColorDots = ({ hexCode, index, setHabitColor, habitColor }) => {
  return (
    <InnerCircle key={index} hexCode={hexCode} onClick={() => setHabitColor(hexCode)}>
      {hexCode === habitColor && <MdOutlineDone />}
    </InnerCircle>
  );
};

export default ColorDots;

/* ---------------------------- Styled Components --------------------------- */

const InnerCircle = styled.section`
  height: 2rem;
  width: 2rem;
  background-color: ${props => props.hexCode};
  border-radius: 50%;
  cursor: pointer;

  display: grid;
  place-items: center;

  svg {
    color: #fff;
  }
`;
