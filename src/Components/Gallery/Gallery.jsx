import React, { forwardRef, useState } from "react";
import { OuterLayout } from "../../Layout/Layout";
import data from "./data";
import { GalleryStyled, Modals } from "./GalleryStyled";
import { Scrollbars } from "react-custom-scrollbars-2";
import Modal from "./Modal/Modal";
import { balls } from "./data";
const Gallery = forwardRef(({ id, children }, ref) => {
  const [posts] = useState(data);
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (i) => {
    console.log(i);
    setOpen(true);
    setSelectedPost(i);
    document.body.classList.add("no-scroll");
  };
  const closeModal = () => {
    setOpen(false);
    setSelectedPost(null);
    document.body.classList.remove("no-scroll");
  };

  const renderModal = () => {
    if (selectedPost !== null) {
      const post = posts[selectedPost];
      console.log(post);
      return (
        <Modals>
          <div className="img">
            <img className="player" src={post.image} alt="" />
          </div>
          <div className="info">
            <div className="team">
              <img className="team" src={post.team} alt="" />
            </div>
            <div className="details">
              <h1>{post.name}</h1>
              <p>{post.position}</p>
            </div>
          </div>
        </Modals>
      );
    }
  };

  return (
    <GalleryStyled ref={ref} id={id}>
      <OuterLayout>
        <h1>
          {" "}
          <span>Superstars</span> that have held the league down
        </h1>
        <p>Click on players to get information about them</p>
        <Scrollbars
          autoHide
          thumbSize="1px"
          autoHeight
          autoHeightMin={50}
          autoHeightMax={500}
          style={{ width: "100%" }}
        >
          <div className="players-img">
            {posts.map((item, index) => {
              const { image, id } = item;
              return (
                <img
                  key={id}
                  onClick={() => openModal(index)}
                  src={image}
                  alt=""
                />
              );
            })}
          </div>
        </Scrollbars>
        {open && (
          <Modal
            closeModal={closeModal}
            open={open}
            renderModal={renderModal}
          />
        )}
        <div className="balls">
          {balls.map((imags) => {
            const { image, id } = imags;
            return <img src={image} key={id} alt={id} />;
          })}
        </div>
      </OuterLayout>
    </GalleryStyled>
  );
});

export default Gallery;
