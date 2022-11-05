import styled from "styled-components";

const ResultWrapper = styled.div`
  padding: 20px 24px;
  width: 100vw;
  border-top: 2px solid #ededed;
  .title {
    font-weight: 700;
    font-size: 17px;
    margin-right: 7px;
    margin-bottom: 10px;
  }
  .address {
    font-size: 15px;
    margin-bottom: 10px;
  }
  .optionsWrapper {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 12px;
    overflow-wrap: normal;
    .text {
      font-size: 12px;
      margin: 3px 10px;
      text-align: center;
    }
    .charge {
      background-color: #62d2ff;
      border-radius: 20px;

      align-items: center;
      margin-right: 10px;
      white-space: pre;
    }
    .slope {
      background-color: #c248ad;
      border-radius: 20px;

      align-items: center;
      color: white;
      margin-right: 10px;
      white-space: pre;
    }
    .elevator {
      background-color: #3a96fb;
      border-radius: 20px;

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

      align-items: center;
      color: white;
      margin-right: 10px;
      white-space: pre;
    }
    .etc {
      background-color: #c4c4c4;
      border-radius: 20px;

      align-items: center;
      white-space: pre;
    }
  }
  .hashtagWrapper {
    display: flex;
    overflow-wrap: normal;
    .hashtag {
      color: #1093ff;
      font-size: 15px;
      margin-right: 12px;
      white-space: pre;
    }
  }
`;
const SearchResult = ({ title, options, address }) => {
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
    <ResultWrapper>
      <div className="title">{title}</div>
      <div className="optionsWrapper">{Options}</div>
      <div className="address">{address}</div>
      <div className="hashtagWrapper">
        <div className="hashtag">#휠체어 우선</div>
        <div className="hashtag">#경사로 완만</div>
        <div className="hashtag">#직원 호출 가능한</div>
      </div>
    </ResultWrapper>
  );
};
export default SearchResult;
