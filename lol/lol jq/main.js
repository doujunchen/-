/**
 * Created by Administrator on 2016/9/5 0005.
 */
$(function () {

    var center,left,right,img,li1,center1,small,div1,div2,lis,boox,
    center=$("<div></div>");
    center.addClass("center");
    $("#header").append(center);

    left=$("<div></div>");
    left.addClass("left");
    center.append(left);
    img=$("<a href='#'></a>");
    left.append(img);


    right=$("<ul></ul>");
    right.addClass("right");
    center.append(right);

    li1=$("<li><h5>游戏首页</h5><p>H/ME</p></li>" +
        "<li><h5>游戏资料</h5><p>GAME INFO</p></li>" +
        "<li><h5>商城合作</h5><p>STORE</p></li>" +
        "<li><h5>用户互动</h5><p>COMMUNITY</p></li>" +
        "<li><h5>赛事中心</h5><p>EVENTS</p></li>" +
        "<li><h5>自助系统</h5><p>SYSTEM</p></li>" +
        "<li><h5>个人中心</h5><p>USER CENTER</p></li>").appendTo(right);
    li1.css("float","left");

//    大图部分
    $("#second").css("background","url(images/pic-big-v6.jpg) no-repeat 50% 0%");
    center1=$("<div></div>");
    center1.addClass("center1");
    center1.css("margin","0 auto").css("height","100%").css("width","1240px");
    $("#second").append(center1);
    div1=$("<div></div>");
    div1.css("padding-top","115px");
    div1.css("height","355px");
    div1.css("position","relative");
    // div1.css()
    (center1).append(div1);

    $("<h2></h2>").addClass("fight").text("2016战斗之夜").appendTo(div1);
    $("<p></p>").text("战斗之夜，三天狂欢无界。").css("color","white").appendTo(div1);
    $("<a href='#'></a>").addClass("see").text("查看详情").appendTo(div1);

    small=$("<div></div>").css("right","0").text("当前游戏版本:").appendTo(div1);
    small.css("color","#888787");
    small.css({"font-size":"13px","position":"absolute","bottom":"13px"});
    $("<em>Ver 6.17</em>").css({"color":"#1bf6cc","margin-right":"10px","font-size":"16px"}).appendTo(small);
    $("<a>版本详情</a>").css({"color":"#1bf6cc","height":"22px","padding":"0 15px","border":"2px solid #05ad8d","text-align":"center","line-height":"22px","display":"inline-block","background":"rgba(0,0,0,0.65)","font-size":"12px"}).appendTo(small);

    div2=$("<div></div>").addClass("div2").appendTo(center1);

    lis=$("<a style='margin-left:220px'><i class='i1'></i><h4>新手礼包</h4>新手任务好礼</a>"+
        "<a><i class='i2'></i><h4>视频中心</h4>最新最全视频</a>"+
        "<a><i class='i2'></i><h4>赛事中心</h4>权威赛事数据</a>"+
        "<a><i class='i2'></i><h4>游戏资料</h4>海量英雄资料</a>"+
        "<a><i class='i2'></i><h4>个人中心</h4>权威个人数据</a>").appendTo(div2);
    lis.css({"float":"left","font-size":"12px","color":"#5e677f"})

    boox=$("<div></div>").css({"width":"460px","height":"115px","float":"right"}).appendTo(div2);
    $("<img src='images/ttt.png'>").css({"width":"80px","height":"80px","margin":"17px 25px 18px 20px","float":"left"}).appendTo(boox);

    $("<p style='font-size:16px;color: #fff;margin-top:20px;width:330px;margin-bottom: 12px'>亲爱的召唤师，欢迎<span style='color:#00ffcc'>登录</span></p>").appendTo(boox);
    $("<p style='font-size: 12px;color:#386cbc;line-height: 20px'>登录后查看自己的英雄联盟游戏信息，包括<br><span style='color:white'>召唤师等级、段位信息、游戏胜场数、账户信息、声望值</span>等。</p>").appendTo(boox);

//    中间的
    $("<div></div>").addClass("center3").css({"margin":"0 auto","width":"1240px","height":"1767px","margin-top":"28px"}).appendTo($("#third"));

    $("<div class='pho'></div>").css({"width":"780px","height":"370px"}).appendTo($(".center3")).append($("<img src='images/1472667839093006500new.jpg'>").css({"width":"100%","height":"330px","float":"left","cursor":"pointer"}));
    $("<div></div>").css({"width":"100%","height":"40px","background":"#efefef","float":"left"}).appendTo($(".pho")).append(
        $("<span class='phospan'>2016电玩时代</span>"+
            "<span class='phospan'>战斗之夜</span>"+
            "<span class='phospan'>做任务免费领头像</span>"+
            "<span class='phospan'>定制款月饼冰淇淋</span>"+
            "<span class='phospan'>五折促销</span>"
        )
    )


});