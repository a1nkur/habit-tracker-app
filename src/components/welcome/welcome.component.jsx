import { useState } from "react";
import styled from "styled-components";
import { BedTimeModal } from "../index";

const Welcome = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <h1>Hey there, {"Ankur"}.</h1>
      <span onClick={() => setShowModal(true)}>
        {"5"}hrs {"42"}mins.
      </span>
      {showModal && <BedTimeModal turnModalOff={setShowModal} />}
    </Container>
  );
};

export default Welcome;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  h1 {
    font-size: 2rem;
    color: var(--black-shade-2);
    margin-top: -0.5rem;
  }

  span {
    font-size: 1.1rem;
    font-weight: 300;
    color: var(--gray-shade-1);

    &:hover {
      color: var(--black-shade-1);
      cursor: pointer;
    }
  }
`;
