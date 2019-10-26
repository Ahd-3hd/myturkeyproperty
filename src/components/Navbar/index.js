import React from "react";
import styled from "styled-components";
import AR from "../../images/ar.png";
import EN from "../../images/en.png";
import CH from "../../images/ch.png";
import RU from "../../images/ru.png";
import TR from "../../images/tr.png";
import { FaCaretDown } from "react-icons/fa";
const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 100%;
  text-align: center;
  #top-bar {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    background: #0a4a7f;
    color: #fff;

    #lang-flags {
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      li {
        margin: 0.5rem;
      }
      img {
        width: 30px;
      }
    }
    #currencies {
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
    }
    #top-bar-contact {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  #bottom-bar {
    display: grid;
    grid-template-columns: 20% 80%;
    background: #fff;
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      align-content: center;
      li a {
        text-decoration: none;
        color: #555555;
        font-weight: bold;
      }
    }
  }
`;
export default function Navbar() {
  return (
    <Wrapper>
      <div id="top-bar">
        <ul id="lang-flags">
          <li>
            <img src={EN} alt="language icon" />
          </li>
          <li>
            <img src={AR} alt="language icon" />
          </li>
          <li>
            <img src={TR} alt="language icon" />
          </li>
          <li>
            <img src={CH} alt="language icon" />
          </li>
          <li>
            <img src={RU} alt="language icon" />
          </li>
        </ul>
        <div id="top-bar-contact">
          <p>Phone: +90 123 123 12 12</p>
          <p>Email: Email@email.com</p>
        </div>
        <ul id="currencies">
          <li>
            <p>$</p>
          </li>
          <li>
            <p>€</p>
          </li>
          <li>
            <p>¥</p>
          </li>
          <li>
            <p>₺</p>
          </li>
          <li>
            <p>₽</p>
          </li>
        </ul>
      </div>
      <div id="bottom-bar">
        <h1>LOGO</h1>
        <ul>
          <li>
            <a href="#dead">Home</a>
          </li>
          <li>
            <a href="#dead">Properties</a>
          </li>
          <li>
            <a href="#dead">
              Buyer's Guide
              <FaCaretDown />
            </a>
          </li>
          <li>
            <a href="#dead">
              Services <FaCaretDown />
            </a>
          </li>
          <li>
            <a href="#dead">News</a>
          </li>
          <li>
            <a href="#dead">About us</a>
          </li>
          <li>
            <a href="#dead">Contact</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
