import React from "react";
import Dialog from "./Dialog";
import "./DialogList.css";

const DialogList = (props) => {
  return (
    <div>
      <Dialog
        title="경고 다이얼로그"
        backgroundColor="orange"
        message="경고 다이얼로그 컴포넌트입니다."
      />
      <Dialog
        title="인사말 다이얼로그"
        backgroundColor="blue"
        message="인사말 다이얼로그 컴포넌트입니다."
      />
      <Dialog
        title="오류 다이얼로그"
        backgroundColor="green"
        message="오류 다이얼로그 컴포넌트입니다."
      />
      <Dialog
        title="공지사항 다이얼로그"
        backgroundColor="purple"
        message="공지사항 다이얼로그 컴포넌트입니다."
      />
    </div>
  );
};

export default DialogList;
