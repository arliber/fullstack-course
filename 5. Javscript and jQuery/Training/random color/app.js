$(function() {

    //Generator function
    function getColor() {
      return '#' + Math.random().toString(16).slice(2, 8);
    }

    //Sets background color style
    function setBackground() {
      var bgColor = getColor();
      $('body').css('background', bgColor);
    }

    //Runs function on space pressed
    $(window).keypress(function (e) {
      if (e.keyCode === 32) {
        setBackground();
      }
    });

    //Run script on first time
    setBackground();

});
