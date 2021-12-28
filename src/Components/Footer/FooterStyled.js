import styled from "styled-components";
import bg from "../img/bg.png";
export const FooterStyled = styled.footer`
  /* background-color: #17408b; */

  /* padding-bottom: 10rem; */

  .footer {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    background: url(${bg});
    background-position: left;
    background-repeat: no-repeat;
    background-size: 50%;
    height: 400px;
    border-radius: 1rem;
  }
  .image {
  }

  .text {
  }
`;
