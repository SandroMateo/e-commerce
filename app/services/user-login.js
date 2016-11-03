import Ember from 'ember';

export default Ember.Service.extend({
  loggedIn: false,
  name: '',
  admin: false,

  login() {
    this.set('loggedIn', true);
  },

  logout() {
    this.set('loggedIn', false);
  },

  adminLogin() {  
    this.set('admin', true);
  },

  adminLogout() {
    this.set('admin', false);
  }
});
