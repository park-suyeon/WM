import styled from "styled-components";

const Detail = styled.div`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 2px solid #ededed;
  /* box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.2); */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 15px 10px 15px;
  background-color: white;

  .Placename {
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .Wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
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
  .Buttons {
    display: flex;
    .Start {
      border: 2px solid #3a96fb;
      border-radius: 20px;
      margin-right: 20px;
      padding: 6px;
      display: flex;
      align-items: center;
      width: 90px;
      height: 35px;
    }
    .Arrival {
      color: white;
      border: 2px solid #3a96fb;
      border-radius: 20px;
      background-color: #3a96fb;
      padding: 6px;
      display: flex;
      align-items: center;
      width: 90px;
      height: 35px;
    }
    .icon {
      margin-right: 13px;
    }
    .text {
      font-size: 14px;
      justify-content: center;
    }
  }
`;
const Title = ({ title, options }) => {
  const Options = options?.map((option) => {
    if (option === "경사로") {
      return (
        <div className="slope" key={option}>
          <div className="text">경사로</div>
        </div>
      );
    }
    if (option === "엘리베이터") {
      return (
        <div className="elevator" key={option}>
          <div className="text">엘리베이터</div>
        </div>
      );
    }
    if (option === "휠체어충전기") {
      return (
        <div className="charge" key={option}>
          <div className="text">충전</div>
        </div>
      );
    }
    if (option === "장애인화장실") {
      return (
        <div className="toilet" key={option}>
          <div className="text">장애인 화장실</div>
        </div>
      );
    }
    if (option === "휠체어리프트") {
      return (
        <div className="lift" key={option}>
          <div className="text">리프트</div>
        </div>
      );
    }
    if (option === "기타") {
      return (
        <div className="etc" key={option}>
          <div className="text">기타</div>
        </div>
      );
    }
  });
  return (
    <Detail>
      <div className="Placename">{title}</div>
      <div className="Wrapper">{Options}</div>
      <div className="Buttons">
        <div className="Start">
          <img className="icon" src="/images/icon/Group.png" />
          <div className="text">출발</div>
        </div>
        <div className="Arrival">
          <img className="icon" src="/images/icon/Group.png" />
          <div className="text">도착</div>
        </div>
      </div>
    </Detail>
  );
};
export default Title;
