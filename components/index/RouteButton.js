import styled from "styled-components";

const RouteBox = styled.div`
  .btn {
    width: 55px;
    height: 55px;
    background: #e0f4ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border: none;
    align-items: center;
    margin: 5px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    .icon {
      width: 30px;
      margin: 4px 2px;
    }
    .text {
      font-size: 9px;
      color: #666666;
    }
  }
`;

export default function RouteButton({ setPage }) {
  return (
    <RouteBox>
      <button className="btn" onClick={() => setPage("root")}>
        <img className="icon" src="/images/icon/route2.png" />
        <div className="text">길찾기</div>
      </button>
    </RouteBox>
  );
}
