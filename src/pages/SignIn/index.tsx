import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import themeDark from "../../styles/themes/dark";

import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { FiMail, FiLock, FiLogIn } from "react-icons/fi";
import { GiCampingTent } from "react-icons/gi";
import { Container, Content, Header, Background } from "./styles";

import { Link } from "react-router-dom";

import Switch from "react-switch";

type Props = {
  toggleTheme: () => void;
};

export const SignIn = ({ toggleTheme }: Props) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
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
            <FiLogIn size={28} />
            Faça seu login
          </h2>
          <h3>Entre com suas informações de cadastro.</h3>
          <Input Icon={FiMail} title="E-mail" placeholder="Digite seu e-mail" />
          <Input Icon={FiLock} title="Senha" placeholder="Digite sua senha" />
          <div className="remember">
            <span>
              <input type="checkbox" id="lb" />
              <label htmlFor="lb">Lembre-me</label>
            </span>
            <span>
              <a href="#">Esqueci minha senha</a>
            </span>
          </div>
          <Button name="entrar" />
          <p>
            Não tem conta? <Link to="/register">Registre-se</Link>
          </p>
        </form>
      </Content>
      <Background />
    </Container>
  );
};
