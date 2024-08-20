import { useEffect } from 'react';
import { useStore } from 'zustand';
import useAppStore from '@/store/useAppStore';

function PAviationPortal2() {
  const { setIsAviationPortal } = useStore(useAppStore, (state) => state) as any;

  useEffect(() => {
    setIsAviationPortal(true);
    return () => {
      setIsAviationPortal(false);
    };
  }, []);

  return (
    <>
      <div>PAviationPortal2</div>
    </>
  );
}

export default PAviationPortal2;
