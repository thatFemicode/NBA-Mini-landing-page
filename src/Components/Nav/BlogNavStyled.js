import styled from "styled-components";

export const BlogNavStyled = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  /* background: transparent; */
  width: 100%;
  z-index: 10;

  .navigation {
    position: relative;
    /* background: transparent; */
    max-width: 85rem;
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
  /* position: absolute; */
  .animated {
    transition: all 0.2s ease-in-out;
    @media (max-width: ${({ theme }) => theme.images}) {
      display: none;
    }
  }
  .logo {
    @media (max-width: ${({ theme }) => theme.mind}) {
      width: 80px;
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      width: 60%;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      width: 50px;
    }
    @media (max-width: ${({ theme }) => theme.max}) {
      width: 40px;
    }
  }
  /* .items {
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    width: 50%;
    @media (min-width: ${({ theme }) => theme.blogNav}) {
      width: 70%;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 400px;
    }

    &-image {
      display: flex;
      color: #fff;
      background-color: #ce1141;
      width: 30px;
      height: 30px;
      overflow: hidden;
      font-size: 1.25rem;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }
    h3 {
      text-transform: Capitalize;
      display: none;
      @media (min-width: ${({ theme }) => theme.blogNav}) {
        display: block;
      }
    }
    button {
      font-size: 1rem;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      border-color: transparent;
      color: white;
      background-color: #1d428a;
      cursor: pointer;
    }
  } */
`;
export const Buttons = styled.button`
  background-color: #17408b;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  @media (min-width: ${({ theme }) => theme.images}) {
    display: none;
  }
`;
