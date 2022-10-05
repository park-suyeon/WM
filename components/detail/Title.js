import styled from "styled-components";

const Detail = styled.div`
<<<<<<< HEAD
  width: 100vw;
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid #ededed;

  & > .Main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 15px 10px 15px;
=======
  .Main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

>>>>>>> 768b65608b4b106bc00482796664175c5426c599
    .Placename {
      font-size: 19px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .Address {
      font-size: 13px;
      margin-bottom: 9px;
    }
    .Buttons {
      display: flex;
    }
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

const Title = (props) => {
  return (
    <Detail>
      <div className="Main">
        <div className="Placename">구로나눔장애인자립생활센터</div>
        <div className="Address">서울 구로구 가마산로 286 SR친오애, 405호</div>
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
      </div>
    </Detail>
  );
};
export default Title;
