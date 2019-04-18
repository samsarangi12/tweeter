//Change event allows to capture the change in test area

$(document).ready(function() {
    $("textarea").on('input', function(event) {
        let tweetLength = $(this).val().length;
        //Following condition sets the character counter to red if it goes below 0 by adding a class.
        if ((140 - tweetLength) < 0) {
            $(".counter", this.parentElement).text(140 - tweetLength).addClass("setRed");
        } else {
            $('.counter', this.parentElement).text(140 - tweetLength).removeClass("setRed");
        }
    });
  });