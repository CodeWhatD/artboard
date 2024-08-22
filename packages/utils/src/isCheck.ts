/**
 * 验证是否是邮箱
 */
export const isEmail = (s: string) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    s
  );
};
/**
 * 验证是否是手机号
 */
export const isMobile = (s: string) => {
  return /^1[0-9]{10}$/.test(s);
};
/**
 * 验证是否是电话号码
 */
export const isPhone = (s: string) => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
};
/**
 * 验证是否URL
 */
export const isURL = (s: string) => {
  return /^http[s]?:\/\/.*/.test(s);
};
/**
 * 验证是否数字
 */
export const isNumber = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Number";
};
/**
 * 验证是否boolean
 */
export const isBoolean = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Boolean";
};
/**
 * 验证是否函数
 */
export const isFunction = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Function";
};
/**
 * 验证是否null
 */
export const isNull = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Null";
};
/**
 * 验证是否undefined
 */
export const isUndefined = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Undefined";
};
/**
 * 验证是否Object
 */
export const isObject = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Object";
};
/**
 * 验证是否Array
 */
export const isArray = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Array";
};
/**
 * 验证是否Date
 */
export const isDate = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Date";
};
/**
 * 验证是否RegExp
 */
export const isRegExp = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "RegExp";
};
/**
 * 验证是否Error
 */
export const isError = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Error";
};
/**
 * 验证是否Symbol
 */
export const isSymbol = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Symbol";
};
/**
 * 验证是否Promise
 */
export const isPromise = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Promise";
};
/**
 * 验证是否Set
 */
export const isSet = (o: any) => {
  return Object.prototype.toString.call(o).slice(8, -1) === "Set";
};
