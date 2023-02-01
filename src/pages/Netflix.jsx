import React, { useState } from "react";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/home.jpg";
import movieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img
          src={backgroundImage}
          alt="background_image"
          className="background-image"
        />
        <div className="container">
          <div className="logo">
            <img src={movieLogo} alt="movie_logo" />
          </div>
          <div className="buttons flex">
            <button className="flex j-center a-center" onClick={()=>navigate('/play')}>
              <FaPlay /> Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      width: 100vw;
      height: 100vh;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      .logo {
        img {
          width: 100%;
          height: 100%;
          margin-left: 5rem;
        }
      }
      .buttons {
        margin: 5rem;
        gap: 2rem;
        button {
          font-size: 1.5rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.4rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.3s ease-in-out;
          &:hover{
            opacity: 0.8 ;
          }
          &:nth-of-type(2){
            background-color: rgba(110,110,110,0.8);
            color: white;
            svg{
              font-size:1.5rem;
              justify-content:center;
              align-items:center;
            }
          }
        }
      }
    }
  }
`;
