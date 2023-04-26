import styled from "./Header.module.css";
import Button from "../UI/Button";

export const Header = ({ onLogaut, onSetUser, expenseOut, isLogin }) => {
  return (
    <header className={styled.header}>
      {isLogin && (
        <>
          <Button onClick={expenseOut}>Expenses</Button>
          <Button onClick={onSetUser}>Users</Button>
          <Button onClick={onLogaut}>Logout</Button>
        </>
      )}
    </header>
  );
};
