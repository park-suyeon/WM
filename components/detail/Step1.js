import styled from "styled-components";

const UpdateWrapper = styled.div`
  position: fixed;
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
    padding-top: 30px;
    text-align: left;
  }
  .buttonWrap {
    display: flex;
    align-items: center;
  }
  .button {
    background-color: white;
    width: 140px;
    height: 50px;
    border: 1.2px solid #677185;
    border-radius: 5px;
    padding: 14px;
    margin: 10px;
    cursor: pointer;
  }
  .text {
    color: #677185;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
  }
`;

export default function Step1() {
  return (
    <UpdateWrapper>
      <div>
        <div className="title">보행장애인 편의 시설 정보 등록</div>
        <div className="line"></div>
      </div>
      <div>
        <div className="midTitle">어떤 편의시설을 지원하나요?</div>
        <div className="buttonWrap">
          <div className="button">
            <div className="text">입구 경사로</div>
          </div>
          <div className="button">
            <div className="text">휠체어 급속 충전기</div>
          </div>
        </div>
        <div className="buttonWrap">
          <div className="button">
            <div className="text">승강기</div>
          </div>
          <div className="button">
            <div className="text">휠체어 리프트</div>
          </div>
        </div>
        <div className="buttonWrap">
          <div className="button">
            <div className="text">장애인 화장실</div>
          </div>
          <div className="button">
            <div className="text">기타</div>
          </div>
        </div>
      </div>
    </UpdateWrapper>
  );
}
