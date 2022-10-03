import styled from "styled-components";

const UpdateWrapper = styled.div`
  background-color: #ebf8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  bottom: 0px;

  .title {
    height: 60px;
    padding: 18px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
  .line {
    height: 1.5px;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.15);
  }
  .midTitle {
    font-weight: 600;
    font-size: 15px;
    white-space: nowrap;
  }
  .textBox {
    width: 100%;
    height: 100%;
    margin: 10px;
    border-radius: 5px;
    border: 1.5px solid #677185;
    background-color: white;
    padding: 10px;
  }
  .text {
    font-size: 12px;
    border: none;
    background-color: white;
    width: 100%;
    height: 100%;
  }
  .icon {
    align-items: center;
    height: 15px;
    width: 15px;
    margin-left: 5px;
  }
  .midTitleWrap {
    display: flex;
    text-align: left;
    margin: 30px 15px 15px 15px;
  }
  .choice {
    font-weight: 500;
    font-size: 10px;
    color: #677185;
    padding: 5px 0px 0px 5px;
    white-space: nowrap;
  }
`;

export default function Step2() {
  return (
    <UpdateWrapper>
      <div>
        <div className="title">보행장애인 편의 시설 정보 등록</div>
        <div className="line"></div>
      </div>
      <div>
        <div className="midTitleWrap">
          <div className="midTitle">
            [휠체어 급속 충전기]상세 설명을 입력해 주세요.
          </div>
          <div className="choice">선택</div>
        </div>
        <div className="textBox">
          <input className="text"></input>
        </div>
        <div className="midTitleWrap">
          <div className="midTitle">사진 추가</div>
          <img className="icon" src="/images/icon/plus.png" />
        </div>
      </div>
    </UpdateWrapper>
  );
}
