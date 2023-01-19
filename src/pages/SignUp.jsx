import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email:"",
    password:""
  });
  const handleSignIn = async() =>{
    console.log(formValues);
  }
  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>unlinked movies, TV shows here</h1>
            <h4>watch anywhere, cancle anytime</h4>
            <h6>Ready to watch? Enter your Email or restart membership</h6>
          </div>
          <div className="form">
            <input type="email" placeholder="email adress" name="email" value={formValues.email} onChange={(e)=>{
              setFormValues({
                ...formValues,
                [e.target.name]:e.target.value
              })
            }} />
            {showPassword && (
              <input
                type="password"
                placeholder="password here"
                name="password"
                value={formValues.email}
                onChange={(e)=>{
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value
                  })
                }}
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={handleSignIn}>Sign In</button>
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
    display: grid;
    grid-template-rows: 15vh 75vh;
  }
  .body {
    gap: 1rem;
    .text {
      gap: 1rem;
      text-align: center;
      font-size: 2rem;
      h1 {
        padding: 0 25rem;
      }
    }
    .form {
      display: grid;
      grid-template-columns: ${({ showPassword }) =>
        showPassword ? "1fr 1fr" : "2fr 1fr"}
      width: 60%;
      input {
        color: black;
        border: none;
        padding: 1.5rem;
        font-size: 1.2rem;
        border: 1px solid black;
        &:focus {
          outline: none;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        font-weight: bolder;
        font-size: 1.1rem;
      }
    }
    button {
      padding: 0.5rem 1rem;
      background-color: #e50914;
      border: none;
      cursor: pointer;
      color: white;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1.1rem;
    }
  }
`;
