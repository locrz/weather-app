import React, { ReactChild } from "react";
import { Base } from "./styles";

interface ITextProps {
  children: string | ReactChild[];
  color?: string;
  size?: number;
}

export function Text({ children, color = "#fff", size = 24 }: ITextProps) {
  return (
    <Base color={color} size={size}>
      {children}
    </Base>
  );
}
