import { Outlet } from 'react-router-dom';
import iconMenuFriesImage from '@resources/images/icon-menu-fries.svg';
import koreanairSymbolImage from '@resources/images/koreanair-symbol.svg';
import iconSearchImage from '@resources/images/icon_search.svg';
import iconAlarmImage from '@resources/images/icon_alram.svg';
import iconSettingImage from '@resources/images/icon_setting.svg';
import closeImage from '@resources/images/close.svg';

export default function AviationLayout() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <div className="menu">
            <a href="">
              <img src={iconMenuFriesImage} />
            </a>
          </div>
          <div className="top-logo">
            <a href="#">
              <img src={koreanairSymbolImage} />
              <span>항공안전</span>
            </a>
          </div>
        </div>

        <div className="GNB">
          <ul className="gnb-list">
            <li>
              <a className="active" href="">
                Report
              </a>
            </li>
            <li>
              <a href="">Policy</a>
            </li>
            <li>
              <a href="">SRM</a>
            </li>
            <li>
              <a href="">Assurance</a>
            </li>
            <li>
              <a href="">Promotion</a>
            </li>
            <li>
              <a href="">AUDIT</a>
            </li>
            <li>
              <a href="">Admin</a>
            </li>
          </ul>
        </div>
        <div className="util">
          <ul className="util-list">
            <li className="util-icon">
              <ul>
                <li>
                  <a href="">
                    <img src={iconSearchImage} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={iconAlarmImage} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={iconSettingImage} />
                  </a>
                </li>
              </ul>
            </li>
            <li className="btn">
              <a href="">
                <span className="active">항공안전</span>
              </a>
              <a href="">
                <span>산업안전</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <div className="LNB hide">
        <div className="LNB_side">
          <ul className="LNB_list">
            <li>
              <a className="active" href="">
                안전보고서
              </a>
              <ul className="mu-2depth">
                <li className="active">
                  <a href="">My Report</a>
                  <ul className="mu-3depth">
                    <li className="active">
                      <a href="">3depth</a>
                    </li>
                    <li>
                      <a href="">3depth</a>
                    </li>
                    <li>
                      <a href="">3depth</a>
                    </li>
                    <li>
                      <a href="">3depth</a>
                    </li>
                    <li>
                      <a href="">3depth</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">Report List</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">안전정책</a>
            </li>
            <li>
              <a href="">안전위험관리</a>
            </li>
            <li>
              <a href="">안전보증</a>
            </li>
            <li>
              <a href="">안전증진</a>
            </li>
            <li>
              <a href="">AUDIT</a>
            </li>

            <li>
              <a href="">AUDIT</a>
            </li>
            <li>
              <a href="">AUDIT</a>
            </li>
            <li>
              <a href="">AUDIT</a>
            </li>
            <li>
              <a href="">AUDIT</a>
            </li>
            <li>
              <a href="">AUDIT</a>
            </li>
            <li>
              <a href="">AUDIT</a>
            </li>
            <li>
              <a href="">AUDIT</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="M-LNB active">
        <div className="m-lnb_side">
          <div className="m-lnb_list">
            <div className="m-lnb_top_logo">
              <a href="#">
                <img src={koreanairSymbolImage} />
                <span>항공안전</span>
              </a>
            </div>
            <div className="m-lnb_top_btn">
              <div className="tab_btn">
                <a href="">
                  <span className="active">항공</span>
                </a>
                <a href="">
                  <span>산업</span>
                </a>
              </div>
              <div className="close">
                <a href="">
                  <img src={closeImage} />
                </a>
              </div>
            </div>
            <div className="m-lnb_menu">
              <ul className="LNB_list">
                <li>
                  <a className="active" href="">
                    안전보고서
                  </a>
                  <ul className="mu-2depth">
                    <li className="active">
                      <a href="">My Report</a>
                      <ul className="mu-3depth">
                        <li className="active">
                          <a href="">3depth</a>
                        </li>
                        <li>
                          <a href="">3depth</a>
                        </li>
                        <li>
                          <a href="">3depth</a>
                        </li>
                        <li>
                          <a href="">3depth</a>
                        </li>
                        <li>
                          <a href="">3depth</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="">Report List</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">안전정책</a>
                </li>
                <li>
                  <a href="">안전위험관리</a>
                </li>
                <li>
                  <a href="">안전보증</a>
                </li>
                <li>
                  <a href="">안전증진</a>
                </li>
                <li>
                  <a href="">AUDIT</a>
                </li>
                <li>
                  <a href="">Admin</a>
                </li>
                <li>
                  <a href="">AUDIT</a>
                </li>
                <li>
                  <a href="">AUDIT</a>
                </li>
                <li>
                  <a href="">AUDIT</a>
                </li>
                <li>
                  <a href="">AUDIT</a>
                </li>
                <li>
                  <a href="">AUDIT</a>
                </li>
                <li>
                  <a href="">dddddd</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="contents">
        <Outlet />
      </div>
    </div>
  );
}
