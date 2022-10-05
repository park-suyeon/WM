import styled from "styled-components";
const ButtonBox = styled.div`
  color: white;
  background-color: #4461f2;
  font-size: 12px;
  width: 240px;
  height: 40px;
  border-style: hidden;
  border-radius: 10px;
  font-weight: 500;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;
const Button = (props) => {
  return <ButtonBox>{props.text}</ButtonBox>;
};
export default Button;
