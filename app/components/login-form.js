import Ember from 'ember';

export default Ember.Component.extend({
  userLogin: Ember.inject.service(),
  actions: {
    login() {
      this.set(this.get('userLogin').name, this.get('name'));
      this.get('userLogin').login();
      this.set('name', '');
      this.set('password', '');
      this.sendAction('login');
    }
  }
});
