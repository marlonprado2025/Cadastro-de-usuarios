import styled from "styled-components"; // Importe o styled-components

export const Container = styled.div`
  background-color:rgb(40, 40, 41);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  height: 100vh;
`;

export const TopBackground = styled.div`
  background: linear-gradient(to right,rgb(222, 254, 93),rgb(56, 127, 91));
  height: 30vh;
  width: 90vw;
  border-radius: 40px;
  max-width: 800px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
`;

export const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  border-radius: 15px;
  border: 1px solid #d2dae2;
  background-color: #ffffff;
  padding: 15px 30px;
  outline: none;
  margin-top: 8px;
  width: 100%;
`;

export const InputLabel = styled.label`
  color:rgba(255, 255, 255, 0.61);
  font-size: 13px;
  font-weight: 500;

  span{
    color:rgb(213, 66, 55);
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 30px;
  background: linear-gradient(180deg,rgb(93, 254, 141) 0%,rgb(42, 40, 40) 100%);
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
