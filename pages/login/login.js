// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  myLogin:function(e){
    //console.log(e);
    wx.login({
      success:(res)=>{
        const userCode=res.code;
        console.log(userCode);
        wx.request({
          url: 'http://47.115.152.5:8080/wxlogin/register.do ',
          data:{
            username:"biubiu0002",
            password:"9B5A16E5793982E2A6E112DAA713EA54",
            code:userCode
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          method:'POST',
          success:(res)=>{
            console.log(res);
          }
          
        })
      }
    })
  const {userInfo}=e.detail;//es6解构赋值  获取用户信息
  //console.log(userInfo);
  wx.setStorageSync('userinfo', userInfo);
}
})