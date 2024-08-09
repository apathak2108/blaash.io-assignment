import styled from "styled-components";

export const StyledSidebarContainer = styled.aside`
  background-color: var(--secondary-color);
  height: 100%;
  width: 15%;
  border-radius: 12px;
  position: relative;
`;

export const StyledSidebarToggleButton = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-color);
  position: absolute;
  right: -14px;
  top: 18px;
  cursor: pointer;
`;

export const StyledToggleBtnCircle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #737382;
  display: flex;
  align-items: center;
  justify-content: center;
`;
