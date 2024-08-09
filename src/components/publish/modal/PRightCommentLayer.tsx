import { useState } from 'react';

function PRightCommentLayer() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  let applyClassName = 'laye-test';
  if (isOpen) {
    applyClassName = applyClassName + ' active';
  }

  return (
    <>
      <div>PRightCommentLayer page</div>
      적용된 클래스 : {applyClassName}
      <div className="contents-btns" style={{ textAlign: 'left' }}>
        <button name="button" className="btn_text text_color_neutral-10 btn_confirm" onClick={handleClick}>
          토글 우측 레이어
        </button>
      </div>
      <div className={applyClassName}>우측 레이어영역입니다.</div>
    </>
  );
}

export default PRightCommentLayer;
