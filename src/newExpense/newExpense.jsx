import Button from "../UI/Button";
import ExpenseForm from "../expenseForm/ExpenseForm";
import React, { useState } from "react";
import styled from "styled-components";

const NewExpense = ({ addNewExpense }) => {
  const [state, setState] = useState(false);

  const stateHandler = () => {
    setState((prevState) => !prevState);
  };

  return (
    <>
      <NewExpenseStyled>
        {state ? (
          <ExpenseForm
            stateHandler={stateHandler}
            addNewExpense={addNewExpense}
          />
        ) : (
          <Button onClick={stateHandler}>Добавить новый расход</Button>
        )}
      </NewExpenseStyled>
    </>
  );
};

export default NewExpense;

const NewExpenseStyled = styled.div`
  background-color: #ad9be9;
  border-radius: 12px;
  padding: 20px 0px;
  width: 780px;
  display: flex;
  justify-content: center;
  margin-left: 340px;
`;

const HeaderDiv = styled.header`
  width: 100vw;
  height: 10vh;
  background-color: #c3b4f3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 25px;
  gap: 50px;
  margin-bottom: 50px;
`;
