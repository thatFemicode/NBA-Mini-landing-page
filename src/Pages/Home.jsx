import React, { useEffect, useState, createRef, useMemo } from "react";
import { MainStyled } from "../MainStyled";
import { HomeStyled } from "./HomeStyled";
import Layout from "../Components/Layout/Layout";
import Hero from "../Components/Hero/Hero";
import Gallery from "../Components/Gallery/Gallery";
import Showcase from "../Components/Showcase/Showcase";
import BlogNav from "../Components/Nav/BlogNav";
import MobileNav from "../Components/Nav/MobileNav/MobileNav";
const Home = () => {
  const [active, setActive] = useState("one");

  const refs = useMemo(() => {
    return [];
  }, []);

  // create and track refs for later use
  const newRef = () => {
    const ref = createRef();

    refs.push(ref);

    return ref;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          // if 90% of the section is visible
          if (entry.isIntersecting) {
            // update the active state to the visible section
            setActive(entry.target.id);
          }
        }
      },
      {
        // root property defaults to the browser viewport

        // intersection ratio (90% of section must be visibile)
        threshold: 0.9,
        rootMargin: `100px 0px 100px 0px`,
      }
    );

    refs.forEach((ref) =>
      // observe the refs that were applied to the sections
      observer.observe(ref.current)
    );
  }, [refs]);
  return (
    <HomeStyled>
      <MainStyled>
        <BlogNav />
        <MobileNav />
        <Layout refs={refs}>
          {/* <Navbar /> */}
          <Hero
            id="one"
            ref={newRef()}
            active={active === "one" ? true : false}
          />
          <Gallery
            id="two"
            ref={newRef()}
            active={active === "two" ? true : false}
          />
          <Showcase
            id="three"
            ref={newRef()}
            active={active === "three" ? true : false}
          />
        </Layout>
      </MainStyled>
    </HomeStyled>
  );
};

export default Home;
