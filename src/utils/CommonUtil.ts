export const getQueryStringByArray = (parameterName: string, arr: string[]): string => {
  let result = '';

  if (arr && arr.length) {
    for (let arrIndex = 0; arrIndex < arr.length; arrIndex++) {
      const stringValue = arr[arrIndex];
      if (arrIndex === 0) {
        result = result + `?${encodeURIComponent(parameterName)}=` + stringValue;
      } else {
        result = result + `&${encodeURIComponent(parameterName)}=` + stringValue;
      }
    }
  }

  return result;
};
