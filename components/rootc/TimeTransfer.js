import styled from "styled-components";

const TimeBlock = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  margin-bottom: 5px;
  padding: 5px 0px 0px 5px;
  margin-left: 15px;
  .TimeWrapper {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    margin-bottom: 5px;
    .Time {
      font-size: 28px;
      font-weight: bold;
    }
    .transferUnit {
      display: flex;
      padding-bottom: 5px;
      font-size: 12px;
      color: #545454;
      margin-left: 5px;
    }
  }
`;
const TimeTransfer = ({ time, timeunit, transfer }) => {
  return (
    <TimeBlock time={time} transfer={transfer}>
      <div className="TimeWrapper">
        <div className="Time">{time}</div>
        <div className="Time">{timeunit}</div>
        <div className="transferUnit">환승</div>
        <div className="transferUnit">{transfer}회</div>
      </div>
    </TimeBlock>
  );
};
export default TimeTransfer;
