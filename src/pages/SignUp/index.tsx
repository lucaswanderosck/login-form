import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import themeDark from "../../styles/themes/dark";

import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { FiMail, FiLock, FiUser, FiUserPlus } from "react-icons/fi";
import { GiCampingTent } from "react-icons/gi";
import { Container, Content, Header, Background } from "./styles";

import { Link } from "react-router-dom";

import Switch from "react-switch";

type Props = {
  toggleTheme: () => void;
};

export const SignUp = ({ toggleTheme }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <Background />
      <Content>
        <Header>
          <h1>
            <GiCampingTent size={26} />
            camp.ia
          </h1>
          <Switch
            onChange={toggleTheme}
            checked={theme === themeDark}
            checkedIcon={false}
            uncheckedIcon={false}
            handleDiameter={20}
            onColor="#E4DBCD"
            onHandleColor="#24221f"
            offColor="#191816"
          />
        </Header>
        <form action="">
          <h2>
            <FiUserPlus size={28} />
            Crie sua conta
          </h2>
          <h3>Cadastre-se com as suas informações.</h3>
          <Input Icon={FiUser} title="Nome" placeholder="Digite seu nome" />
          <Input Icon={FiMail} title="E-mail" placeholder="Digite seu e-mail" />
          <Input Icon={FiLock} title="Senha" placeholder="Digite sua senha" />
          <Button name="cadastrar" />
          <p>
            <Link to="/">Voltar para o login</Link>
          </p>
        </form>
      </Content>
    </Container>
  );
};
