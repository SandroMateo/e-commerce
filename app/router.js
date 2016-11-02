import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('cart');
  this.route('men');
  this.route('women');
  this.route('shoes');
  this.route('review', { path: '/review/:item_id' });
});

export default Router;
