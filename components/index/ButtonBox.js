import styled from "styled-components";
const ButtonBox = styled.div`
  color: white;
  background-color: #4461f2;
  width: 240px;
  height: 40px;
  font-size: 14px;
  border-style: hidden;
  border-radius: 10px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button = (props) => {
  return <ButtonBox>{props.text}</ButtonBox>;
};
export default Button;
