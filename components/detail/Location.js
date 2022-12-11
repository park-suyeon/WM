import styled from "styled-components";

const Location = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .contentWrapper {
    padding: 9px 30px;
    width: 100%;
    border-bottom: 2px solid #ededed;
    display: flex;
    align-items: center;
    .addres {
      display: flex;
      flex-direction: column;
      width: 100%;
      .addressLine1 {
        display: flex;
        align-items: center;

        .addressOption1 {
          width: 36px;
          height: 20px;
          border: 1px solid #979797;
          color: #979797;
          border-radius: 5px;
          font-size: 8px;
          margin-right: 10px;
          text-align: center;
          padding: 1px;
        }
      }
      .addressLine2 {
        display: flex;
        align-items: center;
        .addressOption2 {
          width: 30px;
          height: 20px;
          border: 1px solid #979797;
          color: #979797;
          border-radius: 5px;
          font-size: 8px;
          margin-right: 10px;
          text-align: center;
          padding: 1px;
        }
        .addressOption3 {
          width: 20px;
          height: 20px;
          border: 1px solid #979797;
          color: #979797;
          border-radius: 5px;
          font-size: 8px;
          margin-right: 10px;
          text-align: center;
          padding: 1px;
        }
      }
    }
    .icon {
      align-items: center;
      margin-right: 20px;
    }
    .text {
      font-size: 15px;
    }
    .subText {
      font-size: 15px;
      color: #545454;
      margin-right: 20px;
    }
  }
`;

const MainLocation = ({ address }) => {
  return (
    <Location>
      <div className="contentWrapper">
        <img className="icon" src="/images/location.png" />
        <div className="addres">
          <div className="addressLine1">
            <div className="addressOption1">도로명</div>
            <div className="text">{address}</div>
          </div>
        </div>
      </div>
      {/* <div className='contentWrapper'>
        <img className='icon' src='/images/time.png' />
        <div className='text'>이용시간: 9 : 00 에 영업 시작</div>
      </div> */}
      {/* <div className='contentWrapper'>
        <img className='icon' src='/images/phone.png' />
        <div className='text'>02-3433-0600</div>
      </div> */}
    </Location>
  );
};
export default MainLocation;
