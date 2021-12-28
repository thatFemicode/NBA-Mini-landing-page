import React, { useEffect, useRef } from "react";
import { ModalStyled, Buttons, Modall } from "./ModalStyled";
import { Power3, gsap, TweenMax, TimelineMax, Power4 } from "gsap";
import Allen from "./Allen.svg";
const Modal = ({ renderModal, open, closeModal }) => {
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      left: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { left: "-100%" });
    gsap
      .to(body, 0.3, {
        css: {
          opacity: "1",
          pointerEvents: "auto",
          ease: Power4.easeInOut,
        },
      })
      .delay(2);
    return () => {
      gsap.to(body, 1, {
        css: {
          opacity: "0",
          pointerEvents: "none",
        },
      });
    };
  }, []);
  return (
    <>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}></div>
      </div>
      <div data-barba="container" ref={(el) => (body = el)} className="Headd">
        <ModalStyled>
          <Modall>
            <img className="allen" src={Allen} alt="Ball" />
            {renderModal()}
            <Buttons onClick={closeModal} />
          </Modall>
        </ModalStyled>
      </div>
    </>
  );
};

export default Modal;
