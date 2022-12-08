import styled from "styled-components";

const Present = styled.div`
  .iconWrapper {
    width: 55px;
    height: 55px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    align-items: center;
    margin: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    .icon {
      width: 26px;
      margin: 5px;
    }
    .text {
      font-size: 9px;
      color: #666666;
    }
  }
`;

export default function PresentPosition() {
  return (
    <Present
      onClick={() => {
        window.tmap.moveCenter();
      }}
    >
      <div className="iconWrapper">
        <img className="icon" src="/images/icon/presentPosition.png" />
        <div className="text">현위치</div>
      </div>
    </Present>
  );
}
