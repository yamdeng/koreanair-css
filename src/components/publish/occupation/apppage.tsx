import { useState, useEffect } from 'react';
import { useStore } from 'zustand';
import useAppStore from '@/store/useAppStore';

function apppage() {
  const { setIsAviationPortal } = useStore(useAppStore, (state) => state) as any;

  useEffect(() => {
    setIsAviationPortal(true);
    return () => {
      setIsAviationPortal(false);
    };
  }, []);
  return (
    <>
      <div className="app-box">
        <ul>
          <li className="top-logo">
            SafeNet<div className="plus_icon">+</div>
          </li>
          <li>요청하신 페이지를 찾을 수 없습니다.</li>
        </ul>
      </div>
    </>
  );
}

export default apppage;
