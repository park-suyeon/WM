import styled from "styled-components";

const Recommend = styled.div`
  width: 100%;
  border-top: #ededed solid 2px;
  align-items: center;
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
  .mainWrap {
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
        justify-content: center;
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
        margin-bottom: 12px;
        .hashtag {
          color: #1093ff;
          font-size: 14px;
          margin-right: 12px;
          white-space: pre;
        }
      }
      .imgWrapper {
        display: flex;
        width: 100%;
        justify-content: center;
        img {
          width: 90px;
          height: 80px;
          margin-right: 10px;
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
  .dotWrapper {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    .dot {
      height: 7px;
      margin-right: 8px;
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
`;
const RecommendPlace = ({ title, options }) => {
  const Options = options?.map((option) => {
    if (option === "?????????") {
      return (
        <div className="slope" key={option}>
          <div className="text">?????????</div>
        </div>
      );
    }
    if (option === "???????????????") {
      return (
        <div className="elevator" key={option}>
          <div className="text">???????????????</div>
        </div>
      );
    }
    if (option === "??????????????????") {
      return (
        <div className="charge" key={option}>
          <div className="text">??????</div>
        </div>
      );
    }
    if (option === "??????????????????") {
      return (
        <div className="toilet" key={option}>
          <div className="text">????????? ?????????</div>
        </div>
      );
    }
    if (option === "??????????????????") {
      return (
        <div className="lift" key={option}>
          <div className="text">?????????</div>
        </div>
      );
    }
    if (option === "??????") {
      return (
        <div className="etc" key={option}>
          <div className="text">??????</div>
        </div>
      );
    }
  });
  return (
    <Recommend>
      <div className="title">
        <div className="titleText">?????? ?????? ?????? ?????? ????????????!</div>
      </div>
      <div className="mainWrap">
        <img className="back" src="\images\icon\plus_blue.png" />
        <div className="contentWrapper">
          <div className="Placename">{title}</div>
          <div className="optionsWrapper">{Options}</div>
          <div className="hashtagWrapper">
            <div className="hashtag">#????????? ??????</div>
            <div className="hashtag">#????????? ??????</div>
            <div className="hashtag">#?????? ?????? ?????????</div>
          </div>
          <div className="imgWrapper">
            <img className="img" src="\images\photo1.jpg" />
            <img className="img" src="\images\photo2.jpg" />
            <img className="img" src="\images\photo3.jpg" />
          </div>
        </div>
        <img className="next" src="\images\icon\plus_blue.png" />
      </div>
      <div className="dotWrapper">
        <img className="dot" src="\images\icon\dotOn.png" />
        <img className="dot" src="\images\icon\dotOff.png" />
        <img className="dot" src="\images\icon\dotOff.png" />
        <img className="dot" src="\images\icon\dotOff.png" />
        <img className="dot" src="\images\icon\dotOff.png" />
      </div>
    </Recommend>
  );
};
export default RecommendPlace;
