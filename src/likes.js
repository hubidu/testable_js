var myApp = (function (myApp, $) {

  function Likes (el) {
    this.el = $(el);
    return this;
  }

  Likes.prototype.add = function (name) {
    this.el.find('.no-results').remove();
    $('<li>', { text: name }).appendTo(this.el);
  }

  myApp = myApp || {}

  myApp.Likes = Likes

  return myApp
})(myApp, $)
