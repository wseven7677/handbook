define(function(){
  return {
    //初始化
    initialize: function(){
      this.render();
    },
    //渲染
    render: function(){
      this.create();
    },
    //创建元素（jquery）
    create: function(){
      this.$el.append($("<div class='poem'>poem</div>"));
    }

  };
});