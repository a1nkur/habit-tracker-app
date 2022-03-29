import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "./components";
import GlobalStyle from "./global.styles";
import { HomePage } from "./pages";

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Layout>
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
