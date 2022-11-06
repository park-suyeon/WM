import styled from "styled-components";

const TimeBlock = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  flex-direction: row;
  margin-bottom: 5px;
  padding: 5px 0px 0px 5px;
  width: 100%;
  .TimeWrapper {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    margin-bottom: 5px;
    .Time {
      margin-left: 15px;
      font-size: 28px;
      font-weight: bold;
    }
    .TimeUnit {
      display: flex;
      padding-bottom: 5px;
      font-size: 12px;
    }
  }
`;
const TimeUnit = (props) => {
  return (
    <TimeBlock>
      <div className="TimeWrapper">
        <div className="Time">30</div>
        <div className="TimeUnit">분</div>
      </div>
    </TimeBlock>
  );
};
export default TimeUnit;
