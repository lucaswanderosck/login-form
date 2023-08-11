import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { FiMail, FiLock, FiUser, FiUserPlus } from "react-icons/fi";
import { Container, Content, Header, Background } from "./styles";

import { Link } from "react-router-dom";

type Props = {
  toggleTheme: () => void;
};

export const SignUp = ({ toggleTheme }: Props) => {
  return (
    <Container>
      <Background />
      <Content>
        <Header>
          <h1>camp.ia</h1>
          <button onClick={toggleTheme}>trocar tema</button>
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
