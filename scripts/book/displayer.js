define(function(){
  return {
    initialize: function(){
      this.create();
      this.render();
    },
    render: function(){
    },
    create: function(){
      this.$el.append($("<div class='disp'>展示</div>"));
    }
  };
});
