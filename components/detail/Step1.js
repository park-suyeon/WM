import styled, { useTheme } from "styled-components";
import { useState } from "react";
const UpdateWrapper = styled.div`
  background-color: #ebf8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .title {
    width: 100%;
    height: 60px;
    padding: 18px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.15);
  }
  .content {
    padding-bottom: 30px;
    .midTitle {
      font-weight: 600;
      font-size: 15px;
      padding-top: 30px;
      text-align: left;
    }
    .buttonWrap {
      display: flex;
      align-items: center;

      .button {
        background-color: white;
        width: 140px;
        height: 50px;
        border: 1.2px solid #677185;
        border-radius: 5px;
        padding: 14px;
        margin: 10px;
        cursor: pointer;
        color: #677185;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        /* .text {
          color: #677185;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
        } */
        & > .activeButton {
          background-color: #0f3f62;
          opacity: 40%;
        }
        & > .activeText {
          color: #0f3f62;
        }
      }
    }
  }
`;

export default function Step1() {
  const data = [
    "입구 경사로",
    "휠체어 급속 충전기",
    "승강기",
    "휠체어 리크트",
    "장애인 화장실",
    "기타",
  ];
  let [btnActive, SetBtnActive] = useState("");
  const toggleActive = (e) => {
    SetBtnActive((prev) => {
      return e.target.value;
    });
  };
  return (
    <UpdateWrapper>
      {/* {data.map(item,idx) => {
        return<> <button value={idx}
          className={"button" + (idx ==btnActive ? "activeButton": "")}
        onClick = {toggleActive}> {item} </button>  */}
      <div className="title">보행장애인 편의 시설 정보 등록</div>
      <div className="content">
        <div className="midTitle">어떤 편의시설을 지원하나요?</div>
        <div className="buttonWrap">
          <button className="button" value={data[0]}>
            {/* <div className="text">입구 경사로</div> */}
            {data[0]}
          </button>
          <div className="button" value={data[1]}>
            {/* <div className="text">휠체어 급속 충전기</div> */}
            {data[1]}
          </div>
        </div>
        <div className="buttonWrap">
          <button className="button" value={data[2]}>
            {/* <div className="text">승강기</div> */}
            {data[2]}
          </button>
          <button className="button" value={data[3]} onClick={data}>
            {/* <div className="text">휠체어 리프트</div> */}
            {data[3]}
          </button>
        </div>
        <div className="buttonWrap">
          <button className="button" value={data[4]}>
            {/* <div className="text">장애인 화장실</div> */}
            {data[4]}
          </button>
          <button className="button" value={data[5]}>
            {/* <div className="text">기타</div> */}
            {data[5]}
          </button>
        </div>
      </div>
    </UpdateWrapper>
  );
}
