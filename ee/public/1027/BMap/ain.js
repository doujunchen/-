/**
 * Created by liuyujing on 2016/10/27.
 */

// var options = {minZoom:3,maxZoom:15,enableMapClick:false};

// var map = new BMap.Map("map");
// map.centerAndZoom("北京",15);

// map.enableScrollWheelZoom();
// map.disableScrollWheelZoom();
// map.disableDragging();

// var location1 = new BMap.Point(116.027143, 39.772348);
// var location2 = new BMap.Point(116.832025, 40.126349);
// var bounds = new BMap.Bounds(location1,location2);
// BMapLib.AreaRestriction.setBounds(map,bounds);



// setTimeout(function () {
    /*
    // var point = new BMap.Point(116.4035,39.915);
    // map.panTo(point);

    map.setZoom(15);
    map.enableDragging();

    var curBounds = map.getBounds();
    // console.log(curBounds.Ll);

    console.log(curBounds.getSouthWest());
    var leftBottom = curBounds.getSouthWest();
    var rightTop = curBounds.getNorthEast();
    console.log("左下角地理位置："+leftBottom.lng+ ","+leftBottom.lat+ " 右上角地理位置："+rightTop.lng+","+rightTop.lat+"");

    var m = map.getDistance(location1,location2);
    console.log(m.toFixed(2));
*/


    // var location = new BMap.Geolocation();
    // location.getCurrentPosition(function (loc) {
    //
    //     if (this.getStatus() === BMAP_STATUS_SUCCESS) {
    //
    //         console.log(loc);
    //         var point = new BMap.Point(loc.longitude, loc.latitude);
    //         map.panTo(point);
    //         map.setZoom(12);
    //     }
    // });


    // var location = new BMap.LocalCity();
    // location.get(function (result) {
    //     console.log(result);
    //     console.log(result.name);
    //     console.log(result.center.lat,result.center.lng);
    // });

    // var coder = new BMap.Geocoder();
    //地理编码
    // coder.getPoint("石景山",function (result) {
    //     console.log(result);
    // },"北京");

    //反地理编码
//     coder.getLocation(location1,function (result) {
//         console.log(result.address,result.addressComponents);
//     });
//
// },4000);


//创建 比例尺控件
// var  scaleControl = new BMap.ScaleControl();
// map.addControl(scaleControl);
// map.removeControl(scaleControl);

// var navControl = new BMap.NavigationControl();
// map.addControl(navControl);


// var locSearch = new BMap.LocalSearch(map,{
//     renderOptions:{
//         map: map,
//         autoViewport:true,
//         selectFirstResult:false,
//         panel:"searchResult"
//     },
//     onSearchComplete:function (result) {
//         console.log("11",result);
//     }
// });
// locSearch.search("景点");


// var tr = new BMap.TransitRoute(map, {
//     renderOptions: {
//         map:map,
//         panel:"searchResult"
//     },
//     policy:BMAP_TRANSIT_POLICY_LEAST_TIME
//
// });
// tr.search("苹果园","回龙观");


// var dri = new BMap.DrivingRoute(map, {
//     renderOptions: {
//         map: map,
//         autoViewport: true,
//         panel:"searchResult"
//     },
//     policy:BMAP_TRANSIT_POLICY_LEAST_TIME
// });
// dri.search("苹果园","回龙观");


// function SquareOverlay(center, length, color){
//     this._center = center;
//     this._length = length;
//     this._color = color;
// }
// 继承API的BMap.Overlay
// SquareOverlay.prototype = new BMap.Overlay();
// 实现初始化方法
// SquareOverlay.prototype.initialize = function(map){
// // 保存map对象实例
//     this._map = map;
//     // 创建div元素，作为自定义覆盖物的容器
//     var div = document.createElement("div");
//     div.style.position = "absolute";
//     // 可以根据参数设置元素外观
//     div.style.width = this._length + "px";
//     div.style.height = this._length + "px";
//     div.style.background = this._color;
// // 将div添加到覆盖物容器中
//     map.getPanes().markerPane.appendChild(div);
// // 保存div实例
//     this._div = div;
// // 需要将div元素作为方法的返回值，当调用该覆盖物的show、
// // hide方法，或者对覆盖物进行移除时，API都将操作此元素。
//     return div;
// }
// 实现绘制方法
// SquareOverlay.prototype.draw = function(){
// // 根据地理坐标转换为像素坐标，并设置给容器
//     var position = this._map.pointToOverlayPixel(this._center);
//     this._div.style.left = position.x - this._length / 2 + "px";
//     this._div.style.top = position.y - this._length / 2 + "px";
// }
// var overlay = new SquareOverlay(location1,200,"red");
// map.addOverlay(overlay);


// var panorama = new BMap.Panorama('panorama');
// panorama.setPosition(new BMap.Point(120.320032, 31.589666)); //根据经纬度坐标展示全景图
// panorama.setPov({heading: -40, pitch: 6});
//
// panorama.addEventListener('position_changed', function(e){ //全景图位置改变后，普通地图中心点也随之改变
//     var pos = panorama.getPosition();
//     map.setCenter(new BMap.Point(pos.lng, pos.lat));
//     marker.setPosition(pos);
// });



//
// var mapTypeControl = new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_PERSPECTIVE_MAP],anchor:BMAP_ANCHOR_TOP_LEFT});
// map.addControl(mapTypeControl);
//
//
// var size = new BMap.Size(10, 20);
// var cityList = new BMap.CityListControl({anchor:BMAP_ANCHOR_TOP_RIGHT,offset:size});
// map.addControl(cityList);


var location1 = new BMap.Point(116.417, 39.909);
var map = new BMap.Map("map");
map.centerAndZoom(location1,15);


var image = new BMap.Icon(
    "http://developer.baidu.com/map/jsdemo/img/fox.gif",
    new BMap.Size(300,157)
);

var marker = new BMap.Marker(location1,{icon:image});
map.addOverlay(marker);










