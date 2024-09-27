import { useState } from 'react';
import AppTextArea from '@/components/common/AppTextArea';

function PRightCommentLayer() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  let applyClassName = 'RightLayer-Wrap';
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
      <div className={applyClassName}>
        <div className="drawer-overlay"></div>
        <div className="right-drawer-content-wrapper">
          <div className="right-drawer-content">
            <div className="right-drawer-box">
              <div className="right-drawer-header">
                <div className="right-drawer-title">common</div>
                <span className="pop_close">X</span>
              </div>
              <div className="right-drawer-body">
                <AppTextArea label="" style={{ width: '100%', height: 82 }} errorMessage="" placeholder="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PRightCommentLayer;
