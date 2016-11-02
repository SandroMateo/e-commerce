import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  totalCost: Ember.computed(function() {
    var addTotal = 0;
    for(var i = 0; i < this.get('shoppingCart').items.length; i ++) {
      addTotal += this.get('shoppingCart').items[i].price;
    }
    return addTotal;
  })
});
