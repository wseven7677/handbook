define(function(require){
  var judge = require('scripts/judge');
  return {
    initialize: function(){
      //创建元素：
      this.create();
      //绑定事件：
      $("#loginbtn").on('click',function(){
        if (!$("#idInput").val() || !$("#pwInput").val()){
          $("#warnText").html("空着没办法登录。");
        }else{
          var userInfo = judge($("#idInput").val());
          if(userInfo.flag){
            sessionStorage.setItem("flagLogin",userInfo.iden);
            sessionStorage.setItem("flagSig",userInfo.sig);
            location.reload();
          }else{
            $("#warnText").html("登录失败。");
          }
        }
      });
      //渲染：
      this.render();
    },
    render: function(){
    },
    create: function(){
      this.$el.append($("<div id='warnText'></div>"));
      this.$el.append($("<label name='iden'>帐号</label>"));
      this.$el.append($("<input id='idInput' name='iden'></input><br>"));
      this.$el.append($("<label name='pw'>密码</label>"));
      this.$el.append($("<input id='pwInput' name='pw' type='password'></input>"));
      this.$el.append($("<button id='loginbtn'>登录</button>"));
    }
  };
});
