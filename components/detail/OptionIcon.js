import styled from "styled-components";
const OptionBox = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 30px;
  display: flex;
  align-items: center;

  .icon {
    width: 12px;
    height: 12px;
  }
  .plus {
    width: 12px;
    height: 12px;
    margin-left: 30px;
    cursor: pointer;
  }
  .charge {
    font-size: 15px;
    padding-top: 1px;
    background-color: #62d2ff;
    border-radius: 20px;
    width: 65px;
    height: 25px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
  }
  .runway {
    font-size: 15px;
    padding-top: 1px;
    background-color: #c248ad;
    border-radius: 20px;
    width: 65px;
    height: 25px;
    text-align: center;
    color: white;
    margin-right: 10px;
  }
  .elevator {
    font-size: 15px;
    padding-top: 1px;
    background-color: #3a96fb;
    border-radius: 20px;
    width: 65px;
    height: 25px;
    text-align: center;
    color: white;
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
