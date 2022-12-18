import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styled from "styled-components";
import Root from "../Root";
import SubwayLine from "./SubwayLine";

const RootBlock1 = styled.div`
  .rootwrapper {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    width: 90%;
    margin-left: 5%;
    border: 2px solid #1093ff;
    /* border-radius: 10px; */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  .placeWrapper {
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
      margin-top: 5px;
      margin-left: 2px;
    }
    .arriveName {
      font-size: 18px;
      color: black;
      font-weight: bolder;
      /* margin-top: 5px; */
      margin-left: 2px;
      position: relative;
      top: 75px;
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
      margin-top: 5px;
      padding-left: 3px;
    }
    .timeText {
      font-size: 15px;
      color: black;
      margin-top: 5px;
      padding-left: 3px;
      position: relative;
    }
    .exitText {
      margin-top: 5px;
      padding-left: 3px;
      font-size: 13px;
      color: #c248ad;
    }
  }
  .moreicon {
    width: 15px;
    height: 3px;
    position: absolute;
    top: 400px;
    right: 10%;
    cursor: pointer;
  }
`;
const StationRoot1 = ({
  exit,
  direction,
  quick,
  time,
  start,
  arrive,
  info,
  color,
}) => {
  const { isLoading, error, data } = useQuery(["subway"], () =>
    axios(`/api/subway`).then((res) => res.data)
  );
  console.log("data", data);
  const alight = data?.find((v) => start.includes(v.name)).alight;

  return (
    <RootBlock1
      exit={exit}
      direction={direction}
      time={time}
      start={start}
      arrive={arrive}
      info={info}
    >
      <div className="rootwrapper">
        <SubwayLine lineText={2} color={color}></SubwayLine>

        <div className="placeWrapper">
          <div className="placeline">
            <div className="startName">{start} </div>
          </div>
          <div className="placeline">
            <div className="timeText"> {time}분</div>
            <img className="icon" src="images\icon\elevator_black.png" />
            <div className="transferText">안전 환승 </div>
            <div className="transferText">{alight} </div>
          </div>
          <div className="placeline">
            <div className="directionText">{info}</div>
          </div>

          <div className="placeline">
            <div className="arriveName">{arrive} </div>
          </div>
        </div>
        {/* <img className="moreicon" src="/images/icon/more.png" /> */}
      </div>
    </RootBlock1>
  );
};
export default StationRoot1;
