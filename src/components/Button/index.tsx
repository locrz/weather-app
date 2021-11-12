import React, { ReactChild } from "react";
import { TouchableOpacityProps } from "react-native";
import { Base } from "./styles";

interface IButtonProps extends TouchableOpacityProps {}

export function Button({ children, ...rest }: IButtonProps) {
  return <Base {...rest}>{children}</Base>;
}
