function yun(theid,data,color,text,text1){
	var w = $('#'+theid).css('width').replace('px','');//外围元素的宽度
	  var canvas = document.getElementById(theid);
	  var x  = 10; //定义圆之间的距离px
	  var fzj = [];//直径行分界数组
	  //每行最大的直径以及宽度
	  var zdzj = [];
	  var h = 80;//总高度
	  data = objOfValueToArr(objOfValueToArr);
	  
	  if(data.length == 0){
		  for(var c=0;c<20;c++){
			    var num = Math.random()*1000;
			    num = parseInt(num, 10);
			    data[c] = num;
			  }
	  }
	  var ww = 0
	  var zz = [];
	  var f = 0;
	  for(n in data){
	    var i = data[n]
	    var r = 50;
	    if(i>=1000){
	      r = 70;
	    }else if(i<=100){
	    }else{
	      r = i/50 + r;
	    }
	    var z = 2*r;

	    ww += z;
	    var num = Math.ceil((ww+(f)*x+x +r)/w);
	    var item = [i,z,ww+(f)*x+x +r];
	    if(!zdzj.hasOwnProperty(num)){
	      zdzj[num] = z;
	      ww = (num-1)*w + z
	      
	    }else{
	      if(zdzj[num] < z){
	        zdzj[num] = z;
	      }
	      
	    }
	    
	    if(!fzj.hasOwnProperty(num)){
	      f = 0
	      fzj[num] = [item];
	    }else {

	      fzj[num].push(item);
	      f ++;//用于时时计算 边距
	    }
	  }
	  
	  for(var c in zdzj){
		  h += zdzj[c];
	  }
	  $('#'+theid).attr('height',h+'px');

	  var zx = 0;//初始X轴坐标值
	  var zy = 0;//初始Y轴坐标值
	  var zyz = 30;
	  for(var i in fzj){
	    var temp = fzj[i];
	    var zxz = 0;
	    if(i > 1)
	    {
	      zyz += parseInt(zdzj[i]);
	      zy = zyz + x*i + r
	    }
	    //取出最后一个圆的信息
	    var last = temp.pop();
	    var l = last[2]-last[1]-(i-1)*980;
	    var a = 3*(w-l)/5
	    
	    
	    for(var d in temp){
	      var r = temp[d][1]/2
	      zx = zxz + r + x*(d)+a;
	      zxz += temp[d][1];
	      if(i==1){
	        zy = r + 30;
	      }
	      
	      circle(canvas,r,zx,zy,color,temp[d][0],text,text1);
	    }
	  }
}

function circle(canvas,r,zx,zy,color,number,text,text1){
		if(typeof text =='undefined')
			text = '领域名称'
		if(typeof text1 =='undefined')
			text1= number + '个企业'
		if (canvas == null)
	        return false;
	  	var ctx = canvas.getContext("2d");
	  	
	  	var circle = {
		        x : zx,    //圆心的x轴坐标值
		        y : zy,    //圆心的y轴坐标值
		        r : r      //圆的半径50-70
		    };
	  	
	  	ctx.beginPath();                  
	  	ctx.fillStyle= color ;   //设置填充的颜色  
	  	ctx.strokeStyle = color;
	  	ctx.shadowBlur = 14; // 模糊尺寸
	    ctx.shadowColor = 'rgba(0, 0, 0, 0.41)'; // 颜色
	  	ctx.arc(circle.x, circle.y, circle.r,0,Math.PI * 2,false);  
	  	ctx.fill();  
	  	ctx.stroke();  
	  	ctx.closePath();  
	  	
	  	
	  	ctx.beginPath();    //开启新路径               
	  	ctx.lineWidth=1;   //设定画笔的宽度                 
	  	ctx.strokeStyle="#000"; //设置画笔的颜色                  
	  	ctx.moveTo(circle.x-10,circle.y-3);  //设定笔触的位置                 
	  	ctx.lineTo(circle.x+10,circle.y-3); //设置移动的方式                 
	  	ctx.stroke();       //画线                  
	  	ctx.closePath();    //封闭路径  
	  	
	  	console.log(DataLength(text));
	  	
	  	var z = DataLength(text)/2;
	  	var wz = z*14;
	  	var z1 = DataLength(text1)/2;
	  	var wz1 = z*14;
	  	console.log();
	  	
	  	ctx.fillStyle= '#000' ;
	  	ctx.font="14px 微软雅黑"; //css font属性  
	  	ctx.fillText(text,circle.x-wz/2,circle.y-r/3);
	  	ctx.font="12px 微软雅黑"; 
	  	ctx.fillText(text1,circle.x-wz1/2,circle.y+r/3);
	  	
	  	/*
	  	ctx.fill();
	    //开始一个新的绘制路径
	    ctx.beginPath();
	    
	    //设置弧线的颜色为蓝色
	    ctx.strokeStyle = color;
	    
	    ctx.fillStyle = color;
	    ctx.shadowBlur = 14; // 模糊尺寸
	    ctx.shadowColor = 'rgba(0, 0, 0, 0.41)'; // 颜色
	    //沿着坐标点(100,100)为圆心、半径为50px的圆的顺时针方向绘制弧线
	    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false);
	    
	    //按照指定的路径绘制弧线
	    ctx.stroke();
	    ctx.save();
	    
	    ctx.fillStyle = 'white';
        ctx.font = '10px 微软雅黑';
        ctx.textBaseline = 'middle';
	    
	    
	    
		ctx.fillText("Hello World!",circle.x,circle.y);
		ctx.save();
		ctx.stroke();*/
}
function objOfValueToArr(object) {
	var arr = [];
	var i = 0;
    for (var item in object) {
    	arr[i] = object[item];
    	i++;
	}
	return arr;
}

function DataLength(fData) 
{ 
    var intLength=0 
    for (var i=0;i<fData.length;i++) 
    { 
        if ((fData.charCodeAt(i) < 0) || (fData.charCodeAt(i) > 255)) 
            intLength=intLength+2 
        else 
            intLength=intLength+1    
    } 
    return intLength 
}
