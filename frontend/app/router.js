import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('about', {path: '/custome_name/'});
  this.route('admin-lte');
  this.route('contact');
  this.route('dashboard');
  this.route('payment');
  this.route('kitten');
  this.route('dog');
  this.route('users', function() {
    this.route('user', { path: ':user_id', resetNamespace: true });
  });
  this.route('page-not-found', { path: '/*wildcard' });
  // this.route('foo');
  // this.route('bar', {resetNamespace: true}, function() {
  //   this.route('baz');
  //   this.route('nested', {resetNamespace: true}, function() {
  //     this.route('quz');
  //   });
  // });
  this.route('engine');
  this.route('flexbox');
});

export default Router;
