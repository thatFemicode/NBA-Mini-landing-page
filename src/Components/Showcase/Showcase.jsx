import React, { forwardRef } from "react";
import { OuterLayout } from "../../Layout/Layout";
import { ShowcaseStyled } from "./ShowcaseStyled";
import Kg from "../img/KG.jpg";
import Kyrie from "../img/Ky.jpg";
import Klay from "../img/Klay.jpg";
import Allen from "./Allen.svg";
const Showcase = forwardRef(({ id, children }, ref) => {
  return (
    <ShowcaseStyled ref={ref} id={id}>
      <OuterLayout>
        <img className="kg" src={Kg} alt="Kevin garnett" />
        <img className="kyrie" src={Kyrie} alt="Kyrie" />
        <img className="klay" src={Klay} alt="lay" />
        <div className="show-case">
          <h1 className="lover">Love the game?</h1>
          <h1 className="baller">Be a baller</h1>
          <img className="allen" src={Allen} alt="" />
        </div>
      </OuterLayout>
    </ShowcaseStyled>
  );
});

export default Showcase;
