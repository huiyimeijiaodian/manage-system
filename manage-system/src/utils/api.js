let api = {
  isProEnv() {
    // 是否正式环境
    // const testHostName = ["localhost", "test", "jamie", "kiter"];
    const hostName = window.location.host;
    return hostName === "kefu.youban.com" ? true : false;
  },
  // 判断是否微信环境
  isWechat() {
    let ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == "micromessenger";
  },
  // 根据时间戳返回时间格式 2018-07-07 12:58
  formatTime(timestamp, showHour = false, showSecond = false) {
    var date = new Date(timestamp * 1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    let hourTimeArr = showSecond ? [hour, minute, second] : [hour, minute];
    var time = [year, month, day].map(this.formatNumber).join("-");
    time += showHour
      ? " " + hourTimeArr.map(this.formatNumber).join(":")
      : "";
    return time;
  },
  formatNumber(n) {
    n = n.toString();
    return n[1] ? n : "0" + n;
  },
  // 根据秒数返回时间格式：1分45秒
  formatMinuteSecond(time = 0) {
    // var timeStr = "";
    let timeStr =
      parseInt(time / 60) + "分" + this.formatNumber(time % 60) + "秒";
    return timeStr;
  },
  // 上传日志
  wlog(param) {
    new Image().src =
      "//uploadlog.youban.com/weblog.php?" + param + "&t=" + Math.random();
  },
  // 读cookie
  getCookie(name) {
    var v = window.document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
  },
  // 写cookie
  setCookie(name, value, days = 7) {
    var d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    window.document.cookie =
      name + "=" + value + ";path=/;expires=" + d.toGMTString();
  },
  // 读本地存储
  getLocalStorage(name) {
    return window.localStorage.getItem(name);
  },
  // 写本地储存
  setLocalStorage(name, value) {
    window.localStorage.setItem(name, value);
  },
  removeLocalStorage(name) {
    localStorage.removeItem(name);
  },
  // 获取url参数值
  getQueryString(name) {
    var url = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var newUrl = window.location.search.substr(1).match(url);
    if (newUrl != null) {
      return unescape(newUrl[2]);
    } else {
      return false;
    }
  },
  // 替换textarea中的换行符
  text2Html(str){
    return str.replace(/\n/g,"<br />");
  }
};
export default api;
