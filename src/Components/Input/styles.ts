import styled from "styled-components/native";

export type Props = {
  onChangeText: (text: string) => void;
  value: string;
};

export const Container = styled.TextInput<Props>`
  flex: 1;
  height: 56px;
  background-color: #1f1e25;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  padding-left: 9px;
  margin-right: 12px;
  padding: 16px;
`;
