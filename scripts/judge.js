define(function(){
  return function(inputId){
    var hero = {
      iden: "",
      sig: "",
      flag: false
    };
    $.ajax({
      async: false,
      dataType: "json",
      url: "data/users.json",
      data:{},
      success: function(data){
        for(var i = 0; i < $(data).length;++i){
          if($(data)[i].iden == inputId){
            hero.iden = $(data)[i].iden;
            hero.sig = $(data)[i].sig;
            hero.flag = true;
          }
        }
      }
    });
    return hero;
  }
});
