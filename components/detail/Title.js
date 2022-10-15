import styled from "styled-components";

const Detail = styled.div`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 2px solid #ededed;
  /* box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.2); */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 15px 10px 15px;
  background-color: white;

  .Placename {
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .Address {
    font-size: 13px;
    margin-bottom: 12px;
  }
  .Buttons {
    display: flex;
    .Start {
      border: 2px solid #3a96fb;
      border-radius: 20px;
      margin-right: 20px;
      padding: 6px;
      display: flex;
      align-items: center;
      width: 90px;
      height: 35px;
    }
    .Arrival {
      color: white;
      border: 2px solid #3a96fb;
      border-radius: 20px;
      background-color: #3a96fb;
      padding: 6px;
      display: flex;
      align-items: center;
      width: 90px;
      height: 35px;
    }
    .icon {
      margin-right: 13px;
    }
    .text {
      font-size: 14px;
      justify-content: center;
    }
  }
`;

const Title = ({ title, address }) => {
  return (
    <Detail>
      <div className="Placename">{title}</div>
      <div className="Address">{address}</div>
      <div className="Buttons">
        <div className="Start">
          <img className="icon" src="/images/icon/Group.png" />
          <div className="text">출발</div>
        </div>
        <div className="Arrival">
          <img className="icon" src="/images/icon/Group.png" />
          <div className="text">도착</div>
        </div>
      </div>
    </Detail>
  );
};
export default Title;
