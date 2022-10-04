import styled from "styled-components";

const Detail = styled.div`
  width: 100vw;
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  & > .Main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    .Placename {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .Address {
      font-size: 12px;
      margin-bottom: 3px;
    }
    .Buttons {
      display: flex;
    }
    .Start {
      font-size: 12px;
      border: 2px solid #3a96fb;
      border-radius: 15px;
      margin-right: 20px;
      padding: 5px 15px;
      display: flex;
      align-items: center;
    }
    .Arrival {
      font-size: 12px;
      color: white;
      border: 2px solid #3a96fb;
      border-radius: 15px;
      background-color: #3a96fb;
      padding: 5px 15px;
      display: flex;
      align-items: center;
    }
    .icon {
      margin-right: 5px;
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
            출발
          </div>
          <div className="Arrival">
            <img className="icon" src="/images/icon/Group.png" />
            도착
          </div>
        </div>
      </div>
    </Detail>
  );
};
export default Title;
