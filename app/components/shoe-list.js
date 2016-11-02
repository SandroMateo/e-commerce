import Ember from 'ember';

export default Ember.Component.extend({
  shoeArray: [],
  itemsArray: null,
  shoeSort: Ember.computed('itemsArray', 'shoeArray', function() {
    this.set('itemsArray', this.get('items.content'))
    for (var i = 0; i < this.get('itemsArray').length; i++) {
      if (this.get('itemsArray')[i]._data.type === "shoes") {
        this.get('shoeArray').pushObject(this.get('itemsArray')[i]._data);
      }
    }
    return this.get('shoeArray');
    // if(item.type === 'shoes') {
    //   return this.get('model');
    //   console.log('model');
    // }
  })
});
