!function(){
  //辅助函数
  function creatSVGEle(tagName, attrs){
    var ele = document.createElementNS('http://www.w3.org/2000/svg', tagName);
    for(var att in attrs){
        ele.setAttribute(att, attrs[att]);
    }
    return ele;
  }

  var template = '<svg version="1.1" \
                       baseProfile="full"\
                       width="500" height="300"\
                       xmlns="http://www.w3.org/2000/svg">\
                    <g transform="matrix(1,0,0,-1,0,300) translate(20, 20)" id="graph-group"></g>\
                    <g id="mark-group"><g>\
                  </svg>';
  function Bar(container, width, height){
    this.container = container,
    this.width = width,
    this.height = height,
    this.svg = null,
    this.graphGroup = null,
    this.markGroup = null,
    this.drawData = null,
    this.init(width, height);
  }

  Bar.prototype = {
    colors: ['yellow', 'blue', 'green'],
    init: function(){
      //初始化svg元素，以及实例属性
      this.container.innerHTML = template;
      this.svg = this.container.querySelector('svg');
      this.svg.setAttribute('width', this.width);            
      this.svg.setAttribute('height', this.height);
      this.graphGroup = this.svg.querySelector('#graph-group');
      //把画图组的坐标调整为坐标系，原点在左下角  
      this.graphGroup.setAttribute('transform', 'matrix(1,0,0,-1,0,' + this.height + ') translate(10, 10)');
      this.markGroup = this.svg.querySelector('#mark-group');
    },
    drawBar: function(data){
    //参数，二维数组
      if(!data.length) return;
      this.drawData = data; 
      var barsCount = data[0].length,//月份数，每项数组有多少个数组项
          itemsCount = data.length,//多少条数据，即多少个一维数组
          maxValue = 0,
          barWidth = 0,
          batGap = 10,
          nowX = 0,
          tempStr = '';

      //找到数据中的最大值 —> maxValue
      data.forEach(function(item, idx, arr){
        item.forEach(function(item, idx, arr){
            if(item > maxValue) maxValue = item;
        });
      });
      //计算出每个小柱子的宽度 — > barWidth
      barWidth = ((this.width - 30) / barsCount - batGap) / itemsCount;
      //清空画图区域,画出纵轴，横轴
      tempStr = '<line x1="-0.5" y1="-1" stroke="black" stroke-width="1" x2="-0.5" y2="'  + (this.height - 20) + '"/>';
      tempStr += '<line x1="0" y1="-0.5" stroke="black" stroke-width="1" y2="-0.5" x2="' + (this.width - 20) + '"/>';
      this.graphGroup.innerHTML = tempStr;
      //画出每一个小柱子
      for(var i = 0;i < barsCount; i++){
        nowX += batGap;
        for(var j = 0;j < itemsCount; j++){
            var SVGitem = creatSVGEle('rect', {
                'x': nowX,
                'y': 0,
                'width': barWidth,
                'height': (data[j][i] / maxValue) * (this.height - 20), //计算出元素的高
                'fill': j >= this.barColor.length ? this.barColor[j % this.barColor.length] : this.barColor[j]//元素填充的颜色
            });
            this.graphGroup.insertBefore(SVGitem, this.graphGroup.lastElementChild);
            nowX += barWidth;
        }
      }
    },
    creatSVGEle: function(tagName, attrs){
        var ele = document.createElementNS('http://www.w3.org/2000/svg', tagName);
        for(var att in attrs){
            ele.setAttribute(att, attrs[att]);
        }
        return ele;
    },
    barColor: ['#60acfc', '#32d3eb', '#5bc49f', '#feb64d', '#ff7c7c', '#9287e7'],
    constructor: Bar
  };
  window.Bar = Bar;
}();