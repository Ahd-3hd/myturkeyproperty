import React from "react";
import styled from "styled-components";
import headerImage from "../../images/header.jpg";
import Navbar from "../Navbar";
const Wrapper = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url(${headerImage}) no-repeat;
  background-size: cover;
  ::after {
    content: "";
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
  }
`;
export default function Header() {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
}
