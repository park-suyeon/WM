import styled from "styled-components";
const FacilitiesBlock = styled.div`
  display: flex;
  padding: 0px 15px;
  flex-direction: column;
  width: 100%;
  align-items: center;
  .title {
    font-size: 13px;
    margin-bottom: 15px;
    width: 100%;
  }
  .blockWrap {
    display: flex;
    align-items: center;
    & > .block1 {
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      .detailed {
        display: flex;
        margin-bottom: 15px;
        height: 30px;
        .icon {
          height: 19px;
          margin-right: 9px;
        }
        .textOn {
          font-size: 14px;
        }
        .textOff {
          font-size: 14px;
          color: #979797;
        }
      }
    }
    & > .block2 {
      display: flex;
      flex-direction: column;
      .detailed {
        display: flex;
        margin-bottom: 15px;
        height: 30px;
        .icon {
          height: 19px;
          margin-right: 9px;
        }
        .textOn {
          font-size: 14px;
        }
        .textOff {
          font-size: 14px;
          color: #979797;
        }
      }
    }
  }
`;
const Facilities = (props) => {
  return (
    <FacilitiesBlock>
      <div className="title">시설정보</div>
      <div className="blockWrap">
        <div className="block1">
          <div className="detailed">
            <img className="icon" src="\images\icon\lift_black.png" />
            <div className="textOn">휠체어리프트</div>
            <div className="textOn">2번 출구</div>
          </div>
          <div className="detailed">
            <img className="icon" src="\images\icon\footplate_black.png" />
            <div className="textOn">안전발판</div>
          </div>
          <div className="detailed">
            <img className="icon" src="\images\icon\charge_gray.png" />
            <div className="textOff">휠체어 급속충전</div>
          </div>
        </div>
        <div className="block2">
          <div className="detailed">
            <img className="icon" src="\images\icon\toilet_gray.png" />
            <div className="textOff">장애인 화장실</div>
          </div>
          <div className="detailed">
            <img className="icon" src="\images\icon\elevator_black.png" />
            <div className="textOn">엘리베이터</div>
            <div className="textOn">3번출구</div>
          </div>
          <div className="detailed">
            <img className="icon" src="\images\icon\distance_black.png" />
            <div className="textOn">열차 승강장 간격</div>
            <div className="textOn">4cm</div>
          </div>
        </div>
      </div>
    </FacilitiesBlock>
  );
};
export default Facilities;
