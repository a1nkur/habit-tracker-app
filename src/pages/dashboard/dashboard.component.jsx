import styled from "styled-components";
import { DisplayPanel, LeftPanel, Layout, Welcome, ToggleButtonGroup, AddNewHabit } from "../../components";

const Dashboard = () => {
  return (
    <Container>
      <InnerContainer>
        <ColOne>
          <RowOne>
            <Welcome />
          </RowOne>
          <RowTwo>
            <ToggleButtonGroup />
            <AddNewHabit />
          </RowTwo>
          <RowThree></RowThree>
          {/* <RowFour></RowFour> */}
        </ColOne>
        <ColTwo>
          <div className="x"></div>
          <div className="x"></div>
        </ColTwo>
      </InnerContainer>
    </Container>
  );
};

export default Dashboard;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  display: flex;
  border-radius: 10px;

  background-color: #fff;

  border: var(--border-1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  height: 85vh;
  width: 85vw;

  padding: 2rem;
`;

const InnerContainer = styled.section`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 5fr 2fr;
`;

const ColOne = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 8rem auto;
`;

const RowOne = styled.section``;

const RowTwo = styled.section`
  display: flex;
  /* border: 1px solid blue; */

  padding-top: 0.2rem;
`;
const RowThree = styled.section`
  height: 100%;
  border: 1px solid pink;
`;
// const RowFour = styled.section``;

const ColTwo = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8rem auto;

  /* .x {
    border: 1px solid red;
  } */
`;
