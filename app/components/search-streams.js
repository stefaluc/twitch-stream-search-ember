import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    display() {
      this.toggleProperty('isSubmitted');
    }
  }
});
