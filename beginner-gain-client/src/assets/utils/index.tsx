import React from 'react';
import { isArray, isObject } from "util";

export const emailCheck = (param: string) => {
  const mailformat = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  return param.match(mailformat);
};

export const toCamel = (s: string): string => {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

export const toSnakeCase = (str: string): string =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const keysToCamel = (o: any): any => {
  if (isArray(o)) {
    return o.map((i) => {
      return keysToCamel(i);
    });
  }
  if (isObject(o)) {
    const n: any = {};
    Object.keys(o).forEach((k) => {
      n[toCamel(k)] = keysToCamel(o[k]);
    });
    return n;
  }
  return o;
};

export const camelToKeys = (o: any): any => {
  if (isArray(o)) {
    return o.map((i) => {
      return camelToKeys(i);
    });
  }
  if (isObject(o)) {
    const n: any = {};
    Object.keys(o).forEach((k) => {
      n[toSnakeCase(k)] = camelToKeys(o[k]);
    });
    return n;
  }
  return o;
};

export const validatePassword = (password: string): boolean => {
  // 최소 9자 이상인지 확인
  if (password.length < 9) {
    return false;
  }

  // 적어도 하나의 특수 문자가 있는지 확인
  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (!specialCharacters.test(password)) {
    return false;
  }

  // 모든 조건을 충족하면 유효한 비밀번호로 간주
  return true;
};
