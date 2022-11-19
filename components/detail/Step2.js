import styled from "styled-components";

const UpdateWrapper = styled.div`
  background-color: #ebf8ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .title {
    width: 100%;
    height: 60px;
    padding: 18px;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.15);
  }

  .content {
    align-items: center;
    .midTitleWrap {
      display: flex;
      text-align: left;
      margin: 30px 15px 15px 15px;
      align-items: center;
      border-bottom: 2.5px solid #0f3f62;
      padding-bottom: 7px;
      .midTitle {
        font-weight: 600;
        font-size: 16px;
      }
      .choice {
        font-weight: 500;
        font-size: 11px;
        color: #677185;
        padding: 5px 0px 0px 5px;
      }
      .plusIcon {
        align-items: center;
        height: 15px;
        margin-left: 7px;
      }
    }
    .text {
      font-size: 14px;
      background-color: white;
      width: 90%;
      height: 120px;
      margin-left: 18px;
      border-radius: 5px;
      border: 2px solid #677185;
      background-color: white;
      padding: 10px;
    }
  }

  .recordWrapper {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 18px;
    .memberIcon {
      width: 35px;
      height: 35px;
      margin-right: 10px;
    }
    .record {
      display: flex;
      flex-direction: column;
      .recordContent {
        font-weight: 600;
        font-size: 15px;
        color: #0f3f62;
        margin-bottom: 5px;
      }
      .recordText {
        display: flex;
        .who {
          font-weight: 500;
          font-size: 12px;
        }
        .when {
          font-weight: 500;
          font-size: 12px;
        }
        .words {
          margin-right: 5px;
          font-weight: 500;
          font-size: 12px;
        }
      }
    }
  }
`;

export default function Step2({ name, setPlaceOption }) {
  return (
    <UpdateWrapper>
      <div className="title">보행장애인 편의 시설 정보 등록</div>
      <div className="content">
        <div className="midTitleWrap">
          <div className="midTitle">[{name}]상세 설명을 입력해 주세요.</div>
          <div className="choice">선택</div>
        </div>
        <div className="recordWrapper">
          <img className="memberIcon" src="/images/icon/member.png" />
          <div className="record">
            <div className="recordContent">건물 후문 출입구에 위치</div>
            <div className="recordText">
              <div className="who">박수연</div>
              <div className="words">님이</div>
              <div className="when">2022.09.01 </div>
              <div className="words">등록한 내용입니다.</div>
            </div>
          </div>
        </div>
        <input
          className="text"
          onChange={(e) => {
            setPlaceOption((prev) => {
              return { ...prev, [name]: e.target.value };
            });
          }}
          placeholder="수정할 내용이 있으면 입력해 주세요"
        ></input>
        <div className="midTitleWrap">
          <div className="midTitle">사진 추가</div>
          <img className="plusIcon" src="/images/icon/plus_gray.png" />
          <div className="choice">선택</div>
        </div>
      </div>
    </UpdateWrapper>
  );
}
