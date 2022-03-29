import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
// import { Layout } from "./components";
import GlobalStyle from "./global.styles";
import { HomePage, AuthenticationPage } from "./pages";

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/auth" component={AuthenticationPage} />
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
`;
