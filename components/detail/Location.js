import styled from "styled-components";

const Location = styled.div`
  width: 100vw;
  background-color: white;
  display: flex;
  align-items: center;

  .line {
    background-color: #bdbdbd;
    width: 100vw;
    height: 1px;
  }
  .icon {
    align-items: center;
    margin-right: 8px;
    width: 12px;
    height: 12px;
  }
  .Address {
    font-size: 15px;
    margin-left: 30px;
    margin-right: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .Tel {
    font-size: 15px;
    margin-left: 30px;
    margin-right: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .OperatingTime {
    font-size: 15px;
    margin-left: 30px;
    margin-right: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .Homepage {
    font-size: 15px;
    margin-left: 30px;
    margin-right: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

const MainLocation = (props) => {
  return (
    <Location>
      <div className="LocationBox">
        <div className="Address">
          <img className="icon" src="/images/location.png" />
          서울 구로구 가마산로 286 SR친오애, 405호 대림역 4번 출구에서487m
        </div>
        <div className="line"></div>
        <div className="OperatingTime">
          <img className="icon" src="/images/time.png" />
          이용시간: 9 : 00 에 영업 시작
        </div>
        <div className="line"></div>
        <div className="Tel">
          <img className="icon" src="/images/phone.png" />
          02-3433-0600
        </div>
        <div className="line"></div>
        <div className="Homepage">
          <img className="icon" src="/images/homepage.png" />
          http://www.koddi.or.kr/
        </div>
      </div>
    </Location>
  );
};
export default MainLocation;
