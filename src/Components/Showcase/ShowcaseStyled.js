import styled from "styled-components";

export const ShowcaseStyled = styled.section`
  position: relative;
  padding-top: 4rem;
  padding-right: 4rem;
  padding-left: 4rem;
  background-color: #f6f8fb;

  /* overflow: hidden; */
  .show-case {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
      height: 30vh;
      /* padding-top: 4rem; */
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      height: 60vh;
    }
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 768px) {
      height: 30vh;
      /* padding-top: 4rem; */
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      height: 40vh;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      height: 35vh;
    }
  }
  .allen {
    width: 100px;
    position: unset;

    @media (max-width: ${({ theme }) => theme.kobe}) {
      width: 70px;
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      width: 50px;
    }
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 768px) {
      width: 50px;
      /* padding-top: 4rem; */
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      width: 40px;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      width: 30px;
    }
  }
  h1 {
    font-size: 5rem;
    line-height: 1.5;
    display: inline-block;
    vertical-align: middle;
    @media (max-width: ${({ theme }) => theme.kobe}) {
      font-size: 3.4rem;
    }
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
      font-size: 2.8rem;
      /* padding-top: 4rem; */
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      font-size: 2.5rem;
    }
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 768px) {
      font-size: 2.5rem;
      /* padding-top: 4rem; */
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      font-size: 2rem;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      font-size: 1.5rem;
    }
    @media (max-width: ${({ theme }) => theme.foot}) {
      font-size: 1.2rem;
    }
  }
    
  }
  .lover {
    color: #c9082a;
  }
  .baller {
    color: #17408b;
  }
  img {
    mix-blend-mode: darken;
    position: absolute;
  }
  .kg {
    left: 0;
    top: 0;
    width: 200px;
    @media (max-width: ${({ theme }) => theme.mins}) {
      width: 180px;
    }
    @media (max-width: ${({ theme }) => theme.kobe}) {
      width: 120px;
      left: 60px;
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      width: 100px;
      left: 0;
    }
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 768px) {
      width: 90px;
      left: 0;
      /* padding-top: 4rem; */
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      width: 60px;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      width: 50px;
      left: -20px;
    }
    @media (max-width: ${({ theme }) => theme.foot}) {
   width:45px
    }
  }
  .kyrie {
    right: 0;
    bottom: 50px;
    width: 200px;
    @media (max-width: ${({ theme }) => theme.mins}) {
      width: 180px;
      right: 40px;
    }
    @media (max-width: ${({ theme }) => theme.kobe}) {
      width: 120px;
      right: 100px;
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      width: 100px;
      right: 40px;
    }
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 768px) {
      width: 90px;
      right: 40px;
      /* padding-top: 4rem; */
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      width: 60px;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      width: 50px;
      right: 0;
    }
    @media (max-width: ${({ theme }) => theme.foot}) {
   width:45px
    }
  }
  .klay {
    right: 0;
    top: 0;
    width: 200px;
    transform: rotateY(900deg);
    @media (max-width: ${({ theme }) => theme.mins}) {
      width: 180px;
      right: 40px;
    }
    @media (max-width: ${({ theme }) => theme.kobe}) {
      width: 120px;
      right: 100px;
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      width: 100px;
      right: 40px;
    }
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 768px) {
      width: 90px;
      right: 40px;

      /* padding-top: 4rem; */
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      width: 60px;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      width: 50px;
      right: 0;
    }
    @media (max-width: ${({ theme }) => theme.foot}) {
   width:45px
    }
  }
`;
