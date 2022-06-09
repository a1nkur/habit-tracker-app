import styled from "styled-components";
import {
  Welcome,
  ToggleButtonGroup,
  AddNewHabit,
  ToggleTimeline,
  ToggleView,
  ProgressBar,
  DataView,
  ToggleDateView,
  HabitStatus,
  UserSettings,
} from "../../components";

const Dashboard = () => {
  return (
    <Container>
      <InnerContainer>
        <ColOne>
          <RowOne>
            <Welcome />
            <UserSettings />
          </RowOne>
          <RowTwo>
            <ToggleButtonGroup />
            <AddNewHabit />
          </RowTwo>
          <RowThree>
            <ToggleTimeline />
            <ToggleView />
            <ProgressBar />
          </RowThree>
          <RowFour>
            <DataView />
          </RowFour>
        </ColOne>
        <ColTwo>
          <ToggleDateView />
          <HabitStatus />
        </ColTwo>
      </InnerContainer>
    </Container>
  );
};

export default Dashboard;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  border-radius: 10px;
  background-color: #fff;
  border: var(--border-1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  height: 90vh;
  width: 95vw;
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
  grid-template-rows: 5rem 4rem 6rem auto;
`;

const RowOne = styled.section`
  display: grid;
  grid-template-columns: 5fr 1fr;
`;

const RowTwo = styled.section`
  display: grid;
  grid-template-columns: 5fr 1fr;
  padding-top: 0.5rem;
`;

const RowThree = styled.section`
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-template-rows: 3rem 3rem;
  grid-row-gap: 0.8rem;
`;

const RowFour = styled.section`
  /* border: 1px solid red; */
  padding-top: 1rem;
  display: grid;
  grid-template-columns: 5fr 1fr;
`;

const ColTwo = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5rem calc(90vh - 9.5rem);
  grid-row-gap: 0.5rem;
`;
