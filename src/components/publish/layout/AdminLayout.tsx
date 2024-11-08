import { Outlet } from 'react-router-dom';
import AdminLeftMenu from './AdminLeftMenu';
import { useState } from 'react';
import { useStore } from 'zustand';
import useAppStore from '@/store/useAppStore';
import iconMenuFriesImage from '@/resources/images/icon-menu-fries.svg';
import koreanairSymbolImage from '@/resources/images/koreanair-symbol.svg';
import iconSearchImage from '@/resources/images/icon_search.svg';
import iconAlarmImage from '@/resources/images/icon_alram.svg';
import iconSettingImage from '@/resources/images/icon_setting.svg';

export default function AdminLayout() {
  const { isAviationPortal } = useStore(useAppStore, (state) => state) as any;
  const [displayLeftMenu, setDisplayLeftMenu] = useState(true);
  const toggleLeftMenu = () => {
    setDisplayLeftMenu(!displayLeftMenu);
  };
  return (
    <div>
      {/* <AdminTopMenu /> */}
      {/* <AdminLeftMenu /> */}
      {/* <div>기본 공통 레이아웃</div> */}
      <div className="adminwrap">
        <header className="header">
          <div className="logo">
            <div className="menu" onClick={toggleLeftMenu}>
              <a href="javascript:void(0);">
                <img src={iconMenuFriesImage} />
              </a>
            </div>
          </div>
          <div className="util">
            <ul className="util-list">
              <li className="util-icon mr-0">
                <ul>
                  <li className="txt">
                    <span className="name">관리자 (ADMIN) </span> / (주)대한항공 / 직급 라아아아아앙
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img src={iconSettingImage} />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </header>
        <div className="LNB">
          <div className="LNB_side">
            <ul className="LNB_list">
              <li>
                <a className="up-icon active" href="javascript:void(0);">
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
                    <a href="#">Report List</a>
                  </li>
                </ul>
              </li>
              <li className="active">
                <a href="javascript:void(0);">안전정책</a>
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
                <a href="#" className="active">
                  관리자
                </a>
                <ul className="mu-2depth">
                  <li className="">
                    <a href="">HAZARD 관리</a>
                    <ul className="mu-3depth">
                      <li className="active">
                        <a href="">Taxonomy</a>
                      </li>
                      <li>
                        <a href="">Potential Consequence</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">EVENT TYPE 관리</a>
                  </li>
                  <li>
                    <a href="#">RISK MATRIX 관리</a>
                  </li>
                  <li className="active">
                    <a href="#">RSR 관리</a>
                    <ul className="mu-3depth">
                      <li className="active">
                        <a href="">장비코드 관리</a>
                      </li>
                      <li>
                        <a href="">장비점검 관리</a>
                      </li>
                      <li>
                        <a href="">입력항목 관리</a>
                      </li>
                      <li>
                        <a href="">대시보드 관리</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="contents">
          <div className="contents-box">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
