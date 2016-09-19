/**
 * Created by Administrator on 2016/9/18 0018.
 */
var game={
    //二维数组，储存每个格子的数字
    data:null,
    //row number,cell number,
    RN:4,
    CN:4,
    //游戏状态
    state:0,
    //记录当前游戏是否在进行
    RUNNING:1,
    GAMEOVER:0,
    score:0,
    //游戏开始的时候
    start:function () {
        //设置游戏状态（正在运行）
        this.state=this.RUNNING;
    //  初始化  (清空数组)
        this.data=[];
        for(var row=0;row<this.RN;row++){
            this.data[row] = [];
            for(var col=0;col<this.CN;col++){
                this.data[row][col]=0;
            }
        }
        //等同于：
        // this.data=[
        //     [0,0,0,0],
        //     [0,0,0,0],
        //     [0,0,0,0],
        //     [0,0,0,0]
        //     ];
        //遍历完以后，分数给0；
        this.score=0;
    //    产生一个随机数
        this.randomNum();
    //把随机数放进去
        this.updataView();
    },
    randomNum:function () {
        //不等于0
        if(!this.isfull()){
            while(true){
                //随机创建两个数  在行和列占满的
                var row=parseInt(Math.random()*(this.RN));
                var col=parseInt(Math.random()*(this.CN));
                if(this.data[row][col]==0){
                    //随机生成2和4
                    this.data[row][col]=Math.random()>0.9?4:2;
                    break;
                }
            }
        }
    },
    //判断 格子是否满了
    isfull:function () {
        for(var row=0;row<this.RN;row++){
            for(var col=0;col<this.CN;col++){
                if(this.data[row][col]==0){
                    return false
                }
            }
        }
        return true;
    },
    updataView:function(){
        for (row = 0;row<this.RN;row++) {
            for (col = 0;col<this.CN;col++) {
                var num = document.getElementById("c"+row+col);
                if(this.data[row][col] != 0){
                    num.innerHTML = this.data[row][col];
                    num.className = "cell n"+this.data[row][col];
                }else{
                    num.innerHTML = " ";
                    num.className = "cell"
                }
            }
        }
    //    游戏结束btn出来
    //     document.getElementById("btn").style.display="block";
    },
    isGAMEOVER:function () {
      if(this.isfull()){
          for(row = 0;row<this.RN;row++){
              for (col = 0;col<this.CN;col++) {
                  //两边还有相同数字的时候，游戏继续进行
                  if(this.data[row][col]==this.data[row][col+1]){
                      return false;
                  }else if(this.data[row][col]==this.data[row+1][col]){
                      return false;
                  }
              }
          }
          //如果没有，就结束
          this.state=this.GAMEOVER;
          //结束了
          return true;
      }else {
          //还能继续进行
          return false;
      }
    },
    moveleft:function () {
      //  一开始，初始的状态
        var beforeString=this.data.toString();
        //不断地遍历比较，一样的话就，不一样继续寻找下一个
        for(row = 0;row<this.RN;row++){
            for (col = 0;col<this.CN;col++) {
                this.nextRightNum(row,col);
            }
        }
    //    给它移动,如果两个值相等，就移动
        var afterstring=this.data.toString();
        if(beforeString!=afterstring){
            this.randomNum();
            this.isGAMEOVER();
            //判断游戏是否结束
            this.updataView();
        }
    },
    nextRightNum:function (r,c) {
        for(next=c+1;next<this.RN;next++){
            if(this.data[r][next]!=0){
                if(this.data[r][c]==this.data[r][next]){
                    this.data[r][c]*=2;
                    this.data[r][next]=0;
                    this.score+=this.data[r][c];
                    break;
                    c++;  //坐标往后移一个
                }else if(this.data[r][c]==0){
                    //如果为0，把下一个数给当前的数，让下一个数为0
                    this.data[r][c]=this.data[r][next];
                    this.data[r][next]=0;
                }else {
                    break
                }
            }
        }
    },
    //============右移=========
    moveright:function () {
        //  一开始，初始的状态
        var beforeString=this.data.toString();
        //不断地遍历比较，一样的话就，不一样继续寻找下一个
        for(row = 0;row<this.RN;row++){
            for (col = this.CN-1;col>0;col--) {
                this.nextLeftNum(row,col);
            }
        }
        //    给它移动,如果两个值相等，就移动
        var afterstring=this.data.toString();
        if(beforeString!=afterstring){
            this.randomNum();
            this.isGAMEOVER();
            //判断游戏是否结束
            this.updataView();
        }
    },
    nextLeftNum:function (r,c) {
        for(next=c-1;next>=0;next--){
            if(this.data[r][next]!=0){
                if(this.data[r][c]==this.data[r][next]){
                    this.data[r][c]*=2;
                    this.data[r][next]=0;
                    this.score+=this.data[r][c];
                    c++;  //坐标往后移一个
                }else if(this.data[r][c]==0){
                    //如果为0，把下一个数给当前的数，让下一个数为0
                    this.data[r][c]=this.data[r][next];
                    this.data[r][next]=0;
                }else {
                    break
                }
            }
        }
    },
//    ===========================
    //============上移=========
    moveup:function () {
        //  一开始，初始的状态
        var beforeString=this.data.toString();
        //不断地遍历比较，一样的话就，不一样继续寻找下一个
        // for(row = 0;row<this.RN;row++){
            for (col = 0;col<this.CN;col++) {
                this.nextdownNum(col);
            }
        // }
        //    给它移动,如果两个值相等，就移动
        var afterstring=this.data.toString();
        if(beforeString!=afterstring){
            this.randomNum();
            this.isGAMEOVER();
            //判断游戏是否结束
            this.updataView();
        }
    },
    nextdownNum:function (col) {
        for(var row=0;row<this.data.length-1;row++){
            //从r开始，找下一个不为0的位置下标next
            var next=this.getDownNext(row,col);
            //如果next==-1，说明都是0了
            if(next==-1){break;}//退出循环
            else{
                if(this.data[row][col]==0){
                    this.data[row][col]=this.data[next][col];
                    this.data[next][col]=0;
                    row--;
                }else if(this.data[row][col]==this.data[next][col]){
                    this.data[row][col]*=2;
                    this.data[next][col]=0;
                    this.score+=this.data[row][col];
                }
            }
        }
    },
    getDownNext:function(row,col){//专门找当前位置左侧下一个
        //从col-1开始遍历之后所有元素
        for(var next=row+1;next<this.data.length;next++){
            if(this.data[next][col]!=0){//如果找到!=0的
                return next;//返回next
            }
        }//(遍历结束)返回-1
        return -1;
    },
//    ===========================
    //============下移=========
    movedown:function () {
        //  一开始，初始的状态
        var beforeString=this.data.toString();
        //不断地遍历比较，一样的话就，不一样继续寻找下一个
        // for(row = 0;row<this.RN;row++){
            for (col=0;col<this.data.length;col++) {
                this.nextupNum(col);
            // }
        }
        //    给它移动,如果两个值相等，就移动
        var afterstring=this.data.toString();
        if(beforeString!=afterstring){
            this.randomNum();
            this.isGAMEOVER();
            //判断游戏是否结束
            this.updataView();
        }
    },
    nextupNum:function (col) {
        for(var row=this.data.length-1;row>0;row--){
            //从r开始，找下一个不为0的位置下标next
            var next=this.getUpNext(row,col);
            //如果next==-1，说明都是0了
            if(next==-1){break;}//退出循环
            else{
                if(this.data[row][col]==0){
                    this.data[row][col]=this.data[next][col];
                    this.data[next][col]=0;
                    row++;
                }else if(this.data[row][col]==this.data[next][col]){
                    this.data[row][col]*=2;
                    this.data[next][col]=0;
                    this.score+=this.data[row][col];
                }
            }
        }
    },
    getUpNext:function(row,col){//专门找当前位置左侧下一个
        //从col-1开始遍历之后所有元素
        for(var next=row-1;next>=0;next--){
            if(this.data[next][col]!=0){//如果找到!=0的
                return next;//返回next
            }
        }//(遍历结束)返回-1
        return -1;
    }
//    ===========================
};
window.onload=function () {
    game.start();
    document.onkeydown=function (e) {
        var evt=event||e;
        if(e.keyCode==37){
            game.moveleft();
        }else if (e.keyCode==39){
            game.moveright();
        }else if (e.keyCode==38){
            game.moveup();
        }else if (e.keyCode==40){
            game.movedown();
        }
    }
};



