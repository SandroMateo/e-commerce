import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  price: DS.attr('number'),
  details: DS.attr('string'),
  image: DS.attr('string'),
  reviews: DS.hasMany('review', { async: true})
});
