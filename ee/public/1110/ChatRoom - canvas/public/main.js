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


    var canvas=document.getElementById("canvas");
    var cxt=canvas.getContext("2d");
    var button=document.getElementById("button");
    var button1=document.getElementById("button1");

    var flag=false;
    //鼠标按下
    canvas.onmousedown= function (e) {
        var mouseX= e.pageX-this.offsetLeft;
        var mouseY= e.pageY-this.offsetTop;
        flag=true;
        cxt.beginPath();
        cxt.moveTo(mouseX,mouseY);
    };
    //鼠标移动
    canvas.onmousemove= function (e) {
        var mouseX= e.pageX-this.offsetLeft;
        var mouseY= e.pageY-this.offsetTop;
        if(flag){
            cxt.lineTo(mouseX,mouseY);
            cxt.stroke();
        }
    };
    //鼠标松开
    canvas.onmouseup= function (e) {
        flag=false;
    };

    var storage = localStorage;
    var img=document.createElement("img");

    button.addEventListener("click",function () {
        var url=canvas.toDataURL();
        console.log(url);
        storage.setItem("data",url);

        img.src=url;
        console.log(img);
        // document.body.appendChild(img)
    });
    function load() {
        // console.log(img);
        img.src = storage.getItem("data");
        cxt.drawImage(img,0,0,400,300);
    }

    //-----------------------------------------------
    //发送到服务器
    button.addEventListener("click", function (e) {
        e.preventDefault();

        var url=canvas.toDataURL();
        storage.setItem("data",url);
        img.src=url;
        socket.emit("chat", {
            Url:url
        });
    });
    button1.addEventListener("click", function (e) {
        e.preventDefault();
        cxt.clearRect(0,0,400,300);
        // localStorage.clear();
        var url=canvas.toDataURL();
        storage.setItem("data",url);
        console.log(url);
        // img.src=url;
        socket.emit("chat", {
            Url:url
        });
    });
    //侦听chat事件，服务器端发送过来的
    socket.on("chat", function (data) {
        img.src = storage.getItem("data");
        cxt.drawImage(img,0,0,400,300);
    });



    window.onload=load();

})();