define(function(){
  return {
    initialize: function(){
      this.render();
    },
    render: function(){
      this.create();
    },
    create: function(){
      this.$el.append($("<div class='disp'>展示</div>"));
    }
  };
});
