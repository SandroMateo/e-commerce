import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  // menArray: [],
  // itemsArray: null,
  // menSort: Ember.computed('itemsArray', 'menArray', function() {
  //   this.set('menArray', []);
  //   this.set('itemsArray', this.get('items.content'));
  //   console.log(this.get('items.content'));
  //   for (var i = 0; i < this.get('itemsArray').length; i++) {
  //     if (this.get('itemsArray')[i]._data.sex === "men") {
  //       this.get('menArray').pushObject(this.get('items.content')[i]);
  //     }
  //   }
  //   return this.get('menArray');
  // }),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    }
  }
});
