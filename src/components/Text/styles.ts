import styled from "styled-components/native";

interface IBaseText {
  color: string;
  size: number;
}

export const Base = styled.Text<IBaseText>`
  font-size: ${({ size }) => size}px;
  font-family: "Ubuntu_700Bold";
  color: ${({ color }) => color};
  text-align: center;
`;
