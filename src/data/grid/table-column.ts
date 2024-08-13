import _ from 'lodash';

export const testColumnKeyList = [
  'id',
  '문서번호',
  'position',
  'name',
  '1차위험도평가',
  'deptName',
  'sex',
  'createdDate',
  'updatedDate',
  'email',
  'age',
  'jobArea',
  'phone',
  'address1',
  'address2',
  'startDate',
  'endDate',
  'addressInfo',
  'airlineInfo',
  'userList',
];

export const testSimpleColumnKeyList = ['id', 'sabun', 'position', 'name', 'nameEn', 'deptName'];

export const userSimpleColumnKeyList = [
  'id',
  'name',
  'nameEn',
  'createDate',
  'updateDate',
  'positionTitle',
  'positionTitleEn',
];

export const userColumnKeyList = [
  'id',
  'createUserId',
  'updateUserId',
  'createDate',
  'updateDate',
  'isDelete',
  'name',
  'nameEn',
  'sabun',
  'deptId',
  'positionTitle',
  'positionTitleEn',
  'phoneNumber',
  'companyTel',
  'email',
  'address',
  'addressDetail',
  'zipCode',
  'joinDate',
  'status',
];

export const testColumnInfos: any = testColumnKeyList.map((keyName) => {
  return {
    field: keyName,
    headerName: _.capitalize(keyName),
  };
});

export const testSimpleColumnInfos: any = testSimpleColumnKeyList.map((keyName) => {
  return {
    field: keyName,
    headerName: _.capitalize(keyName),
  };
});

export const usersSimpleColumnInfos: any = userSimpleColumnKeyList.map((keyName) => {
  return {
    field: keyName,
    headerName: _.capitalize(keyName),
  };
});

export const userColumnInfos: any = userColumnKeyList.map((keyName) => {
  return {
    field: keyName,
    headerName: _.capitalize(keyName),
  };
});
