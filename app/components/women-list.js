import Ember from 'ember';

export default Ember.Component.extend({
  womenArray: [],
  itemsArray: null,
  womenSort: Ember.computed('itemsArray', 'womenArray', function() {
    this.set('womenArray', []);
    this.set('itemsArray', this.get('items.content'));
    console.log(this.get('items.content'));
    for (var i = 0; i < this.get('itemsArray').length; i++) {
      if (this.get('itemsArray')[i]._data.sex === "women") {
        this.get('womenArray').pushObject(this.get('itemsArray')[i]._data);
      }
    }
    return this.get('womenArray');
  })
});
