import Ember from 'ember';

export default Ember.Component.extend({
  userLogin: Ember.inject.service(),
  actions: {
    login() {
      this.set(this.get('userLogin').name, this.get('name'));
      if(this.get('user') === "admin") {
        this.get('userLogin').adminLogin();
      }
      console.log(this.get('userLogin').admin);
      this.get('userLogin').login();
      this.set('name', '');
      this.set('password', '');
      this.sendAction('login');
    }
  }
});
