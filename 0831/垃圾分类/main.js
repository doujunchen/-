/**
 * Created by Administrator on 2016/8/31 0031.
 */
$(function () {

    // $(".aa").draggable(
    //     {revert:true}
    // );
    $(".a").droppable({
            scope:"group1",
            // accept:".bb",
            drop:function () {
            window.console.log("正确");
            $(".c").remove();
        }}
    )
    $(".b").droppable({
             scope:"group2",
        //     accept:".cc",
            drop:function () {
            window.console.log("正确");
            $(".e").remove();}}
    )
    $(".q").droppable({
        scope:"group3",
        //     accept:".cc",
        drop:function () {
            window.console.log("正确");
            $(".h").remove();}}
    )
    $(".bb").draggable(
        {scope:"group1",revert:true,

    }
    )
    $(".cc").draggable(
        {scope:"group2",revert:true,}
    )
    $(".h").draggable(
        {scope:"group3",revert:true,}
    )

});