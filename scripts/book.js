define(function(require){

  var textor = require('scripts/book/textor');
  var displayer = require('scripts/book/displayer');

  return {
    //初始化
    initialize: function(){
      this.create();
      this.render();
    },
    //渲染
    render: function(){
    },
    //创建元素（jquery）
    create: function(){
      this.$el.append($("<div id='textor'></div>"));
      this.$el.append($("<div id='displayer'></div>"));

      this.subCreate();
    },
    subCreate: function(){
      //生成视图类：
      var Textor = Backbone.View.extend(textor);
      var Displayer = Backbone.View.extend(displayer);

      var mainText = new Textor({el:$("#textor")});
      var mainDis = new Displayer({el:$("#displayer")});

    }

  };

});
