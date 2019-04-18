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

//Following code submits a request to the server
//It also checks for the validity of the tweet performs the POST only if
//the tweet is valid and length is greater than 140 characters.

    $(".submit-button").on('click', function(event) {
        event.preventDefault();
        let tweet = $("textarea").val();
        let tweetLength = $("textarea").val().length;
        if (!tweet) {
            alert ("Tweet not entered by the user !!");
        } else if (tweetLength > 141) {
            alert ("Tweet longer than 140 characters!!");
        } else {
            $.ajax({
            type: 'POST',
            url: `/tweets`,
            datatype: 'JSON',
            data: $( "form" ).serialize()
            })
            .done( function() {
                loadTweets();
                window.location = '/';
            })
            console.log($( "form" ).serialize())
        }
    })
  });