import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styles from "../styles/Slider.module.css";
import React, { useState } from "react";

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;

//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
// `;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.7s ease-in-out;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;

  background-color: #f5fafd;
`;

const ImgContainer = styled.div`
  height: 100%;

  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (p) => {
    console.log(p);
    // if (p === "left") {
    //   setIndex(index !== 0 ? index - 1 : 2);
    // }
    // if (p === "right") {
    //   setIndex(index !== 2 ? index + 1 : 0);
    // }
    ////cach 2
    if (p === "left") {
      setIndex(index > 0 ? index - 1 : 2);
    } else {
      setIndex(index < 2 ? index + 1 : 0);
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.arrow}
        style={{ left: "10px" }}
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </div>
      <Wrapper style={{ transform: `translateX(${-100 * index}vw)` }}>
        <Slide>
          <ImgContainer>
            <Image src="https://i.ibb.co/DG69bQ4/2.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="https://i.ibb.co/DG69bQ4/2.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>AUTUMN COLLECTION</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="https://i.ibb.co/cXFnLLV/3.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>POPULAR SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <div
        className={styles.arrow}
        onClick={() => handleClick("right")}
        style={{ right: "10px" }}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
