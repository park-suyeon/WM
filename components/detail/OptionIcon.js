import styled from "styled-components";
const OptionBox = styled.div`
  padding: 9px 25px;
  display: flex;
  align-items: center;
  width: 100%;

  .leftWrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .icon {
      width: 12px;
      height: 12px;
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
      width: 75px;
      height: 25px;
      text-align: center;
      color: white;
    }
  }
  .rightWrapper {
    justify-content: flex-end;
    display: flex;
    width: 100%;
    margin-right: 15px;
    .plus {
      width: 12px;
      transform: rotate(90deg);
      cursor: pointer;
    }
  }
`;
const OptionIcon = ({ options }) => {
  const Options = options?.map((option) => {
    if (option === "경사로") {
      return <div className="runway">경사로</div>;
    }
    if (option === "엘리베이터") {
      return <div className="elevator">엘리베이터</div>;
    }
    if (option === "휠체어충전기") {
      return <div className="charge"> 충전 </div>;
    }
  });
  return (
    <OptionBox>
      <div className="leftWrapper">
        <img className="icon" src="/images/icon/disabled.png" />
        {Options}
      </div>
      <div className="rightWrapper">
        <img className="plus" src="/images/icon/open.png" />
      </div>
    </OptionBox>
  );
};

export default OptionIcon;
