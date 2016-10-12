/**
 * Created by Administrator on 2016/10/11 0011.
 */
(function () {

    var canvas=document.getElementById("canvas");
    var cxt=canvas.getContext("2d");
    var button=document.getElementById("button");

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
        console.log(img);
        img.src = storage.getItem("data");
        cxt.drawImage(img,0,0,400,300);
    }


    window.onload=load();

})();