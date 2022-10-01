import styled from "styled-components";
const InputBoxBlock = styled.div`
  .id {
    background-color: #eaf0f7;
    color: #4f555a;
    text-align: left;
    padding: 10px 20px;
    font-size: 12px;
    font-weight: 500;
    width: 280px;
    height: 30px;
    border-radius: 10px;
    border-style: hidden;
    margin-bottom: 20px;
  }
  .id_text {
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 6px;
    color: #000000;
  }
`;
const InputBox = (props) => {
  return (
    <InputBoxBlock>
      <div className="id_text"> {props.text} </div>
      <input className="id" placeholder={props.placeholder} type={props.type} />
    </InputBoxBlock>
  );
};
export default InputBox;
