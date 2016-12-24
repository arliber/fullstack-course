
$(function(){


  $(window).keypress(function(e) {

    if (e.which === 32) { //Spacebar
      $("#quote").addClass("reset");
      $("#quote").removeClass("executed");
      $("#writer").toggleClass("fade");
      setTimeout(function(){ 

        $.ajax('/dynamicQuote', { //staticQuote
          method: 'GET',
          success: mycallback,
          error: function(error) {
            console.log('Oh oh :(', error)
          }
        });
        
        /*Google 'JSONP' for more info*/
        /*$.ajax({
          crossOrigin: true,
          url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
          dataType:"jsonp"
        });*/

      }, 1000); 
    }
  });


});



function mycallback(quote) {
  $("#quote").html(quote.content)
  $("#writer").html(quote.author)
  $("#quote").addClass("executed");
  $("#quote").removeClass("reset");
  $("#writer").toggleClass("fade");
}