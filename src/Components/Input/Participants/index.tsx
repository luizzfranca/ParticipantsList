import {
  Container,
  ParticipantName,
  ButtonRemove,
  TextButtonRemove,
} from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export function Participants({ name, onRemove }: Props) {
  return (
    <Container>
      <ParticipantName>{name}</ParticipantName>
      <ButtonRemove onPress={onRemove}>
        <TextButtonRemove>-</TextButtonRemove>
      </ButtonRemove>
    </Container>
  );
}
