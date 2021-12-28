import React, { forwardRef, useRef, useEffect, useState } from "react";
import { HeroStyled } from "./HeroStyled";
import { OuterLayout } from "../../Layout/Layout";
import Embid from "../img/Embid .jpg";
import Lebron from "../img/King.jpg";
import Hakeem from "../img/Hakeem1.jpg";
import Allen from "./Allen.svg";
// import KG from "../img/KG.jpg";
// import Jayson from "../img/Jayson.jpg";
import Pas from "../img/Pascal.jpg";
import { OuterLayouts } from "../../Layout/Layouts";
// import Navbar from "../Navbar/Navbar";\
import Button from "./PrimaryButton";
const champImgs = [Pas, Embid, Hakeem, Lebron];
const Hero = forwardRef(({ id, children }, ref) => {
  const [people, setPeople] = useState(champImgs);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <HeroStyled ref={ref} id={id}>
      <OuterLayout>
        <div className="hero">
          <img src={Allen} alt="" className="allens allens-1" />
          <img src={Allen} alt="" className="allens allens-2" />
          <img src={Allen} alt="" className="allens allens-3" />
          <img src={Allen} alt="" className="allens allens-4" />
          <div className="hero-text">
            <h3>
              The <span>NBA</span>, The League of
              <span className="legend"> Legends</span>
            </h3>
            <p>
              We help build and manage a team of world-class developers to bring
              your vision to life
            </p>
            <div className="hero-button">
              <Button name={"Get Started"} color={"#1d428a"} />
              <Button name={"Get On"} color={"#c9082a"} />
            </div>
          </div>
          <div className="hero-img">
            <img src={Allen} alt="" className="allen allen-1" />
            <img src={Allen} alt="" className="allen allen-2" />
            <img src={Allen} alt="" className="allen allen-3" />
            <img src={Allen} alt="" className="allen allen-4" />
            {people.map((person, personIndex) => {
              let position = "nextSlide";
              if (personIndex === index) {
                position = "activeSlide";
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = "lastSlide";
              }

              return (
                <article className={position} key={personIndex}>
                  <img src={person} alt="" className="person-img" />
                </article>
              );
            })}
          </div>
        </div>
      </OuterLayout>
    </HeroStyled>
  );
});

export default Hero;
