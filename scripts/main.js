define(function(require){
  var textor = require('scripts/textor');
  // var displayer = require("scripts/displayer");
  var Test = Backbone.View.extend(textor);
  
  var test = new Test({el:$("#textor")});
  test.render();

});
