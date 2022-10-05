import styled from "styled-components";
const OptionBox = styled.div`
  display: flex;
  align-items: center;
  .leftWrapper {
    justify-content: left;
    display: flex;
    align-items: center;
    padding: 15px 30px 15px 30px;
    .icon {
      margin-right: 10px;
    }
    .charge {
      font-size: 13px;
      padding-top: 3px;
      background-color: #62d2ff;
      border-radius: 20px;
      width: 65px;
      height: 25px;
      text-align: center;
      margin-right: 10px;
    }
    .runway {
      font-size: 13px;
      padding-top: 3px;
      background-color: #c248ad;
      border-radius: 20px;
      width: 65px;
      height: 25px;
      text-align: center;
      color: white;
      margin-right: 10px;
    }
    .elevator {
      font-size: 13px;
      padding-top: 3px;
      background-color: #a3dffb;
      border-radius: 20px;
      width: 65px;
      height: 25px;
      text-align: center;
    }
  }
  .plus {
    width: 8px;
    justify-content: flex-end;
  }
`;
const OptionIcon = (props) => {
  return (
    <OptionBox>
      <div className="leftWrapper">
        <img className="icon" src="/images/icon/disabled.png" />
        <div className="charge"> 충전 </div>
        <div className="runway">경사로</div>
        <div className="elevator">승강기</div>
      </div>
      <img className="plus" src="/images/icon/open.png" />
    </OptionBox>
  );
};

export default OptionIcon;
