import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";
import ReactDOM from "react-dom";
import { FaCloudMoon } from "react-icons/fa";

const Backdrop = () => {
  return <BackdropContainer></BackdropContainer>;
};

const ModalContainer = ({ turnModalOff, timeFormat, setTimeFormat, bedtime, setBedTime }) => {
  const handleChange = e => {
    setBedTime(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <Container>
      <Row1>
        <FaCloudMoon />
        <section>
          <span>Set pipeline end time</span>
          <small>a rough estimate is enough.</small>
        </section>
      </Row1>
      <Row2>
        <div className="left">
          <Group>
            <label htmlFor="hours">Hr</label>
            <input
              type="number"
              name="hours"
              id="hours"
              min={1}
              max={12}
              step={1}
              value={bedtime.hours}
              onChange={handleChange}
            />
          </Group>
          <Group>
            <label htmlFor="minutes">Min</label>
            <input
              type="number"
              name="minutes"
              id="minutes"
              min={1}
              max={60}
              step={1}
              value={bedtime.minutes}
              onChange={handleChange}
            />
          </Group>
        </div>
        <Group>
          <Outer>
            <AM type="button" onClick={() => setTimeFormat("AM")} isSelected={timeFormat === "AM" ? true : false}>
              AM
            </AM>
            <PM type="button" onClick={() => setTimeFormat("PM")} isSelected={timeFormat === "PM" ? true : false}>
              PM
            </PM>
          </Outer>
        </Group>
      </Row2>
      <Row3>
        <button type="button" onClick={() => turnModalOff(false)}>
          cancel
        </button>
        <button type="submit">edit time</button>
      </Row3>
    </Container>
  );
};

const BedTimeModal = ({ turnModalOff, timeFormat, setTimeFormat, bedtime, setBedTime }) => {
  const reference = useRef(null);

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(
        <ModalContainer
          turnModalOff={turnModalOff}
          timeFormat={timeFormat}
          setTimeFormat={setTimeFormat}
          ref={reference}
          bedtime={bedtime}
          setBedTime={setBedTime}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default BedTimeModal;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.form`
  height: 50vh;
  width: 40vw;
  background-color: #fff;
  z-index: 100000001;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;

  padding: 2rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
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

const Row1 = styled.section`
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.5rem;
    color: var(--black-shade-2);
  }

  small {
    color: var(--gray-shade-1);
  }

  svg {
    font-size: 5rem;
    color: var(--blue-shade-1);
  }

  section {
    display: flex;
    flex-direction: column;
    text-align: right;
  }
`;

const Row2 = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const Row3 = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    border-radius: 3px;
    height: 4rem;
    flex: 1;
    flex-basis: 50%;
    border: 1px solid #ddd;
    background-color: var(--blue-shade-1);
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const Group = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    height: 4rem;
    width: 4rem;

    padding-left: 0.5rem;
    font-size: 1.5rem;

    border: 1px solid #ddd;

    &:focus {
      outline: none;
    }
  }
`;

const Outer = styled.section`
  width: 10rem;
  height: 4rem;
  border-radius: 30px;

  display: flex;
  align-items: center;

  border: 1px solid var(--gray-shade-2);
  border: 1px solid #ddd;
`;

const AM = styled.button`
  height: 100%;
  width: 5rem;
  border: ${props => (props.isSelected ? "var(--gray-shade-2)" : "none")};
  background-color: ${props => (props.isSelected ? "var(--gray-shade-2)" : "#fff")};

  border-radius: 30px;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
`;

const PM = styled(AM)``;
