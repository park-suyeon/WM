import styled from "styled-components";
const Button = styled.div`
  color: white;
  background-color: #4461f2;
  font-size: 14px;
  color: white;
  background-color: #4461f2;
  width: 280px;
  height: 40px;
  font-size: 12px;
  border-style: hidden;
  border-radius: 10px;
  font-weight: 400;
  border-style: hidden;
  border-radius: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
`;
const ButtonBox = (props) => {
  return (
    <Button type={props.type} {...props}>
      {props.text}
    </Button>
  );
};
export default ButtonBox;
