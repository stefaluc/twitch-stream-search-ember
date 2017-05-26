import Ember from 'ember';
import db from '../utils/db';

export default Ember.Route.extend({
  model() {
    return db.streams();
  },

  actions: {
    modelUpdated() {
      this.refresh();      
    }
  }
})
