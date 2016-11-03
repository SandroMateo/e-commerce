import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    showReviewForm() {
      this.set('addNewReview', true);
    },

    addReview() {
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        comment: this.get('comment'),
        item: this.get('item')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }
  }
});
