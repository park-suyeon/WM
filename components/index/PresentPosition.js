import styled from "styled-components";

const Present = styled.div`
  .iconWrapper {
    width: 55px;
    height: 55px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    align-items: center;
    margin-right: 9px;
    cursor: pointer;
    .icon {
      width: 26px;
      margin: 15px;
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
      </div>
    </Present>
  );
}
