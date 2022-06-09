import styled from "styled-components";
import { BiCog } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";

const UserSettings = () => {
  const [initiateRotate, setInitiateRotate] = useState(false);

  const clickHanlder = () => setInitiateRotate(true);

  return (
    <Container>
      <CogContainer
      // shouldRotate={initiateRotate}
      //  onClick={clickHanlder}
      >
        <BiCog />
      </CogContainer>
    </Container>
  );
};

export default UserSettings;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const CogContainer = styled.section`
  transform: ${props => (props.shouldRotate ? "rotate(90deg)" : "rotate(0deg)")};
  /* transform: rotate(90deg); */

  width: 80%;
  display: flex;
  justify-content: flex-end;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;
