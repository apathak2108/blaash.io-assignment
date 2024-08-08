import React from "react";
import { StyledButton, StyledButtonIcon } from "./button.styled";

const Button = ({ label, icon }) => {
  return (
    <StyledButton>
      <StyledButtonIcon src={icon} />
      <span>{label}</span>
    </StyledButton>
  );
};

export default Button;
