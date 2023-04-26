import { useState } from "react";
import styled from "./Login.module.css";
import Button from "../UI/Button";
import { Header } from "../header/Header";

export const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailValid, setEmailValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState();
  const [formValid, setFormValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);

    setFormValid(
      e.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);

    setFormValid(
      e.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };
  const validateEmailHandler = () => {
    setEmailValid(enteredEmail.includes("@"));
  };
  const validatePasswordHandler = () => {
    setPasswordValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <div>
      <form className={styled.form} onSubmit={submitHandler}>
        <div className={`${styled.inputBlock}  `}>
          <label className={styled.label} htmlFor="em">
            email
          </label>
          <input
            className={`${styled.input} ${
              emailValid === false ? styled.invalid : ""
            } `}
            type="text"
            id="em"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${styled.inputBlock}  `}>
          <label className={styled.label} htmlFor="password">
            Password
          </label>
          <input
          className={`${styled.input} ${
            passwordValid === false ? styled.invalid : ""
          } `}
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <Button onClick={props.onLogin}>Login</Button>
      </form>
    </div>
  );
};
