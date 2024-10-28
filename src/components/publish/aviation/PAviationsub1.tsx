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
import dsrimg from '@/resources/images/icon_dsr.svg';
import rsrimg from '@/resources/images/icon_rsr.svg';
import foqaimg from '@/resources/images/icon_foqa.svg';
import hrimg from '@/resources/images/icon_hr.svg';

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
      <div className="av-submain">
        <div className="av-submain-bg">
          <div className="av-submain-wrap">
            <div className="h3-tit">Safety Report</div>
            <div className="line-bg">
              <div className="img bounce-in-left"></div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Air Safety Report</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={asrimg} className="" alt="ASR" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Canin Safety Report</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={csrimg} className="" alt="CSR" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Maintenance Safety Report</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={msrimg} className="" alt="MSR" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Ground Safety Report</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={gsrimg} className="" alt="GSR" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Dispatcher Safety Report</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={dsrimg} className="" alt="DSR" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Ramp Safety Report</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={rsrimg} className="" alt="RSR" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">FOQA</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={foqaimg} className="" alt="FOQA" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Hazard Report</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={hrimg} className="" alt="HRD" />
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

export default PAviationsub1;
