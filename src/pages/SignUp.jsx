import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

export default function SignUp() {
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>unlinked movies, TV shows here</h1>
            <h4>watch anywhere, cancle anytime</h4>
            <h6>Ready to watch? Enter your Email or restart membership</h6>
          </div>
          <div className="form">
            <input type="email" placeholder="email adress" name="email" />
            <input
              type="password"
              placeholder="password here"
              name="password"
            />
            <button>Get Started</button>
          </div>
          <button>LogIn</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    display:grid;
    grid-template-rows:15vh 75vh;
  }
  .text{
      color: white;
  }
`;
