import styled from "styled-components";
const ButtonBox = styled.div`
  color: white;
  background-color: #4461f2;
<<<<<<< HEAD:components/detail/Button.js
=======
  font-size: 12px;
  width: 240px;
  height: 40px;
  border-style: hidden;
  border-radius: 10px;
  font-weight: 500;
>>>>>>> 768b65608b4b106bc00482796664175c5426c599:components/detail/ButtonBox.js
  width: 100%;
  height: 40px;
  font-size: 13px;
  border-style: hidden;
  border-radius: 0px 0px 10px 10px;
  font-weight: 400;
  align-items: center;
  padding-top: 10px;
  text-align: center;
`;
const Button = (props) => {
  return <ButtonBox>{props.text}</ButtonBox>;
};
export default Button;
