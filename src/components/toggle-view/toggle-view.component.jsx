import styled from "styled-components";

import { BiGridAlt } from "react-icons/bi";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const ToggleView = () => {
  return (
    <Container>
      <InnerContainer>
        <section>
          <RiBarChartHorizontalLine />
        </section>
        <section>
          <BiGridAlt />
        </section>
      </InnerContainer>
    </Container>
  );
};

export default ToggleView;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  height: 3rem;
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.section`
  border-radius: 30px;
  background-color: var(--gray-shade-2);

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;

  section {
    height: 2rem;
    width: 3rem;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
      background-color: #fff;
    }
  }
`;
