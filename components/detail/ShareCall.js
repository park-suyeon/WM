import styled from "styled-components";
const Sharecall = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  height: 70px;
  border-bottom: 5px solid #ededed;
  padding: 10px 60px 10px 60px;
  .iconWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 9px;
  }
  .text {
    font-size: 16px;
    font-weight: 500;
  }
`;
const ShareCallBox = (props) => {
  return (
    <Sharecall>
      <div className="iconWrap">
        <img className="icon" src="/images/icon/call.png" />
        <div className="text">전화</div>
      </div>
      <div className="iconWrap">
        <img className="icon" src="/images/icon/map.png" />
        <div className="text">거리뷰</div>
      </div>
      <div className="iconWrap">
        <img className="icon" src="/images/icon/share.png" />
        <div className="text">공유</div>
      </div>
    </Sharecall>
  );
};
export default ShareCallBox;
