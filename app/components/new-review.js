import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    showReviewForm() {
      this.set('addNewReview', true);
    },

    addReview() {
      var params = {
        rating: this.get('rating'),
        comment: this.
      }
    }
  }
});
