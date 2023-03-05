import React from "react";
import Card from "../../components/Card"
import { Text } from "../../components/global-styles-module";
import { Container, ContainerField, Header } from "./styles-module";

export function Home() {
  return (
    <Header>
      <Container>
        <ContainerField mTop="150px" textAlign="center">
          <Text size="24px" weight="400" color="#fff">Finance Control</Text>
        </ContainerField>
        <ContainerField mTop="50px" hSize="180px" flexDir="row" justifyContent="space-around">
          <Card title="Despesa Atrasada" value="0"/>
          <Card title="Despesa Atual" value="0" />
          <Card title="Próxima Despesa" value="0" />
        </ContainerField>
      </Container>
    </Header>
  );
}

export default Home;
