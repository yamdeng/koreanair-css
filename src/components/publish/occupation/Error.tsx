import { useState, useEffect } from 'react';
import { useStore } from 'zustand';
import useAppStore from '@/store/useAppStore';

function Error() {
  const { setIsAviationPortal } = useStore(useAppStore, (state) => state) as any;

  useEffect(() => {
    setIsAviationPortal(true);
    return () => {
      setIsAviationPortal(false);
    };
  }, []);
  return (
    <>
      <div className="error-box">
        <ul>
          <li>dsfdsfds</li>
          <li className="tit">페이지를 찾을 수 없습니다.</li>
          <li>요청하신 페이지를 찾을 수 없습니다.</li>
          <li>다시 시도해 주세요.</li>
          <li>
            <button>Home 버튼</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Error;
