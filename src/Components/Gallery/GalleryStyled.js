import styled from "styled-components";

export const GalleryStyled = styled.section`
  padding-top: 4rem;
  /* padding-bottom: 4rem; */

  /* width: 100%; */
  /* background-color: #f6f8fb; */
  /* padding-left: 8rem;
  padding-right: 8rem; */
  width: 100%;

  z-index: 1;
  height: 100%;
  /* overflow: scroll; */
  /* height: 100vh; */

  @media (max-width: ${({ theme }) => theme.foot}) {
    height: 65vh;
  }
  @media screen and (max-height: 667px) and (max-width: 375px) {
    height: 80vh;
    /* padding-top: 4rem; */
  }
  h1 {
    color: #c9082a;
    font-size: 2.6rem;
    max-width: 550px;
    margin-bottom: 0.4rem;
    @media (max-width: ${({ theme }) => theme.mind}) {
      font-size: 2.5rem;
    }
    @media (max-width: ${({ theme }) => theme.image}) {
      font-size: 1.8rem;
      max-width: 400px;
    }
    @media (max-width: ${({ theme }) => theme.max}) {
      font-size: 1.4rem;
    }
    span {
      color: #17408b;
    }
  }
  p {
    color: #c9082a;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    @media (max-width: ${({ theme }) => theme.image}) {
      font-size: 0.9rem;
      max-width: 400px;
    }
  }
  .players-img {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      mix-blend-mode: darken;
      width: 300px;
      transition: all 0.5s ease-in-out;
      @media (max-width: ${({ theme }) => theme.images}) {
        width: 210px;
      }
      @media (max-width: ${({ theme }) => theme.max}) {
        width: 160px;
      }
      @media (max-width: ${({ theme }) => theme.foot}) {
        width: 140px;
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .balls {
    display: flex;

    img {
      width: 40px;
      &:not(:first-child) {
        margin-left: 2rem;
      }
      @media (max-width: ${({ theme }) => theme.images}) {
        display: none;
      }
    }
  }
`;
export const Modals = styled.div`
  display: flex;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.image}) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  .player {
    width: 600px;
    margin-top: -11rem;
    @media (max-width: ${({ theme }) => theme.image}) {
      margin-top: -6rem;
      width: 350px;
      position: absolute; /* new */
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      margin-top: -6rem;
      width: 300px;
    }
  }
  h1 {
    font-size: 4rem;
    color: unset;
    @media (max-width: ${({ theme }) => theme.image}) {
      font-size: 1.5rem;
    }
  }
  p {
    color: unset;
    font-size: 2rem;
    @media (max-width: ${({ theme }) => theme.image}) {
      font-size: 1rem;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    @media (max-width: ${({ theme }) => theme.image}) {
      flex-direction: unset;
      align-items: center;
    }
  }
  .team {
    width: 350px;
    margin-left: -2rem;
    @media (max-width: ${({ theme }) => theme.image}) {
      width: 120px;
      margin-left: -0;
    }
  }
  .details {
    @media (max-width: ${({ theme }) => theme.image}) {
      margin-left: 1rem;
    }
  }
`;
