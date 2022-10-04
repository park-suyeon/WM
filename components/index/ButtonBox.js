import styled from "styled-components";
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
  background-color: #4461f2;
  width: 240px;
  height: 40px;
  font-size: 12px;
  border-style: hidden;
  border-radius: 10px;
  font-weight: 400;
`;
const Button = (props) => {
  return <ButtonBox>{props.text}</ButtonBox>;
};
export default Button;
