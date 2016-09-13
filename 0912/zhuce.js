/**
 * Created by Administrator on 2016/9/12 0012.
 */
(function () {
    
    var form=document.createElement("form");
    document.body.appendChild(form);

    var name=document.createElement("input");
    name.type="text";
    form.appendChild(name);

    var password=document.createElement("input");
    password.type="password";
    form.appendChild(password);

    var tel=document.createElement("input");
    tel.type="tel";
    form.appendChild(tel);

    var email=document.createElement("input");
    email.type="email";
    form.appendChild(email);

    var a=document.createElement("input");
    email.type="text";
    form.appendChild(a);
    var aa=document.createElement("div");
    form.appendChild(aa);

    var sub=document.createElement("input");
    sub.type="submit";
    form.appendChild(sub);

    var i=1;
    for(i=1;i<=4;i++)
    {
        var strRadom=Math.floor(Math.random() * 100) +1;

        aa.innerHTML=String.fromCharCode(strRadom);
        // var y=String.fromCharCode(strRadom);
        // var z=String.fromCharCode(strRadom);
        // var v=String.fromCharCode(strRadom);
    }



sub.onclick=function () {


    if (a.value==x){
        alert("right")
    }else {
        alert("wrong")
    }
}
})();