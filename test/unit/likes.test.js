describe('Likes', function() {
  var el
  var likes

  it('should create instances', function () {
    el = $('<div/>')
    likes = new myApp.Likes(el)
    expect(likes).to.exist
  })

  it('should add likes', function() {
    likes.add('Foo')
    likes.add('Bar')

    expect(likes.render()).to.equal('<div><li>Foo</li><li>Bar</li></div>')
  });
});
