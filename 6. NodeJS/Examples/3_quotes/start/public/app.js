
$(function(){ //Run the code inside that function when the page is fully loaded


  $(window).keypress(function(e) { //Evecute this function when any ey is pressed

    if (e.which === 32) { //Spacebar
      $("#quote").addClass("reset"); //Add and remove some classed to make a nice animation
      $("#quote").removeClass("executed");
      $("#writer").toggleClass("fade"); //toggleClass adds class "fade" if it doesn't exist and removes it if it does
      setTimeout(function(){ //Run this function after a second

        $.ajax('/dynamicQuote', { //Make an HTTP call to /dynamicQuote. This is just like $.get we saw previously
          method: 'GET',
          success: mycallback, //On success - exectue the 'mycallback' function
          error: function(error) { //Exectue this function when there is an error
            console.log('Oh oh :(', error) //Simply print the error
          }
        });

        /*Google 'JSONP' for more info*/
        /*$.ajax({
          crossOrigin: true,
          url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
          dataType:"jsonp"
        });*/

      }, 1000); //Second parameter of setTimeout tells it how long to wait - in out case we wait a second for the animation to finish
    }
  });


});



function mycallback(quote) { //This runs when we get a successful result from the server. quote contains the quote we have built on the server
  $("#quote").html(quote.content) //Put the actual quote (quote.content) in an element with id "quote"
  $("#writer").html(quote.author) //Put the actual author (quote.author) in an element with id "writer"
  $("#quote").addClass("executed"); //Adding/removing some classes to make a nice animation
  $("#quote").removeClass("reset");
  $("#writer").toggleClass("fade");
}
