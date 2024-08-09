import React from "react";
import { StyledButton, StyledButtonIcon } from "./button.styled";

const Button = ({ label, icon, flag }) => {
  return (
    <StyledButton flag={flag}>
      <StyledButtonIcon src={icon} />
      <span>{label}</span>
    </StyledButton>
  );
};

export default Button;
