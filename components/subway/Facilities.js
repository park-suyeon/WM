import styled from "styled-components";
const FacilitiesBlock = styled.div`
  display: flex;
  padding: 10px 15px;
  flex-direction: column;
  width: 100%;
  align-items: center;
  .title {
    font-size: 13px;
    margin-bottom: 15px;
    width: 100%;
    margin-left: 10px;
  }
  .blockWrap {
    display: flex;
    align-items: center;
    & > .block1 {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      overflow-wrap: normal;
      .detailed {
        display: flex;
        margin-bottom: 15px;
        height: 30px;
        white-space: pre;
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
      overflow-wrap: normal;
      .detailed {
        display: flex;
        margin-bottom: 15px;
        height: 30px;
        white-space: pre;
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
const Facilities = ({ data }) => {
  return (
    <FacilitiesBlock>
      <div className="title">시설정보</div>
      <div className="blockWrap">
        <div className="block1">
          <div
            className="detailed"
            style={{
              opacity: data.lift === "0" ? 0.4 : 1,
              fontWeight: data.lift === "1" ? 600 : 400,
            }}
          >
            <img className="icon" src="\images\icon\lift_black.png" />
            <div className="textOn">휠체어리프트</div>
            {/* <div className="textOn">2번 출구</div> */}
          </div>
          <div
            className="detailed"
            style={{
              opacity: data.Foothold === "0" ? 0.4 : 1,
              fontWeight: data.Foothold === "1" ? 600 : 400,
            }}
          >
            <img className="icon" src="\images\icon\footplate_black.png" />
            <div className="textOn">안전발판</div>
          </div>
          <div
            className="detailed"
            style={{
              opacity: data.charge === "0" ? 0.4 : 1,
              fontWeight: data.charge === "1" ? 600 : 400,
            }}
          >
            <img className="icon" src="\images\icon\charge_black.png" />
            <div className="textOn">휠체어 급속충전</div>
          </div>
        </div>
        <div className="block2">
          <div
            className="detailed"
            style={{
              opacity: data.toilet === "0" ? 0.4 : 1,
              fontWeight: data.toilet === "1" ? 600 : 400,
            }}
          >
            <img className="icon" src="\images\icon\toilet_black.png" />
            <div className="textOn">장애인 화장실</div>
          </div>
          <div
            className="detailed"
            style={{
              opacity: data.elevator === "0" ? 0.4 : 1,
              fontWeight: data.elevator === "1" ? 600 : 400,
            }}
          >
            <img className="icon" src="\images\icon\elevator_black.png" />
            <div className="textOn">엘리베이터</div>
            {/* <div className="textOn">3번출구</div> */}
          </div>
          <div
            className="detailed"
            style={{
              opacity: data.safeDistance === "-" ? 0.4 : 1,
              fontWeight: data.safeDistance !== "-" ? 600 : 400,
            }}
          >
            <img className="icon" src="\images\icon\distance_black.png" />
            <div className="textOn">열차 승강장 간격 </div>
            <div className="textOn">{data.safeDistance}cm</div>
          </div>
        </div>
      </div>
    </FacilitiesBlock>
  );
};
export default Facilities;
