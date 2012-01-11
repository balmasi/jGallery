$(document).ready(function() {
    for (i = 1; i <= 36; i++) {
  $("#sliceContainer").
      append($(document.createElement('div'))
             .addClass("sliceSpecs")
             .css('background-position',
                  (((i - 1) % 6) * -145) + "px " +
                  (parseInt((i - 1) / 6) * -145) + "px")
             .fadeTo(0, 0)
             .delay(((i-1)%6 + 1 + Math.floor((i-1)/6))*100)
             .fadeTo(500, 1));
    }


});