import styled from "styled-components";

export const OuterLayout = styled.section`
  max-width: 1300px;
  /* width: 70%; */
  margin: 0 auto;
  position: relative;
  padding: 3rem 2rem;
  @media (min-width: ${({ theme }) => theme.auth}) {
    padding: unset;
    max-width: 1200px;
  }
  @media (max-width: ${({ theme }) => theme.mins}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding: 1rem 2rem;
  }
  /* @media screen and (max-width: 1347px) {
    padding: 3rem 8rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 3rem 3rem;
  }
  @media screen and (max-width: 990px) {
    padding: 3rem 2rem;
  } */

  /* padding: 1rem 1rem;
  overflow: hidden; */
`;
export const InnerLayout = styled.section`
  padding: 2rem 2rem;
  @media (max-width: ${({ theme }) => theme.max}) {
    padding: 2rem 1rem;
  }
`;
