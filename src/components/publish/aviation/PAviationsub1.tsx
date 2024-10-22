import { useEffect, useState } from 'react';
import { useStore } from 'zustand';
import useAppStore from '@/store/useAppStore';
import AppSelect from '@/components/common/AppSelect';
import mainphoto from '@/resources/images/av-img.jpg';
import mainphoto2 from '@/resources/images/img.jpg';
import chartasr from '@/resources/images/icon_asr.svg';
import chartmsr from '@/resources/images/MSR-box.svg';
import Slider from 'react-slick';

function PAviationsub1() {
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
      <div className="h3-tit">Air Safety Report</div>
      <div className="av-submain-wrap">
        <div className="av-area">
          <div className="av-box">
            <div className="tit-wrap">Air Safety Report</div>
            <a href="javascript:void(0);">
              <i className="icon-img">
                <img src={chartasr} className="" alt="ASR" />
              </i>
            </a>
          </div>
        </div>
        <div className="av-area">
          <div className="av-box">
            <div className="tit-wrap">객실안전보고서</div>
            <a href="javascript:void(0);">
              <i className="icon-img">
                <img src={chartasr} className="" alt="ASR" />
              </i>
            </a>
          </div>
        </div>
        <div className="av-area">
          <div className="av-box">
            <div className="tit-wrap">정비안전보고서</div>
            <a href="javascript:void(0);">
              <i className="icon-img">
                <img src={chartasr} className="" alt="ASR" />
              </i>
            </a>
          </div>
        </div>
        <div className="av-area">
          <div className="av-box">
            <a href="javascript:void(0);">
              <div className="tit-wrap">지상안전보고서</div>
              <i className="icon-img">
                <img src={chartasr} className="" alt="ASR" />
              </i>
            </a>
          </div>
        </div>
        <div className="av-area">
          <div className="av-box">
            <a href="javascript:void(0);">
              <div className="tit-wrap">운항관리사안전보고서</div>
              <i className="icon-img">
                <img src={chartasr} className="" alt="ASR" />
              </i>
            </a>
          </div>
        </div>
        <div className="av-area">
          <div className="av-box">
            <a href="javascript:void(0);">
              <div className="tit-wrap">램프안전보고서</div>
              <i className="icon-img">
                <img src={chartasr} className="" alt="ASR" />
              </i>
            </a>
          </div>
        </div>
        <div className="av-area">
          <div className="av-box">
            <a href="javascript:void(0);">
              <div className="tit-wrap">FOQA</div>
              <i className="icon-img">
                <img src={chartasr} className="" alt="ASR" />
              </i>
            </a>
          </div>
        </div>
        <div className="av-area">
          <div className="av-box">
            <div className="tit-wrap">Hazard Report</div>
            <a href="javascript:void(0);">
              <i className="icon-img">
                <img src={chartasr} className="" alt="ASR" />
              </i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PAviationsub1;
