/**
 * Created by Administrator on 2016/10/28 0028.
 */

//浏览器是否支持 通知 Notification 如果有就是支持
if (Notification) {
    // alert("支持")

//    用户有没有允许弹出(default不允许,granted允许)
    console.log(Notification.permission);
//    请求用户授权  需要一个回调方法，得到一个状态的字符串
    Notification.requestPermission(function (status) {
        console.log(status);
        // 更新 通知的授权状态
        Notification.permission = status;
    });
//    创建通知的构造函数
//    Notification(title，ops)
//     var config = {
//         body: "明天周末!", tag: 0, dir: 'rtl', alert: "1.mp3", silent: true,// vibrate:[100,50,300]}; icon: "icon.png",
//         noscreen: true, renotify: true
//     };
//     var not = new Notification("您的余额不足，请充值", config);
//     not.onclick = function () {
//         alert("onclick");
//         this.close();
//     };
//     not.onShow = function () {
//         alert("show")
//     }
} else {
    alert("不支持")
}

var content=decodeURIComponent(location.search).replace("?","");
document.querySelector("#content").textContent=content;