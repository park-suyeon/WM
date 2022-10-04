import styled from "styled-components";
const Line = styled.div`
  background-color: #bdbdbd;
  height: 1px;
  width: 100%;
`;

const LineView = (props) => {
  return <Line>{props}</Line>;
};
export default Line;
