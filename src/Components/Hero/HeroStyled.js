import styled from "styled-components";

export const HeroStyled = styled.section`
  padding-top: 20px;
  /* width: 100%; */
  background-color: #f6f8fb;
  /* padding-left: 8rem;
  padding-right: 8rem; */
  padding-bottom: 19rem;
  z-index: 1;
  height: 100%;
  overflow: hidden;
  @media screen and (min-height: 900px) and (max-height: 1366px) {
    padding-bottom: 13rem;
    /* padding-top: 4rem; */
  }
  @media (min-width: ${({ theme }) => theme.auth}) {
    padding-bottom: 12rem;
    padding-top: 120px;
  }
  /* @media (min-width: ${({ theme }) => theme.mins}) {
    padding-bottom: 19rem;
  } */
  @media screen and (min-height: 100px) and (max-height: 600px) {
    padding-bottom: 10rem;
  }
  @media screen and (min-height: 601px) and (max-height: 800px) {
    padding-bottom: 20rem;
  }
  @media screen and (min-height: 1400px) and (max-height: 1500px) and (max-width: 640px) {
    height: 60vh;
  }
  @media (max-width: ${({ theme }) => theme.images}) {
    /* overflow: unset; */
    height: 100vh;
  }
  /* @media screen and (min-height: 100px) and (max-height: 800px) {
    height: 100vh;
  } */
  @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 768px) {
    /* height: 110vh; */
  }
  @media (max-width: ${({ theme }) => theme.make}) {
    /* overflow: unset; */
    height: 100vh;
  }
  @media (max-width: ${({ theme }) => theme.blogNav}) {
    height: 100vh;
  }
  @media screen and (min-height: 1400px) and (max-height: 1600px) and (max-width: 680px) {
    height: 60vh;
  }
  @media screen and (min-height: 1400px) and (max-height: 1500px) and (max-width: 640px) {
    height: 60vh;
  }

  /* clip-path: polygon(0 0, 100% 0, 100% 700px, 0 100%); */
  /* position: relative; */
  /* padding-top: 120px */
  /* background-color: #f6f8fb;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 15rem;
  z-index: 1;
  @media (min-width: ${({ theme }) => theme.team}) and (max-width: ${({
    theme,
  }) => theme.auth}) {
  }
  @media (min-width: ${({ theme }) => theme.auth}) {
    padding-bottom: 15rem;
  }
  @media (max-width: ${({ theme }) => theme.mins}) {
    padding-bottom: 16rem;
  }
  */
  /* @media (min-width: ${({ theme }) => theme.hero}) {
    padding-top: 130px;
  }
  @media (min-width: ${({ theme }) => theme.kobe}) {
    padding-top: 140px;
  }
  @media (max-width: ${({ theme }) => theme.min}) {
    padding-bottom: 30px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-top: 100px;
  }
  @media (max-width: ${({ theme }) => theme.adapt}) {
    padding-top: 110px;
    padding-bottom: 6rem;
  }
  @media (max-width: ${({ theme }) => theme.se}) {
    padding-bottom: 80px;
  }
  @media (min-width: ${({ theme }) => theme.dont}) and (max-width: ${({
    theme,
  }) => theme.mind}) {
    padding-left: 70px;
    padding-right: 70px;
  } */
  */ .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
  }
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    @media (max-width: ${({ theme }) => theme.images}) {
      grid-template-columns: 1fr;
      height: 100%;
      width: 100%;
    }
    &-button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 250px;
      @media (max-width: ${({ theme }) => theme.make}) {
        max-width: 220px;
        margin-top: 1rem;
      }
    }
    .allens {
      position: absolute;
      width: 40px;
      @media (max-width: ${({ theme }) => theme.images}) {
        display: none;
      }
      &-1 {
        left: 0px;
        bottom: -190px;
        @media (min-width: ${({ theme }) => theme.auth}) {
          bottom: -110px;
        }
      }

      &-2 {
        left: 60px;
        bottom: -190px;
        @media (min-width: ${({ theme }) => theme.auth}) {
          bottom: -110px;
        }
      }
      &-3 {
        /* right: 100px;
        top: 120px; */
        left: 120px;
        bottom: -190px;
        @media (min-width: ${({ theme }) => theme.auth}) {
          bottom: -110px;
        }
      }
      &-4 {
        /* right: 60px;
        bottom: -130px; */
        left: 180px;
        bottom: -190px;
        @media (min-width: ${({ theme }) => theme.auth}) {
          bottom: -110px;
        }
      }
    }
    &-text {
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      /* align-self: center; */
      padding-top: 7rem;
      /* margin-top: 4rem; */
      @media (max-width: ${({ theme }) => theme.images}) {
        /* align-items: center; */
        padding-top: 4rem;
      }
      @media (max-width: ${({ theme }) => theme.make}) {
        /* overflow: unset; */
        padding-top: 4rem;
      }
      @media screen and (min-height: 900px) and (max-height: 1024px) {
        /* padding-top: 1rem; */
      }
      /* @media (max-width: ${({ theme }) => theme.mobil}) {
        padding-top: 2rem;
      } */
      h3 {
        color: #17408b;
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.39;
        letter-spacing: -0.7px;
        margin-bottom: 10px;
        width: 100%;
        max-width: 100%;
        transition: all 0.2s ease-in-out;
        @media (max-width: ${({ theme }) => theme.blogNav}) {
          /* overflow: unset; */
          max-width: 500px;
          font-size: 2rem;
        }
        @media (min-width: ${({ theme }) => theme.text}) {
          font-size: 2.5rem;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          /* overflow: unset; */
          max-width: 400px;
          font-size: 2rem;
        }
        @media (min-width: ${({ theme }) => theme.post}) {
          margin-bottom: 15px;
          max-width: 100%;
        }
        @media (min-width: ${({ theme }) => theme.kobe}) {
          /* max-width: 540px; */
          font-size: 3.4rem;
        }
        @media (min-width: ${({ theme }) => theme.kobe}) and (max-width: ${({
            theme,
          }) => theme.team}) {
          /* max-width: 540px; */
        }
        @media (min-width: ${({ theme }) => theme.minss}) {
          font-size: 3.5rem;
        }
        @media (min-width: ${({ theme }) => theme.auth}) {
          font-size: 3.5rem;
        }
        @media (max-width: ${({ theme }) => theme.min}) {
          font-size: 1.8rem;
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 1.4rem;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          max-width: 300px;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          margin-bottom: 2px;
        }
        @media (max-width: ${({ theme }) => theme.mobile}) {
          margin-bottom: 1rem;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          font-size: 1.5rem;
        }
        /* @media (min-width: ${({ theme }) => theme.auth}) {
          font-size: 5rem;
        } */
        span {
          color: #c9082a;
        }
        .legend {
          color: #d3d3d3;
        }
      }
      P {
        font-size: 15px;
        line-height: 1.6;
        color: #17408b;
        margin-bottom: 20px;
        width: 100%;
        max-width: 400px;
        font-weight: 500;
        @media (min-width: ${({ theme }) => theme.desktop}) {
          font-size: 1.2rem;
          max-width: 100%;
        }
        @media (min-width: ${({ theme }) => theme.post}) {
          line-height: 1.6;
        }
        @media (min-width: ${({ theme }) => theme.kobe}) {
          margin-bottom: 30px;
          font-size: 1.2rem;
          max-width: 510px;
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          /* font-size: 1rem; */
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          max-width: 300px;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          margin-bottom: 2px;
        }
        @media (max-width: ${({ theme }) => theme.mobile}) {
          margin-bottom: 1rem;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          font-size: 0.9rem;
        }
      }
    }
    &-img {
      display: flex;
      position: relative;
      /* align-items: flex-start;
      justify-content: flex-end; */
      /* margin-top: 4rem; */
      max-width: 800px;
      height: 100%;
      width: 100%;
      position: relative;
      /* display: flex; */
      /* overflow: hidden; */
      @media (max-width: ${({ theme }) => theme.desktop}) {
        align-items: center;
        justify-content: center;
      }
      .allen {
        width: 30px;
        @media (min-width: ${({ theme }) => theme.images}) {
          display: none;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          width: 22px;
        }
        position: absolute;
        z-index: 1;

        &-1 {
          left: 0;
          top: 60px;
          /* right: 0; */
        }
        &-2 {
          top: 120px;
          left: 0;
          @media (max-width: ${({ theme }) => theme.se}) {
            top: 100px;
          }
        }
        &-3 {
          top: 180px;
          left: 0;
          @media (max-width: ${({ theme }) => theme.se}) {
            top: 140px;
          }
        }
        &-4 {
          top: 240px;
          left: 0;
          @media (max-width: ${({ theme }) => theme.se}) {
            top: 180px;
          }
        }
      }
      img {
        mix-blend-mode: darken;
        position: relative;
        /* background-color: transparent; */
        width: 73%;
        /* margin: 0 auto; */
        /* height: 850px; */
        margin-top: -6rem;
        transition: all 0.1s ease-in-out;
        @media (min-width: ${({ theme }) => theme.auth}) {
          width: 70%;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) {
          /* width: 90%; */
          margin-top: -6rem;
        }

        @media (max-width: ${({ theme }) => theme.dont}) {
          margin-top: 0;
        }
        @media (max-width: ${({ theme }) => theme.hero}) {
          margin-top: -2rem;
        }
        @media (max-width: ${({ theme }) => theme.mind}) {
          width: 90%;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          width: 280px;
          margin-top: 0;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          /* overflow: unset; */
          width: 300px;
        }
        /* @media (max-width: ${({ theme }) => theme.mobil}) {
          width: 250px;
        } */

        @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 700px) {
          width: 260px;
        }

        @media screen and (max-height: 823px) and (max-width: 412px) {
          width: 300px;
        }
        @media screen and (max-height: 812px) and (max-width: 375px) {
          width: 280px;
        }
        @media screen and (max-height: 667px) and (max-width: 380px) {
          width: 200px;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          width: 200px;
        }
        /* @media (max-width: ${({ theme }) => theme.blogNav}) {
          width: 180px;
        } */
        /* @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 768px) {
          width: 350px;
        } */
        /* @media screen and (min-height: 900px) and (max-height: 1300px) {
          margin-top: -3rem;
        } */
        /* @media (min-width: ${({ theme }) => theme.mins}) {
          margin-top: -6rem;
        } */
        /* @media (min-width: ${({ theme }) => theme.auth}) {
          max-width: 100%;
        }
        @media (max-width: ${({ theme }) => theme.mins}) {
          max-width: 100%;
        } */
      }
      article {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 700px) {
          left: 30%;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          left: 20%;
          /* transition: var(--transition); */
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          left: 10%;
        }
        @media (max-width: ${({ theme }) => theme.mobil}) {
          left: 5%;
        }
        @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 700px) {
          left: 20%;
        }

        @media (max-width: ${({ theme }) => theme.se}) {
          left: 30px;
        }
        @media screen and (max-height: 736px) and (max-width: 414px) {
          left: 15%;
        }
        @media screen and (max-height: 667px) and (max-width: 380px) {
          left: 48px;
        }
        /* @media screen and (max-height: 731px) and (max-width: 412px) {
          left: 10%;
        } */
        /* @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 768px) {
          left: 25%;
        } */
      }
      article.activeSlide {
        opacity: 1;
        transform: translateX(0);
      }
      article.lastSlide {
        transform: translateX(-100%);
      }
      article.nextSlide {
        transform: translateX(100%);
      }
    }
  }
`;
