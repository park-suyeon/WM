import styled from "styled-components";
const MenubarBlock = styled.div`
  position: fixed;
  background-color: white;
  top: 40px;
  left: 20px;
  width: 100px;
  bottom: 40px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;

  .icon {
    margin-bottom: 25px;
  }
`;
const Menubar = (props) => {
  return (
    <MenubarBlock>
      <div>
        <div className="icon">1</div>
        <div className="icon">2</div>
      </div>
      <div>
        <div className="icon">3</div>
        <div className="icon">4</div>
        <div>5</div>
      </div>
    </MenubarBlock>
  );
};
export default Menubar;
