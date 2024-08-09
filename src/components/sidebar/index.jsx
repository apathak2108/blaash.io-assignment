import React from "react";
import {
  StyledSidebarContainer,
  StyledSidebarToggleButton,
  StyledToggleBtnCircle,
} from "./sidebar.styled";
import LeftArrow from "../../assets/sidebar/arrow.svg";

const Sidebar = () => {
  return (
    <StyledSidebarContainer>
      <StyledSidebarToggleButton>
        <StyledToggleBtnCircle>
          <img src={LeftArrow} />
        </StyledToggleBtnCircle>
      </StyledSidebarToggleButton>
    </StyledSidebarContainer>
  );
};

export default Sidebar;
