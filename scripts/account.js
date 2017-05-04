define(function(require){

  var login = require('scripts/account/login');//登录界面
  var info = require('scripts/account/info');//已登录的用户界面

  var flagLogin = sessionStorage.getItem("flagLogin");//获取登录标志，也是name
  return {
    //初始化
    initialize: function(){
      this.create();
      this.render();
    },
    //渲染
    render: function(){
    },
    //一级视图account代替了#content，
    //所以这里是创建内部元素(子框架)(目的是确定到dom)
    create: function(){
      if(flagLogin){
        this.$el.append($("<div id='info'></div>"));
      }else{
        this.$el.append($("<div id='login'></div>"));
      }
      this.subCreate();
    },
    subCreate: function(){
      //生成视图类：
      if(flagLogin){
        var Info = Backbone.View.extend(info);
        var mainInfo = new Info({el:$("#info")});
      }else{
        var Login = Backbone.View.extend(login);
        var mainLogin = new Login({el:$("#login")});
      }

    }

  };

});
