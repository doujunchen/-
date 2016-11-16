/**
 * Created by plter on 2016/11/10.
 */

(function () {
    //前端通过io连接  ()里面是指定地址（服务器）
    var socket = io(location.origin);

    var chatOut = document.querySelector("#ta-chat-out");
    var chatInputForm = document.querySelector("#form-chat-input");

    //发送到服务器
    chatInputForm.addEventListener("submit", function (e) {
        e.preventDefault();
        //         socket.通过emit发送     第一个参数是事件的类型，第二个是事件所发出去的对象
        //（前端通过.on("news",fn(data))执行回调函数）往服务器端发送的
        socket.emit("chat", {
            name: this['name'].value,
            message: this['chat-input'].value
        });

        this['chat-input'].value = "";
    });
    //侦听chat事件，服务器端发送过来的
    socket.on("chat", function (data) {
        chatOut.innerHTML += data.name + ":\n" + data.message + "\n";
        chatOut.scrollTop = chatOut.scrollHeight;
    });

})();