import React from "react";
import styled from "styled-components";
import serviceOne from "../../images/checked.png";
import serviceTwo from "../../images/graph.png";
import serviceThree from "../../images/hand.png";
import serviceFour from "../../images/house.png";
import serviceFive from "../../images/team.png";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.2);
  position: relative;
  top: -50px;
  border-radius: 4px;
  transition: 0.3s;
  > div {
    margin: 3rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3rem;
    > div img {
      width: 100%;
      max-width: 130px;
    }
  }
  @media (max-width: 850px) {
    top: 50px;
    > div {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 550px) {
    > div {
      grid-template-columns: 1fr;
    }
  }
`;

export default function Services() {
  return (
    <Wrapper>
      <div id="first-row">
        <div>
          <img alt="icon" src={serviceOne} />
          <h3>Subtitle</h3>
          <p>Some Paragraph Here</p>
        </div>
        <div>
          <img alt="icon" src={serviceTwo} />
          <h3>Subtitle</h3>
          <p>Some Paragraph Here</p>
        </div>
        <div>
          <img alt="icon" src={serviceThree} />
          <h3>Subtitle</h3>
          <p>Some Paragraph Here</p>
        </div>
        <div>
          <img alt="icon" src={serviceFour} />
          <h3>Subtitle</h3>
          <p>Some Paragraph Here</p>
        </div>
        <div>
          <img alt="icon" src={serviceFive} />
          <h3>Subtitle</h3>
          <p>Some Paragraph Here</p>
        </div>
        <div>
          <img alt="icon" src={serviceThree} />
          <h3>Subtitle</h3>
          <p>Some Paragraph Here</p>
        </div>
      </div>
      <div id="second-row"></div>
    </Wrapper>
  );
}
