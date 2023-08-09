import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import Vector from "../../assets/Vector 2 (1).png";
import CampIn from "../../assets/camp.in.png";

import { FiMail, FiLock, FiLogIn } from "react-icons/fi";
import { Container, Content, Logo, Background } from "./styles";

import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={Vector} />
          <img src={CampIn} />
        </Logo>
        <form action="">
          <h1>
            <FiLogIn size={28} />
            Faça seu login
          </h1>
          <h2>Entre com suas informações de cadastro.</h2>
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
