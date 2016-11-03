import Ember from 'ember';

export default Ember.Component.extend({
  userLogin: Ember.inject.service(),
  showNewItemForm: false,
  actions: {
    showItemForm() {
      this.set('showNewItemForm', true);
    },

    addItem() {
      var params = {
        description: this.get('description'),
        price: this.get('price'),
        details: this.get('details'),
        size: this.get('size'),
        sex: this.get('sex'),
        image: this.get('image'),
        type: this.get('type')
      }
      this.sendAction('addItem', params);
      this.set('showNewItemForm', false);
      this.set('description', '');
      this.set('price', '');
      this.set('details', '');
      this.set('size', '');
      this.set('sex', '');
      this.set('image', '');
      this.set('type', '');
    }

  }
});
