import styled from "styled-components";
const ButtonBox = styled.div`
  background-color: #ebf8ff;
  width: 100vw;
  height: 100vh;
  .text {
    font-size: 13px;
    color: white;
    background-color: #4461f2;
    width: 80%;
    height: 40px;
    border-style: hidden;
    border-radius: 10px;
    font-weight: 400;
    align-items: center;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    position: fixed;
    justify-content: center;
  }
`;
const Button = (props) => {
  return (
    <ButtonBox>
      <button className="text"> {props.text} </button>
    </ButtonBox>
  );
};
export default Button;
