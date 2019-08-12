//简单的canvas小练习
!function(){
    var ctx = document.getElementById('canvas1').getContext('2d');
    ctx.fillStyle = "#eee";
    ctx.fillRect(0, 0, 250, 400);

    //画一条线
    ctx.fillStyle = 'purple';
    ctx.font = 'bold 20px Arial';
    ctx.textBaseline = 'top';
    ctx.fillText('画一条线', 10, 20);
    
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(10, 50);
    ctx.lineTo(220, 50);
    ctx.stroke();

    //画一个矩形
    ctx.fillStyle = 'purple';
    ctx.font = 'bold 20px Arial';
    ctx.textBaseline = 'top';
    ctx.fillText('画一个矩形', 10, 70);

    ctx.fillStyle = "gray";
    ctx.fillRect(10, 100, 50, 50);

    //画一个圆
    ctx.fillStyle = 'purple';
    ctx.font = 'bold 20px Arial';
    ctx.textBaseline = 'top';
    ctx.fillText('画一个圆', 10, 160);

    ctx.fillStyle = 'gray';
    ctx.beginPath();
    ctx.arc(30, 210, 20, 0, 2*Math.PI, false);
    ctx.fill();

    //显示一些文字
    ctx.fillStyle = 'purple';
    ctx.font = 'bold 20px Arial';
    ctx.textBaseline = 'top';
    ctx.fillText('显示一些文字', 10, 240);

    ctx.strokeStyle = 'purple';
    ctx.font = 'bold 30px Arial';
    ctx.textBaseline = 'top';
    ctx.strokeText('Hello World!', 10 ,280);
}();

!function(){
    var canvas = document.querySelector('#canvas2');
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#eee';
        ctx.fillRect(0, 0, 500, 400);

        ctx.fillStyle = 'purple';
        ctx.font = 'bold 20px Arial';
        ctx.textBaseline = 'top';
        ctx.fillText('画一个时钟' ,10, 20);

        ctx.strokeStyle = 'black';
        ctx.beginPath();
        ctx.arc(150, 150, 100, 0, 2*Math.PI, false);
        ctx.moveTo(245, 150);
        ctx.arc(150, 150, 95, 0, 2*Math.PI, false);
        ctx.moveTo(150, 150);
        ctx.lineTo(150, 60);
        ctx.moveTo(150, 150);
        ctx.lineTo(60, 150);
        ctx.stroke();
    }

}();