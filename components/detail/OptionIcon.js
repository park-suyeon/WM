import styled from "styled-components";
const OptionBox = styled.div`
  padding: 9px 30px;
  display: flex;
  align-items: center;
  width: 100%;

  .Wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    .icon {
      width: 12px;
      height: 12px;
      margin-right: 20px;
    }
    .text {
      font-size: 15px;
      margin: 3px 10px 3px 10px;
    }
    .charge {
      background-color: #62d2ff;
      border-radius: 20px;
      height: 25px;
      align-items: center;
      margin-right: 10px;
    }
    .slope {
      background-color: #c248ad;
      border-radius: 20px;
      height: 25px;
      align-items: center;
      color: white;
      margin-right: 10px;
    }
    .elevator {
      background-color: #3a96fb;
      border-radius: 20px;
      height: 25px;
      align-items: center;
      color: white;
      margin-right: 10px;
    }
    .toilet {
      background-color: #3a96fb;
      border-radius: 20px;
      width: 75px;
      height: 25px;
      align-items: center;
      color: white;
      margin-right: 10px;
    }
    .lift {
      background-color: #3a96fb;
      border-radius: 20px;
      height: 25px;
      align-items: center;
      color: white;
      margin-right: 10px;
    }
    .etc {
      background-color: #3a96fb;
      border-radius: 20px;
      height: 25px;
      align-items: center;
      color: white;
    }
  }
  .minus {
    width: 12px;
    transform: rotate(90deg);
    cursor: pointer;
    justify-content: flex-end;
    margin-right: 15px;
    transform: rotate(-90deg);
  }
`;
const OptionIcon = ({ options }) => {
  const Options = options?.map((option) => {
    if (option === "경사로") {
      return (
        <div className="slope">
          <div className="text">경사로</div>
        </div>
      );
    }
    if (option === "엘리베이터") {
      return (
        <div className="elevator">
          <div className="text">엘리베이터</div>
        </div>
      );
    }
    if (option === "휠체어충전기") {
      return <div className="charge"> 충전 </div>;
    }
    if (option === "장애인화장실") {
      return <div className="toilet"> 장애인 화장실 </div>;
    }
    if (option === "휠체어리프트") {
      return <div className="lift"> 휠체어 리프트 </div>;
    }
    if (option === "기타") {
      return <div className="etc"> 기타 </div>;
    }
  });
  return (
    <OptionBox>
      <div className="Wrapper">
        <img className="icon" src="/images/icon/disabled.png" />
        {Options}
      </div>
      <img className="minus" src="/images/icon/open.png" />
    </OptionBox>
  );
};

export default OptionIcon;
