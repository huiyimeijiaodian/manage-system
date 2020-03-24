import dayJs from "dayjs";

export function formatTime(timestamp) {
  if (!timestamp) {
    return 0;
  }
  return dayJs(timestamp * 1000).format("YYYY-MM-DD HH:mm:ss");
}

/*
 * 格式化时间为年月日
 */
export function formatDate(timestamp) {
  if (!timestamp) {
    return 0;
  }
  return dayJs(timestamp * 1000).format("YYYY/MM/DD");
}

export function formatBirthday(timestamp) {
  if (!timestamp) {
    return 0;
  }
  return dayJs(timestamp * 1000).format("YYYY-MM-DD");
}

export function formatTimeAndDay(timestamp) {
  if (!timestamp) {
    return 0;
  }
  let str = dayJs(timestamp * 1000).format("YYYY-MM-DD");
  let day = dayJs(timestamp * 1000).day();
  let dayTamp = "";
  switch (day) {
    case 0:
      dayTamp = "周日";
      break;
    case 1:
      dayTamp = "周一";
      break;
    case 2:
      dayTamp = "周二";
      break;
    case 3:
      dayTamp = "周三";
      break;
    case 4:
      dayTamp = "周四";
      break;
    case 5:
      dayTamp = "周五";
      break;
    case 6:
      dayTamp = "周六";
      break;
    default:
      dayTamp = "";
  }
  return str + "  " + dayTamp;
}

export function formatTimeAndMonth(timestamp) {
  if (!timestamp) {
    return 0;
  }
  const month = dayJs(timestamp * 1000).month() + 1;
  const year = dayJs(timestamp * 1000).year();
  let days = 100;
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    days = 31;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30;
  } else {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      days = 29;
    } else {
      days = 28;
    }
  }
  const dayStart = dayJs(timestamp * 1000).format("YYYY/MM/DD");
  const dayEnd = dayJs(
    timestamp * 1000 + (days - 1) * 24 * 60 * 60 * 1000
  ).format("YYYY/MM/DD");
  return dayStart + " - " + dayEnd;
}

export function formatTimeDiff(timestamp) {
  if (!timestamp) {
    return "缺少对应字段";
  }
  let result = "";
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = month * 12;
  const now = new Date().getTime();
  const diffValue = now - timestamp * 1000;
  if (diffValue < 0) {
    console.log("本地时间比服务器时间慢")
    return "刚刚";
  }
  const yearC = diffValue / year;
  const monthC = diffValue / month;
  const weekC = diffValue / (7 * day);
  const dayC = diffValue / day;
  const hourC = diffValue / hour;
  const minC = diffValue / minute;
  if (weekC >= 1) {
    result = dayJs(timestamp * 1000).format("YY/M/D");
  } else if (dayC >= 1) {
    result = parseInt(dayC, 10) + "天前";
  } else if (hourC >= 1) {
    result = parseInt(hourC, 10) + "小时前";
  } else if (minC >= 1) {
    result = parseInt(minC, 10) + "分钟前";
  } else {
    result = "刚刚";
  }
  return result;
}

export function formatNumberAddPercent(number) {
  if (!number || isNaN(number) || number === Infinity) {
    return 0;
  }
  return Math.floor(number.toFixed(3) * 1000) / 10 + "%";
}

export function formatNumberAddMoney(number) {
  if (!number || isNaN(number) || number === Infinity) {
    return 0;
  }
  return "￥" + number.toFixed(2);
}

// 根据类型返回时间戳
export function formatTimeType(timestamp, formatType = "YYYY-MM-DD") {
  // if (!timestamp) {
  //   return 0;
  // }
  return dayJs(timestamp * 1000).format(formatType);
}

// 内容包类型过滤器
export function bagTypeFilter(type) {
  let str = "";
  switch (type) {
    case 1:
      str = "歌舞";
      break;
    case 2:
      str = "故事";
      break;
    case 4:
      str = "宝箱";
      break;
    case 5:
      str = "学堂";
      break;
    case 6:
      str = "主题";
      break;
    case 9:
      str = "经典";
      break;
    case 11:
      str = "玩具箱";
      break;
    case 12:
      str = "音频";
      break;
    default:
      str = type;
  }
  return str;
}
// 内容包类型过滤器
export function buyWayFilter(type) {
  let str = "";
  switch (type) {
    case 1:
      str = "支付宝支付";
      break;
    case 2:
      str = "AppStore";
      break;
    case 10:
      str = "支付宝插件";
      break;
    case 11:
      str = "微信支付";
      break;
    case 12:
      str = "OPPO支付";
      break;
    case 30:
      str = "公众号支付";
      break;
    case 31:
      str = "华为支付";
      break;
    case 32:
      str = "小程序支付";
      break;
    case 33:
      str = "微信扫码支付";
      break;
    case 34:
      str = "暴风支付支付宝";
      break;
    case 35:
      str = "暴风支付微信";
      break;
    case 36:
      str = "暴风支付金币";
      break;
    case 72:
      str = "支付宝扫码支付";
      break;
    default:
      str = "其他未知支付";
  }
  return str;
}

export function orderBuyDeviceType(type) {
  let str = "";
  switch (type) {
    case 0:
      str = "iPhone";
      break;
    case 1:
      str = "安卓";
      break;
    case 3:
      str = "ipad";
      break;
    case 4:
      str = "微信";
      break;
    default:
      str = "其他设备类型";
  }
  return str;
}

export function formatPrice(val) {
  var val = Number(val);
  var valInt = "";
  var valDecimal = "";
  if (isNaN(val)) {
    return "No a Number";
  } else {
    if (val.toString().indexOf(".") !== -1) {
      val = Number(val.toFixed(2));
      valInt = val.toString().slice(0, val.toString().indexOf("."));
      valDecimal = val.toString().slice(val.toString().indexOf("."));
    } else {
      valInt = val.toString();
    }
    var sliceArr = [];
    while (valInt.length > 0) {
      if (valInt.length > 3) {
        sliceArr.unshift(valInt.slice(valInt.length - 3));
        valInt = valInt.slice(0, valInt.length - 3);
      } else {
        sliceArr.unshift(valInt);
        valInt = "";
      }
    }
    return sliceArr.join(",") + valDecimal;
  }
}
