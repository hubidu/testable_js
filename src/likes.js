var myApp = (function (myApp, $) {

  /**
   * List of likes
   */
  function Likes (el) {
    this.el = $(el);
    return this;
  }

  /**
   * Add a like to the list
   */
  Likes.prototype.add = function (name) {
    this.el.find('.no-results').remove();
    $('<li>', { text: name }).appendTo(this.el);
  }

  Likes.prototype.render = function () {
    return this.el[0].outerHTML
  }

  myApp = myApp || {}

  myApp.Likes = Likes

  return myApp
})(myApp, $)
