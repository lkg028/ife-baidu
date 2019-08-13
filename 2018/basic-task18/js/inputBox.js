!function(){
  //事件回调函数
  function clickFun(event){
    var target = event.target;
    if(target.id === 'confirm'){
      if(!isNaN(this.inputEle.value) && this.inputEle.value.length) {
        this.preNode.innerHTML = +this.inputEle.value;
        this.hide();
      }else {
        alert('您输入的不是数字，请重新输入');
        return;
      }
    }
    if(target.id === 'cancel') {
      this.preNode.innerHTML = this.preData;
      this.hide();
    }
    event.stopPropagation();
  }
  //回车和esc,映射到点击确认和取消按钮
  function keyupFun(event){
    var clickEvent = new Event('click', {'bubbles': true});
    if(event.keyCode === 27) this.cancelBtn.dispatchEvent(clickEvent);
    if(event.keyCode === 13) this.confirmBtn.dispatchEvent(clickEvent);
  }
  //点击页面的其它地方，映射到取消按钮
  function bodyClickFun(event){
    var clickEvent = new Event('click', {'bubbles': true});
    this.cancelBtn.dispatchEvent(clickEvent);
  }


  function InputBox(){
    this.container = null;
    this.inputEle = null;
    this.confirmBtn = null;
    this.cancelBtn = null;
    this.docFragment = null;
    this.preData = undefined;
    this.preNode = null;
    this.showKey = 0;
    this._init();
    this._initialEvent();
  }

  InputBox.prototype = {
    _init: function(){
      var template = '<input type="text" style="text-align: center; width: 85px" maxlength="12"><br>\
      <button id="confirm" style="width: 45px;">确认</button><button id="cancel" style="width: 45px;">取消</button>';
      this.container = document.createElement('span');
      this.container.innerHTML = template;
      this.inputEle = this.container.querySelector('input');
      this.confirmBtn = this.container.querySelector('#confirm');
      this.cancelBtn = this.container.querySelector('#cancel');
      this.docFragment = document.createDocumentFragment();
    },
    _initialEvent: function(){
        this.container.addEventListener('click', clickFun.bind(this), false);
        this.container.addEventListener('keyup', keyupFun.bind(this), false);
        document.body.addEventListener('click',bodyClickFun.bind(this), false);
    },
    show: function(parentNode){
      if(!parentNode || parentNode.nodeType !== 1) return;
      if(isNaN(parentNode.innerHTML)) return;
      if(this.showKey) this.preNode.innerHTML = this.preData;
      this.preNode = parentNode;                  //存储被植入容器的引用
      this.inputEle.value = parentNode.innerHTML; //获得被植入容器的数据，放到输入框中
      this.preData = +parentNode.innerHTML;        //存储被植入容器的原始数据
      parentNode.innerHTML = '';                  //清空被植入容器
      parentNode.appendChild(this.container);
      this.showKey = 1;
      this.inputEle.focus();
    },
    hide: function(){
      this.inputEle.value = '';
      this.showKey = 0;
      this.docFragment.appendChild(this.container);
    },
    onstructor: InputBox
  };
  window.InputBox = InputBox;
}();