import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: grid;
  margin: 0 auto;
  place-items: center;
  /* visibility: hidden; */
  z-index: 10;
  transition: var(--transition);

  /* transform: scale(0); */
  background: rgba(0, 0, 0, 0.5);
`;
export const Modall = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: var(--fixed-width);
  background: var(--white);
  border-radius: 0.4rem;
  box-shadow: var(--dark-shadow);
  position: relative;
  padding: 4rem 2rem;
  transition: all 0.1s ease;
  z-index: 10;
  @media screen and (min-height: 100px) and (max-height: 667px) and (max-width: 375px) {
    height: 100vh;
  }
  .allen {
    position: absolute;
    width: 50px;
    right: 90px;
    bottom: 80px;
    mix-blend-mode: darken;
  }
`;
export const Buttons = styled.button`
  background-color: #17408b;
  border: none;
  position: absolute;
  right: 20px;
  top: 10px;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: "1.5";
    transform: rotate(135deg);
  }
  &::after {
    top: "1.2";
    transform: rotate(-135deg);
  }
  /* @media (min-width: ${({ theme }) => theme.images}) {
    display: none;
  } */
`;
