import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  shoeArray: [],
  itemsArray: null,
  shoeSort: Ember.computed('itemsArray', 'shoeArray', function() {
    this.set('shoeArray', []);
    this.set('itemsArray', this.get('items.content'));
    for (var i = 0; i < this.get('itemsArray').length; i++) {
      if (this.get('itemsArray')[i]._data.type === "shoes") {
        console.log(this.get('items.content')[i])
        this.get('shoeArray').pushObject(this.get('items.content')[i]);
      }
    }
    return this.get('shoeArray');
  }),

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    }
  }
});
