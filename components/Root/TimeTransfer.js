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
    .TimeUnit {
      display: flex;
      padding-bottom: 5px;
      font-size: 12px;
      color: #545454;
    }
  }
`;
const TimeTransfer = (props) => {
  return (
    <TimeBlock>
      <div className="TimeWrapper">
        <div className="Time">30</div>
        <div className="Time">분</div>
        <div className="TimeUnit">환승</div>
        <div className="TimeUnit">3회</div>
      </div>
    </TimeBlock>
  );
};
export default TimeTransfer;
