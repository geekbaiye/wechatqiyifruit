Page({

 
  data: {

  },

  onLoad: function (options) {
    wx.login({
      success:(res)=>{
        const userCode=res.code;
        if(userCode){ 
          wx.request({
            url: 'http://47.115.152.5:8080/wechat/code2Session.do',
            data:{
             // encryptedData:user_eData,
             // iv:user_iv,
              code:userCode
          },
            header: {
              'content-type': 'application/json' 
          },
            method:'GET',
            success:(res)=>{
              //console.log(res.data.data.openid);
             // console.log(res.data.data.session_key);
              wx.setStorageSync('openid', res.data.data.openid);
              wx.setStorageSync('session_key', res.data.data.session_key);
          },
            fail:(res)=>{
              console.log(res);
          }
          
        })}
        
      }
    })/*
    wx.getUserInfo({
      success:function(res){
        if(res.detail){
          const {userInfo}=res.detail;//不加判断就会出错  es6解构赋值  获取用户信息
        console.log(userInfo);
        wx.setStorageSync('userinfo', userInfo);
        }
        
      }
    })*/
  },
  myLogin:function(e){//获取用户信息
    const {userInfo}=e.detail;//es6解构赋值  获取用户信息
    //console.log(userInfo);
    wx.setStorageSync('userinfo', userInfo);
}
  
})