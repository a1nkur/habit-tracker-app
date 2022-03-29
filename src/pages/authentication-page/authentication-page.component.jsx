import { useState } from "react";
import styled from "styled-components";
import { SignIn, SignUp } from "../../components";

const AuthenticationPage = () => {
  const [loadSignIn, setLoadSignin] = useState(true);
  return (
    <Container>
      {loadSignIn && <SignIn />}
      {!loadSignIn && <SignUp />}
    </Container>
  );
};

export default AuthenticationPage;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.section`
  display: grid;
  place-items: center;
`;
