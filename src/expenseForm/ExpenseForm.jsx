import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import styled from "styled-components";

const Form = ({ stateHandler, addNewExpense }) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputDate, setInputDate] = useState("");

  const textChangeHandler = (event) => {
    setInputText(event.target.value);
  };

  const numberChangeHandler = (event) => {
    setInputNumber(+event.target.value);
  };

  const ChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const enabled = inputText !== "" && inputNumber !== "" && inputDate !== "";

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      id: Date.now().toString(),
      title: inputText,
      price: +inputNumber,
      date: new Date(inputDate),
    };

    addNewExpense(data);

    setInputText("");
    setInputNumber("");
    setInputDate("");
  };

  return (
    <FormStyled onSubmit={submitHandler}>
      <InputContainer className="inputContainer">
        <Input
          type="text"
          label="Заголовок"
          id="1"
          onChange={textChangeHandler}
          value={inputText}
        />
        <Input
          type="number"
          label="Количество"
          id="2"
          onChange={numberChangeHandler}
          value={inputNumber}
        />
        <Input
          type="date"
          label="Датировать"
          id="3"
          onChange={ChangeHandler}
          value={inputDate}
        />
      </InputContainer>

      <Container>
        <ButtonContainer>
          <Button onClick={stateHandler}>Отмена</Button>
          <Button disabled={!enabled}>Добавить расходы</Button>
        </ButtonContainer>
      </Container>
    </FormStyled>
  );
};

export default Form;

const FormStyled = styled.form`
  width: 780px;
  background: #ad9be9;
  border-radius: 12px;
  padding: 30px 40px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 28px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
`;
