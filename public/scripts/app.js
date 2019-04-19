//Code to display the Compose tweet section after compose-button is clicked

function loadTweets () {
    $.ajax({
    type: 'GET',
    url: `/tweets`,
    dataType: 'JSON'
    })
   .done(function (data){
    renderTweets(data);
   })
}

function renderTweets(inputdata) {
  $('.tweets').empty();
  inputdata.forEach(function(item) {
    var $tweet = createTweetElement(item)
    $('.tweets').prepend($tweet);
  })
}

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//The following code created the tweet container dynamically and returns the new tweet.

function createTweetElement(data) {
  let tweetImage = data.user.avatars.small;
  let username = data.user.name;
  let userHandle = data.user.handle;
  let tweetBody = data.content.text;
  let tweetCreateDate = data.created_at;
  let currentTime = Math.floor(Date.now());
  let daysElapsed = Math.floor((currentTime - tweetCreateDate) / (1000*60*60*24));

  let HTMLToAppend = `<article class="tweet">
                      <header class="tweet-header">
                      <img class="tweet-image" src=${escape(tweetImage)} >
                      <figcaption>
                      <p class="user-name">${escape(username)}</p>
                      <span class="user-handle">${escape(userHandle)}</span>
                      </figcaption>
                      </header>
                      <div class="tweet-body">
                      <p>${escape(tweetBody)}</p>
                      </div>
                      <footer class="tweet-footer">
                      <span>${escape(daysElapsed)} day(s) ago</span>
                      <figcaption>
                      <img class="icon" src="/images/flagIcon.png"></img>
                      <img class="icon" src="/images/retweet.png"></img>
                      <img class="icon" src="/images/love.png"></img>
                      </figcaption>
                      </footer>
                      </article>`
  return HTMLToAppend;
}

$(document).ready(function() {
  $('#compose-button').on('click', function (event) {
    $('.new-tweet').toggle();
  })

  loadTweets();
//Following code submits a request to the server
//It also checks for the validity of the tweet performs the POST only if
//the tweet is valid and length is greater than 140 characters.

  $(".submit-button").on('click', function(event) {
    event.preventDefault();
    let tweet = $("textarea").val();
    let tweetLength = $("textarea").val().length;
    if (!tweet) {
        let $tweetError = `<p class="error-message">Tweet is empty</p>`
        $('.counter').append($tweetError);
        $('.error-message').toggle();
    } else if (tweetLength > 140) {
        let $tweetTooLong = `<p class="error-message">Tweet is longer than 140</p>`
        $('.counter').append($tweetTooLong);
        $('.error-message').toggle();
    } else {
        $.ajax({
        type: 'POST',
        url: `/tweets`,
        datatype: 'JSON',
        data: $( "form" ).serialize()
        })
        .done( function() {
          loadTweets();
        })
        $('#tweet-text').val("");

    }
  })
});