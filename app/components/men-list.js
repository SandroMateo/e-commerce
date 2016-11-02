import Ember from 'ember';

export default Ember.Component.extend({
  menArray: [],
  itemsArray: null,
  menSort: Ember.computed('itemsArray', 'menArray', function() {
    this.set('menArray', []);
    this.set('itemsArray', this.get('items.content'));
    console.log(this.get('items.content'));
    for (var i = 0; i < this.get('itemsArray').length; i++) {
      if (this.get('itemsArray')[i]._data.sex === "men") {
        this.get('menArray').pushObject(this.get('itemsArray')[i]._data);
      }
    }
    return this.get('menArray');
  })
});
