import styled from "styled-components";
const FastSearchBlock = styled.div`
  height: 50px;
  position: fixed;
  background-color: white;
  top: 40px;
  left: 20px;
  width: 600px;
  bottom: 40px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;

  .icon {
    margin-bottom: 25px;
    cursor: pointer;
  }
`;
const FastSearch = (props) => {
  return (
    <FastSearchBlock>
      <div>
        <img className="icon" src="\images\icon\lift.png">
          휠체어 리프트
        </img>
        <img className="icon" src="\images\icon\charge.png">
          휠체어 급속충전기
        </img>
        <img className="icon" src="\images\icon\elevator.png">
          승강기
        </img>
        <img className="icon" src="\images\icon\ramp.png">
          경사로
        </img>
        <img className="icon" src="\images\icon\division.png"></img>
        <img className="icon" src="\images\icon\more.png"></img>
      </div>
    </FastSearchBlock>
  );
};
export default FastSearch;
