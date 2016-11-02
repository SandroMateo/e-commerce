import Ember from 'ember';

export function sortShoe(item) {
  if (item[0].data.type === "shoes") {
    console.log(item);
    return item;
  }
}

export default Ember.Helper.helper(sortShoe);
