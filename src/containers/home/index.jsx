import React from "react";
import {
  StyledHomeContainer,
  StyledHomeHeader,
  StyledHomeMainContainer,
  StyledMainCardsContainer,
  StyledMainSliderContainer,
} from "./home.styled";
import Button from "../../components/button";
import LinkIcon from "../../assets/home/link.svg";
import PlaylistCard from "../../components/playlistCard";

const HomeContainer = () => {
  return (
    <StyledHomeContainer>
      <StyledHomeHeader>
        <span>Product Playlists</span>
        <Button icon={LinkIcon} label="Generate Code" flag={true} />
      </StyledHomeHeader>
      <StyledHomeMainContainer>
        <StyledMainCardsContainer>
            <PlaylistCard />
        </StyledMainCardsContainer>
        <StyledMainSliderContainer></StyledMainSliderContainer>
      </StyledHomeMainContainer>
    </StyledHomeContainer>
  );
};

export default HomeContainer;
