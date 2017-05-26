import Ember from 'ember';

export default Ember.Component.extend({
  value: "",

  actions: {
    onSubmit(stream) {
      if (stream) {
        this.set('value', "");
        this.get('addStreams')(stream);
      }
    }
  }
});
