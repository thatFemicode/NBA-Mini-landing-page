import React from "react";
import { MainTeamStyled } from "./MainTeamStyled";
import { PlayLink } from "../Components";
const MainTeam = ({ team }) => {
  const { image } = team;
  return (
    <MainTeamStyled>
      <PlayLink>
        <img src={image} alt="" />
      </PlayLink>
    </MainTeamStyled>
  );
};

export default MainTeam;
