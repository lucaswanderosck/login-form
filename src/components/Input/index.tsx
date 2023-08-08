import { Container } from "./styles";

type Props = {
  Icon: string;
  title: string;
  placeholder: string;
};

export const Input = ({ title, Icon, placeholder }: Props) => {
  return (
    <Container>
      <label>{title}</label>
      <div>
        {Icon && <Icon />}
        <input type="text" placeholder={placeholder} />
      </div>
    </Container>
  );
};
