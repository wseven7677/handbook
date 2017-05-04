define(function(){
  return {
    initialize: function(){
      this.create();
      $("#logoutbtn").on('click',function(){
          sessionStorage.setItem("flagLogin","");
          location.reload();
      });
      this.render();
    },
    render: function(){
      var flagLogin = sessionStorage.getItem("flagLogin");
      $("#iden").html("帐号："+flagLogin);
      $("#sig").html("签名："+"...");
    },
    create: function(){
      this.$el.append($("<div id='iden'>帐号：</div>"));
      this.$el.append($("<div id='sig'>签名：</div>"));
      this.$el.append($("<button id='logoutbtn'>退出登录</button>"));
    }
  };
});
