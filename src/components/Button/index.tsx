import { Container } from "./styles";

type Props = {
  name: string;
};

export const Button = ({ name }: Props) => {
  return <Container type="button">{name}</Container>;
};
