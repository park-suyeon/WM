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
  align-items: center;
  padding: 30px;

  .icon {
    margin-bottom: 25px;
    cursor: pointer;
  }
`;
const Menubar = (props) => {
  return (
    <MenubarBlock>
      <div>
        <img className="icon" src="\images\logo.png"></img>
        <img className="icon" src="\images\icon\search.png"></img>
      </div>
      <div>
        <img className="icon" src="\images\icon\call.png"></img>
        <img className="icon" src="\images\icon\login.png"></img>
        <img className="icon" src="\images\icon\logout.png"></img>
      </div>
    </MenubarBlock>
  );
};
export default Menubar;
