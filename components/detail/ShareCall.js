import styled from "styled-components";
const Sharecall = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  height: 40px;

  .phone_icon {
    margin-right: 3px;
    margin-top: 9px;
    width: 15px;
    height: 20px;
    display: flex;
    align-items: center;
  }
  .icon {
    margin-right: 3px;
    margin-top: 3px;
    width: 15px;
    height: 20px;
    display: flex;
    align-items: center;
  }
  .call {
    display: flex;
    align-items: center;
    margin-left: 40px;
  }
  .RoadView {
    display: flex;
    align-items: center;
  }
  .ShareSelect {
    display: flex;
    align-items: center;
    margin-right: 40px;
  }
`;
const ShareCallBox = (props) => {
  return (
    <Sharecall>
      <div className="call">
        <img className="phone_icon" src="/images/icon/call.png" />
        전화
      </div>
      <div className="RoadView">
        <img className="icon" src="/images/icon/location pin.png" />
        거리뷰
      </div>
      <div className="ShareSelect">
        <img className="icon" src="/images/icon/share.png" />
        공유
      </div>
    </Sharecall>
  );
};
export default ShareCallBox;
