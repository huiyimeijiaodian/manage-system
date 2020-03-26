//第一种写法，只有路径默认get
//第二种写法，type不配置也默认get
//第三种写法，可配置type:post/get
import login from './httpApi/login.js';
import user from './httpApi/user.js';
import myServer from "./request.js";
myServer.parseRouter('login',login);
myServer.parseRouter('user',user);
export default myServer;