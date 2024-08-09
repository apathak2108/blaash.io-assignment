import styled from "styled-components";

export const StyledHomeContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
`;

export const StyledHomeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  padding: 16px 0 14px 0;
`;

export const StyledHomeMainContainer = styled.main`
  display: flex;
  gap: 12px;
  flex: 1;
`;

export const StyledMainCardsContainer = styled.div`
  background-color: var(--secondary-color);
  padding: 16px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  border-radius: 16px;
  `;

export const StyledMainSliderContainer = styled.aside`
  background-color: var(--secondary-color);
  padding: 16px;
  border-radius: 16px;
  width: 2%;
`;
