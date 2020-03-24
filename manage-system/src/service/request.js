import server from './service.js';
import qs from 'qs';
import {Message} from 'element-ui'
function myServer(){
	this.server = server;
}
myServer.prototype.parseRouter=function(urlOb){
	Object.keys(urlOb).forEach((key)=>{
		this[key] = this.sendRequest.bind(this,key,urlOb[key]);//this.loginIn=...
		this[key].state='ready';
	})
	console.log(this);
}
myServer.prototype.sendRequest = function(name,item,data={}){
	// 参数处理，健壮性
  var type=(typeof item =='object'&&item.type=='get')?'get':'post';
	var url=typeof item =='object'?item.url:item;
	console.log('request:',url,type);
	var self = this;
	//二次封装是为了特异性操作，如加遮罩，发请求统计接口，权限拦截
	// 请求发送前-->请求处理-->请求发送后
	var resBeforeFn = function(response){
		// console.log('请求前处理');
		self[name].state='ready';//重置该接口方法可继续请求
		if (response.status >= 200 && response.status < 300) {
			let data = response.data
			let ucMap={0:'/adminauth/wait-audit',3:data.url,4:'401'};//0-审核中,3-登录失效,4-无权限
			ucMap[data.uc] && (window.location.href=ucMap[data.uc]);
			if (data && data.rc === 0) {
				return data;
			} else {
				Message({
					showClose: true,
					message: data.msg || 'res.msg字段不存在，极有可能是php代码报错',
					duration: 2000,
					type: 'error'
				})
			}
		} else {
			let error = new Error(response.statusText)
			error.status = response.status
			error.error_message = response.data
			return Promise.reject(error)
		}
	};
	var reqMethodObj = { //适配器模式
		get:function(){
			var urlqs = url + "?" +qs.stringify(data);//get使用表单提交
			return server.get(urlqs).then(resBeforeFn);
		},
		post:function(){ //post使用json格式提交
			return server.post(url,data).then(resBeforeFn);
		}
	}
	// console.log('状态',self[modulName][name].state);
	if(self[name].state=='ready'){//防止请求未结束重复操作
		self[name].state='pending';
		return reqMethodObj[type]();
	}else{
		return new Promise((resolve)=>{
			resolve({rc:1,msg:'sending request'});
		})
	}
}
export default new myServer;