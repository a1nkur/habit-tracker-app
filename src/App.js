import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./global.styles";
import { Dashboard } from "./pages";

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Switch>
        <Route exact path="/:userName/dashboard" component={Dashboard} />
      </Switch>
    </AppContainer>
  );
};

export default App;

/* ---------------------------- Styled Components --------------------------- */

const AppContainer = styled.section`
  height: 100vh;
  width: 100vw;

  display: grid;
  place-items: center;

  background-color: var(--gray-shade-3);
`;
