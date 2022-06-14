import { useState } from "react";
import styled from "styled-components";
import { BedTimeModal } from "../index";

const Welcome = () => {
  const [showModal, setShowModal] = useState(false);
  const [timeFormat, setTimeFormat] = useState("PM");
  const [bedtime, setBedTime] = useState({ hours: "", minutes: "" });

  return (
    <Container>
      <h1>Hey there, {"Ankur"}.</h1>
      <span onClick={() => setShowModal(true)}>
        {bedtime.hours}hrs {bedtime.minutes}mins.
      </span>
      {showModal && (
        <BedTimeModal
          turnModalOff={setShowModal}
          timeFormat={timeFormat}
          setTimeFormat={setTimeFormat}
          bedtime={bedtime}
          setBedTime={setBedTime}
        />
      )}
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
