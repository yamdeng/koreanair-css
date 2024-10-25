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
import gsrinspectionimg from '@/resources/images/icon_gsr_inspection.svg';
import gsrpaximg from '@/resources/images/icon_gsr_pax.svg';
import gsrcargoimg from '@/resources/images/icon_gsr_cargo.svg';

import dsrimg from '@/resources/images/icon_dsr.svg';
import rsrimg from '@/resources/images/icon_rsr.svg';
import foqaimg from '@/resources/images/icon_foqa.svg';
import hrimg from '@/resources/images/icon_hr.svg';

function PAviationsub3() {
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
              <span className="tit-color">GSR</span> Safety Report
            </div>
            <div className="line-bg">
              <div className="img bounce-in-left"></div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Damage</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={gsrdamageimg} className="" alt="Damage" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Inspection</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={gsrinspectionimg} className="" alt="Inspection" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">PAX Handing IRR</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={gsrpaximg} className="" alt="PAX" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Cargo Handing IRR</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={gsrcargoimg} className="" alt="Cargo" />
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

export default PAviationsub3;
