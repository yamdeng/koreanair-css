import { useEffect, useState } from 'react';
import { useStore } from 'zustand';
import useAppStore from '@/store/useAppStore';
import AppSelect from '@/components/common/AppSelect';
import mainphoto from '@/resources/images/av-img.jpg';
import mainphoto2 from '@/resources/images/img.jpg';
import inspimg from '@/resources/images/icon_csr_insp.svg';
import depimg from '@/resources/images/icon_csr_depi.svg';
import injimg from '@/resources/images/icon_csr_inj.svg';
import patiimg from '@/resources/images/icon_csr_pati.svg';
import crewpatiimg from '@/resources/images/icon_csr_crewpatiimg.svg';
import crewinjimg from '@/resources/images/icon_csr_crewinj.svg';
import actsimg from '@/resources/images/icon_csr_acts.svg';
import smokingimg from '@/resources/images/icon_csr_smoking.svg';
import maintimg from '@/resources/images/icon_csr_maint.svg';
import othersimg from '@/resources/images/icon_csr_others.svg';

function CabinSafety() {
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
          <div className="av-submain-wrap csr">
            <div className="h3-tit">
              <span className="tit-color">CSR</span> Safety Report
            </div>
            <div className="line-bg">
              <div className="img bounce-in-left"></div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Inspection</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={inspimg} className="" alt="Inspection" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Pax Deplane</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={depimg} className="" alt="Pax Deplane" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Pax Patient</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={patiimg} className="" alt="Pax Patient" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">PAX Injury</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={injimg} className="" alt="PAX Injury" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Crew Patient</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={crewpatiimg} className="" alt="Crew Patient" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Crew Injury</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={crewinjimg} className="" alt="Crew Injury" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Acts of Unlawful Interference</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={actsimg} className="" alt="Acts of Unlawful Interference" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Smoking</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={smokingimg} className="" alt="Smoking" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Maintenance</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={maintimg} className="" alt="Maintenance" />
                  </i>
                </a>
              </div>
            </div>
            <div className="av-area">
              <div className="av-box">
                <div className="tit-wrap">Others</div>
                <a href="javascript:void(0);">
                  <i className="icon-img">
                    <img src={othersimg} className="" alt="Others" />
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

export default CabinSafety;
