import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  font-size: 1rem;
  padding: 0.35rem 0.75rem;
  border-radius: 0.2rem;
  border-color: transparent;
  color: white;
  background-color: ${(props) => props.color};
  cursor: pointer;
  width: 80px;
  @media (max-width: ${({ theme }) => theme.images}) {
      display: none;
    }
  @media (max-width: ${({ theme }) => theme.mind}) {
    font-size: 0.8rem;
  }
  @media (max-width: ${({ theme }) => theme.make}) {
    font-size: 0.7rem;
    width: 100px;
  }
`;
const PrimaryButton = ({ name, color }) => {
  return <ButtonStyled color={color}>{name}</ButtonStyled>;
};

export default PrimaryButton;
