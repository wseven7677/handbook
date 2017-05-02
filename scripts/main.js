define(function(require){
  //引入文件：
  var book = require('scripts/book');
  var square = require('scripts/square')
  //页面切换：
  if (1){
    var Book = Backbone.View.extend(book);
    var mainBook = new Book({el:$("#content")});
  }else {
    var Square = Backbone.View.extend(square);
    var mainSquare = new Square({el:$("#content")});
  }


});
