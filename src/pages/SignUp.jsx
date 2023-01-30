import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";
import Header from "../components/Header";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../utils/firebase-config";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSignin = async() =>{
    try{
      const {email, password} = formValues;
      await createUserWithEmailAndPassword(auth,email, password);
    }catch(err){
      console.log(err)
    }
  }
  return (
    <Container showPassowrd={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlinked movies, tv shows and more</h1>
            <h3>watch anywhere, cancle anytime</h3>
            <h6>
              ready to watch? please enter your email to create or restart
              membership
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              name="email"
              placeholder="please enter your email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={handleSignin}>Sign Up</button>
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
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 1.5rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border-bottom: 0.5px solid black;
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
          font-weight: bold;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        border-radius: 0.2rem;
        cursor: pointer;
        color: white;
        font-weight: bold;
        font-size: 1.05rem;
      }
    }
  }
`;
