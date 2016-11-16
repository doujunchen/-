/**
 * Created by Administrator on 2016/11/11 0011.
 */

(function () {

    $("#push").submit(function (e) {
        e.preventDefault();

        var name=this['name'].value;
        var date = this['date'].value;
        var amount = this['amount'].value;
        var boole = this['boole'].value;

        console.log(name,date,amount,boole);

        $.post("/users/money", {
            name:this['name'].value,
            date :this['date'].value,
            amount : this['amount'].value,
            boole : this['boole'].value
        }).done(function (data) {
            console.log(data);

            // for(var i=0;i<res.body.name.length;i++){
            //     var tds=res.body.name[1];
            //     console.log(tds)
            // }
            // $("#show").find(".trs").html(name);
            $("#show").find(".name").html(name);
            $("#show").find(".date").html(date);
            $("#show").find(".amount").html(amount);
            if(boole==0){
            $("#show").find(".boole").html("是");
            }else($("#show").find(".boole").html("否"))
        }).fail(function () {
            alert("无法连接");
        });
    });
})();