import styled from "styled-components";
const PlaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-bottom: 3px solid #ededed;
  padding: 0px 24px 0px 24px;
  .PlaceName {
    display: flex;
    flex-direction: row;
    font-size: 17px;
    font-weight: bold;
    padding: 10px 0px 0px 0px;
    .charge {
      font-size: 15px;
      padding-top: 1px;
      background-color: #62d2ff;
      border-radius: 20px;
      width: 65px;
      height: 25px;
      text-align: center;
      margin-left: 10px;
      margin-right: 10px;
    }
    .runway {
      font-size: 15px;
      padding-top: 1px;
      background-color: #c248ad;
      border-radius: 20px;
      width: 65px;
      height: 25px;
      text-align: center;
      color: white;
      margin-right: 10px;
    }
    .elevator {
      font-size: 15px;
      background-color: #559bed;
      border-radius: 20px;
      width: 90px;
      height: 25px;
      text-align: center;
      color: #0f3f62;
    }
  }
  .PlaceAddress {
    font-size: 15px;
    padding: 10px 0px 0px 0px;
  }
  .PlaceCall {
    font-size: 15px;
    padding: 10px 0px 15px 0px;
    color: #1093ff;
  }
`; //장소이름 리스트 감싸는 것
const PlaceListWrapper = ({ Place, Adrress, Call }) => {
  return (
    <PlaceWrapper>
      <div className="PlaceName">
        {Place}
        <div className="charge">충전</div>
        <div className="runway">경사로</div>
        <div className="elevator">엘리베이터</div>
      </div>
      <div className="PlaceAddress">{Adrress}</div>
      <div className="PlaceCall">{Call}</div>
    </PlaceWrapper>
  );
};
export default PlaceListWrapper;
