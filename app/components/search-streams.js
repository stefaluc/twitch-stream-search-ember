import Ember from 'ember';

export default Ember.Component.extend({
  value: "",

  actions: {
    onSubmit(stream) {
      if (stream) {
        this.get('toggleLoading')();
        this.set('value', "");
        this.get('addStreams')(stream).then((result) => {
          console.log(result);
          this.get('toggleLoading');
        });
      }
    }
  }
});
