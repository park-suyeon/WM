import styled from "styled-components";
import Link from "next/link";

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  overflow: scroll;
  .wrapper {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    .title {
      font-size: 15px;
      font-weight: 600;
      padding: 12px 30px;
    }
    .content {
      font-size: 13px;
      color: #545454;
      padding-left: 30px;
      padding-bottom: 20px;
    }
    .photos {
      display: flex;
      margin-bottom: 30px;
      margin-left: 30px;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
      }
      .photo1 {
        width: 100px;
        margin-right: 10px;
      }
      .photo2 {
        width: 100px;
        margin-right: 10px;
      }
      .photo3 {
        width: 100px;
        margin-right: 10px;
      }
    }
  }
  .editWrapper {
    display: flex;
    align-items: center;
    padding: 20px;
    .finalWrapper {
      width: 100%;
      font-size: 12px;
      color: #545454;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      margin-right: 20px;
      .final {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        text-align: right;
        margin-bottom: 5px;
        .text {
          margin-right: 3px;
        }
      }
    }
    .edit {
      background: #4461f2;
      width: 50px;
      height: 50px;
      border-radius: 99px;
      border: none;
      align-items: center;
      padding: 12px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
      cursor: pointer;
      .icon {
        height: 25px;
      }
    }
  }
`;

const MorePhoto = ({
  id,
  charger,
  information,
  createDay,
  updateDay,
  runway,
  elevator,
  lift,
  restroom,
  ect,
  photo,
}) => {
  return (
    <PhotoWrapper>
      <div className="wrapper">
        <div className="title">{charger}휠체어 급속 충전기</div>
        <div className="content">{information}1층 로비 옆 계단에 위치</div>
        <div className="photos">
          <img className="photo1" src="/images/photo1.jpg" />
          <img className="photo2" src="/images/photo2.jpg" />
          <img className="photo3" src="/images/photo3.jpg" />
          <img className="photo1" src="/images/photo1.jpg" />
        </div>
      </div>
      <div className="wrapper">
        <div className="title">입구 경사로</div>
        <div className="content">{runway}정문 출입구</div>
        <div className="photos">
          <img className="photo2" src="/images/photo2.jpg" />
          <img className="photo3" src="/images/photo3.jpg" />
        </div>
      </div>
      <div className="wrapper">
        <div className="title">승강기</div>
        <div className="content">{elevator}안내센터 오른쪽</div>
        <div className="photos">
          {photo}
          <img className="photo3" src="/images/photo3.jpg" />
          <img className="photo1" src="/images/photo1.jpg" />
          <img className="photo2" src="/images/photo2.jpg" />
        </div>
      </div>
      <div className="wrapper">
        <div className="title">휠체어 리프트</div>
        <div className="content">{lift}안내센터 오른쪽</div>
        <div className="photos">
          <img className="photo3" src="/images/photo3.jpg" />
          <img className="photo1" src="/images/photo1.jpg" />
          <img className="photo2" src="/images/photo2.jpg" />
        </div>
      </div>
      <div className="wrapper">
        <div className="title">장애인 화장실</div>
        <div className="content">{restroom}안내센터 오른쪽</div>
        <div className="photos">
          <img className="photo3" src="/images/photo3.jpg" />
          <img className="photo1" src="/images/photo1.jpg" />
          <img className="photo2" src="/images/photo2.jpg" />
        </div>
      </div>
      <div className="wrapper">
        <div className="title">기타</div>
        <div className="content">{ect}안내센터 오른쪽</div>
        <div className="photos">
          <img className="photo3" src="/images/photo3.jpg" />
          <img className="photo1" src="/images/photo1.jpg" />
          <img className="photo2" src="/images/photo2.jpg" />
        </div>
      </div>
      <div className="editWrapper">
        <div className="finalWrapper">
          <div className="final">
            <div className="text">최초 생성일 :</div>
            <div>{createDay}</div>
          </div>
          <div className="final">
            <div className="text">최종 수정일 :</div>
            <div>{updateDay}</div>
          </div>
        </div>
        <Link href={`/detail/${id}/update`}>
          <div className="edit">
            <img className="icon" src="/images/icon/edit.png" />
          </div>
        </Link>
      </div>
    </PhotoWrapper>
  );
};
export default MorePhoto;
