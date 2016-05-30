import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('about');
  this.route('contact');
  this.route('products');
  this.route('order');
});

export default Router;
