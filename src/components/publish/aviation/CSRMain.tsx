import { useEffect, useState } from 'react';
import { useStore } from 'zustand';
import useAppStore from '@/store/useAppStore';
import AppSelect from '@/components/common/AppSelect';
import mainphoto from '@/resources/images/av-img.jpg';
import mainphoto2 from '@/resources/images/img.jpg';
import chartasr from '@/resources/images/ASR-box.svg';
import chartmsr from '@/resources/images/MSR-box.svg';
import Slider from 'react-slick';

function CSRMain() {
  const { setIsAviationPortal } = useStore(useAppStore, (state) => state) as any;
  const [rightIconVisible, setRightIconVisible] = useState(false);

  const togglerightIconVisible = () => {
    setRightIconVisible(!rightIconVisible);
  };

  const topRiskSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    setIsAviationPortal(true);
    return () => {
      setIsAviationPortal(false);
    };
  }, []);
  return (
    <>
      {/*nav-is-visible - 펼침 */}
      <div className={rightIconVisible ? 'cd-stretchy-nav nav-is-visible' : 'cd-stretchy-nav'}>
        <a href="javascript:void(0);" className="cd-nav-trigger" onClick={() => togglerightIconVisible()}>
          <span aria-hidden="true"></span>
        </a>
        <ul>
          <li>
            <a href="javascript:void(0);" className="active">
              <span>Safety Repot</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>객실안전보고서</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>장비안전보고서</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>지상안전보고서</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>운항관리안전보고서</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>램프안전보고서</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>FOQA</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>HAZARD</span>
            </a>
          </li>
          {/* <li>
            <a href="javascript:void(0);">
              <span>HAZARD</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>1010</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>1111</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <span>DD</span>
            </a>
          </li> */}
        </ul>

        <span aria-hidden="true" className="stretchy-nav-bg"></span>
      </div>

      <div className="av-main-wrap">
        {/* Top 10 RISK AREAS*/}
        <div className="grid-item">
          <div className="grid-group">
            <div className="head-top">
              <h3>Top 10 Events</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CSRMain;
