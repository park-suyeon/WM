import { useEffect, useRef, useState } from "react";
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
  .addimg {
    opacity: 0;
    width: 1px;
    height: 1px;
  }
`;
function fileToBase64(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
      console.dir(reader.result); // base64
    };
  });
}
export default function Step2({ name, setPlaceOption, setCurrentStep }) {
  const [descText, setDescText] = useState("");
  const [files, setFiles] = useState([]);
  const fileRef = useRef();
  useEffect(() => {
    setDescText("");
    setFiles([]);
    fileRef.current.value = "";
  }, [name]);
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
              {/* <div className="who">박수연</div>
              <div className="words">님이</div> */}
              <div className="when">2022.09.01 </div>
              <div className="words">등록한 내용입니다.</div>
            </div>
          </div>
        </div>
        <input
          className="text"
          value={descText}
          onChange={(e) => {
            setDescText(e.target.value);
            setPlaceOption((prev) => {
              if (prev.some((item) => item.name === name)) {
                const i = prev.findIndex((item) => {
                  return item.name === name;
                });
                prev[i] = { ...prev[i], desc: e.target.value };
                return [...prev];
              }
              return [...prev, { name, desc: e.target.value, images: [] }];
            });
          }}
          placeholder="수정할 내용이 있으면 입력해 주세요"
        ></input>

        <div className="midTitleWrap">
          <div className="midTitle">사진 추가</div>
          <label for="addimg">
            <img className="plusIcon" src="/images/icon/plus_gray.png" />
          </label>

          <div className="choice">선택</div>
          <input
            id="addimg"
            className="addimg"
            type="file"
            ref={fileRef}
            onChange={async (e) => {
              const imageURL = await fileToBase64(e.target.files[0]);
              setFiles((s) => [...s, imageURL]);

              setPlaceOption((prev) => {
                if (prev.some((item) => item.name === name)) {
                  const i = prev.findIndex((item) => {
                    return item.name === name;
                  });
                  const copyPrev = JSON.parse(JSON.stringify(prev));
                  copyPrev[i] = {
                    ...copyPrev[i],
                    images: [...copyPrev[i].images, imageURL],
                  };
                  return [...copyPrev];
                }
                return [...prev, { name, desc: "", images: [imageURL] }];
              });
            }}
          ></input>
          <div>
            {files.map((file) => {
              return <img src={file} />;
            })}
          </div>
        </div>
      </div>
    </UpdateWrapper>
  );
}
