
$(document).ready(function() {

function createTweetElement(data) {

  let tweetImage = data.user.avatars.small;
  let username = data.user.name;
  let userHandle = data.user.handle;
  let tweetBody = data.content.text;
  let tweetCreateDate = data.created_at;
  let currentTime = Math.floor(Date.now());
  let daysElapsed = Math.floor((currentTime - tweetCreateDate) / (1000*60*60*24));

  let HTMLToAppend = `<article class="tweet">`
                   +`<header class="tweet-header">`
                   + `<img class="tweet-image" src=${tweetImage} >`
                   + `<figcaption>`
                   + `<p class="user-name">${username}</p>`
                   + `<span class="user-handle">${userHandle}</span>`
                   + `</figcaption>`
                   + `</header>`
                   + `<div class="tweet-body">`
                   + `<p>${tweetBody}</p>`
                   + `</div>`
                   + `<footer class="tweet-footer">`
                   + `<span>${daysElapsed} day(s) ago</span>`
                   + `<figcaption>`
                   + `<img class="icon" src="/images/flagIcon.png"></img>`
                   + `<img class="icon" src="/images/retweet.png"></img>`
                   + `<img class="icon" src="/images/love.png"></img>`
                   + `</figcaption>`
                   + `</footer>`
                   + `</article>`
  return HTMLToAppend;
}

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
  inputdata.forEach(function(item) {
  var $tweet = createTweetElement(item);
   $('.tweets').append($tweet);
  })
}

loadTweets();

});

// Test / driver code (temporary). Eventually will get this from the server.



