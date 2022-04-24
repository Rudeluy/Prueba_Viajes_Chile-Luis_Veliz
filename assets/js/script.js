$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  
    $("a").click(function(event){
      if(this.hash !=="") {
        event.preventDefault();
  
        var xposition = this.hash
        $("html, body").animate({
          scrollTop: $(xposition).offset().top
        }, 800, function(){
          window.location.hash = xposition;
        });
      }
    });
  })