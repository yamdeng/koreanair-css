import { useEffect, useState } from 'react';
import { useStore } from 'zustand';
import useAppStore from '@/store/useAppStore';
import AppSelect from '@/components/common/AppSelect';
import mainphoto from '@/resources/images/av-img.jpg';
import mainphoto2 from '@/resources/images/img.jpg';
import asrimg from '@/resources/images/icon_asr.svg';
import csrimg from '@/resources/images/icon_csr.svg';
import msrimg from '@/resources/images/icon_msr.svg';
import gsrimg from '@/resources/images/icon_gsr.svg';
import gsrdamageimg from '@/resources/images/icon_gsr_damage.svg';
import aocimg from '@/resources/images/icon_msr_aoc.svg';
import amoimg from '@/resources/images/icon_msr_amo.svg';
import gsrcargoimg from '@/resources/images/icon_gsr_cargo.svg';

function PAviationsub4() {
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
      <div className="av-submain">
        <div className="av-submain-bg">
          <div className="av-submain-wrap gsr">
            <div className="h3-tit">
              <span className="tit-color">MSR</span> Safety Report
            </div>
            <div className="line-bg">
              <div className="img bounce-in-left"></div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">
                  AOC<span className="sub-tit">자사정비(항공기,엔진,부품)</span>
                </div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={aocimg} className="" alt="AOC" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">
                  AMO<span className="sub-tit">수주 정비 (항공기,엔진,부품)</span>
                </div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={amoimg} className="" alt="AMO" />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PAviationsub4;
