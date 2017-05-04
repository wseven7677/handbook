define(function(require){
  //引入文件：
  require('scripts/session');

  var book = require('scripts/book');
  var square = require('scripts/square');
  var account = require('scripts/account');

  var Book = Backbone.View.extend(book);
  var Square = Backbone.View.extend(square);
  var Account = Backbone.View.extend(account);
//路由：
  var RT = Backbone.Router.extend({
    routes: {
      '': 'book',
      'book': 'book',
      'square': 'square',
      'account': 'account'
    },
    clear: function(set){
      $("li").removeClass("active");
      if(set == "book"){
        $(".titleItem").eq(0).addClass("active");
      }else if(set == "square"){
        $(".titleItem").eq(1).addClass("active");
      }else{
        $(".account").addClass("active");
      }
      $("#content").empty();
    },
    book: function(){
      this.clear("book");
      var mainBook = new Book({el:$("#content")});
    },
    square: function(){
      this.clear("square");
      var mainSquare = new Square({el:$("#content")});
    },
    account: function(){
      this.clear();
      var mainAccount = new Account({el:$("#content")});
    }
  });
  var router = new RT();
  Backbone.history.start();

//
  var flagLogin = sessionStorage.getItem("flagLogin");
  if(flagLogin){
    $(".account > a").text(flagLogin);
  }

});
