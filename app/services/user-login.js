import Ember from 'ember';

export default Ember.Service.extend({
  loggedIn: false,
  name: '',

  login() {
    this.set('loggedIn', true);
  },

  logout() {
    this.set('loggedIn', false);
  }
});
