export function isvalidUsername(str) {
  const validMap = ["admin", "editor"];
  return validMap.indexOf(str.trim()) >= 0;
}

export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  return urlregex.test(textval);
}

export function validateLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

export function validateAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

export function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function checkFbagIdFormat(rule, value, callback) {
  let regNumber = /^[0-9]*$/;
  if (value === "") {
    callback(new Error("请输入包ID"));
  } else if (!regNumber.test(value)) {
    callback(new Error("包ID必须为纯数字"));
  } else {
    callback();
  }
}

export function checkInputIsNumber(rule, value, callback) {
  let regNumber = /^[0-9]*$/;
  if (value === "") {
    callback(new Error("您输入的类型必须为纯数字"));
  } else if (!regNumber.test(value)) {
    callback(new Error("您输入的类型必须为纯数字"));
  } else {
    callback();
  }
}

export function checkCdnPrefix(rule, value, callback) {
  const cdnReg = /^(https?):\/\/[a-zA-Z0-9.-]+/;
  if (!cdnReg.test(value)) {
    callback(new Error("您输入的必须以http(s)://开头"));
  } else {
    callback();
  }
}

export function checkPriceFormat(rule, value, callback) {
  let regNumber = /^[0-9]*$/;
  if (value === "") {
    callback(new Error("价格不能为空"));
  } else if (!regNumber.test(value)) {
    callback(new Error("价格必须为纯数字"));
  } else {
    callback();
  }
}

export function checkDurationFormat(rule, value, callback) {
  let regNumber = /^[0-9]*$/;
  if (value === "") {
    callback(new Error("会员天数不能为空"));
  } else if (!regNumber.test(value)) {
    callback(new Error("会员天数必须为纯数字"));
  } else {
    callback();
  }
}

export function checkGoodsId(rule, value, callback) {
  let regNumber = /^[0-9]*$/;
  if (value === "") {
    callback(new Error("请输入商品ID"));
  } else if (!regNumber.test(value)) {
    callback(new Error("商品ID必须为纯数字"));
  } else {
    callback();
  }
}

export function joinImageUrl(url = "") {
  let urlPrefix = "";
  if (url.includes("http")) {
    urlPrefix = url.substr(-1) === "/" ? url : url + "/";
  } else {
    urlPrefix =
      url.substr(-1) === "/" ? "http://" + url : "http://" + url + "/";
  }
  return urlPrefix;
}
