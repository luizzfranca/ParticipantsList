import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #131016;
  padding: 24px;
`;

export const Text = styled.Text`
  color: #fdfcfe;
  font-size: 24px;
  font-weight: bold;
  margin-top: 48px;
`;

export const TextDate = styled.Text`
  color: #6b6b6b;
  font-size: 16px;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 36px;
  margin-bottom: 42px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  background: #31cf67;
  width: 56px;
  height: 56px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const TextButtonAdd = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const TextParticipants = styled.Text`
  color: #fdfcfe;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const TextEmpty = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
`;
