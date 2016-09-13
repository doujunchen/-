/**
 * Created by Administrator on 2016/9/12 0012.
 */
(function () {

    var form=document.createElement("form");
    document.body.appendChild(form);
    var aa=document.createElement("input");
    aa.type="range";
    aa.value=0;
    aa.min=0;
    aa.max=255;

    form.appendChild(aa);

    var a=document.createElement("input");
    a.type="text";
    a.style.display="block";
    form.appendChild(a);



    var bb=document.createElement("input");
    bb.type="range";
    bb.value=0;
    bb.min=0;
    bb.max=255;


    form.appendChild(bb);

    var b=document.createElement("input");
    b.type="text";
    b.style.display="block";
    form.appendChild(b);


    var cc=document.createElement("input");
    cc.type="range";
    cc.value=0;
    cc.min=0;
    cc.max=255;


    form.appendChild(cc);

    var c=document.createElement("input");
    c.type="text";
    c.style.display="block";
    form.appendChild(c);

    oninput=function () {
        var avalue=aa.value;
        var bvalue=bb.value;
        var cvalue=cc.value;
        a.value=avalue;b.value=bvalue; c.value=cvalue;
        console.log(avalue);console.log(bvalue); console.log(cvalue);
        // document.body.style.background="rgb(2,2,56)";
        document.body.style.background="rgb("+avalue+","+bvalue+","+cvalue+")";
    };
    // onchange=function () {
    //     var avalue=aa.value;
    //     var bvalue=bb.value;
    //     var cvalue=cc.value;
    //
    //    
    //     document.body.style.background="rgb(0,67,0)"
    // };
    // onchange=function () {
    //     var avalue=aa.value;
    //     var bvalue=bb.value;
    //     var cvalue=cc.value;
    //
    //   
    //     document.body.style.background="rgb(0,0,129)"
    // };






    // var bb=$(aa).clone(true).appendTo($("form"));
    // var b=$(a).clone().appendTo($("form"));

    // var bb=$("form").clone(true).appendTo($("body"));

    // console.log(bb.value)




})();