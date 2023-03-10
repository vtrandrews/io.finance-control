import React, { useEffect, useState } from "react";
import { Button, CardBackground, Div, Text } from "../../components/global-styles-module";
import { Container, FormBox, Input } from "./styles-module";
import api from "../../services/api"

export function Login() {
  const [users, setUsers] = useState();

  useEffect(() => {
    api
      .get("/api/v1/users")
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <Container>
      <CardBackground size="480px">
        <FormBox>
          <Div width="80%">
            <Text size="38px" weight="700" mBottom="24px">
              Login
            </Text>
          </Div>
          <Div width="80%">
            <Text size="14px" weight="400">
              Usuário
            </Text>
            <Input placeholder="Digite seu usuário" type="text" margin="0px 0px 14px 0px" width="100%" />
          </Div>
          <Div width="80%" margin="0px 0px 14px 0px">
            <Text size="14px" weight="400">
              Senha
            </Text>
            <Input placeholder="Digite sua senha" type="password" margin="0px 0px 14px 0px"  width="100%" />
          </Div>
          <Button size="80%">
            Entrar
          </Button>
        </FormBox>
      </CardBackground>
    </Container>
  );
}

export default Login;
