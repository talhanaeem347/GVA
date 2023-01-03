import validator from "validator";
export const isEmail = (email: string) => validator.isEmail(email);
export const isPassword = (password: string) =>
  validator.isStrongPassword(password);
export const isEmpty = (str: string) => validator.isEmpty(str);
export const isEqual = (str1: string, str2: string) =>
  validator.equals(str1, str2);
