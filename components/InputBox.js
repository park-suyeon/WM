import styled from "styled-components";
const InputBoxBlock = styled.div`
  .id {
    background-color: #eaf0f7;
    color: #667085;
    text-align: left;
    padding: 10px 20px;
    font-size: 18px;
    width: 520px;
    height: 50px;
    border-radius: 13px;
    border-style: hidden;
    margin-bottom: 9px;
  }
  .id_text {
    margin-bottom: 8px;
  }
`;
const InputBox = (props) => {
  return (
    <InputBoxBlock>
      <div className="id_text"> {props.text} </div>
      <input className="id" placeholder={props.placeholder} />
    </InputBoxBlock>
  );
};
export default InputBox;
