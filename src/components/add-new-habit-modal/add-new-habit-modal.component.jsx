import { useRef, useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { forwardRef } from "react";
import { HabitTypeSelection } from "../index";

const Backdrop = () => {
  return <BackdropContainer></BackdropContainer>;
};

const ModalContainer = forwardRef(({ toggleModalOff }, ref) => {
  const reference = useRef(null);
  const [habitType, setHabitType] = useState("");

  return (
    <Container ref={reference} onClick={() => toggleModalOff(false)}>
      {!habitType && <HabitTypeSelection setHabitType={setHabitType} />}
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
  height: 60vh;
  width: 50vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100000001;
  background-color: #fff;
  border-radius: 3px;

  padding: 2rem;
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

const HabitTypeSelecionContainer = styled.form`
  border: 1px solid red;
  height: 100%;
  width: 100%;
`;
