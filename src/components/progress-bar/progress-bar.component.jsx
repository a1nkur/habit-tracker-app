import styled from "styled-components";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import { ProgressMeter } from "../index";

const ProgressBar = () => {
  return (
    <Container>
      <ProgressMeter />
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
