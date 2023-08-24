import { Container, Props } from "./styles";

export function Input({ onChangeText, value }: Props) {
  return (
    <Container
      value={value}
      onChangeText={onChangeText}
      placeholder="Nome do participante"
      placeholderTextColor="#6B6B6B"
    />
  );
}
