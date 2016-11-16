/**
 * Created by Administrator on 2016/11/7 0007.
 */
var blogsave=document.getElementById("blogsave");
var button=document.getElementById("button");

$("#button").click(function (e) {
    e.preventDefault();

    $.post("/index/register", {
    }).done(function (data) {
        console.log(data);

        
    })
});