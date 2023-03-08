// import styled from "styled-components";

// const RootBlock2 = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin: 5px 5px 5px 20px;
//   position: relative;
//   left: 8px;

//   .transferBar {
//     justify-content: center;
//     border-left: 15px dotted #545454;
//     height: 100px;
//   }
//   .transferWrapper {
//     display: flex;
//     flex-direction: row;
//     height: 20px;
//     position: relative;
//     left: 10px;

//     .divisionline {
//       border-left: solid 2px black;
//       height: 20px;
//       margin: 0px 0px 0px 4px;
//     }
//   }
//   .text {
//     font-size: 13px;
//     margin-left: 5px;
//   }
//   .placeline {
//     display: flex;
//     flex-direction: row;
//     align-items: flex-end;
//     .startName {
//       font-size: 18px;
//       color: black;
//       font-weight: bolder;
//       margin-top: 5px;
//       margin-left: 2px;
//     }
//     .arriveName {
//       font-size: 18px;
//       color: black;
//       font-weight: bolder;
//       /* margin-top: 5px; */
//       margin-left: 2px;
//     }
//   }
//   .startName {
//     font-size: 18px;
//     color: black;
//     font-weight: bolder;
//     margin-left: 2px;
//   }
// `;

// const StationRoot2 = ({ transferway, transfertime }) => {
//   return (
//     <RootBlock2>
//       {/* <div className="transferBar">
//         <div className="startName">dd</div>
//       </div> */}
//       <div className="transferWrapper">
//         <div className="text">휠체어</div>
//         <div className="divisionline "></div>
//         <div className="text">{transfertime}분</div>
//       </div>
//       <div className="text">{transferway} </div>
//     </RootBlock2>
//   );
// };
// export default StationRoot2;
import styled from "styled-components";
import SubwayLine from "./SubwayLine";

const RootBlock2 = styled.div`
  .lineWrapper {
    display: flex;
    flex-direction: column;
    margin: 15px 5px 5px 10px;
    .startLineCircle {
      width: 30px;
      height: 30px;
      background-color: #808080;
      border-radius: 99999px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      .startLineText {
        color: white;
        font-size: 20px;
        font-weight: bolder;
      }
      .arriveLineText {
        color: white;
        font-size: 12px;
      }
    }
    .stationLine {
      display: flex;
      position: relative;
      top: -3px;
      left: 10px;
      margin-bottom: -5px;
      border-left: 10px dotted #808080;
      height: ${({ len }) => len * 35}px;
    }
  }
  .rootwrapper {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-left: 5%;
    width: 90%;
  }
  .placeWrapper {
    display: flex;
    flex-direction: column;
  }
  .placeline {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    .startName {
      font-size: 18px;
      color: black;
      font-weight: bolder;
      margin-top: 10px;
      margin-left: 2px;
    }
    .arriveName {
      font-size: 18px;
      color: black;
      font-weight: bolder;
      margin-left: 2px;
      position: relative;
      top: ${({ len }) => len * 0.2}px;
    }
    .icon {
      margin-top: 8px;
      margin-left: 15px;
      width: 17px;
      height: 17px;
    }
    .transferText {
      padding-left: 3px;
      font-size: 13px;
      color: #c248ad;
    }
    .directionText {
      font-size: 13px;
      color: black;
      margin: 2px 10px 2px 2px;
      line-height: 150%;
      display: flex;
      flex-direction: column;
      padding: 10px;
      .contentText {
        margin-bottom: 5px;
      }
    }
    .timeText {
      font-size: 15px;
      color: #1093ff;
      margin-top: 5px;
      padding-left: 3px;
      position: relative;
      font-weight: 600;
    }
    .exitText {
      margin-top: 5px;
      padding-left: 3px;
      font-size: 13px;
      color: #c248ad;
    }
  }
  /* .moreicon {
    width: 15px;
    height: 3px;
    position: absolute;
    top: 400px;
    right: 10%;
    cursor: pointer;
  } */
`;
const StationRoot2 = ({
  exit,
  direction,
  quick,
  time,
  start,
  arrive,
  info,
  text,
}) => {
  console.log("stationRoot2", time);
  return (
    <RootBlock2
      exit={exit}
      direction={direction}
      time={time}
      start={start}
      arrive={arrive}
      text={text}
      len={info?.length}
    >
      <div className="rootwrapper">
        <div className="lineWrapper">
          <div className="startLineCircle">
            <div className="arriveLineText">도보</div>
          </div>
          <div className="stationLine"></div>
          <div className="startLineCircle">
            <div className="arriveLineText">하차</div>
          </div>
        </div>
        {/* <SubwayLine lineText={2}></SubwayLine> */}
        <div className="placeWrapper">
          <div className="placeline">
            <div className="startName">{start} </div>
          </div>
          <div className="placeline">
            <div className="timeText"> {time}분</div>
            <img className="icon" src="images\icon\wheelchair_black.png" />
            <div className="transferText">휠체어 이동 </div>
            <div className="transferText">{direction}m </div>
          </div>
          <div className="placeline">
            <div className="directionText">
              {info?.map((v) => {
                return (
                  <div className="contentText" key={v.description}>
                    <div>{v.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <img className="moreicon" src="/images/icon/more.png" /> */}
      </div>
    </RootBlock2>
  );
};
export default StationRoot2;
