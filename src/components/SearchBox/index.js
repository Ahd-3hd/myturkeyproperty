import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 60%;
  max-height: 600px;
  padding: 2rem;
  margin-left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
  z-index: 2;
  background: rgba(0, 51, 94, 0.9);
  border-radius: 5px;
  display: grid;
  transition: 0.5s;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  @media (max-width: 870px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    bottom: 0;
  }
  grid-gap: 1rem;
  align-items: center;
  .field {
    display: flex;
    flex-direction: column;
    > label {
      padding: 0.75rem 0;
      color: #fff;
    }
    > input {
      height: 30px;
      border: 1px solid rgba(31, 32, 65, 0.25);
      border-radius: 4px;
      box-sizing: border-box;
    }
    > button {
      background: #2f80ed;
      border-radius: 6px;
      border: none;
      color: #fff;
      font-size: 1.25rem;
      align-self: stretch;
      padding: 1rem 0;
    }
  }
`;

export default function SearchBox() {
  return (
    <Wrapper>
      <div className="field">
        <label>City/Region</label>
        <input />
      </div>
      <div className="field">
        <label>Type</label>
        <input />
      </div>
      <div className="field">
        <label>Currency</label>
        <input />
      </div>
      <div className="field">
        <label>Min. Bedrooms</label>
        <input />
      </div>
      <div className="field">
        <label>Min. Bathrooms</label>
        <input />
      </div>
      <div className="field">
        <label>Max. Price</label>
        <input />
      </div>
      <div className="field">
        <label>Min. Price</label>
        <input />
      </div>
      <div className="field">
        <label>label</label>
        <button>Search</button>
      </div>
    </Wrapper>
  );
}
