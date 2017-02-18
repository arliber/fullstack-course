$(function() {

  var counter = 0;

  $('#heading').html(localStorage['title'] || 'Just Write');
  $('#content').html(localStorage['text'] || 'This text is automatically saved every second :) ');

   setInterval(function() {
        //Update counter
        counter++;
        $('#counter').html(counter);

        //Save
        localStorage['title'] = $('#heading').html();
        localStorage['text'] = $('#content').html();
   }, 1000);

});
