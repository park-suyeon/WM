import styled, {useTheme} from 'styled-components';
import {useState} from 'react';
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
        &.activeButton {
          background-color: #0f3f62;
          opacity: 40%;
          color: white;
        }
      }
    }
  }
`;

export const data = [
  '입구 경사로',
  '휠체어 급속 충전기',
  '승강기',
  '휠체어 리프트',
  '장애인 화장실',
  '기타',
];
export default function Step1({btnActive, SetBtnActive}) {
  const toggleActive = e => {
    SetBtnActive(prev => {
      if (prev.includes(e.target.value)) {
        return prev.filter(item => {
          return item !== e.target.value;
        });
      }

      return [...prev, e.target.value];
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
          <button
            className={`button ${
              btnActive.includes(data[0]) && 'activeButton'
            }`}
            value={data[0]}
            onClick={toggleActive}
          >
            {/* <div className="text">입구 경사로</div> */}
            {data[0]}
          </button>
          <button
            className={`button ${
              btnActive.includes(data[1]) && 'activeButton'
            }`}
            value={data[1]}
            onClick={toggleActive}
          >
            {/* <div className="text">휠체어 급속 충전기</div> */}
            {data[1]}
          </button>
        </div>
        <div className="buttonWrap">
          <button
            className={`button ${
              btnActive.includes(data[2]) && 'activeButton'
            }`}
            value={data[2]}
            onClick={toggleActive}
          >
            {/* <div className="text">승강기</div> */}
            {data[2]}
          </button>
          <button
            className={`button ${
              btnActive.includes(data[3]) && 'activeButton'
            }`}
            value={data[3]}
            onClick={toggleActive}
          >
            {/* <div className="text">휠체어 리프트</div> */}
            {data[3]}
          </button>
        </div>
        <div className="buttonWrap">
          <button
            className={`button ${
              btnActive.includes(data[4]) && 'activeButton'
            }`}
            value={data[4]}
            onClick={toggleActive}
          >
            {/* <div className="text">장애인 화장실</div> */}
            {data[4]}
          </button>
          <button
            className={`button ${
              btnActive.includes(data[5]) && 'activeButton'
            }`}
            value={data[5]}
            onClick={toggleActive}
          >
            {/* <div className="text">기타</div> */}
            {data[5]}
          </button>
        </div>
      </div>
    </UpdateWrapper>
  );
}
