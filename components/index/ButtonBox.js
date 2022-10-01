import styled from "styled-components";
const ButtonBox = styled.div`
  .signup_button {
    color: white;
    background-color: #4461f2;
    width: 240px;
    height: 40px;
    font-size: 12px;
    border-style: hidden;
    border-radius: 10px;
    font-weight: 400;
    text-align: center;
  }
  .signup_text {
    color: white;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
  }
`;
const Button = (props) => {
  return (
    <ButtonBox>
      <div className="signup_button"> {props.text}</div>
      <div className="signup_text"> {props.text} </div>
    </ButtonBox>
  );
};
export default Button;
