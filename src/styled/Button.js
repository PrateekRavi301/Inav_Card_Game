import styled from "styled-components";

export const Button = styled.button`
  color: black;
  padding: 10px 18px;
  background: white;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: red;
    border: 1px solid black;
    color: white;
    transition: 0.3s background ease-in;
  }
`;

