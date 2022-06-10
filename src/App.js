import { Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./global.styles";
import { Dashboard } from "./pages";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <AppContainer>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/:userName/dashboard" component={Dashboard} />
        </Switch>
      </AnimatePresence>
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
