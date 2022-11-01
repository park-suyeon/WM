import styled from "styled-components";

const Recommend = styled.div`
  width: 100%;
  border-top: #ededed solid 2px;
  .title {
    background: #1093ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 50px 50px 0px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .titleText {
      font-weight: 700;
      font-size: 14px;
      color: white;
      margin: 10px 25px 10px 10px;
    }
  }
  .wrap {
    display: flex;
    align-items: center;
    .contentWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 15px;
      .Placename {
        font-size: 19px;
        font-weight: 700;
        margin-bottom: 5px;
      }
      .optionsWrapper {
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 12px;
        overflow-wrap: normal;
        .text {
          font-size: 18px;
          margin: 3px 10px;
          text-align: center;
        }
        .charge {
          background-color: #62d2ff;
          border-radius: 20px;
          height: 25px;
          align-items: center;
          margin-right: 10px;
          white-space: pre;
        }
        .slope {
          background-color: #c248ad;
          border-radius: 20px;
          height: 25px;
          align-items: center;
          color: white;
          margin-right: 10px;
          white-space: pre;
        }
        .elevator {
          background-color: #3a96fb;
          border-radius: 20px;
          height: 25px;
          align-items: center;
          color: white;
          margin-right: 10px;
          white-space: pre;
        }
        .toilet {
          background-color: #bdecff;
          border-radius: 20px;
          margin-right: 10px;
          white-space: pre;
        }
        .lift {
          background-color: #4461f2;
          border-radius: 20px;
          height: 25px;
          align-items: center;
          color: white;
          margin-right: 10px;
          white-space: pre;
        }
        .etc {
          background-color: #c4c4c4;
          border-radius: 20px;
          height: 25px;
          align-items: center;
          white-space: pre;
        }
      }
      .hashtagWrapper {
        display: flex;
        overflow-wrap: normal;
        .hashtag {
          color: #1093ff;
          font-size: 14px;
          margin-right: 12px;
          white-space: pre;
        }
      }
    }
    .back {
      height: 12px;
      margin-left: 15px;
      left: 0;
      cursor: pointer;
    }
    .next {
      height: 12px;
      margin-right: 15px;
      transform: rotate(-180deg);
      border: none;
      background-color: white;
      cursor: pointer;
    }
  }
`;
const RecommendPlace = ({ title, options }) => {
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
    <Recommend>
      <div className="title">
        <div className="titleText">우리 동네 별점 높은 플레이스!</div>
      </div>
      <div className="wrap">
        <img className="back" src="\images\icon\plus_blue.png" />
        <div className="contentWrapper">
          <div className="Placename">{title}</div>
          <div className="optionsWrapper">{Options}</div>
          <div className="hashtagWrapper">
            <div className="hashtag">#휠체어 우선</div>
            <div className="hashtag">#경사로 완만</div>
            <div className="hashtag">#직원 호출 가능한</div>
          </div>
        </div>
        <img className="next" src="\images\icon\plus_blue.png" />
      </div>
    </Recommend>
  );
};
export default RecommendPlace;
