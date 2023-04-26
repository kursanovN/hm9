import NewExpense from "./newExpense/newExpense";
import Expenses from "./expenses/Expenses";
import { useEffect, useState } from "react";
import { Login } from "./login/Login";
import { Header } from "./header/Header";
// import Button from "./UI/Button";
import { User } from "./user/User";
import "./App.css";

function App() {
  const [users, setUsers] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [newExpense, setNewExpense] = useState([]);

  useEffect(() => {
    const localIsLogin = localStorage.getItem("Auth");
    setLogin(localIsLogin);

    const localIsUser = localStorage.getItem("Auth");
    setLogin(localIsUser);
  }, []);

  const addNewExpense = (data) => {
    setNewExpense([...newExpense, data]);
  };

  const loginHandler = () => {
    setLogin(true);

    localStorage.setItem("Auth", !isLogin);
  };

  function logOutHandler() {
    setLogin(false);
    setUsers(false);
    localStorage.removeItem("Auth");
  }

  function setUserFunc() {
    setUsers(true);
    localStorage.setItem("user", !users);
  }

  function expenseOutHandler() {
    setUsers(false);
    localStorage.removeItem("user");
  }

  return (
    <div>
      <Header
        expenseOut={expenseOutHandler}
        onSetUser={setUserFunc}
        onLogaut={logOutHandler}
        isLogin={isLogin}
        addNewExpense={addNewExpense}
      />
      {isLogin ? (
        <div>
          {users ? (
            <User />
          ) : (
            <div>
              <NewExpense addNewExpense={addNewExpense} />
              <Expenses newExpense={newExpense} />
            </div>
          )}
        </div>
      ) : (
        <>
          <Login onLogin={loginHandler} />
        </>
      )}
    </div>
  );
}

export default App;
