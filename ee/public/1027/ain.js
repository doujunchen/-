/**
 * Created by liuyujing on 2016/10/27.
 */

var options = {minZoom:3,maxZoom:15,enableMapClick:false};

var map = new BMap.Map("map",options);
map.centerAndZoom("北京",10);

setTimeout(function () {
    // var point = new BMap.Point(116.4035,39.915);
    // map.panTo(point);

    map.setZoom(15);

},4000);


