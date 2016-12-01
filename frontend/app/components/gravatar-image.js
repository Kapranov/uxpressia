import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  attributeBindings: ['src', 'alt', 'title', 'size:height', 'size:width', 'customHref:href'],
  customHref: "http://api.dev.local:3000/",
  classNames: ['img-circle'],
  size: 200,
  email: '',
  title: '',
  defaultImage: '',
  secure: true,
  retina: false,
  hash: null,

  gravatarUrl: Ember.computed('email', 'imageSize', 'default', 'hash', function() {
    var email = this.get('email').toLowerCase();
    var imageSize = this.get('imageSize');
    var def = this.get('defaultImage');
    var secure = this.get('secure');
    var protocol = secure ? 'https' : 'http';

    var hashToUse = this.get('hash') || window.md5(email);
    return protocol + '://www.gravatar.com/avatar/' + hashToUse + '?s=' + imageSize + '&d=' + def;
  }),

  imageSize: Ember.computed('size', 'retina', function() {
    var size = this.get('size');
    return this.get('retina') ? (size * 2) : size;
  })
});
