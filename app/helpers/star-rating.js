import Ember from 'ember';

export function starRating(params/*, hash*/) {
  var review = params[0];
  if(review === 5) {
    return '⭐⭐⭐⭐⭐'
  } else if (review === 4) {
    return '⭐⭐⭐⭐'
  } else if (review === 3) {
    return '⭐⭐⭐'
  } else if (review === 2) {
    return '⭐⭐'
  } else if(review === 1) {
    return '⭐'
  } else {
    return ":-("
  }
}

export default Ember.Helper.helper(starRating);
