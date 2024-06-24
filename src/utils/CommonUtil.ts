import _ from 'lodash';

// 개행 분자를 <br/> 태그로 변환
const convertEnterStringToBrTag = function (value) {
  return value.replace(/\\r\\n|\r\n|\n|\\n/g, '<br/>');
};

// text 하이라이트 처리
const replaceHighlightMarkup = function (text, highlightText) {
  let resultMarkup = text;
  if (text && highlightText) {
    highlightText = _.escapeRegExp(highlightText);
    const highlightRegExp = new RegExp(highlightText, 'g');
    resultMarkup = text.replace(highlightRegExp, `<span class="publish-table-highlight">${highlightText}</span>`);
  }
  return resultMarkup;
};

export default { convertEnterStringToBrTag, replaceHighlightMarkup };
