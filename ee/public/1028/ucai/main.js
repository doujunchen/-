/**
 * Created by Administrator on 2016/10/28 0028.
 */
(function () {


    $(window).on("load resize",function () {
        $(document.body).css("font-size",14*(screen.width/992)+"px");
        console.log($(document.body).css("font-size"));
    });



})();