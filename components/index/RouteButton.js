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
    margin-right: 9px;
    margin-bottom: 9px;
    cursor: pointer;
    .icon {
      width: 35px;
      margin: 8px 5px;
    }
  }
`;

export default function RouteButton({ setPage }) {
  return (
    <RouteBox>
      <button className="btn" onClick={() => setPage("root")}>
        <img className="icon" src="/images/icon/route2.png" />
      </button>
    </RouteBox>
  );
}
