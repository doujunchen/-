/**
 * Created by Administrator on 2016/9/6 0006.
 */
$(function () {

    var body=$("body");
    $("<div id='title'></div>").css({"width":"1349px",
        "height":"30px","background":"#f6f6f6"}).appendTo(body).append($("<div style='color: #e2e2e2'></div>").addClass("title-right")
        .append($("<a href='#' style='color: #333'>登录</a>"+"<a href='#' style='color: #ff464e;margin:0 15px'>免费注册</a>"+" | "+
            "<a href='#' style='color: #333;margin:0 15px'>我的订单</a>"+" | "+
            "<div class='containter-s' style='display: inline-block;'></div>"+"|"
           +"<div class='containter-a'></div>"+"<div class='containter-b'></div>")));
        $(".containter-s").append($("<div class='block-a'><span></span><a href='#' style='color: #333'>购物袋</a> <em>0</em> </div>"+
            "<div class='block-b'><p><b></b>好像还没有<a href='#'> 登录 </a>哦~</p></div>"));
        $(".containter-a").append("<a href='#' style='color: #333;margin:0 15px' class='aa'>商家中心</a>"+
            "<div class='block-c block'><a>品牌招商</a><a>卖家报名</a></div>");
        $(".containter-b").append("<a href='#' style='color: #333;margin:0 74px 0 15px' class='bb'>客户服务</a>"+
        "<div class='block-d block'><a>帮助中心</a><a>联系客服</a></div>");
    $("<div id='second'></div>").css({"width":"1349px","height":"125px","border-bottom":"2px solid #ff464e"}).appendTo(body).append($("<div></div>")
        .addClass("center").css({"margin":"0 auto","width":"1000px","height":"100%","position":"relative"}).append($("<div></div>").addClass("top").css({
            "width":"100%","height":"85px","margin-bottom":"2px"}).append($("<div></div>").css({"background":"url(images/header-total.gif) no-repeat -78px -52px",
            "width":"210px","height":"52px","position":"absolute","top":"17px","cursor":"pointer"})).append($("<a></a>")
            .css({"background":"url(images/header-total.gif) no-repeat 0 0","height":"33px","width":"465px","display":"inline-block",
            "position":"absolute","right":"290px","top":"28px","cursor":"pointer"})).append($("<div></div>").css({"width":"237px",
            "height":"35px","position":"absolute","right":"0","top":"25px"}).append($("<span></span>").css({"background":"#efefef",
        "display":"inline-block","width":"200px","height":"35px"}).append($("<input placeholder='请输入想要的宝贝' type='text'/>").css({"width":"190px"
            ,"height":"31px","background":"#efefef","outline":"none","color":"rgb(198, 198, 198)","margin":"2px 0 0 10px"
        }))).append($("<input/>").css({"width":"37px","height":"35px","background":"url(images/header-total.gif) no-repeat right -65px","cursor":"pointer",
        "display":"inline-block"})))).append($("<div></div>").css({"height":"38px"}).append($("<ul></ul>").css({"width":"730px","height":"100%","float":"left"})
            .append($("<li>最新折扣</li>").css({"background":"#ff464e","border-radius": "6px 6px 0 0","width":"210px","height":"38px",
            "color":"white","text-align":"center","line-height":"38px","font-size":"14px","cursor":"pointer","float":"left"})).append($("<li>品牌折扣</li>")
            .addClass("lis")).append($("<li>特卖精选</li>").addClass("lis")).append($("<li>9.9包邮</li>").addClass("lis")).append($("<li>明日预告</li>").addClass("lis"))
            .append($("<li><a></a>手机版<div><em></em><p>随时逛 及时抢</p></div></li>").addClass("lis sli"))).append($("<div></div>").addClass("box")
            .css({"float":"right","width":"119px","height":"40px","position":"relative"}).append($("<em></em>").css({"background":"url(images/icon-total.png) no-repeat -84px -38px",
            "width":"16px","height":"16px","float":"left","margin":"12px 3px 0 15px"})).append($("<a href='#'>签到领积分</a>").css({"float":"right","font-size":"14px",
            "line-height":"40px","margin-right":"15px","color":"#333"}).addClass("qiandao")).append($("<div></div>").addClass("smallbox").css({"border":"#f8285c solid 1px",
            "width":"180px","position":"absolute","top":"39px","right":"0px","background":"white","text-align":"center","color":"#666","line-height":"40px",
            "height":"136px","display":"none"}).append($("<a href='#'>赚积分攻略</a>").css({"width":"160px","height":"24px","margin":"10px","float":"left"}))
                .append($("<p style='background: #f9f9f9'></p>").css({"float":"left", "width":"180px","height":"82px","padding-top":"10px"}).append($("<a>我的积分</a>"+
                    "  &nbsp | &nbsp   "+"<a>积分商城</a>").css("margin-top","5px")).append($("<a style='display: block;" + "margin:10px 0'>新手任务，轻松起步！</a>"))
                    .append($("<p>QQ特享群: <b style='color:#ff3838;font-weight:bold'>390623218</b></p>")))) )).append($("<img src='images/jp-app-index (1).png' " +
            "width='67px' height='100px' style='position: absolute;right: -80px;cursor: pointer'>")));
    $(".box").hover(
        function () {
            $(".smallbox").css("display","block")
        },
        function () {
            $(".smallbox").css("display","none")
        });
    $("<div id='third'></div>").appendTo(body).append($("<div></div>").addClass("left").append($("<ul></ul>").append($("<li class='li1'><b></b><a href='#'> 女装</a> | </li>"+
        "<li class='li2'><b></b><a href='#'>男装</a></li>"+"<li class='li3'><b></b><a href='#'>鞋子</a> | </li>"+"<li class='li4'><b></b><a href='#'>箱包</a></li>"+
        "<li class='li5'><b></b><a href='#'>母婴</a> | </li>"+"<li class='li6'><b></b><a href='#'>美妆</a></li>"+"<li class='li7'><b></b><a href='#'>居家</a> | </li>"+"<li class='li8'><b></b><a href='#'>家纺</a></li>"
        +"<li class='li9'><b></b><a href='#'>文体</a> | </li>"+"<li class='li10'><b></b><a href='#'>美食</a></li>"+"<li class='li11'><b></b><a href='#'>数码</a> | </li>"+"<li class='li12'><b></b><a href='#'>电器</a></li>"
        +"<li class='li13'><b></b><a href='#'>内衣</a> | </li>"+"<li class='li14'><b></b><a href='#'>配饰</a></li>")))).append($("<div id='b04'></div>").addClass("banner"));
    $("#b04").append($("<ul></ul>").append($("<li><img src='images/a700x360.jpg' width='700' height='360'></li>"+
        "<li><img src='images/b700x360.jpg' width='700' height='360'></li>"+"<li><img src='images/c700x360.jpg' width='700' height='360'></li>"+
        "<li><img src='images/d700x360.jpg' width='700' height='360'></li>"))).append($("<a class='unslider-arrow04 prev'><img class='arrow' id='al' src='images/arrowl.png' width='20' height='35'></a>"+
    "<a class='unslider-arrow04 next'><img class='arrow' id='ar' src='images/arrowr.png' width='20' height='35'></a>"));

    $(document).ready(function(e) {
        var unslider04 = $('#b04').unslider({
                dots: true
            }),
            data04 = unslider04.data('unslider');

        $('.unslider-arrow04').click(function() {
            var fn = this.className.split(' ')[1];
            data04[fn]();
        });
    });
    $("<div id='fourth'></div>").css({"width":"915px","height":"24px","margin":"30px auto 20px"}).appendTo(body).append($("<div>今日品牌</div>")
        .css({"width":"129px","height":"24px","float":"left","font-size":"16px","color":"#333","cursor":"pointer"}).append($("<i></i>")
            .css({"float":"left","width":"60px","height":"20px", "margin":"2px 5px 0 0","background":"url(images/brand_new.png) no-repeat"})))
        .append($("<ul></ul>").css({"width":"374px","height":"24px","float":"right","margin-right":"15px"}).append($("<li>品牌女装<b></b></li>"+
            "<li>品牌母婴<b></b></li>"+"<li>品质居家<b></b></li>"+"<li class='icon'>全部品牌<b></b></li>")));
    
    $(function () {
       setInterval(function () {
           var ts = (new Date(2018, 11, 11, 9, 0, 0)) - (new Date());
           var dd = parseInt(ts / 1000 / 60 / 60 / 24, 10);
           var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);
           var mm = parseInt(ts / 1000 / 60 % 60, 10);
           var ss = parseInt(ts / 1000 % 60, 10);
           dd = zero(dd);
           hh = zero(hh);
           mm = zero(mm);
           ss = zero(ss);
           $(".timerunning").text(dd + "天" + hh + "时" + mm + "分" + ss + "秒");
           function zero(e) {
               if(e<10){
                   return "0"+e;
               }
               else{
                   return e;
               }
           }
       })
    });
    var time=$("<div></div>").addClass("time").append($("<i></i>"+"<span class='timerunning'></span>"));
    $("<div id='fifth'></div>").css({"overflow":"hidden","width":"915px","height":"259px","margin":"20px auto 0","background":"white"}).appendTo(body)
        .append($("<ul></ul>").addClass("ul_one").append($("<li></li>").addClass("li_one").append($("<img src='images/57ce6338151ad19b6d8b4601_680x280.jpg'>"))
            .append($("<div class='card'><span>【99大促开售】 百变女神</span><a href='#'>进入活动</a></div>")).append($("<div></div>")
            .addClass("time").append($("<i></i>"+"<span class='timerunning'></span>"))))
            .append($("<li></li>").addClass("li_two").append($("<img src='images/57ce62b3151ad1876d8b45d8_680x280.jpg'>"))
            .append($("<div class='card'><span>【99大促开售】 主会场</span><a href='#'>进入活动</a></div>")).append($("<div></div>")
            .addClass("time").append($("<i></i>"+"<span class='timerunning'></span>"))))
            .append($("<li></li>").addClass("li_three").append($("<img src='images/57ce638e151ad1df6d8b460f_680x280.jpg'>"))
            .append($("<div class='card'><span>【99大促开售】 型男帅男</span><a href='#'>进入活动</a></div>")).append(time)))
        .append($("<ul></ul>").addClass("ul_two").append($("<p>更多品牌特卖:</p>").css({"width":"100px",
        "height":"35px","margin":"0 10px","float":"left","line-height":"55px"})).append($("<li style='background: url(images/57c3f632151ad19f088b4588_180x90.png) no-repeat;" +
            "background-size: cover;'></li>"+"<li style='background: url(images/57207db692be5950118b4583_180x90.png) no-repeat;" +
            "background-size: cover;'></li>"+ "<li style='background: url(images/57c505db151ad15b038b45db_180x90.png) no-repeat;background-size: cover;'></li>"+
            "<li style='background: url(images/56ea58d892be5917908b457b_180x90.png) no-repeat;background-size: cover;'></li>"+"<li style='background: url(images/572059ca92be592e708b45b9_180x90.png) no-repeat;" +
            "background-size: cover;'></li>"+"<li style='background: url(images/568cbe9392be597a3a8b4576_180x90.png) no-repeat;background-size: cover;'></li>"+
            "<li style='background: url(images/56c677d392be59bd9b8b456a_180x90.png) no-repeat;background-size: cover;'></li>"+"<li style='background: url(images/563700393962a_180x90.png) no-repeat;" +
            "background-size: cover;'></li>"+"<a style='color: #ff464e;line-height: 55px;margin: 0 10px'>查看全部》</a>")));

    $("<div id='sixth'></div>").css({"height":"24px","width":"915px","margin":"30px auto 20px auto"}).appendTo(body).append($("<div>今日新品</div>").css({"width":"218px",
    "height":"24px","float":"left","font-size":"16px","color":"#333"}).append($("<i></i>").css({"background":"url(images/icon_new.png) no-repeat",
    "width":"60px","height":"20px","margin":"2px 5px 0 0","display":"block","float":"left"})).append($("<span>每天10点上新</span>").css({"color":"#999","margin":"0 10px 0 5px"})));

    $("<div id='seven'></div>").css({"width":"970px","height":"2730px","margin":"0 auto","position":"relative","color":"#666"}).appendTo(body).append($("<ul></ul>")
        .append($("<li class='li1'><a href='#'></a><i><b></b></i><h3>[包邮]晒后修护芦荟面膜贴<span>剩6天</span></h3><div><a href='#'><em>￥</em>49</a><span><span>￥59</span>(8.3折)</span><div><em class='tianmao'></em><span>天猫</span></div></div></li>"))
        .append($("<li class='li2'><a href='#'></a><i><b></b></i><h3>[包邮]时尚编织流苏提挎女包<span>剩6天</span></h3><div><a href='#'><em>￥</em>49.9</a><span><span>￥128</span>(3.9折)</span><div><em class='taobao'></em><span>淘宝</span></div></div></li>"))
        .append($("<li class='li3'><a href='#'></a><i><b></b></i><h3>[包邮]潮流个性抽带水桶包<span>剩6天</span></h3><div><a href='#'><em>￥</em>198</a><span><span>￥599</span>(3.3折)</span><div><em class='tianmao'></em><span>天猫</span></div></div></li>"))
        .append($("<li class='li4'><a href='#'></a><i><b></b></i><h3>[包邮]蒲江红心猕猴桃(2kg)<span>剩6天</span></h3><div><a href='#'><em>￥</em>38</a><span><span>￥39.9</span>(9.5折)</span><div><em class='tianmao'></em><span>天猫</span></div></div></li>"))
        .append($("<li class='li5'><a href='#'></a><i><b></b></i><h3>[包邮]韩版真兔毛平底单鞋<span>剩6天</span></h3><div><a href='#'><em>￥</em>19.9</a><span><span>￥109</span>(1.8折)</span><div><em class='taobao'></em><span>淘宝</span></div></div></li>"))
        .append($("<li class='li6'><a href='#'></a><i><b></b></i><h3>[包邮]广场舞鞋女牛皮舞蹈鞋<span>剩6天</span></h3><div><a href='#'><em>￥</em>80</a><span><span>￥278</span>(2.9折)</span><div><em class='tianmao'></em><span>天猫</span></div></div></li>"))
        .append($("<li class='li7'><a href='#'></a><i><b></b></i><h3>[包邮]大款多功能智能茶吧机<span>剩6天</span></h3><div><a href='#'><em>￥</em>578</a><span><span>￥1176</span>(4.9折)</span><div><em class='taobao'></em><span>淘宝</span></div></div></li>"))
        .append($("<li class='li8'><a href='#'></a><i><b></b></i><h3>[包邮]卡通小方巾（10条）<span>剩6天</span></h3><div><a href='#'><em>￥</em>9.9</a><span><span>￥19.8</span>(5.0折)</span><div><em class='taobao'></em><span>淘宝</span></div></div></li>"))
        .append($("<li class='li9'><a href='#'></a><i><b></b></i><h3>[包邮]6.5寸陶瓷菜刀切片刀<span>剩6天</span></h3><div><a href='#'><em>￥</em>29.8</a><span><span>￥65</span>(4.6折)</span><div><em class='tianmao'></em><span>天猫</span></div></div></li>"))
        .append($("<li class='li10'><a href='#'></a><i><b></b></i><h3>[包邮]LED护眼台灯已配光源<span>剩6天</span></h3><div><a href='#'><em>￥</em>25</a><span><span>￥87</span>(2.9折)</span><div><em class='taobao'></em><span>淘宝</span></div></div></li>"))
        .append($("<li class='li11'><a href='#'></a><i><b></b></i><h3>[包邮]家用铝合金双面敲肉锤<span>剩6天</span></h3><div><a href='#'><em>￥</em>8.5</a><span><span>￥9.9</span>(8.6折)</span><div><em class='taobao'></em><span>淘宝</span></div></div></li>"))
        .append($("<li class='li12'><a href='#'></a><i><b></b></i><h3>[包邮]纯色双拼天鹅绒四件套<span>剩6天</span></h3><div><a href='#'><em>￥</em>88</a><span><span>￥399</span>(2.2折)</span><div><em class='taobao'></em><span>淘宝</span></div></div></li>"))
        .append($("<li class='li13'><a href='#'></a><i><b></b></i><h3>[包邮]去污粉厨房清洁除污<span>剩6天</span></h3><div><a href='#'><em>￥</em>19.5</a><span><span>￥29.8</span>(7.6折)</span><div><em class='taobao'></em><span>淘宝</span></div></div></li>"))
        .append($("<li class='li14'><a href='#'></a><i><b></b></i><h3>[包邮]修身显瘦包臀一步裙<span>剩6天</span></h3><div><a href='#'><em>￥</em>35</a><span><span>￥138</span>(2.5折)</span><div><em class='tianmao'></em><span>天猫</span></div></div></li>"))
        .append($("<li class='li15'><a href='#'></a><i><b></b></i><h3>[包邮]中老年秋装外套<span>剩6天</span></h3><div><a href='#'><em>￥</em>45</a><span><span>￥399</span>(1.1折)</span><div><em class='tianmao'></em><span>天猫</span></div></div></li>"))
        .append($("<li class='li16'><a href='#'></a><i><b></b></i><h3>[包邮]秋季薄款毛衣女针织衫<span>剩6天</span></h3><div><a href='#'><em>￥</em>22.8</a><span><span>￥199</span>(1.1折)</span><div><em class='taobao'></em><span>淘宝</span></div></div></li>"))
        .append($("<li class='li17'><a href='#'></a><i><b></b></i><h3>[包邮]压皱雪纺中长款连衣裙<span>剩6天</span></h3><div><a href='#'><em>￥</em>59</a><span><span>￥328</span>(1.8折)</span><div><em class='taobao'></em><span>淘宝</span></div></div></li>"))
        .append($("<li class='li18'><a href='#'></a><i><b></b></i><h3>[包邮]秋季薄款毛衣打底衫<span>剩6天</span></h3><div><a href='#'><em>￥</em>22.8</a><span><span>￥199</span>(1.1折)</span><div><em class='tianmao'></em><span>天猫</span></div></div></li>"))
        .append($("<li class='li19'><a href='#'></a><i><b></b></i><h3>[包邮]创意S型多功能裤架<span>剩6天</span></h3><div><a href='#'><em>￥</em>7.9</a><span><span>￥17</span>(4.6折)</span><div><em class='taobao'></em><span>淘宝</span></div></div></li>"))
        .append($("<li class='li20'><a href='#'></a><i><b></b></i><h3>[包邮]潮流修身百搭套头毛衣<span>剩6天</span></h3><div><a href='#'><em>￥</em>19.9</a><span><span>￥168</span>(1.2折)</span><div><em class='tianmao'></em><span>天猫</span></div></div></li>"))
        .append($("<li class='li21'><a href='#'></a><i><b></b></i><h3>[包邮]秋装女七分袖T恤长袖<span>剩6天</span></h3><div><a href='#'><em>￥</em>20</a><span><span>￥22.8</span>(8.8折)</span><div><em class='taobao'></em><span>淘宝</span></div></div></li>"))
    );


    $("<div id='eight'></div>").css({"margin":"0 auto","width":"980px","height":"45px","padding":"30px 0 45px","text-align":"center"}).appendTo(body).append($("<span>上一页</span>")
        .css({"color":"#bbb","font-weight":"normal","background":"#fff","width":"60px","height":"21px","border-radius":"20px 0 0 20px",
            "box-shadow":"1px 1px 3px rgba(204, 204, 204, 0.7)","display":"inline-block","overflow":"hidden","padding":"10px 15px","cursor":"pointer"})).append($("<span>1</span>").css({
            "width":"9px","height":"21px","padding":"10px 15px","background":"#ff464e","color":"#fff","font-weight":"bold","display":"inline-block","margin-left":"1px","overflow":"hidden"
        })).append($("<a href='#'>2</a>"+"<a href='#'>3</a>"+"<a href='#'>...</a>"+"<a href='#'>26</a>"+"<a class='last_a' href='#'>下一页</a>"));

    var moving=$("<div></div>").css({"width":"760px","height":"20px","float":"left","position":"relative","overflow":"hidden"}).append($("<ul></ul>").css({"width":"760px","height":"50px"}).append($("<li></li>")));

    $("<div id='footer'></div>").css({"position":"relative","margin":"40px auto 0","background":"#f9f9f9","border-top":"#ff464e solid 4px","width":"1000px","height":"346px"}).appendTo(body)
        .append($("<div></div>").css({"width":"880px","padding":"0 50px 30px","margin":"0 auto","height":"316px"}).append($("<div></div>").css({"width":"880px","height":"136px",
            "padding-top":"25px","margin":"0 auto"}).append($("<div></div>").css({"width":"90px","float":"left","display":"inline-block","height":"136px"}).append($("<p></p>")
            .css({"background":"url(images/jp-app-90.png) no-repeat","height":"90px","width":"90px","margin-top":"5px"})).append($("<p>随时逛 及时抢</p>").css({"width":"90px","height":"21px","color":"#666","text-align":"center",
        "font-size":"14px","margin":"10px 0"}))).append($("<div></div>").css({"width":"550px","height":"123px","float":"left","display":"inline-block","padding-left":"65px","overflow":"hidden"}).append($("<ul></ul>").append($("<dt>获取更新</dt>"+
        "<li>iPhone/Android</li>"+"<li>卷皮QQ空间</li>"+"<li>卷皮新浪微博</li>"+"<li>开放API</li>"))).append($("<ul></ul>").append($("<dt>商务合作</dt>"+
            "<li>卖家免费报名</li>"+"<li>商务合作</li>"+"<li>廉政邮箱</li>"+"<li>开放平台</li>"))).append($("<ul></ul>").append($("<dt>公司信息</dt>"+
            "<li>关于卷皮</li>"+"<li>媒体报道</li>"+"<li>诚聘英才</li>"+"<li>校园经理招聘</li>"))).append($("<ul style='width: 100px'></ul>").append($("<dt>帮助中心</dt>"+
            "<li>新手上路</li>"+"<li>积分攻略</li>"+"<li>网站地图</li>"+"<li>开放API</li>")))).append($("<div></div>").css({"width":"161px","height":"72px",
        "margin-top":"35px","float":"right"}).append($("<a href='#'></a>").css({"float":"left","background":"url(images/service_add.gif) no-repeat 0 -5px","display":"block","width":"86px","height":"35px"})).append($("<span>周一至周日 9:00-21:00</span>")
            .css({"width":"65px","padding-left":"10px","float":"left","display":"inline-block","color":"#919191"})))).append($("<div></div>").css({"width":"880px","height":"20px","padding":"10px 0",
            "border-bottom":"1px dotted #ccc","color":"#999999","overflow":"hidden","margin":"0 auto"}).append($("<span>友情链接:</span>").css({"display":"block","float":"left","width":"60px","height":"18px"}))
            .append($("<div></div>").addClass("special").append($("<ul id='sItem'></ul>").append($("<li></li>").addClass("li_1").append($("<a>九块邮</a>"+"<a>易迅优惠券</a>"+"<a>中国鞋网</a>"+"<a>中国鲜花礼品网</a>"+"<a>钻石小鸟</a>"+
                "<a>箱包品牌</a>"+"<a>网上购物</a>"+"<a>中国品牌网</a>"+"<a>青创网</a>"+"<a>家居网</a>"))).append($("<li></li>").addClass("li_2").append($("<a>国画</a>"+"<a>齐家装修</a>"+"<a>易登网</a>"+"<a>普洱茶</a>"+"<a>中关村商城</a>"+
                "<a>商城品牌鞋</a>"+"<a>乐蜂网优惠券</a>"+"<a>精选折扣</a>"+"<a>拍鞋网官网</a>"))))))

            .append($("<p>武汉奇米网络科技有限公司 鄂ICP备10209250号 | ICP许可证号：鄂B1-20150109 | 食品流通许可证 SP4201991510041888　　Copyright © 2010 -2016 JuanPi.com All Rights Reserved</p>")
                .css({"text-align":"center","padding-top":"20px","color":"#c6c6c6","width":"880px","height":"36px"})).append($("<div></div>").css({"width":"880px","height":"48px","padding-top":"10px","text-align":"center"})
                .append($("<img src='images/r_315new.gif'>"+"<img src='images/r_cnnic.gif'>"+"<img src='images/r_gongshang.gif'>").addClass("image"))));
    // window.console.log($("body").scrollTop());
    $("<div id='fix'></div>").appendTo(body).append($("<ul></ul>").addClass("ul1").append($("<li class='li1'><a href='#'></a></li>"+"<li class='li2'><i></i><em>0</em></li>"+"<li class='li3'><a></a></li>"+"<li class='li4'></li>"))).append($("<ul></ul>")
        .addClass("ul2").append($("<li class='li1'><a href='#'></a></li>"+"<li class='li2'><a href='#'></a></li>"+"<li class='li3'><a href='#'></a></li>"+"<li class='li4'><a href='#'></a></li>")));

    $("<div id='top'></div>").appendTo(body).append($("<ul></ul>").append($("<li class='first'>今日上新</li>"+"<li>女装</li>"+"<li>男装</li>"+
        "<li>鞋子</li>"+"<li>箱包</li>"+"<li>母婴</li>"+"<li>美妆</li>"+"<li>居家</li>"+"<li>家纺</li>"+ "<li>文体</li>"+"<li>美食</li>"
        +"<li>数码</li>"+"<li>电器</li>"+"<li>内衣</li>"+"<li>配饰</li>"+"<li class='last'>[明日预告]</li>")));
    var asd=setInterval(function () {
        var top = document.body.scrollTop;
        if(top>800){
            $("#top").css("display","block")
        }else {
            $("#top").css("display","none")
        }
    },20);
    $(document).ready(function(){
        $("#sItem").scrollQ();
    });
});