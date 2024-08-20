import { createStore } from 'zustand';

// currentLocale : 'ko', 'en'
const useAppStore = createStore<any>((set, get) => ({
  isAviationPortal: false,

  setIsAviationPortal: (isAviationPortal) => {
    set({ isAviationPortal: isAviationPortal });
  },
}));

export default useAppStore;
