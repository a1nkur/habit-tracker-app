import styled from "styled-components";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

const ProgressBar = () => {
  return (
    <Container>
      {/* <input type="range" name="" id="" /> */}
      <PogressOuterContainer>
        <PogressInnerContainer></PogressInnerContainer>
      </PogressOuterContainer>
      <ProgressStatus>
        <Left>
          <BsArrowUpShort />
          <span>up 23% from week before</span>
        </Left>
        <Right>
          <span>27% achieved</span>
        </Right>
      </ProgressStatus>
    </Container>
  );
};

export default ProgressBar;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  display: flex;
  flex-direction: column;

  input {
    &:focus {
      outline: none;
    }

    &:-moz-range-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
    }
  }
`;

const ProgressStatus = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    color: var(--black-shade-secondary);
  }

  svg {
    color: var(--green-shade-primary);
    font-size: 2rem;
  }
`;

const Right = styled.section`
  span {
    color: var(--black-shade-secondary);
  }
`;

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
  background-color: var(--blue-shade-primary);
  width: 27%;
  height: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
