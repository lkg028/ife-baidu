!function(){
  // 帮助函数
  // ----------

  // 赋值属性
  // extend({a:1}, {b:1, a:2}) -> {a:1, b:1}
  function extend(o1, o2){
    for(var i in o2) if(typeof o1[i] === 'undefined'){
      o1[i] = o2[i]
    } 
    return o1
  }


  // 初始化
  // -------

  var template = 
  '<span>描述内容</span>\
    <label><input type="checkbox" value="all">全选</label>';
  //点击事件，添加交互并存储所选值
  function clickFun(){
    if(event.target.nodeName !== 'INPUT') return;

    var _this = this,
    target = event.target,
    inputs = Array.prototype.slice.call(_this.inputs, 0);
    inputsData = _this.inputsData,
    inputIdx = 0,
    allCheck = inputs[inputs.length - 1];

    if(target === allCheck){
        if(!inputsData[inputsData.length - 1]){
            inputs.forEach(function(item, idx, arr){
                item.checked = true;
                inputsData[idx] = item.value;
            });
        }else{
            inputs.forEach(function(item, idx, arr){
                if(idx){
                    item.checked = false;
                    inputsData[idx] = undefined;
                }  
            });
        }
    }else{
        inputIdx = +target.getAttribute('data-idx');
        var tempnum = 0;
        inputsData.forEach(function(item, idx, arr){
            if(item) tempnum++;
        });

        if(!inputsData[inputIdx]){
            if(tempnum === inputs.length - 2) {
                allCheck.checked = true;
                inputsData[inputsData.length - 1] = allCheck.value;
            }
            inputsData[inputIdx] = inputs[inputIdx].value;
        }else{
            if(tempnum === inputsData.length) {
                allCheck.checked = false;
                inputsData[inputsData.length - 1] = undefined;
                inputsData[inputIdx] = undefined;
            }
            if(tempnum === 1){
                event.preventDefault();
            }else{
                inputsData[inputIdx] = undefined;
            }
        }
    }
  }

//构造函数，定义实例属性
  function CreateRadioBox(container, initial_data){
    this.container = container;
        container.innerHTML = template;
    this.inputs = container.getElementsByTagName('input');
    this.inputsData = null;
    this._initialHTML(initial_data);
    this._initialEvent();
  }

  //定义方法
  extend(CreateRadioBox.prototype,{
    _initialHTML: function(initial_data){
        var _this = this;
        initial_data.forEach(function(item, idx, arr){
            var label = document.createElement('label');
            label.innerHTML = '<input type="checkbox" value="' + item.value + '"' + 'data-idx="' + idx + '">' + item.text + '  ';
            _this.container.insertBefore(label, _this.container.lastElementChild);
            if(idx === arr.length - 1) _this.inputs[0].checked = true;
        });
        _this.inputsData = new Array(_this.inputs.length);
        _this.inputsData[0] = _this.inputs[0].value;
    },

    _initialEvent: function(){
        this.container.addEventListener('click', clickFun.bind(this),false);
    },

    setContent: function(str){
        if(!str) return;
        this.container.querySelector('span').innerText = str;
    },
    setInput: function(str){
        var inputs = Array.prototype.slice.call(this.inputs, 0),
            count = 1,
            _this = this;
        if(str === 'all'){
            inputs.forEach(function(item, idx, arr){
                item.checked = true;
                _this.inputsData[idx] = item.value;
            });
        }else{
            inputs.forEach(function(item, idx, arr){
                if(str.search(item.value) >= 0){
                    item.checked = true;
                    _this.inputsData[idx] = item.value;
                    count++;
                }else{
                    item.checked = false;
                    _this.inputsData[idx] = undefined;
                }
            });
            if(count === inputs.length) {
                inputs[inputs.length - 1].checked = true;
                _this.inputsData[inputs.length - 1] = inputs[inputs.length - 1].value;
            }
        }
    }
  });

    window.CreateRadioBox = CreateRadioBox;
}();