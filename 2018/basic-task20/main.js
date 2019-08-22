//使用ES5的方法定义对象
!function(){
  //定义餐厅类
  //参数 ——> {moneys: number, seats: number, staff: array}
  function Canting(resources){
    this.moneys = resources.moneys;
    this.seats = resources.seats;
    this.staffs = resources.staffs;
  }
  Canting.prototype = {
    constructor: Canting,
    addStaff: function(staff){
      this.staffs.push(staff);
    },
    removeStaff: function(staff){
      this.staffs.forEach(function(item, idx, arr){
        if(staff === item) arr.splice(idx, 1);
      });
    }
  };

  //定义职工类
  //参数——> {ID: number, name: sting, wages: number}
  function Staff(basicInfo){
    this.ID = basicInfo.ID;
    this.name = basicInfo.name;
    this.wages = basicInfo.wages;
  }
  Staff.prototype = {
    constructor: Staff,
    working: function(){
      console.log(this.ID + this.name + this.wages);
    }
  };

  //定义服务员，继承自职工类
  function Waiter(basicInfo){
    Staff.call(this, basicInfo);
  }
  Waiter.prototype = Object.setPrototypeOf({}, Staff.prototype);
  Waiter.prototype.constructor = Waiter;
  Waiter.prototype.serve = function(list, user){
    //为某一个顾客点菜
    //为某一个顾客上菜
  };

  //定义厨师，继承自职工类
  function Chef(basicInfo){
    Staff.call(this, basicInfo);
  }
  Chef.prototype = Object.setPrototypeOf({}, Staff.prototype);
  Chef.prototype.Cooking = function(){
    //加工菜品
  };

  //定义顾客
  function User(){
    this.list = [];
  }
  User.prototype = {
    constructor: User,
    addList: function(item){
      //点菜
    },
    removeListItem: function(item){
      //吃菜
    }
  };

  //定义菜单 
  function Menu(){
    this.list = [];
  }
  Menu.prototype = {
    constructor: Menu,
    add: function(item){
      if(this.list) this.list = [];
      //把新菜加入到菜单
    },
    remove: function(item){
      //删除菜单上的某一个菜品
    },
    find: function(item){
      //查看菜单上是否有某个菜品
    }
  };
  //暴露到全局
  window.Canting = Canting;
  window.Staff = Staff;
  window.Waiter = Waiter;
  window.Chef = Chef;
  window.User = User;
}();

//-------------------------------
//使用ES6实现这些类的定义
//-------------------------------

//定义餐厅类
const ES6Canting = class {
  constructor(resources){
    this.moneys = resources.moneys;
    this.seats = resources.seats;
    this.staffs = resources.staffs;
  }
  addStaff(staff){
    this.staffs.push(staff);
  }
  removeStaff(staff){
    this.staffs.forEach(function(item, idx, arr){
      if(staff === item) arr.splice(idx, 1);
    });
  }
};

//定义职工类
//参数——> {ID: number, name: sting, wages: number}
const ES6Staff = class {
  constructor(basicInfo){
    this.ID = basicInfo.ID;
    this.name = basicInfo.name;
    this.wages = basicInfo.wages;
  }
  working(){
    console.log(this.ID + this.name + this.wages);
  }
};

//定义服务员，继承自职工类
const ES6Waiter = class extends ES6Staff {
  constructor(basicInfo){
    super(basicInfo);
  }
  serve(list, user){
    //为某一个顾客点菜
    //为某一个顾客上菜
  }
};

//定义厨师，继承自职工类
const ES6Chef = class extends ES6Staff {
  constructor(basicInfo){
    super(basicInfo);
  }
  Cooking(){
    //加工菜品
  }
};

//定义顾客
const ES6User = class {
  constructor(){
    this.list = [];
  }
  addList(item){
    //点菜
  }
  removeListItem(item){
    //吃菜
  }
};

//定义菜单
const ES6Menu = class {
  constructor(){
    this.list = [];
  }
  addList(item){
    if(this.list) this.list = [];
    //把新菜加入到菜单
  }
  remove(item){
    //删除菜单上的某一个菜品
  }
  find(item){
    //查看菜单上是否有某个菜品
  }
};




