$(function(){

  //Add item when "Enter" pressed
  $(window).keypress(function (e) {
    if (e.keyCode === 13) { //13 is a the code for enter key
      newItem();
    }
  });

  //Remove clicked item
  $('ul').on('click', 'li',function(e) { //Register click event
    $(e.target).remove(); //Remove clicked element
  });

  //Add new item
  function newItem() {
  	var item = $('input').val(); //Get text from input
    $('ul').append('<li>'+ item +'</li>'); //Add a new <li> to the <ul> with the text
    $('input').val(''); //Clear input
  }



});
