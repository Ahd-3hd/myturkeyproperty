import React from "react";
import styled from "styled-components";
import featuredImage from "../../images/featured.jpg";
const Wrapper = styled.div`
  text-align: center;

  h2 {
    font-size: 2rem;
    color: #555555;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    width: 50%;
    margin: auto;
    padding: 1rem;
  }
  #featured-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    margin-top: 3rem;
    padding: 1rem;
    > #featured-item {
      background: url(${featuredImage}) no-repeat;
      background-size: cover;
      height: 350px;
      position: relative;
      border-radius: 4px;
      box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.1);
      > div {
        text-align: left;
        width: 70%;
        color: #fff;
        position: relative;
        z-index: 2;
        font-weight: bold;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0rem 2rem;
        line-height: 2rem;
        align-items: flex-start;
        h4 {
          margin: 0;
          padding: 0;
        }
        button {
          background: #2f80ed;
          border-radius: 6px;
          border: none;
          color: #fff;
          font-size: 1.25rem;
          padding: 0.75rem;
        }
      }
      ::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 4px;
        background: linear-gradient(
          270deg,
          #1f2041 0%,
          rgba(31, 32, 65, 0.1) 100%
        );
        transform: matrix(-1, 0, 0, 1, 0, 0);
        top: 0;
        left: 0;
      }
    }
  }
`;
export default function Featured() {
  return (
    <Wrapper>
      <h2>Featured Properties</h2>
      <div id="featured-container">
        <div id="featured-item">
          <div>
            <h4>Some Interesting title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <button>Find out more</button>
          </div>
        </div>
        <div id="featured-item">
          <div>
            <h4>Some Interesting title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <button>Find out more</button>
          </div>
        </div>
        <div id="featured-item">
          <div>
            <h4>Some Interesting title</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <button>Find out more</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
