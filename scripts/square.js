define(function(require){

  var bbs = require('scripts/square/bbs');
  var poem = require('scripts/square/poem');

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
      this.$el.append($("<div id='bbsBlock'></div>"));
      this.$el.append($("<div id='poemBlock'></div>"));

      this.subCreate();
    },
    subCreate: function(){
      //生成视图类：
      var Bbs = Backbone.View.extend(bbs);
      var Poem = Backbone.View.extend(poem);

      var mainBbs = new Bbs({el:$("#bbsBlock")});
      var mainPoem = new Poem({el:$("#poemBlock")});

    }

  };

});
