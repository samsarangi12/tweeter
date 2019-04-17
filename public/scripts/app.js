
$(document).ready(function() {

// Test / driver code (temporary). Eventually will get this from the server.

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

// var $tweet = createTweetElement(data);



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


data.forEach(function(item) {
  var $tweet = createTweetElement(item);
   $('.tweets').append($tweet);
})




// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


});