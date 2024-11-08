import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import iconMenuFriesImage from '@/resources/images/icon-menu-fries.svg';
import koreanairSymbolImage from '@/resources/images/koreanair-symbol.svg';
import iconSearchImage from '@/resources/images/icon_search.svg';
import iconMypageImage from '@/resources/images/icon_mypage.svg';
import iconAlarmImage from '@/resources/images/icon_alram.svg';
import iconSettingImage from '@/resources/images/icon_setting.svg';
import iconLogoutImage from '@/resources/images/icon_logout.svg';
import closeImage from '@/resources/images/close.svg';
import { useStore } from 'zustand';
import useAppStore from '@/store/useAppStore';
import classNames from 'classnames';
import AppSelect from '@/components/common/AppSelect';

export default function AviationLayout() {
  const { isAviationPortal } = useStore(useAppStore, (state) => state) as any;
  const [displayLeftMenu, setDisplayLeftMenu] = useState(true);
  const toggleLeftMenu = () => {
    setDisplayLeftMenu(!displayLeftMenu);
  };
  const props: any = {
    name: 'file',
    multiple: true,
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        // status: 'uploading',
        url: 'http://www.baidu.com/xxx.png',
        percent: 33,
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500',
        // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ],
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',

    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        alert(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        alert(`${info.file.name} file upload failed.`);
      }
    },

    onRemove(file) {
      return false;
    },

    onPreview(file) {
      return false;
    },

    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  const { closeModal } = props;
  const applyClassName = classNames('contents', {
    expand: displayLeftMenu,
    Aviation: isAviationPortal,
  });

  return (
    <div className="wrap">
      <header className="header">
        <div className="logo">
          <div className="menu" onClick={toggleLeftMenu}>
            <a href="javascript:void(0);">
              <img src={iconMenuFriesImage} />
            </a>
          </div>
          <div className="top-logo">
            <a href="javascript:void(0);">
              <img src={koreanairSymbolImage} />
              <span>SafeNet<div className="plus_icon">+</div></span>
            </a>
          </div>
        </div>

        <div className="GNB">
          <ul className="gnb-list">
            <li>
              <a className="active" href="javascript:void(0);">
                Report
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">Policy</a>
            </li>
            <li>
              <a href="javascript:void(0);">SRM</a>
            </li>
            <li>
              <a href="javascript:void(0);">Assurance</a>
            </li>
            <li>
              <a href="javascript:void(0);">Promotion</a>
            </li>
            <li>
              <a href="javascript:void(0);">AUDIT</a>
            </li>
            <li>
              <a href="javascript:void(0);">Admin</a>
            </li>
          </ul>
        </div>
        <div className="util">
          <ul className="util-list">
            <li className="util-icon">
              <ul>
                <li>
                  <a href="javascript:void(0);">
                    <img src={iconSearchImage} />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img src={iconAlarmImage} alt="알림" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <img src={iconSettingImage} alt="관리자" />
                  </a>
                  {/*사용자설정 */}
                  <div className="Info-list">
                    <ul className="Info-menu">
                      <li>
                        <div className="radio-wrap main">
                          <label>
                            <input type="radio" checked />
                            <span>국문</span>
                          </label>
                          <label>
                            <input type="radio" />
                            <span>영문</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="ico">
                            <img src={iconMypageImage} alt="마이페이지" />
                          </i>
                          마이페이지
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="ico">
                            <img src={iconSettingImage} alt="환경설정" />
                          </i>
                          환경설정
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="ico">
                            <img src={iconAlarmImage} alt="알림" />
                          </i>
                          알림
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className="ico">
                            <img src={iconLogoutImage} alt="로그아웃" />
                          </i>
                          로그아웃
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*//사용자설정 */}

                  {/*알림설정 */}
                  <div className="alarm-list" style={{ display: 'none' }}>
                    <h3 className="pop_title">알림</h3>

                    {/*검색영역 */}
                    <div className="boxForm">
                      <div className="form-table">
                        <div className="form-cell wid50">
                          <div className="btn-area">
                            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                              모두
                            </button>
                            <button type="button" name="button" className="btn-sm btn_text btn-darkblue-line">
                              읽지않음
                            </button>
                            <button type="button" name="button" className="menu-more">
                              <span className="hide">더보기</span>
                            </button>
                            {/*툴팁 */}
                            <div className="tip">
                              <span className="tooltiptext tooltip-right">
                                <button type="button">모두 읽지않은 상태로 표시</button>
                              </span>
                            </div>
                            {/*//툴팁 */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* //검색영역 */}
                    <div className="alarm-conts">
                      {/*리스트영역 */}
                      <div className="alarmlist-wrap">
                        <div className="alarmlist">
                          <dl>
                            <dt>
                              MSR-draft-115508 보고서 미제출 안내
                              <span className="commt">하루 전</span>
                            </dt>
                            <dd>
                              MSR-draft-115508의 보고서 저장 후 제출되지 않은 상태입니다. 보고서를 제출 해 주시기
                              바랍니다.
                            </dd>
                          </dl>
                          <dl>
                            <dt>
                              MSR-draft-115508 보고서 미제출 안내
                              {/*non붙이면 -> 회색컬러 */}
                              <span className="commt non">하루 전</span>
                            </dt>
                            <dd>
                              MSR-draft-115508의 보고서 저장 후 제출되지 않은 상태입니다. 보고서를 제출 해 주시기
                              바랍니다.
                            </dd>
                          </dl>
                          <dl>
                            <dt>
                              MSR-draft-115508 보고서 미제출 안내
                              <span className="commt">하루 전</span>
                            </dt>
                            <dd>
                              MSR-draft-115508의 보고서 저장 후 제출되지 않은 상태입니다. 보고서를 제출 해 주시기
                              바랍니다.
                            </dd>
                          </dl>
                          <dl>
                            <dt>
                              MSR-draft-115508 보고서 미제출 안내
                              <span className="commt">하루 전</span>
                            </dt>
                            <dd>
                              MSR-draft-115508의 보고서 저장 후 제출되지 않은 상태입니다. 보고서를 제출 해 주시기
                              바랍니다.
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    {/*//리스트영역 */}

                    <div className="btn-wrap">
                      <a href="javascript:void(0);">전체보기</a>
                    </div>

                    <span className="pop_close" onClick={closeModal}>
                      X
                    </span>
                  </div>
                  {/*//알림설정 */}
                </li>
              </ul>
            </li>
            <li className="btn">
              <a href="javascript:void(0);">
                <span className="active">항공안전</span>
              </a>
              <a href="javascript:void(0);">
                <span>산업안전</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
      {/* LNB hide 처리 */}
      <div className={displayLeftMenu ? 'LNB' : 'LNB hide'}>
        <div className="LNB_menu">
          <div className="m-lnb_top_logo">
            <a href="javascript:void(0);">
              <img src={koreanairSymbolImage} />
              <span>항공안전</span>
            </a>
          </div>
          <div className="m-lnb_top_btn">
            <div className="tab_btn">
              <a href="javascript:void(0);">
                <span className="active">항공</span>
              </a>
              <a href="javascript:void(0);">
                <span>산업</span>
              </a>
            </div>
            <div className="close">
              <a href="javascript:void(0);" onClick={toggleLeftMenu}>
                <img src={closeImage} />
              </a>
            </div>
          </div>
        </div>
        <div className="LNB_side">
          <ul className="LNB_list">
            <li>
              <a className="active" href="javascript:void(0);">
                안전보고서
              </a>
              <ul className="mu-2depth">
                <li className="active">
                  <a href="javascript:void(0);">보고서작성</a>
                  <ul className="mu-3depth">
                    <li className="active">
                      <a href="javascript:void(0);">3depth</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">3depth</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">3depth</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">3depth</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">3depth</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0);">Report List</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);">안전정책</a>
            </li>
            <li>
              <a href="javascript:void(0);">안전위험관리</a>
            </li>
            <li>
              <a href="javascript:void(0);">안전보증</a>
            </li>
            <li>
              <a href="javascript:void(0);">안전증진</a>
            </li>
            <li>
              <a href="javascript:void(0);">AUDIT</a>
            </li>
            <li>
              <a href="javascript:void(0);">관리자</a>
            </li>
            <li>
              <a href="javascript:void(0);">오프라인</a>
            </li>
            <li>
              <a href="javascript:void(0);">프론트가이드</a>
            </li>
          </ul>
          {/*배너광고영역 */}
          <div className="LNB_bottom-box">
            <div className="form-table">
              <div className="form-cell">
                <div className="form-group wid100">
                  <AppSelect label={''} />
                </div>
              </div>
            </div>
          </div>
          {/*//배너광고영역 */}
        </div>
      </div>

      <div className={applyClassName}>
        <div className="contents-box">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
