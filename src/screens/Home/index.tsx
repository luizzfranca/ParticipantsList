import { useState } from "react";
import { Input } from "../../Components/Input";
import { Participants } from "../../Components/Input/Participants";
import {
  Container,
  Content,
  Text,
  TextDate,
  ButtonAdd,
  TextButtonAdd,
  TextParticipants,
  TextEmpty,
} from "./styles";
import { Alert, FlatList } from "react-native";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantsName, setParticipantsName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantsName)) {
      return Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse nome."
      );
    }

    setParticipants((prevState) => [...prevState, participantsName]);
    setParticipantsName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <Container>
      <Text>Serrinha ⛰️</Text>
      <TextDate>Quarta-feira, 23 de outubro de 2023</TextDate>

      <Content>
        <Input onChangeText={setParticipantsName} value={participantsName} />
        <ButtonAdd onPress={handleParticipantAdd}>
          <TextButtonAdd>+</TextButtonAdd>
        </ButtonAdd>
      </Content>

      <TextParticipants>Participantes</TextParticipants>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participants
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <TextEmpty>
            Nenhum participante ainda? Adicione participantes a sua lista de
            presença.
          </TextEmpty>
        )}
      />
    </Container>
  );
}
