import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const AnimatedButton = styled.button`
  /* padding-left: 0.9rem;
  background-color: #1d428a;
  padding: 0.6rem 1.5rem;
  font-family: inherit;
  font-family: inherit;
  color: #fff;
  /* border-radius: 4px; */
  /* border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  outline: none;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  position: relative;
  display: inline-block; */
  /* display: flex; */
  /* align-items: center;
  justify-content: space-between; */
  /* position: relative;
  overflow: hidden;
  transition: all 0.4s ease-in-out;  */

  min-width: 0;
  height: 100%;
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  font-size: inherit;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 18px;
  padding-bottom: 8px;
  border: 0;
  border-radius: 4px;
  font-weight: 700;
  color: white;
  background-color: #8d448b;
  cursor: pointer;
  transition: 500ms;
  font-size: 15px;
  border-radius: 4px;
  padding: 0 15px;
  margin-left: 10px;
  /* width: auto; */
  @media (min-width: ${({ theme }) => theme.post}) {
    width: 130px;
    font-size: 1rem;
  }
  @media (min-width: ${({ theme }) => theme.kobe}) {
    font-size: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 10px;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.se}) {
    font-size: 10px;
    width: 100px;
  }
`;
const AnimatedHeroButton = ({ name }) => {
  return <AnimatedButton>{name}</AnimatedButton>;
};

export default AnimatedHeroButton;
