import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  price: DS.attr('number'),
  details: DS.attr('string'),
  size: DS.attr('string'),
  sex: DS.attr('string'),
  image: DS.attr('string'),
  type: DS.attr('string'),
  reviews: DS.hasMany('review', { async: true})
});
