import { createStore } from 'zustand';

// currentLocale : 'ko', 'en'
const useUIStore = createStore<any>((set) => ({
  displayLoadingBar: false,

  setDisplayLoadingBar: (displayLoadingBar) => {
    set(() => ({ displayLoadingBar: displayLoadingBar }));
  },
}));

export default useUIStore;
