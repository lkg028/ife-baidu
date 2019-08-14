!function(){
  function Line(canvas){
    this.canvas = canvas;
    this.width = 0;
    this.height = 0;
    this.lineData = null;
    this.ctx = null;
    this.init();
  }
  Line.prototype = {
    init: function(){
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ctx = this.canvas.getContext('2d');
    },
    drawLine: function(data){
        if(!data || !data.length) return;
        this.lineData = data;

        var pointGap = 20,
            preX = 0, 
            preY = 0,
            nowX = 20,
            nowY = 0,
            maxValue = 0;
        //找到最大值
        data.forEach(function(item, idx, arr){
            item.forEach(function(item, idx, arr){
                if(item > maxValue) maxValue = item;
            });
        });

        //清空画布,画出两条轴线
        this.canvas.height = this.height;
        this.ctx.beginPath();
        this.ctx.moveTo(9.5, 10);
        this.ctx.lineTo(9.5, this.height - 9.5);
        this.ctx.lineTo(this.width - 10 , this.height - 9.5);
        this.ctx.stroke();
        //设置点与点之间的间隔
        pointGap = (this.width - 30 - nowX) / (data[0].length - 1);
        //画出折线以及数据点
        data.forEach(function(item, idx, arr){
            nowX = 20;
            preX = 0;
            preY = 0;
            this.ctx.strokeStyle = idx >= this.lineColor.length ? 
                                   this.lineColor[idx % this.lineColor.length] : this.lineColor[idx];
            this.ctx.fillStyle = this.ctx.strokeStyle;
            this.ctx.lineWidth = 2;
            this.ctx.lineCap = 'round';
            item.forEach(function(item, idx, arr){
                nowY = this.height - 10 - (item / maxValue) * (this.height - 20);
                this.ctx.beginPath();
                this.ctx.arc(nowX, nowY, 3, 0, Math.PI * 2, false);
                this.ctx.fill();
                this.ctx.beginPath();
                this.ctx.moveTo(nowX, nowY);
                if(preX && preY) this.ctx.lineTo(preX, preY);
                this.ctx.stroke();

                preX = nowX;
                preY = nowY;
                nowX += pointGap;
            }, this);
        }, this);
        
    },
    lineColor: ['#60acfc', '#32d3eb', '#5bc49f', '#feb64d', '#ff7c7c', '#9287e7'],
    constructor: Line
  };
  window.Line = Line;
}();