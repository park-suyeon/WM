import styled from "styled-components";

const Location = styled.div`
  width: 100vw;
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
    .icon {
      align-items: center;
      margin-right: 10px;
    }
    .text {
    }
    font-size: 15px;
    color: #545454;
  }
`;

const MainLocation = (props) => {
  return (
    <Location>
      <div className="contentWrapper">
        <img className="icon" src="/images/location.png" />
        <div className="text">
          서울 구로구 가마산로 286 SR친오애, 405호 대림역 4번 출구에서487m
        </div>
      </div>
      <div className="contentWrapper">
        <img className="icon" src="/images/time.png" />
        <div className="text">이용시간: 9 : 00 에 영업 시작</div>
      </div>
      <div className="contentWrapper">
        <img className="icon" src="/images/phone.png" />
        <div className="text">02-3433-0600</div>
      </div>
      <div className="contentWrapper">
        <img className="icon" src="/images/homepage.png" />
        <div className="text">http://www.koddi.or.kr/</div>
      </div>
    </Location>
  );
};
export default MainLocation;
