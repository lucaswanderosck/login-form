import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import Vector from "../../assets/Vector 2 (1).png";
import CampIn from "../../assets/camp.in.png";

import { FiMail, FiLock, FiUser, FiUserPlus } from "react-icons/fi";
import { Container, Content, Logo, Background } from "./styles";

export const SingUp = () => {
  return (
    <Container>
      <Background />
      <Content>
        <Logo>
          <img src={Vector} />
          <img src={CampIn} />
        </Logo>
        <form action="">
          <h1>
            <FiUserPlus size={28} />
            Crie sua conta
          </h1>
          <h2>Cadastre-se com as suas informações.</h2>
          <Input Icon={FiUser} title="Nome" placeholder="Digite seu nome" />
          <Input Icon={FiMail} title="E-mail" placeholder="Digite seu e-mail" />
          <Input Icon={FiLock} title="Senha" placeholder="Digite sua senha" />
          <Button name="cadastrar" />
          <p>
            <a href="#">Voltar para o login</a>
          </p>
        </form>
      </Content>
    </Container>
  );
};
