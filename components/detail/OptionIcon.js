import styled from "styled-components";
const OptionBox = styled.div`
  padding: 9px 30px;
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid #ededed;

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
      margin: 3px 10px;
      text-align: center;
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
      background-color: #bdecff;
      border-radius: 20px;
      margin-right: 10px;
    }
    .lift {
      background-color: #4461f2;
      border-radius: 20px;
      height: 25px;
      align-items: center;
      color: white;
      margin-right: 10px;
    }
    .etc {
      background-color: #c4c4c4;
      border-radius: 20px;
      height: 25px;
      align-items: center;
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
  const Options = options?.map(({ name }) => {
    if (name === "입구 경사로") {
      return (
        <div className="slope" key={name}>
          <div className="text">경사로</div>
        </div>
      );
    }
    if (name === "승강기") {
      return (
        <div className="elevator" key={name}>
          <div className="text">승강기</div>
        </div>
      );
    }
    if (name === "휠체어 급속 충전기") {
      return (
        <div className="charge" key={name}>
          <div className="text">충전</div>
        </div>
      );
    }
    if (name === "장애인 화장실") {
      return (
        <div className="toilet" key={name}>
          <div className="text">장애인 화장실</div>
        </div>
      );
    }
    if (name === "휠체어 리프트") {
      return (
        <div className="lift" key={name}>
          <div className="text">리프트</div>
        </div>
      );
    }
    if (name === "기타") {
      return (
        <div className="etc" key={name}>
          <div className="text">기타</div>
        </div>
      );
    }
  });
  return (
    <OptionBox>
      <div className="Wrapper">
        <img className="icon" src="/images/icon/disabled.png" />
        {Options}
      </div>
      {/* <img className="minus" src="/images/icon/open.png" /> */}
    </OptionBox>
  );
};

export default OptionIcon;
