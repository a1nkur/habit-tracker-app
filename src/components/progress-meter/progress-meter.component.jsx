import styled from "styled-components";

const ProgressMeter = () => {
  return (
    <PogressOuterContainer>
      <PogressInnerContainer></PogressInnerContainer>
    </PogressOuterContainer>
  );
};

export default ProgressMeter;

/* ---------------------------- Styled Components --------------------------- */

const PogressOuterContainer = styled.section`
  height: 0.7rem;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid #ddd;
`;

const PogressInnerContainer = styled.section`
  background-color: var(--blue-shade-1);
  width: 27%;
  height: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
