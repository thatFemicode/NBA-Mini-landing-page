import React from "react";
import styled from "styled-components";
import Bron from "./img/bron.png";
import Joel from "./img/joel.png";
import Kd from "./img/kd.png";
import Klay from "./img/klay.png";
import Steph from "./img/Steph.png";
import {
  Heading,
  //   HeadingLink,
  //   LinkList,
  DropdownSection,
  //   Icon,s
  PlayLink,
  Header,
} from "./Components";

const CompanyDropdownEl = styled.div`
  width: 18.5rem;
`;

const CompanyDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <Heading>Superstar Players</Heading>
        <p>Some superstars in the league </p>
        <ul>
          <Header>
            <PlayLink>
              <img src={Klay} alt="" />
            </PlayLink>
            <p>Klay Thompson</p>
          </Header>
          <Header>
            <PlayLink>
              <img src={Kd} alt="" />
            </PlayLink>
            <p>Kevin Durant</p>
          </Header>
          <Header>
            <PlayLink>
              <img src={Joel} alt="" />
            </PlayLink>
            <p>Joel Embid</p>
          </Header>

          <Header>
            <PlayLink>
              <img src={Bron} alt="" />
            </PlayLink>
            <p>Lebron James</p>
          </Header>
          <Header>
            <PlayLink>
              <img src={Steph} alt="" />
            </PlayLink>
            <p>Steph Curry</p>
          </Header>
        </ul>
      </DropdownSection>
    </CompanyDropdownEl>
  );
};

export default CompanyDropdown;
