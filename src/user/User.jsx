import { useEffect, useState } from "react";
import styled from "styled-components";

const URL = "https://jsonplaceholder.typicode.com/users";

export const User = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((datas) => setData(datas));
  }, []);
  return (
    <Container>
      {data.map((e) => {
        return (
          <Block>
            <h3>{e.name}</h3>
            <p>{e.email}</p>
          </Block>
        );
      })}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 500px;
`;
const Block = styled.div`
  background-color: #c3b4f3;
  color: #333;
  width: 30vw;
  height: 13vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
