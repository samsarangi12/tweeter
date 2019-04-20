//Function to count characters in the tweet.
//The code will update the character count dynamically
//and will turn the counter to red once the tweet length becomes more than 140 characters.

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