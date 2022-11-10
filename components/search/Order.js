import styled from "styled-components";

const OrderrWrapper = styled.div`
  padding: 5px 24px;
  width: 100vw;
  border-top: 4px solid #ededed;
  display: flex;
  justify-content: space-between;
  background-color: white;
  z-index: 3;
  .text {
    font-weight: 500;
    font-size: 15px;
  }
  .buttonOn {
    padding: 5px;
    border-bottom: 2px solid #1093ff;
  }
  .buttonOff {
    padding: 5px;
  }
`;

export default function Order() {
  return (
    <OrderrWrapper>
      <div className="buttonOn">
        <div className="text">휠체어 추천순</div>
      </div>
      <div className="buttonOff">
        <div className="text">최소 환승순</div>
      </div>
      <div className="buttonOff">
        <div className="text">빠른 도착순</div>
      </div>
    </OrderrWrapper>
  );
}
