import ApiService from '@/services/ApiService';
import CommonUtil from '@/utils/CommonUtil';
import LoadingBar from '@/utils/LoadingBar';
import dayjs from 'dayjs';
import _ from 'lodash';
import { createStore } from 'zustand';

// currentLocale : 'ko', 'en'
const useAppStore = createStore<any>((set, get) => ({
  isOffline: false,
  accessToken: CommonUtil.getByLocalStorage('accessToken') || '',
  refreshToken: CommonUtil.getByLocalStorage('refreshToken') || '',
  isAuthError: false,
  profile: null,
  displayLoadingBar: false,
  isInitComplete: false,
  messageAllList: [],
  codeAllList: [],
  codeAllMap: {},
  currentLocale: 'en',
  apiCacheMap: {},

  setIsOffline: (value) => {
    set({
      isOffline: value,
    });
  },

  setAccessToken: (accessToken) => {
    set({ accessToken: accessToken });
    CommonUtil.saveInfoToLocalStorage('accessToken', accessToken);
  },

  setLoginToken: (accessToken, refreshToken) => {
    CommonUtil.saveInfoToLocalStorage('accessToken', accessToken);
    CommonUtil.saveInfoToLocalStorage('refreshToken', refreshToken);
    set({ accessToken: accessToken, refreshToken: refreshToken });
  },

  getCacheData: (cacheKey) => {
    const { apiCacheMap } = get();
    const cacheData = apiCacheMap[cacheKey];
    if (cacheData) {
      return cacheData;
    } else {
      return null;
    }
  },

  setCacheData: (cacheKey, data) => {
    const { apiCacheMap } = get();
    apiCacheMap[cacheKey] = data;
    set({ formValue: apiCacheMap });
  },

  initApp: async () => {
    LoadingBar.show();
    const { getProfile } = get();

    // TODO : 서버 시간 받기
    const clientNowString = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const serverNowString = '2024-08-17 11:36:01';
    const clientDate = dayjs(clientNowString);
    const serverDate = dayjs(serverNowString);
    const diffInSeconds = serverDate.diff(clientDate, 'second');
    CommonUtil.saveInfoToLocalStorage('serverTimeDiffSecondValue', diffInSeconds);

    try {
      // 프로필 호출
      getProfile();
      const codeApiResult = await ApiService.get('com/code-groups/codes/all', null, { disableLoadingBar: true });
      const messageApiResult = await ApiService.get('com/locales/translation', null, { disableLoadingBar: true });
      const messageAllList = messageApiResult.data ? JSON.parse(messageApiResult.data) : [];
      const codeAllList = codeApiResult.data || [];
      const codeAllMap = _.groupBy(codeAllList, 'codeGrpId');
      set({
        isInitComplete: true,
        messageAllList: messageAllList || [],
        codeAllList: codeAllList,
        codeAllMap: codeAllMap,
      });
    } catch (e) {
      //
    } finally {
      LoadingBar.hide();
    }
  },

  changeLocale: (locale) => {},

  getProfile: async () => {
    const apiResult = await ApiService.get(import.meta.env.VITE_API_URL_PROFILE, null, { disableLoadingBar: true });
    const data = apiResult.data;
    set({ profile: data });
    CommonUtil.saveInfoToLocalStorage('profile', data);
    return data;
  },

  setDisplayLoadingBar: (displayLoadingBar) => {
    set(() => ({ displayLoadingBar: displayLoadingBar }));
  },

  handleUnauthorizedError: (error) => {
    set({ isAuthError: true });
    console.error(error);
  },

  checkAuth: (checkGroupCd, checkedAdmin = false) => {
    const { profile } = get();
    let success = false;
    if (profile) {
      const { groupInfo } = profile;
      if (groupInfo && groupInfo.length) {
        const searchInfo = groupInfo.find((info) => {
          if (info.groupCd === checkGroupCd) {
            if (checkedAdmin) {
              if (info.groupAdminYn === 'Y') {
                return true;
              }
            } else {
              return true;
            }
          }
          return false;
        });
        if (searchInfo) {
          success = true;
        }
      }
    }
    return success;
  },

  logout: () => {
    CommonUtil.saveInfoToLocalStorage('accessToken', '');
    CommonUtil.saveInfoToLocalStorage('refreshToken', '');
    set({ isAuthError: true });
  },
}));

export default useAppStore;
