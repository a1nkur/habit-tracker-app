import styled from "styled-components";
import { BiCog } from "react-icons/bi";

const Settings = () => {
  return (
    <Container>
      <section>
        <BiCog />
      </section>
    </Container>
  );
};

export default Settings;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  display: flex;
  padding-top: 0.2rem;
  justify-content: center;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }

  section {
    width: 80%;
    display: flex;
    justify-content: flex-end;
  }
`;
