import styled from "styled-components";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

const ProgressBar = () => {
  return (
    <Container>
      <input type="range" name="" id="" />
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