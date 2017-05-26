import Ember from 'ember';
import db from '../utils/db';

export default Ember.Route.extend({
  model() {
    return {
      streams: db.streams(),
      loading: db.loading()
    };
  },

  actions: {
    modelUpdated() {
      this.refresh();      
    }
  }
})
